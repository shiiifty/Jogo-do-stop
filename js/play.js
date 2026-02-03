document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const roomIdRaw = params.get("room");
  const roomId = roomIdRaw ? roomIdRaw.toUpperCase() : null;
  const isOnline = !!roomId;

  const nicknameSpan = document.getElementById("nickname-span");
  const letterSpan   = document.getElementById("letter-span");
  const timerSpan    = document.getElementById("timer-span");
  const roundSpan    = document.getElementById("round-span");
  const startBtn     = document.getElementById("start-btn");
  const stopBtn      = document.getElementById("stop-btn");
  const answerInputs = document.querySelectorAll(".answer-input");

  const scoreOverlay   = document.getElementById("score-overlay");
  const scoreValueSpan = document.getElementById("score-value");
  const validCountSpan = document.getElementById("valid-count");
  const totalCountSpan = document.getElementById("total-count");
  const totalScoreSpan = document.getElementById("total-score");
  const closeScoreBtn  = document.getElementById("close-score-btn");

  let currentLetter = null;
  let total_rounds = 10;
  let currentRound = 0;
  let totalScore = 0;

  const nickname = localStorage.getItem("playerNickname") || "Player 1";
  const avatar = localStorage.getItem("playerAvatar") || "default";
  if (nicknameSpan) nicknameSpan.textContent = nickname;

  const defaultConfig = {
    timePerRound: 60,
    letters: "",
    rounds: 10
  };

  let config = { ...defaultConfig };
  const saved = localStorage.getItem("gameConfig");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      config = { ...defaultConfig, ...parsed };
    } catch (e) {
      console.warn("Config inválida, uso defaults.");
    }
    localStorage.removeItem("gameConfig");
  }

  let timeLeft = config.timePerRound;
  total_rounds = config.rounds;

  let timerId = null;
  let roundRunning = false;

  if (roundSpan) roundSpan.textContent = "0/" + total_rounds;

  function setInputsEnabled(enabled) {
    answerInputs.forEach(function (input) {
      input.disabled = !enabled;
      if (!enabled) input.blur();
    });
  }

  function resetRoundUI() {
    timeLeft = config.timePerRound;
    if (timerSpan) timerSpan.textContent = String(timeLeft);
    if (letterSpan) letterSpan.textContent = "-";

    answerInputs.forEach(function (input) {
      input.classList.remove("valida", "erro");
      input.value = "";
    });

    setInputsEnabled(false);
  }

  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    if (config.letters && config.letters.length > 0) {
      for (const char of config.letters.toUpperCase()) {
        const idx = alphabet.indexOf(char);
        if (idx !== -1) alphabet.splice(idx, 1);
      }
    }

    const idx = Math.floor(Math.random() * alphabet.length);
    return alphabet[idx];
  }

  function startRoundOffline() {
    if (roundRunning) return;

    if (currentRound >= total_rounds) {
      alert("Já jogaste todas as rondas deste jogo!");
      return;
    }

    currentRound++;
    if (roundSpan) roundSpan.textContent = currentRound + "/" + total_rounds;

    roundRunning = true;

    currentLetter = generateRandomLetter();
    if (letterSpan) letterSpan.textContent = currentLetter;

    setInputsEnabled(true);

    timeLeft = config.timePerRound;
    if (timerSpan) timerSpan.textContent = String(timeLeft);

    timerId = setInterval(function () {
      timeLeft--;
      if (timerSpan) timerSpan.textContent = String(timeLeft);
      if (timeLeft <= 0) endRound();
    }, 1000);
  }

  function endRound() {
    if (!roundRunning) return;

    roundRunning = false;
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }

    setInputsEnabled(false);

    const answers = {};
    let validCount = 0;
    let roundScore = 0;

    answerInputs.forEach(function (input) {
      const cat = input.dataset.category;
      const value = input.value.trim();

      answers[cat] = value;

      let ok = false;
      if (cat) {
        ok = isValidWordForCategoryAndLetter(cat, value, currentLetter);
      }

      if (ok) {
        validCount++;
        roundScore += 10;
      }

      input.classList.toggle("valida", ok);
      input.classList.toggle("erro", !ok);
    });

    totalScore += roundScore;

    if (isOnline && window.api && window.api.submit) {
      window.api.submit(roomId, answers, roundScore, function (res) {
        if (!res || !res.ok) {
          console.warn("submit falhou:", res);
        }
      });
    }

    if (scoreOverlay && scoreValueSpan && validCountSpan && totalCountSpan && totalScoreSpan) {
      scoreValueSpan.textContent = String(roundScore);
      validCountSpan.textContent = String(validCount);
      totalCountSpan.textContent = String(answerInputs.length);
      totalScoreSpan.textContent = String(totalScore);

      scoreOverlay.classList.add("show");
    }
  }

  function fancyEndTransition() {
    const overlay = document.getElementById("end-transition");
    if (overlay) overlay.classList.add("show");

    setTimeout(function () {
      window.location.href = "../index.html";
    }, 1800);
  }

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      resetRoundUI();

      if (!isOnline) {
        startRoundOffline();
        return;
      }

      if (window.api && window.api.startRound) {
        window.api.startRound(roomId, function (res) {
          if (!res || !res.ok) {
            alert(res && res.error ? res.error : "Não deu para iniciar o round.");
          }
        });
      } else {
        alert("API online não está carregada. Confirma os <script> no game.html.");
      }
    });
  }

  if (stopBtn) stopBtn.addEventListener("click", endRound);

  if (closeScoreBtn) {
    closeScoreBtn.addEventListener("click", function () {
      if (currentRound === total_rounds) {
        scoreOverlay.classList.remove("show");
        fancyEndTransition();
        return;
      }
      scoreOverlay.classList.remove("show");
    });
  }

  if (isOnline) {
    if (!window.api || !window.api.joinRoom || !window.socket) {
      alert("Online não está carregado. Confirma os <script> no game.html.");
    } else {
      window.api.joinRoom(
        { roomId: roomId, nickname: nickname, avatar: avatar, password: "" },
        function (res) {
          if (!res || !res.ok) {
            alert(res && res.error ? res.error : "Erro ao entrar na sala.");
            window.location.href = "../index.html";
          }
        }
      );

      window.socket.on("game:roundStarted", function (payload) {
        currentRound = payload.round;
        total_rounds = payload.rounds;
        currentLetter = payload.letter;

        if (roundSpan) roundSpan.textContent = currentRound + "/" + total_rounds;
        if (letterSpan) letterSpan.textContent = currentLetter;

        roundRunning = true;
        setInputsEnabled(true);

        if (timerId !== null) clearInterval(timerId);

        function tick() {
          const elapsed = Math.floor((Date.now() - payload.roundStartAt) / 1000);
          const left = Math.max(0, payload.timePerRound - elapsed);
          timeLeft = left;
          if (timerSpan) timerSpan.textContent = String(left);
          if (left <= 0) endRound();
        }

        tick();
        timerId = setInterval(tick, 250);
      });

      window.socket.on("game:roundEnded", function (payload) {
        console.log("server round ended:", payload);
      });
    }
  }
  resetRoundUI();
});
