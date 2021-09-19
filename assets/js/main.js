import { remClasses } from "./globalFun.js";

// ===================== HOME MAIN SLIDER  =====================
const bootstrapCustomDelay = document.getElementById("bootstrap-custom-delay");
setInterval(() => bootstrapCustomDelay.click(), 6000);

const newsSliderItems = document.querySelectorAll(".news-slider .slider-text");
const prevBtn = document.querySelector("button.carousel-control-prev");
const nextBtn = document.querySelector("button.carousel-control-next");
let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;

  if (counter > newsSliderItems.length - 1) {
    counter = 0;
  }

  remClasses(newsSliderItems, "active");
  newsSliderItems[counter].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  if (counter === 0) {
    counter = newsSliderItems.length;
  }

  counter--;
  remClasses(newsSliderItems, "active");
  newsSliderItems[counter].classList.add("active");
});

setInterval(() => nextBtn.click(), 10000);

// =====================  MEDIA CENTER  =====================
const gallery__listBtns = document.querySelectorAll(
  ".media__center-gallery .gallery__list li"
);

const gallery__items = document.querySelectorAll(".gallery__items-item");

gallery__listBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    remClasses(gallery__listBtns, "active");
    remClasses(gallery__items, "active");
    btn.classList.add("active");

    gallery__items.forEach((item) => {
      if (item.classList.contains(btn.dataset.type)) {
        item.classList.add("active");
      }
    });
  });
});

// POP UP WINDOW SELECTORS
const popUpWindow = document.querySelector(".pop__up__window");
const popUpCloseBtn = popUpWindow.querySelector(".pop__up-close");

// =====================  MEDIA CENTER - media-library  =====================
const mediaLibraryImgs = document.querySelectorAll(".media-library img");

popUpImage(mediaLibraryImgs, popUpWindow, popUpCloseBtn);

// =====================  AWARENESS CENTER  =====================
const awarenessImgs = document.querySelectorAll(
  ".awareness__center-slider img"
);

popUpImage(awarenessImgs, popUpWindow, popUpCloseBtn);

const awareness__centerTitle = document.querySelectorAll(
  ".awareness__center-title a"
);

// =====================  GLOBAL  =====================

// GLOBAL FUNCTIONS
function popUpImage(arrayOfImages, window, closeBtn) {
  arrayOfImages.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const content = window.querySelector("img");
      content.src = src;
      window.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    window.style.display = "none";
  });
}

// Animation On Scroll

const sr = new ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  // reset: true,
});

ScrollReveal().reveal(".carousel.slide");
ScrollReveal().reveal(".summary .row .summary__icon", { interval: 200 });
ScrollReveal().reveal(".electronic__services");
ScrollReveal().reveal(".apps .swiper-wrapper");
ScrollReveal().reveal(".media__center");
ScrollReveal().reveal(".awareness__center");
ScrollReveal().reveal(".initiatives");
ScrollReveal().reveal(".partners .sr", { interval: 200 });

// =====================  SECTIONS CONTROLS  =====================
const sectionsControls = document.querySelectorAll(".sections-controls a");

sectionsControls.forEach((btn) => {
  btn.addEventListener("click", () => {
    remClasses(sectionsControls, "active");
    btn.classList.add("active");
  });
});

// =====================  SWIPER JS RESPONSIVE  =====================
let s3Count = 3;
let s4Count = 4;

window.addEventListener("resize", () => {
  responsiveSwiperThree(".electronic__services-slider");
  responsiveSwiperFour(".apps-slider");
  responsiveSwiperThree(".awareness__center-slider");
  responsiveSwiperFour(".initiatives-slider");
});

responsiveSwiperThree(".electronic__services-slider");
responsiveSwiperFour(".apps-slider");
responsiveSwiperThree(".awareness__center-slider");
responsiveSwiperFour(".initiatives-slider");

function responsiveSwiperThree(target) {
  if (window.innerWidth <= 500) {
    s3Count = 1;
  } else if (window.innerWidth <= 1184) {
    s3Count = 2;
  } else {
    s3Count = 3;
  }

  var swiper = new Swiper(target, {
    slidesPerView: s3Count,
    spaceBetween: 20,
    slidesPerGroup: s3Count,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function responsiveSwiperFour(target) {
  if (window.innerWidth <= 500) {
    s4Count = 1;
  } else if (window.innerWidth <= 900) {
    s4Count = 2;
  } else if (window.innerWidth <= 1184) {
    s4Count = 3;
  } else {
    s4Count = 4;
  }

  var swiper = new Swiper(target, {
    slidesPerView: s4Count,
    spaceBetween: 20,
    slidesPerGroup: s4Count,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
