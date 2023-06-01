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

const tabNav = document.querySelectorAll(".tab-nav-link");
const tabContent = document.querySelectorAll(".about__text__content");
tabNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveStar();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  tabNav.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  tabContent.forEach((nav) => {
    nav.classList.remove("active");
  });
}