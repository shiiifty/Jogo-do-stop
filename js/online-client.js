window.socket = io("https://jogo-do-stop-backend.onrender.com", {
  transports: ["websocket", "polling"]
});

window.api = {
  createRoom: function ({ nickname, avatar, password, config }, cb) {
    window.socket.emit("room:create", { nickname, avatar, password, config }, cb);
  },

  joinRoom: function ({ roomId, nickname, avatar, password }, cb) {
    window.socket.emit("room:join", { roomId, nickname, avatar, password }, cb);
  },

  startRound: function (roomId, cb) {
    window.socket.emit("game:startRound", { roomId }, cb);
  },

  submit: function (roomId, answers, score, cb) {
    window.socket.emit("game:submit", { roomId, answers, score }, cb);
  }
};

window.socket.on("room:update", function (room) {
  console.log("room:update", room);
});

window.socket.on("game:roundStarted", function (payload) {
  console.log("roundStarted", payload);
});

window.socket.on("game:roundEnded", function (payload) {
  console.log("roundEnded", payload);
});
