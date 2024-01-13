"use strict";

const { log } = console;

function addEventOnElements(elements, event, callback) {
  elements.forEach((el) => {
    el.addEventListener(event, callback);
  });
}

function toggleNavbar() {
  navbar.classList.toggle("active");
  header.classList.toggle("nav-active");
}

const header = document.querySelector("[data-header-container]");
const navbar = document.querySelector("[data-navbar]");
const navTogglers = Array.from(document.querySelectorAll("[data-nav-toggler]"));

addEventOnElements(navTogglers, "click", toggleNavbar);
