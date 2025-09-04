// Simple Mobile Menu Script
(function () {
  "use strict";

  function initMobileMenu() {
    const hamburger = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) {
      console.error("Mobile menu elements not found!");
      return;
    }

    let isMenuOpen = false;

    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        navLinks.classList.add("active");
        hamburger.classList.add("active");
      } else {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });

    // Close menu when clicking nav links
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        isMenuOpen = false;
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (isMenuOpen && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        isMenuOpen = false;
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
