const baba = document.querySelectorAll(".header__actions ul li h4");
baba.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const burgerMenu = document.querySelector(".burger__menu");
const mobileMenu = document.querySelector(".header__contact");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
  burgerMenu.classList.remove("open");
  mobileMenu.classList.remove("open");
});

burgerMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("open");
  mobileNav.classList.remove("open");
  burgerMenu.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});