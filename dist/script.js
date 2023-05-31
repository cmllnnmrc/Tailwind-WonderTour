const baba = document.querySelectorAll(".header__nav ul li a");
baba.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

const burgerMenu = document.querySelector(".burger__menu");
const mobileMenu = document.querySelector(".header__contact");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});