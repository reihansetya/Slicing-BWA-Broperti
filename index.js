var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var navbar = document.querySelector("nav");
var btn = document.querySelector(".nav-mobile");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.remove("mt-3");
    navbar.classList.add("scrolled");
    btn.classList.remove("gascroll");
  } else {
    navbar.classList.remove("scrolled");
    btn.classList.add("gascroll");
  }
};
