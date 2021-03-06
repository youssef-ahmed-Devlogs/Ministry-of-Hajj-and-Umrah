import { remClasses } from "./globalFun.js";

const businessIndividualsList = document.querySelectorAll(
  ".business-individuals__services-list li"
);

const businessServicesList = document.querySelectorAll(
  ".business__services li"
);

const individualsServicesList = document.querySelectorAll(
  ".individuals__services li"
);

const AllServices = document.querySelectorAll(".all-services");
const AllBusineesServices = document.querySelectorAll(
  ".all-business__services"
);

const allIndividualsServices = document.querySelectorAll(
  ".all-individuals__services"
);

businessIndividualsList.forEach((btn) => {
  btn.addEventListener("click", () => {
    remClasses(businessIndividualsList, "active");
    remClasses(AllServices, "active");
    btn.classList.add("active");
    document.querySelector(`.${btn.dataset.type}`).classList.add("active");
  });
});

businessServicesList.forEach((btn) => {
  btn.addEventListener("click", () => {
    remClasses(businessServicesList, "active");
    remClasses(AllBusineesServices, "active");
    btn.classList.add("active");
    document
      .querySelectorAll(`.business-services .${btn.dataset.type}`)
      .forEach((item) => {
        item.classList.add("active");
      });
  });
});

individualsServicesList.forEach((btn) => {
  btn.addEventListener("click", () => {
    remClasses(individualsServicesList, "active");
    remClasses(allIndividualsServices, "active");
    btn.classList.add("active");

    document
      .querySelectorAll(`.individuals-services .${btn.dataset.type}`)
      .forEach((item) => {
        item.classList.add("active");
      });
  });
});
