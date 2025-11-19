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

  const avatarImg = document.getElementById("avatar-img");
  const avatarBtn = document.getElementById("avatar-change-btn");

  const avatars = [
    "../avatars/avatar1.png",
    "../avatars/avatar2.png",
    "../avatars/avatar3.png"
  ];

  let currentAvatar = 0;

  avatarBtn.addEventListener("click", function () {
    currentAvatar = (currentAvatar + 1) % avatars.length;
    avatarImg.src = avatars[currentAvatar];
  });

  const privateBtn = document.getElementById("private-btn");
  

});
