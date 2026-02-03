document.addEventListener("DOMContentLoaded", function () {
  const publicBtn = document.getElementById("public-btn");
  const privateBtn = document.getElementById("private-btn");

  const popup = document.getElementById("popup-overlay");
  const closePopup = document.getElementById("close-popup");
  const confirmPopup = document.getElementById("confirm-popup");
  const wrongPwMsg = document.getElementById("wrong-pw-msg");
  const senhaInput = document.getElementById("senha-input");

  function getPlayerInfo() {
    const nickname = localStorage.getItem("playerNickname") || "Player";
    const avatar = localStorage.getItem("playerAvatar") || "default";
    let gameConfig = null;

    try {
      gameConfig = JSON.parse(localStorage.getItem("gameConfig") || "null");
    } catch (e) {
      gameConfig = null;
    }

    const config = gameConfig || { timePerRound: 60, rounds: 10, letters: "" };
    return { nickname, avatar, config };
  }

  function goToLobby(roomId) {
    localStorage.setItem("lastRoomId", roomId);

    window.location.href = "./lobby.html?room=" + encodeURIComponent(roomId);
  }

  function createRoom(passwordOrNull) {
    const info = getPlayerInfo();

    window.api.createRoom(
      {
        nickname: info.nickname,
        avatar: info.avatar,
        password: passwordOrNull, 
        config: info.config
      },
      function (res) {
        if (!res || !res.ok) {
          alert(res && res.error ? res.error : "Erro a criar sala.");
          return;
        }

        goToLobby(res.roomId);
      }
    );
  }

  if (publicBtn) {
    publicBtn.addEventListener("click", function () {
      localStorage.removeItem("roomPassword");
      createRoom(null);
    });
  }

  if (privateBtn && popup) {
    privateBtn.addEventListener("click", function () {
      popup.classList.add("show");
      if (wrongPwMsg) wrongPwMsg.classList.remove("show");
      if (senhaInput) senhaInput.value = "";
    });
  }

  if (closePopup && popup) {
    closePopup.addEventListener("click", function () {
      popup.classList.remove("show");
    });
  }

  if (confirmPopup && senhaInput && popup) {
    confirmPopup.addEventListener("click", function () {
      const pw = senhaInput.value.trim();

      if (pw.length !== 4 || isNaN(pw)) {
        if (wrongPwMsg) wrongPwMsg.classList.add("show");
        return;
      }

      if (wrongPwMsg) wrongPwMsg.classList.remove("show");
      popup.classList.remove("show");

      localStorage.setItem("roomPassword", pw);

      createRoom(pw);
    });
  }

  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) popup.classList.remove("show");
    });
  }
});
