let mainMenu = document.querySelector(".header__nav-menu");
let openIcon = mainMenu.querySelector(".icon");

openIcon.onclick = function() {
    mainMenu.classList.toggle("open");
  };