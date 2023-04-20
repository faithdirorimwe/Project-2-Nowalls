// hamburger menu
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');



hamburger.addEventListener('click', () => {
    sidebar.classList.toggle("sidebar--open");
    hamburger.classList.toggle("menu-close");
});









