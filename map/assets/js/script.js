const menu = document.getElementById("menu");
const mainSidebarMenu = document.getElementById("mainSidebar-menu");

menu.addEventListener("click", openMainMenu);

function openMainMenu(){
    mainSidebarMenu.classList.toggle("open");
}