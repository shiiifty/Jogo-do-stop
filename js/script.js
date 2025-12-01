document.addEventListener("DOMContentLoaded", function () {

  const playBtn = document.getElementById("play-btn");
  const createRoomBtn = document.getElementById("create-room-btn");
  const settingsBtn = document.getElementById("settings-btn");

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
    textInput.addEventListener("keyup", () => {
      const name = textInput.value.trim();
      if (name === "") {
        localStorage.removeItem("playerNickname"); 
      } else {
        localStorage.setItem("playerNickname", name);
      }
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
    let currentAvatar = 0;

    avatarBtn.addEventListener("click", function () {
      currentAvatar = (currentAvatar + 1) % avatars.length;
      avatarImg.src = avatars[currentAvatar];
    });
  }

   const offlineBtn      = document.getElementById("offline-btn");
  const configOverlay   = document.getElementById("config-overlay");
  const configTime      = document.getElementById("config-time");
  const configLetters   = document.getElementById("config-letters");
  const configCancelBtn = document.getElementById("config-cancel");
  const configStartBtn  = document.getElementById("config-start");

  // Clicar em OFFLINE -> abre popup
  if (offlineBtn && configOverlay) {
    offlineBtn.addEventListener("click", () => {
      localStorage.removeItem("gameConfig");
      if (configTime)    configTime.value    = "60";                
      //if (configLetters) configLetters.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      configOverlay.classList.add("show");
    });
  }

  // Cancelar -> fecha popup
  if (configCancelBtn && configOverlay) {
    configCancelBtn.addEventListener("click", () => {
      configOverlay.classList.remove("show");
    });
  }

  // Confirmar -> guarda config e vai para game.html
  if (configStartBtn) {
    configStartBtn.addEventListener("click", () => {
      const time = parseInt(configTime.value, 10) || 60;

      // letras: tirar espaços, passar a maiúsculas e filtrar só A-Z
      let letters = (configLetters.value || "")
        .toUpperCase()
        .replace(/[^A-Z]/g, "");

      // se o utilizador não escrever nada -> todas as letras
      if (!letters) {
        letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      const gameConfig = {
        timePerRound: time,
        letters: letters,
      };

      localStorage.setItem("gameConfig", JSON.stringify(gameConfig));

      // agora sim, vamos para o jogo offline
      window.location.href = "../html/game.html";
    });
  }

  const popup = document.getElementById("popup-overlay");
  const openPrivatePopup = document.getElementById("private-btn");
  const closePopup = document.getElementById("close-popup");
  const confirmPopup = document.getElementById("confirm-popup");
  const wrongPwMsg = document.getElementById("wrong-pw-msg");
  const senhaInput = document.getElementById("senha-input");


  if (popup && openPrivatePopup && closePopup && confirmPopup && senhaInput && wrongPwMsg) {
  
    openPrivatePopup.addEventListener("click", () => {
      popup.classList.add("show");
      wrongPwMsg.classList.remove("show");  
      senhaInput.value = "";                 
    });

    closePopup.addEventListener("click", () => {
      popup.classList.remove("show");
    });

    confirmPopup.addEventListener("click", () => {
      const pw = senhaInput.value.trim();

      if (pw.length !== 4 || isNaN(pw)) {
        wrongPwMsg.classList.add("show");
        return;
      }

      wrongPwMsg.classList.remove("show");
      popup.classList.remove("show");

      localStorage.setItem("privateRoomPassword", pw);
      window.location.href = "./private-room.html";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    });
  }
});
