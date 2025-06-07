// Sidebar toggle
const toggleBtn = document.getElementById("toggle-sidebar");
const sidebarLeft = document.getElementById("sidebar-left");

toggleBtn.addEventListener("click", () => {
    sidebarLeft.classList.toggle("open");
});

// Dropdown toggle
const plusBtn = document.getElementById("plus-btn");
const plusMenu = document.getElementById("plus-menu");

plusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    plusMenu.style.display = plusMenu.style.display === "flex" ? "none" : "flex";
    accountMenu.style.display = "none";
});

// Account dropdown toggle
const accountBtn = document.getElementById("account-btn");
const accountMenu = document.getElementById("account-menu");

accountBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    accountMenu.style.display = accountMenu.style.display === "flex" ? "none" : "flex";
    plusMenu.style.display = "none";
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
    plusMenu.style.display = "none";
    accountMenu.style.display = "none";
});
