import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "..")));

const rooms = new Map();
const roomDeleteTimers = new Map();

function cancelRoomDeletion(roomId) {
  const t = roomDeleteTimers.get(roomId);
  if (t) {
    clearTimeout(t);
    roomDeleteTimers.delete(roomId);
  }
}

function scheduleRoomDeletion(roomId, ms = 1000000) {
  cancelRoomDeletion(roomId);
  const t = setTimeout(() => {
    rooms.delete(roomId);
    roomDeleteTimers.delete(roomId);
  }, ms);
  roomDeleteTimers.set(roomId, t);
}


function makeRoomId() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function randomLetter(allowed = "") {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let pool = alphabet;

  if (allowed && allowed.trim().length) {
    pool = [...new Set(allowed.toUpperCase().replace(/[^A-Z]/g, "").split(""))];
    if (!pool.length) pool = alphabet;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function publicRoom(roomId) {
  const room = rooms.get(roomId);
  if (!room) return null;

  return {
    roomId,
    hostId: room.hostId,
    config: room.config,
    state: room.state,
    players: [...room.players.entries()].map(([socketId, p]) => ({
      socketId,
      nickname: p.nickname,
      avatar: p.avatar,
      score: p.score
    }))
  };
}

function publicRoomForSocket(roomId, socketId) {
  const room = rooms.get(roomId);
  if (!room) return null;

  const base = publicRoom(roomId);
  if (!base) return null;

  base.password = room.hostId === socketId ? (room.password || null) : null;
  return base;
}

function emitRoomUpdate(roomId) {
  const room = rooms.get(roomId);
  if (!room) return;

  for (const sid of room.players.keys()) {
    const payload = publicRoomForSocket(roomId, sid);
    if (payload) io.to(sid).emit("room:update", payload);
  }
}

io.on("connection", (socket) => {

  socket.on("room:create", ({ nickname, avatar, password, config }, cb) => {
    const roomId = makeRoomId();
    cancelRoomDeletion(roomId);

    rooms.set(roomId, {
      hostId: socket.id,
      password: password || null,
      config: config || { timePerRound: 60, rounds: 10, letters: "" },
      players: new Map(),
      state: { round: 0, running: false, letter: null, roundStartAt: null }
    });

    const room = rooms.get(roomId);
    room.players.set(socket.id, { nickname, avatar, score: 0 });

    socket.join(roomId);

    if (cb) cb({ ok: true, roomId });

    emitRoomUpdate(roomId);
  });

  socket.on("game:goToGame", ({ roomId }) => {
    const room = rooms.get(roomId);
    if (!room) return;
    if (socket.id !== room.hostId) return;

    io.to(roomId).emit("game:goToGame", { roomId });
  });

  socket.on("room:join", ({ roomId, nickname, avatar, password }, cb) => {
    const norm = String(roomId || "").trim().toUpperCase();

    roomId = String(roomId || "").trim().toUpperCase();
    const room = rooms.get(roomId);
    cancelRoomDeletion(roomId);


    if (!room) {
      if (cb) cb({ ok: false, error: "Sala não existe." });
      return;
    }


    if (room.password) {
      if (!password || !String(password).trim()) {
        if (cb) cb({ ok: false, error: "Password necessária." });
        return;
      }

      if (String(password) !== String(room.password)) {
        if (cb) cb({ ok: false, error: "Password errada." });
        return;
      }
    }


    room.players.set(socket.id, { nickname, avatar, score: 0 });
    socket.join(roomId);

    if (cb) cb({ ok: true });

    if (!room.hostId || !room.players.has(room.hostId)) {
      room.hostId = socket.id;
    } 

    emitRoomUpdate(roomId);
  });

  socket.on("game:startRound", ({ roomId }, cb) => {
    const room = rooms.get(roomId);

    if (!room) {
      if (cb) cb({ ok: false });
      return;
    }

    if (socket.id !== room.hostId) {
      if (cb) cb({ ok: false, error: "Só o host." });
      return;
    }

    if (room.state.running) {
      if (cb) cb({ ok: false, error: "Round já a correr." });
      return;
    }

    room.state.round += 1;
    room.state.running = true;
    room.state.letter = randomLetter(room.config.letters);
    room.state.roundStartAt = Date.now();

    io.to(roomId).emit("game:roundStarted", {
      round: room.state.round,
      rounds: room.config.rounds,
      letter: room.state.letter,
      timePerRound: room.config.timePerRound,
      roundStartAt: room.state.roundStartAt
    });

    if (cb) cb({ ok: true });
  });

  socket.on("game:submit", ({ roomId, answers, score }, cb) => {
    const room = rooms.get(roomId);

    if (!room) {
      if (cb) cb({ ok: false });
      return;
    }

    const player = room.players.get(socket.id);
    if (player) player.lastSubmit = { answers, score };

    if (cb) cb({ ok: true });

    if (room.state.running) {
      room.state.running = false;

      for (const p of room.players.values()) {
        if (p.lastSubmit && p.lastSubmit.score != null) {
          p.score += p.lastSubmit.score;
        }
      }

      io.to(roomId).emit("game:roundEnded", {
        round: room.state.round,
        results: [...room.players.values()].map((p) => ({
          nickname: p.nickname,
          scoreTotal: p.score,
          lastScore: (p.lastSubmit && p.lastSubmit.score != null) ? p.lastSubmit.score : 0,
          answers: (p.lastSubmit && p.lastSubmit.answers != null) ? p.lastSubmit.answers : null
        }))
      });

      emitRoomUpdate(roomId);
    }
  });

  socket.on("disconnect", (reason) => {
    for (const [roomId, room] of rooms.entries()) {
      if (!room.players.has(socket.id)) continue;

      room.players.delete(socket.id);

      if (room.hostId === socket.id) {
        const first = room.players.keys().next().value;
        room.hostId = first || null;
      }

      if (room.players.size === 0) {
        scheduleRoomDeletion(roomId, 30000);
      } else {
        emitRoomUpdate(roomId);
      }
    }

  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server on http://localhost:" + PORT));
