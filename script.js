const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var elemC = document.querySelector(".elem-container");
var fixed_img = document.querySelector(".fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed_img.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed_img.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed_img.style.backgroundImage = `url(${image})`;
  });
});
scroll.destroy();

/****************swiper js *********** */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
