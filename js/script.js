const NAVBAR = document.querySelector("header nav"),
  NAVBARMENU = document.querySelector("header nav .container ul"),
  BTNNAVBAR = document.querySelector("header nav .container .btn-nav"),
  BTNMENU = document.querySelectorAll(".products .btn-products div .btn"),
  PRODUCTS = document.querySelectorAll(".products .items");

// Transforming the navbar on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    NAVBAR.classList.add("scroll");
  } else {
    NAVBAR.classList.remove("scroll");
  }
});

// Showing and hiding the menu on pressing
BTNNAVBAR.addEventListener("click", () => {
  let NavbarHeight = NAVBAR.offsetHeight;
  NAVBARMENU.style.top = NavbarHeight + "px";
  NAVBARMENU.classList.toggle("active");
});
