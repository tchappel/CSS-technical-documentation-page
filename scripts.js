
const btnToggle = document.getElementById('btn-toggle');
const navMenu = document.getElementById('nav-menu');
const btnToggleIcon = document.getElementById('btn-toggle-icon');

btnToggle.addEventListener('click', (event) => {
    navMenu.classList.toggle('closed');
    btnToggleIcon.classList.toggle('icon-rotate');  
})