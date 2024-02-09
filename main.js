const menuBtn = document.querySelector("#btn-menu");
const closeMenuBtn = document.querySelector("#btn-menu-close");
const navMobile = document.querySelector("#nav-mobile");

menuBtn.addEventListener("click", function () {
  navMobile.style.display = "block";
});

closeMenuBtn.addEventListener("click", function () {
  navMobile.style.display = "none";
});
