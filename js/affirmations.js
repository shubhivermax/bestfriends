(function () {
  var AFFIRMATIONS = [
    "You make ordinary days have memories worth replaying.",
    "Your laugh should be licensed it's that infectious.",
    "You are never alone, ever, as long as you have me.",
    "You're allowed to rest. Life is incredibly short and you deserve to life slowly when u can",
    "You are so kind, caring, and compassionate",
    "You make people feel seen'",
    "Reminder: you're never too much. ur perfect yaar",
    "u are so hot and genuinely have the body of a model.",
    "I'm grateful the universe put us in the same storyline.",
    "u are THAT girl - ur cool, funny, beautiful, smart and kind. ur HER.",
  ];

  function shuffledCopy(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("affirm-btn");
    var out = document.getElementById("affirm-text");
    if (!btn || !out) return;

    var queue = shuffledCopy(AFFIRMATIONS);
    var index = 0;

    function getNextAffirmation() {
      if (!queue.length) return "";
      if (index >= queue.length) {
        queue = shuffledCopy(AFFIRMATIONS);
        index = 0;
      }
      var next = queue[index];
      index += 1;
      return next;
    }

    function showNext() {
      out.classList.add("is-fading");
      setTimeout(function () {
        out.textContent = getNextAffirmation();
        out.classList.remove("is-fading");
      }, 200);
    }

    btn.addEventListener("click", showNext);
    out.textContent = getNextAffirmation();
  });
})();
