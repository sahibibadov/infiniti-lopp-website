import "./style.css";

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let nav = document.getElementById("navbar");
  if (scrollPos > 50) {
    nav.classList.add("active-nav");
  } else {
    nav.classList.remove("active-nav");
  }
});
