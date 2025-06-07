// Sidebar toggle
const toggleBtn = document.getElementById("toggle-sidebar");
const sidebarLeft = document.getElementById("sidebar-left");

toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent close on click inside sidebar toggle
    sidebarLeft.classList.toggle("show");
});

// Dropdown toggle
const plusBtn = document.getElementById("plus-btn");
const plusMenu = document.getElementById("plus-menu");

const accountBtn = document.getElementById("account-btn");
const accountMenu = document.getElementById("account-menu");

plusBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing when clicking button
    plusMenu.classList.toggle("show");
    accountMenu.classList.remove("show");
});

accountBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle("show");
    plusMenu.classList.remove("show");
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("#plus-btn") && !e.target.closest("#plus-menu")) {
        plusMenu.classList.remove("show");
    }

    if (!e.target.closest("#account-btn") && !e.target.closest("#account-menu")) {
        accountMenu.classList.remove("show");
    }

    // Optional: Close sidebar when clicking outside on small screen
    if (!e.target.closest("#toggle-sidebar") && !e.target.closest("#sidebar-left")) {
        sidebarLeft.classList.remove("show");
    }
});
