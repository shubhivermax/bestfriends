(function () {
  var JOKES = [
    "Why did the pixel go to therapy? Too many unresolved edges.",
    "Our friendship is like Wi‑Fi: invisible, strong, and occasionally asks for a password.",
    "I told my code to be more like you — now it never throws exceptions, it just vibes.",
    "Parallel lines have so much in common. It's a shame they'll never meet — unlike us, who somehow always do.",
    "If we were a duo name, it'd be 'Runtime Error' because we never stop running.",
    "You're the 'skip intro' to my bad days.",
    "I'm not lazy — I'm in energy-saving mode, like a good retro console.",
    "We don't do small talk. We do side quests.",
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("joke-btn");
    var out = document.getElementById("joke-text");
    if (!btn || !out) return;

    function showNext() {
      out.classList.add("is-fading");
      setTimeout(function () {
        var next;
        do {
          next = pickRandom(JOKES);
        } while (next === out.textContent && JOKES.length > 1);
        out.textContent = next;
        out.classList.remove("is-fading");
      }, 200);
    }

    btn.addEventListener("click", showNext);
    out.textContent = pickRandom(JOKES);
  });
})();
