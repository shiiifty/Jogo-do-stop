document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const roomId = String(params.get("room") || "").trim().toUpperCase();

  if (!roomId) {
    alert("Falta o código da sala no URL. Ex: lobby.html?room=ABC123");
    return;
  }

  const roomCodeEl = document.getElementById("room-code");
  const playersEl = document.getElementById("players-list");
  const startBtn = document.getElementById("start-game-btn");
  const hostMsg = document.getElementById("host-info");
  const pwLine = document.getElementById("room-password-line");
  const pwEl = document.getElementById("room-password");

  if (roomCodeEl) roomCodeEl.textContent = roomId;

  const nickname = localStorage.getItem("playerNickname") || "Player";
  const avatar = localStorage.getItem("playerAvatar") || "default";
  const savedPassword = localStorage.getItem("roomPassword") || "";

  window.api.joinRoom({ roomId, nickname, avatar, password: savedPassword }, function (res) {
    console.log("joinRoom lobby res:", res);

    if (res && res.ok) return;

    alert((res && res.error) ? res.error : "Erro ao entrar na sala.");
    window.location.href = "/html/play.html";
  });

  window.socket.on("room:update", function (room) {
    console.log("room:update", room);

    if (!room) return;
    if (String(room.roomId).toUpperCase() !== roomId) return;

    if (playersEl) {
      playersEl.innerHTML = "";
      (room.players || []).forEach(function (p) {
        const li = document.createElement("li");
        li.textContent = p.nickname;
        playersEl.appendChild(li);
      });
    }

    const myId = window.socket.id;
    const isHost = !!myId && room.hostId === myId;

    if (pwLine && pwEl) {
      if (room.password) {
        pwLine.classList.remove("hidden");
        pwEl.classList.remove("hidden");
        pwEl.textContent = room.password;
      } else {
        pwLine.classList.add("hidden");
        pwEl.classList.add("hidden");
        pwEl.textContent = "";
      }
    }

    if (startBtn) startBtn.style.display = isHost ? "inline-block" : "none";
    if (hostMsg) hostMsg.textContent = isHost
      ? "És o host. Podes iniciar o jogo."
      : "À espera que o host inicie o jogo...";
  });

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      localStorage.removeItem("roomPassword");
      window.socket.emit("game:goToGame", { roomId });
    });
  }

  window.socket.on("game:goToGame", function (payload) {
    if (!payload || String(payload.roomId).toUpperCase() !== roomId) return;
    window.location.href = "/html/game.html?room=" + encodeURIComponent(roomId);
  });
});
