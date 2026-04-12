(function () {
  var STORAGE_KEY = "lns_memories_v1";

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function save(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      /* quota / private mode */
    }
  }

  function render(container, list) {
    container.innerHTML = "";
    if (!list.length) {
      var empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No memories yet — add the first one above!";
      container.appendChild(empty);
      return;
    }
    list
      .slice()
      .reverse()
      .forEach(function (text, i) {
        var div = document.createElement("div");
        div.className = "memory-item";
        div.textContent = i + 1 + ". " + text;
        container.appendChild(div);
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("memory-form");
    var input = document.getElementById("memory-input");
    var listEl = document.getElementById("memory-list");
    if (!form || !input || !listEl) return;

    var memories = load();
    render(listEl, memories);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = (input.value || "").trim();
      if (!text) return;
      memories.push(text);
      save(memories);
      input.value = "";
      render(listEl, memories);
    });
  });
})();
