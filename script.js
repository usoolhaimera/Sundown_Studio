function paje3Animation() {
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
}
/****************swiper js *********** */

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuanimation() {
  var full = document.querySelector(".full-scr");
  var halfdiv = document.querySelector(".full-div1");
  var navimg = document.querySelector("nav img");
  var cngmenu = document.querySelector(".menu-div");
  var icon = document.querySelector("i");
  var flag = 0;
  cngmenu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      halfdiv.style.opacity = "100%";
      icon.setAttribute("class", "ri-close-fill");
      icon.style.fontSize = "5vw";
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
      icon.setAttribute("class", "ri-menu-line");
    }
  });
}

swiperAnimation();
paje3Animation();
menuanimation();

var loader = document.querySelector(".loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 3400);
