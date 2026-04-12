(function () {
  var KEY = "lns_archi_ok";

  window.LNS = window.LNS || {};
  window.LNS.authKey = KEY;

  window.LNS.isVerified = function () {
    try {
      return sessionStorage.getItem(KEY) === "1";
    } catch (e) {
      return false;
    }
  };

  window.LNS.setVerified = function () {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {
      /* ignore */
    }
  };

  window.LNS.requireAuth = function () {
    if (!window.LNS.isVerified()) {
      window.location.href = "index.html";
    }
  };
})();
