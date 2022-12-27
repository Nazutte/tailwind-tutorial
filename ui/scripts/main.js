const hamburgerToggle = document.getElementById('hamburger-toggle');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburgerToggle.addEventListener('click', () => {
  const className = hamburgerMenu.className;
  if(className == 'hamburger-menu'){
    hamburgerMenu.className = 'hamburger-menu-show';
  } else {
    hamburgerMenu.className = 'hamburger-menu';
  }
});