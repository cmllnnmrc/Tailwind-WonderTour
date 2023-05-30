const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__nav__container .header__actions");
const headBlur = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
  headBlur.classList.toggle("open");
});

const burgerMenu = document.querySelector(".burger__menu");
const mobileMenu = document.querySelector(".header__contact");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

const baba = document.querySelectorAll(".drop-down h4");
baba.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});