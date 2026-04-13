(function () {
  var JOKES = [
    "MANASH and Zellies.",
    "When Yash Jadhav proposed you and we laughed in his face. Rly sorry but like it was funny man",
    "When you fell at my bday party. I'M DEAD like laughing rn.",
    "Atharva Devkar from Explosive Dance Institute.",
    "omg remember avinash leonardo. what a time man. yk he does to college in florida. remember when he got tiktok famous i can't it was so cringey bye",
    "bro, i can't even believe i'm bringing this back into existence im so embarassed but - MANAS RANADE from my society. please can we forget about this i really dont want to talk about it man.",
    "the infamous prank call on my 13th bday when we prank called the narkhede household. can't believe his mom made us visit on my bday she was clearly very unemployed. ",
    "kunsh turning himself into a woman like everyday. its kind of abormal how many photos i have of him being a woman. i think he will transition in the future like caitlyn jenner",
    "pratyush's singing. he rly posted them on instagram like wow. the confidence was crazy not to be mean but also im allowed to.",
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
    var btn = document.getElementById("joke-btn");
    var out = document.getElementById("joke-text");
    if (!btn || !out) return;

    var queue = shuffledCopy(JOKES);
    var index = 0;

    function getNextJoke() {
      if (!queue.length) return "";
      if (index >= queue.length) {
        queue = shuffledCopy(JOKES);
        index = 0;
      }
      var next = queue[index];
      index += 1;
      return next;
    }

    function showNext() {
      out.classList.add("is-fading");
      setTimeout(function () {
        out.textContent = getNextJoke();
        out.classList.remove("is-fading");
      }, 200);
    }

    btn.addEventListener("click", showNext);
    out.textContent = getNextJoke();
  });
})();
