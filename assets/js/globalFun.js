// Remove class from all elements
export function remClasses(target, cls) {
  target.forEach((item) => {
    item.classList.remove(cls);
  });
}

// Open image on click in large window
export function popUpImage(arrayOfImages, windowEle, closeBtn) {
  const otherImgsContainer = windowEle.querySelector(".all-images");

  arrayOfImages.forEach((img) => {
    img.addEventListener("click", () => {
      otherImgsContainer.innerHTML = "";
      document.querySelector("body").style.overflow = "hidden";

      const src = img.getAttribute("src");
      const content = windowEle.querySelector(".pop__up-img img");

      arrayOfImages.forEach((item) => {
        if (img.getAttribute("src") === item.getAttribute("src")) {
          item.classList.add("active");
          otherImgsContainer.innerHTML += `<img class="active" src=${item.getAttribute(
            "src"
          )} alt="" />`;
        } else {
          otherImgsContainer.innerHTML += `<img src=${item.getAttribute(
            "src"
          )} alt="" />`;
        }

        const otherImgs = windowEle.querySelectorAll(".all-images img");

        otherImgs.forEach((otherImg) => {
          otherImg.addEventListener("click", () => {
            content.src = otherImg.getAttribute("src");
            remClasses(otherImgs, "active");
            otherImg.classList.add("active");
          });
        });
      });

      content.src = src;
      windowEle.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    windowEle.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  });
}
