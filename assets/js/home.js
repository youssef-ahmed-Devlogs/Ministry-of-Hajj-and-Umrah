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
