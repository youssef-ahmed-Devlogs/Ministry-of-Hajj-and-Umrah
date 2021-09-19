import { remClasses } from "./globalFun.js";

const businessIndividualsList = document.querySelectorAll(
  ".business-individuals__services-list li"
);

const businessServicesList = document.querySelectorAll(
  ".business__services li"
);

const AllServices = document.querySelectorAll(".all-services");
const AllBusineesServices = document.querySelectorAll(
  ".all-business__services"
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
    document.querySelectorAll(`.${btn.dataset.type}`).forEach((item) => {
      item.classList.add("active");
    });
  });
});
