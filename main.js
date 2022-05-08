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
navs.forEach((nav, index) => {
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
    if (index === 1) {
      startCounting();
    }
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
// Dark Mode
const dark = document.querySelector(".fa-moon");
const light = document.querySelector(".fa-sun");
console.log(light);
const htmlFile = document.querySelector("html");
dark.addEventListener("click", (eo) => {
  htmlFile.classList.add("dark");
  dark.classList.add("opacity");
  light.classList.remove("opacity");
});
light.addEventListener("click", (eo) => {
  htmlFile.classList.remove("dark");
  dark.classList.remove("opacity");
  light.classList.add("opacity");
});
const darkthings = document.querySelector(".darkthings");
const gear = document.querySelector(".gear");
const spans = document.querySelectorAll(".themes-content .colors span");
gear.addEventListener("click", (eo) => {
  darkthings.classList.toggle("toggle");
});
const removeTextColors = () => {
  console.log(htmlFile);
  if (htmlFile.classList.contains("textcolor1")) {
  }
};
const removeClassColors = () => {
  htmlFile.classList.remove("textcolor1");
  htmlFile.classList.remove("textcolor2");
  htmlFile.classList.remove("textcolor3");
  htmlFile.classList.remove("textcolor4");
  htmlFile.classList.remove("textcolor5");
};
// Choose Theme Color
spans.forEach((span, index) => {
  span.addEventListener("click", (eo) => {
    removeClassColors();
    if (index === 0) {
      htmlFile.classList.add("textcolor1");
    } else if (index === 1) {
      htmlFile.classList.add("textcolor2");
    } else if (index === 2) {
      htmlFile.classList.add("textcolor3");
    } else if (index === 3) {
      htmlFile.classList.add("textcolor4");
    } else if (index === 4) {
      htmlFile.classList.add("textcolor5");
    }
  });
});
// Skill Counter
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
const skillsName = document.querySelectorAll(".skillname");
const percentageSkills = document.querySelectorAll(".percentage");
const skillsBox = document.querySelector(".contentgrid .right-box");
let counter = 0;
const skillCounter = () => {
  setInterval(() => {
    if (counter < 95) {
      counter++;
      skillsName[0].innerHTML = ` ${counter}%`;
      percentageSkills[0].style.width = `${counter}%`;
      skillsName[1].innerHTML = `${Math.trunc(scale(counter, 0, 95, 0, 80))}%`;
      percentageSkills[1].style.width = `${scale(counter, 0, 95, 0, 80)}%`;
      skillsName[2].innerHTML = `${Math.trunc(scale(counter, 0, 95, 0, 85))}%`;
      percentageSkills[2].style.width = `${scale(counter, 0, 95, 0, 85)}%`;
      skillsName[3].innerHTML = `${Math.trunc(scale(counter, 0, 95, 0, 65))}%`;
      percentageSkills[3].style.width = `${scale(counter, 0, 95, 0, 65)}%`;
    } else {
      clearInterval(skillCounter);
    }
  }, 60);
};
const startCounting = () => {
  window.addEventListener("scroll", (eo) => {
    if (window.innerHeight > skillsBox.getBoundingClientRect().top) {
      skillCounter();
    }
  });
};
