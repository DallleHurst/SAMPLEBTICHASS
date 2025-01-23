document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode");
    const body = document.body;
  
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      darkModeToggle.checked = true;
    }
  
    darkModeToggle.addEventListener("change", function () {
      if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });
  