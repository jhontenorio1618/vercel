document.getElementById("year").textContent = new Date().getFullYear();

const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌙"; 
  } else {
    toggleBtn.textContent = "☀️"; 
  }
});
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
