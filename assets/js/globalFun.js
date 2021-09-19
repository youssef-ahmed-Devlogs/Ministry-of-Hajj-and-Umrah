// Remove class from all elements
export function remClasses(target, cls) {
  target.forEach((item) => {
    item.classList.remove(cls);
  });
}
