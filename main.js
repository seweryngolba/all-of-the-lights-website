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

const neon = document.querySelector("#neon");

const playNeon = () => {
  if (neon.classList.contains("neon-light")) {
    neon.classList.remove("neon-light");
  } else {
    neon.classList.add("neon-light");
  }
};

neon.addEventListener("click", playNeon);

const flash = document.querySelector("#flashlights");
const flashLight = document.querySelector("#flash-light");

const turnFlash = () => {
  if (flashLight.style.display === "flex") {
    flashLight.style.display = "none";
  } else {
    flashLight.style.display = "flex";
  }
};

flash.addEventListener("click", turnFlash);

const traffic = document.querySelector("#traffic");
const redLight = document.querySelector("#red");
const yellowLight = document.querySelector("#yellow");
const greenLight = document.querySelector("#green");

const playTraffic = () => {
  if (
    redLight.classList.contains("red-animation") &&
    yellowLight.classList.contains("yellow-animation") &&
    greenLight.classList.contains("green-animation")
  ) {
    redLight.classList.remove("red-animation");
    yellowLight.classList.remove("yellow-animation");
    greenLight.classList.remove("green-animation");
  } else {
    redLight.classList.add("red-animation");
    yellowLight.classList.add("yellow-animation");
    greenLight.classList.add("green-animation");
  }
};

traffic.addEventListener("click", playTraffic);

const sections = document.getElementsByTagName("section");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const photoSection = document.querySelector("#photo-section");
const mysteryBtn = document.querySelector("#mystery-button");

const turnOff = () => {
  for (const section of sections) {
    section.style.display = "none";
  }
  header.style.display = "none";
  footer.style.display = "none";
  photoSection.style.display = "none";

  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h2");
  const returnBtn = document.createElement("button");

  newTitle.textContent = "Strange, isn't it?";
  returnBtn.textContent = "GO BACK";

  newDiv.classList.add("new-div");
  newTitle.classList.add("new-title");
  returnBtn.classList.add("new-button");

  newDiv.appendChild(newTitle);
  newDiv.appendChild(returnBtn);

  document.body.appendChild(newDiv);

  const goingBack = () => {
    for (const section of sections) {
      section.style.display = "flex";
    }
    header.style.display = "flex";
    footer.style.display = "flex";
    photoSection.style.display = "block";

    newDiv.style.display = "none";
  };

  returnBtn.addEventListener("click", goingBack);
};

mysteryBtn.addEventListener("click", turnOff);
