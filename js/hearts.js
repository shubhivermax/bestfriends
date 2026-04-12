/** Subtle floating hearts in the background */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var layer = document.querySelector(".hearts-bg");
    if (!layer) return;
    var n = 12;
    for (var i = 0; i < n; i++) {
      var el = document.createElement("span");
      el.className = "heart";
      el.textContent = ["♥", "✦", "♡"][i % 3];
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.animationDelay = -Math.random() * 8 + "s";
      el.style.animationDuration = 6 + Math.random() * 6 + "s";
      layer.appendChild(el);
    }
  });
})();
