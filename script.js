const navUL = document.getElementsByClassName("navUL")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
