// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Sidebar toggle
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Theme toggle
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
