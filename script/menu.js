const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    // Si el menú está abierto, muestra ✖; si no, muestra ☰
    if (menu.classList.contains('active')) {
        toggle.textContent = '✖';
    } else {
        toggle.textContent = '☰';
    }
});
