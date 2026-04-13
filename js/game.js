/** Simple "catch the star" mini-game */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("game-canvas");
    var scoreEl = document.getElementById("game-score");
    if (!canvas || !scoreEl) return;

    var ctx = canvas.getContext("2d");
    var W = 400;
    var H = 420;
    canvas.width = W;
    canvas.height = H;

    var score = 0;
    var target = { x: W / 2, y: 80, r: 18, vy: 2.2 };
    var player = { x: W / 2, y: H - 40, w: 72, h: 14 };

    function resetTarget() {
      target.x = 40 + Math.random() * (W - 80);
      target.y = 40 + Math.random() * 120;
      target.vy = 1.6 + Math.random() * 1.4;
    }

    function getSpeedBoost() {
      return Math.min(score * 0.14, 4.5);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var grd = ctx.createLinearGradient(0, 0, 0, H);
      grd.addColorStop(0, "#87ceeb");
      grd.addColorStop(1, "#b8e994");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = "rgba(255,255,255,0.35)";
      for (var i = 0; i < 5; i++) {
        ctx.fillRect(20 + i * 80, 60 + i * 12, 50, 8);
      }

      ctx.fillStyle = "#ffd54f";
      ctx.beginPath();
      ctx.arc(target.x, target.y, target.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#f48fb1";
      ctx.fillRect(player.x - player.w / 2, player.y, player.w, player.h);
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      ctx.strokeRect(player.x - player.w / 2, player.y, player.w, player.h);
    }

    function tick() {
      target.y += target.vy + getSpeedBoost();
      if (target.y > H + 30) {
        resetTarget();
      }

      var caught =
        target.y + target.r >= player.y &&
        target.x > player.x - player.w / 2 - target.r &&
        target.x < player.x + player.w / 2 + target.r;

      if (caught) {
        score += 1;
        scoreEl.textContent = String(score);
        resetTarget();
      }

      draw();
      requestAnimationFrame(tick);
    }

    canvas.addEventListener("mousemove", function (e) {
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var x = (e.clientX - rect.left) * scaleX;
      player.x = Math.max(player.w / 2 + 4, Math.min(W - player.w / 2 - 4, x));
    });

    canvas.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
        var rect = canvas.getBoundingClientRect();
        var scaleX = canvas.width / rect.width;
        var x = (e.touches[0].clientX - rect.left) * scaleX;
        player.x = Math.max(player.w / 2 + 4, Math.min(W - player.w / 2 - 4, x));
      },
      { passive: false }
    );

    resetTarget();
    tick();
  });
})();
