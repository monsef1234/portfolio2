// TypedJS
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Youtuber"],
  typeSpeed: 100,
  typeBack: 100,
  loop: true,
});
// Navs Toggle
const navs = document.querySelectorAll(".aside ul li a");
const sections = document.querySelectorAll(".section");
const rightClass = () => {
  sections.forEach((section) => {
    section.classList.add("right100");
    section.style.display = "none";
    // section.style.display = "none";
  });
};
rightClass();
sections[0].classList.remove("right100");
sections[0].style.display = "block";
const removeActiveClass = () => {
  const navs = document.querySelectorAll(".aside ul li");
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
};
navs.forEach((nav) => {
  nav.addEventListener("click", (eo) => {
    eo.preventDefault();
    removeActiveClass();
    const parentElement = nav.parentElement;
    const parentElement2 = nav.parentElement.parentElement.parentElement;
    parentElement.classList.add("active");
    rightClass();
    const getID = nav.getAttribute("href").slice(1);
    const getSection = document.getElementById(getID);
    getSection.style.display = "block";
    setTimeout(() => {
      getSection.classList.remove("right100");
    }, 50);
    // Menu go back to his place in small media query
    if (parentElement2.classList.contains("back")) {
      parentElement2.style.transform = "translateX(-100%)";
    }
  });
});
// Menu Toggle
const menu = document.querySelector(".menu");
const asideSection = document.querySelector(".aside");
menu.addEventListener("click", (eo) => {
  asideSection.classList.add("back");
  asideSection.style.transform = "translateX(0)";
});
sections.forEach((section) => {
  section.addEventListener("click", (eo) => {
    if (asideSection.classList.contains("back")) {
      asideSection.style.transform = "translateX(-100%)";
    }
  });
});
