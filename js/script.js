document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("play-btn");
  const createRoomBtn = document.getElementById("create-room-btn");
  const settingsBtn = document.getElementById("settings-btn");


  const offlineBtn = document.getElementById("offline-btn");
  const configOverlay   = document.getElementById("config-overlay");
  const configTime      = document.getElementById("config-time");
  const configLetters   = document.getElementById("config-letters");
  const configRounds    = document.getElementById("config-rounds");
  const configCancelBtn = document.getElementById("config-cancel");
  const configStartBtn  = document.getElementById("config-start");

  if (playBtn) {
    playBtn.addEventListener("click", function () {
      window.location.href = "./html/play.html";
    });
  }

  if (createRoomBtn) {
    createRoomBtn.addEventListener("click", function () {
      window.location.href = "./html/create-room.html";
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener("click", function () {
      window.location.href = "./html/settings.html";
    });
  }

  const textInput = document.getElementById("text-input");
  if (textInput) {
    const saved = localStorage.getItem("playerNickname");
    if (saved) textInput.value = saved;

    textInput.addEventListener("keyup", () => {
      const name = textInput.value.trim();
      if (name === "") localStorage.removeItem("playerNickname");
      else localStorage.setItem("playerNickname", name);
    });
  }

  const avatarImg = document.getElementById("avatar-img");
  const avatarBtn = document.getElementById("avatar-change-btn");

  const avatars = [
    "../avatars/avatar1.png",
    "../avatars/avatar2.png",
    "../avatars/avatar3.png"
  ];

  if (avatarImg && avatarBtn) {
    const savedAvatar = localStorage.getItem("playerAvatar");
    if (savedAvatar) avatarImg.src = savedAvatar;

    let currentAvatar = Math.max(0, avatars.indexOf(avatarImg.src));

    avatarBtn.addEventListener("click", function () {
      currentAvatar = (currentAvatar + 1) % avatars.length;
      avatarImg.src = avatars[currentAvatar];
      localStorage.setItem("playerAvatar", avatarImg.src);
    });
  }

  if (offlineBtn && configOverlay) {
    offlineBtn.addEventListener("click", () => {
      localStorage.removeItem("gameConfig");
      if (configTime)    configTime.value    = "60";                
      configOverlay.classList.add("show");
    });
  }

  if (configCancelBtn && configOverlay) {
    configCancelBtn.addEventListener("click", () => {
      configOverlay.classList.remove("show");
    });
  }

  if (configStartBtn) {
    configStartBtn.addEventListener("click", () => {
      const time = parseInt(configTime.value, 10) || 60;

      let letters = (configLetters.value || "")
        .toUpperCase()
        .replace(/[^A-Z]/g, "");

      const total_rounds = parseInt(configRounds.value, 10) || 10;
      

      const gameConfig = {
        timePerRound: time,
        letters: letters,
        rounds: total_rounds,
      };

      localStorage.setItem("gameConfig", JSON.stringify(gameConfig));

      window.location.href = "../html/game.html";
    });
  }

const onlineBtn  = document.getElementById("online-btn");
const joinModal  = document.getElementById("join-modal");
const roomInput  = document.getElementById("join-room-id");
const pwBlock    = document.getElementById("pw-block");
const pwInput    = document.getElementById("join-room-pw");
const joinErr    = document.getElementById("join-error");
const pwErr      = document.getElementById("pw-error");
const cancelBtn  = document.getElementById("join-cancel");
const submitBtn  = document.getElementById("join-submit");

function openJoinModal() {
  if (!joinModal) return;

  joinErr?.classList.add("hidden");
  pwErr?.classList.add("hidden");
  pwBlock?.classList.add("hidden");
  if (pwInput) pwInput.value = "";
  if (roomInput) roomInput.value = "";

  joinModal.classList.remove("hidden");
  roomInput?.focus();
}

function closeJoinModal() {
  if (!joinModal) return;
  joinModal.classList.add("hidden");
}

function showJoinError(msg) {
  if (!joinErr) return;
  joinErr.textContent = msg;
  joinErr.classList.remove("hidden");
}

function showPasswordUI(msg) {
  pwBlock?.classList.remove("hidden");
  if (msg && pwErr) {
    pwErr.textContent = msg;
    pwErr.classList.remove("hidden");
  }
  pwInput?.focus();
}

function goLobby(roomId, password) {
  if (password) localStorage.setItem("roomPassword", password);
  else localStorage.removeItem("roomPassword");

  window.location.href = "./lobby.html?room=" + encodeURIComponent(roomId);
}

function tryJoin(roomId, password) {
  if (!window.api?.joinRoom) {
    showJoinError("Online não carregado (online-client.js).");
    return;
  }

  const nickname = localStorage.getItem("playerNickname") || "Player";
  const avatar   = localStorage.getItem("playerAvatar") || "default";

  window.api.joinRoom({ roomId, nickname, avatar, password }, (res) => {
    if (res?.ok) {
      goLobby(roomId, password);
      return;
    }

    const err = res?.error || "Erro ao entrar na sala.";

    if (err === "Password necessária." || err === "Sala privada.") {
      showPasswordUI("");
      return;
    }

    if (err === "Password errada.") {
      showPasswordUI("Password errada.");
      return;
    }

    showJoinError(err);
  });
}

if (onlineBtn) {
  onlineBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openJoinModal();
  });
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeJoinModal();
  });
}

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    joinErr?.classList.add("hidden");
    pwErr?.classList.add("hidden");

    const roomId = (roomInput?.value || "").trim().toUpperCase();
    if (!roomId) return showJoinError("Escreve o código da sala.");

    const needsPw = pwBlock && !pwBlock.classList.contains("hidden");
    const password = needsPw ? (pwInput?.value || "").trim() : "";

    if (!needsPw) {
      tryJoin(roomId, "");
      return;
    }

    if (!password) return showPasswordUI("Insere a password.");
    tryJoin(roomId, password);
  });
}

if (joinModal) {
  joinModal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeJoinModal();
    if (e.key === "Enter") submitBtn?.click();
  });

  joinModal.addEventListener("click", (e) => {
    if (e.target === joinModal) closeJoinModal();
  });
}

});
