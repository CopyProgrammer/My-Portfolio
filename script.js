const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  themeToggle.textContent = "☀️";
} else {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}