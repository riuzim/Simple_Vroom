const settings = document.querySelector('.logo');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.settingsMenu');
const settingsContent = document.querySelector('.settings');

closeMenu.addEventListener('click', function () {
  settingsContent.classList.remove('active'); // Remove a classe .active para ocultar o menu
  setTimeout(() => {
    menu.style.display = 'none';
  }, 300);
});

settings.addEventListener('click', function () {
  menu.style.display = 'flex';
  setTimeout(() => {
    settingsContent.classList.add('active'); // Adiciona a classe .active para mostrar o menu com animação
  }, 0); // Aguarda um pequeno intervalo para que a animação seja aplicada
});
