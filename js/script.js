// Espera que o HTML esteja todo carregado
document.addEventListener("DOMContentLoaded", function () {
  // Apanhar os botões pelo id
  const playBtn = document.getElementById("play-btn");
  const createRoomBtn = document.getElementById("create-room-btn");
  const settingsBtn = document.getElementById("settings-btn");

  // Segurança: só adiciona o listener se o botão existir
  if (playBtn) {
    playBtn.addEventListener("click", function () {
      window.location.href = "play.html";   // vai para play.html
    });
  }

  if (createRoomBtn) {
    createRoomBtn.addEventListener("click", function () {
      window.location.href = "create-room.html"; // quando tiveres esta página
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener("click", function () {
      window.location.href = "settings.html"; // quando tiveres esta página
    });
  }
});
