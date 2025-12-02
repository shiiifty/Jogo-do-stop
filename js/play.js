// js/play.js
document.addEventListener("DOMContentLoaded", () => {

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
  let total_rounds = 10;  // ← podes mudar aqui
  let currentRound = 0;
  let totalScore = 0;       // pontuação acumulada

  // nickname
  const nickname = localStorage.getItem("playerNickname") || "Player 1";
  if (nicknameSpan) nicknameSpan.textContent = nickname;

  // --------- LER CONFIG DO POPUP ----------
  const defaultConfig = {
    timePerRound: 60,
    letters: "",
    rounds: 10,
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

  if (roundSpan) {
    roundSpan.textContent = `0/${total_rounds}`;
  }

  function setInputsEnabled(enabled) {
    answerInputs.forEach(input => {
      input.disabled = !enabled;
      if (!enabled) {
        input.blur();
      }
    });
  }

  function resetRoundUI() {
    timeLeft = config.timePerRound;
    timerSpan.textContent = timeLeft.toString();
    letterSpan.textContent = "-";
    answerInputs.forEach(input => {
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


  function startRound() {
    if (roundRunning) return;

    if (currentRound >= total_rounds) {
      alert("Já jogaste todas as rondas deste jogo!");
      return;
    }

    currentRound++;

    if (roundSpan) {
      roundSpan.textContent = `${currentRound}/${total_rounds}`;
    }

    roundRunning = true;

    const letter = generateRandomLetter();
    currentLetter = letter;
    letterSpan.textContent = letter;

    setInputsEnabled(true);
    timeLeft = config.timePerRound;
    timerSpan.textContent = timeLeft.toString();

    timerId = setInterval(() => {
      timeLeft--;
      timerSpan.textContent = timeLeft.toString();

      if (timeLeft <= 0) {
        endRound();
      }
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

    answerInputs.forEach(input => {
      const cat   = input.dataset.category;   // ex: "nomes"
      const value = input.value.trim();

      answers[cat] = value;

      let ok = false;
      if (cat) {
        ok = isValidWordForCategoryAndLetter(cat, value, currentLetter);
      }

      if (ok) {
        validCount++;
        roundScore += 10; // 10 pontos por resposta válida
      }

      console.log(`cat=${cat}, value="${value}", ok=${ok}`);

      input.classList.toggle("valida", ok);
      input.classList.toggle("erro", !ok);
    });

    console.log("Respostas desta ronda:", answers);

    // acumular pontuação total
    totalScore += roundScore;

    // atualizar overlay
    if (
      scoreOverlay &&
      scoreValueSpan &&
      validCountSpan &&
      totalCountSpan &&
      totalScoreSpan
    ) {
      scoreValueSpan.textContent = roundScore.toString();
      validCountSpan.textContent = validCount.toString();
      totalCountSpan.textContent = answerInputs.length.toString();
      totalScoreSpan.textContent = totalScore.toString();

      scoreOverlay.classList.add("show");
    }
  }

  function fancyEndTransition() {
    const overlay = document.getElementById("end-transition");
    overlay.classList.add("show");

    // espera a animação terminar (1.8s total), depois sai
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1800);
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      resetRoundUI();
      startRound();
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener("click", endRound);
  }

  if (closeScoreBtn) {
    closeScoreBtn.addEventListener("click", () => {
      if (currentRound === total_rounds) {
        scoreOverlay.classList.remove("show");
        fancyEndTransition();
        return;
      }


      scoreOverlay.classList.remove("show");
    });
  }


  resetRoundUI();
});
