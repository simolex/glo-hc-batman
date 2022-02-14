const menuMobile = () => {
  const menu = document.querySelector(".header__menu-burger");
  const menuContent = document.querySelector(".header__nav");
  const menuClose = document.querySelector(".header__menu-close");

  const menuToggle = () => {
    menuContent.classList.toggle("header__nav--active");
  };

  menu.addEventListener("click", () => {
    menuToggle();
  });

  menuClose.addEventListener("click", (e) => {
    e.preventDefault();
    menuToggle();
  });
};
menuMobile();
