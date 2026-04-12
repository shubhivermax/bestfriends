(function () {
  var AFFIRMATIONS = [
    "You make ordinary days feel like episodes worth replaying.",
    "Your laugh should be licensed — it's that good.",
    "If friendship had a leaderboard, you'd be speedrunning the top.",
    "You're allowed to rest. The show goes on, and you're still the star.",
    "Every plot twist is easier with you in the cast.",
    "You bring the kind of energy that turns 'fine' into 'core memory.'",
    "Reminder: you're not 'too much.' You're the whole season.",
    "Your heart has better writing than most season finales.",
    "I'm grateful the universe put us in the same storyline.",
    "Today counts — and so do you.",
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("affirm-btn");
    var out = document.getElementById("affirm-text");
    if (!btn || !out) return;

    function showNext() {
      out.classList.add("is-fading");
      setTimeout(function () {
        out.textContent = pickRandom(AFFIRMATIONS);
        out.classList.remove("is-fading");
      }, 200);
    }

    btn.addEventListener("click", showNext);
    out.textContent = pickRandom(AFFIRMATIONS);
  });
})();
