// Toggle Left Sidebar
const toggleBtn = document.getElementById("toggle-sidebar");
const sidebarLeft = document.getElementById("sidebar-left");

toggleBtn.addEventListener("click", () => {
    sidebarLeft.classList.toggle("open");
});

// Show More Repos
const showMoreBtn = document.getElementById("show-more-btn");
const repoList = document.getElementById("repo-list");

showMoreBtn.addEventListener("click", () => {
    // For demonstration — add 2 fake repos
    const newRepo1 = document.createElement("li");
    newRepo1.textContent = "NirajG45/NewRepo_1";
    const newRepo2 = document.createElement("li");
    newRepo2.textContent = "NirajG45/NewRepo_2";

    repoList.appendChild(newRepo1);
    repoList.appendChild(newRepo2);
});
