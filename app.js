const headerNav = document.querySelector(".header-nav");
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", () => {
  headerNav.style.transform = "translate(0%, 0%)";
});
menuClose.addEventListener("click", () => {
  headerNav.style.transform = "translate(100%, -100%)";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".left",
    prevEl: ".right",
  },
});
