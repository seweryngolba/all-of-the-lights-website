const hamMenu = document.querySelector("#hamburger-menu");
const navbar = document.querySelector("#desktop-menu");
const hamIcon = document.querySelector("#ham-logo");
const closeIcon = document.querySelector("#close");

const toggleMenu = () => {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
    hamIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    navbar.style.display = "flex";
    hamIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};

hamMenu.addEventListener("click", toggleMenu);
