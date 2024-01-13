"use strict";

const { log } = console;

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
