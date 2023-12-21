document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show'); // Adiciona ou remove a classe 'show' ao clicar no ícone do menu
    });
});
