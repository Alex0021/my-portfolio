(function () {
  var storageKey = "theme";
  var root = document.documentElement;
  var toggleButton = document.querySelector(".theme-toggle");

  if (!toggleButton) {
    return;
  }

  function getPreferredTheme() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored === "dark" || stored === "light") {
        return stored;
      }
    } catch (e) {
      // Ignore storage errors
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggleButton.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    toggleButton.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

    var icon = toggleButton.querySelector(".theme-toggle__icon");
    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  applyTheme(getPreferredTheme());

  toggleButton.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {
      // Ignore storage errors
    }
  });
})();
