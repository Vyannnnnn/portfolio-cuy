// Enhanced Portfolio JavaScript - Interactive Features
// Clean implementation without conflicts

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Page Loader
  initPageLoader();

  // Mobile Menu handled by separate script

  // Initialize Smooth Scrolling
  initSmoothScrolling();

  // Initialize Custom Cursor
  initCustomCursor();

  // Initialize Parallax Effects
  initParallaxEffects();

  // Initialize Typewriter Effects
  initTypewriterEffects();

  // Initialize Magnetic Buttons
  initMagneticButtons();

  // Initialize Scroll Animations
  initScrollAnimations();

  // Initialize Interactive Features
  initInteractiveFeatures();

  // Initialize Particle Background
  initParticleBackground();

  console.log("Enhanced portfolio features loaded successfully!");
});

// Page Loader
function initPageLoader() {
  const pageLoader = document.querySelector(".page-loader");

  if (pageLoader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        pageLoader.classList.add("loaded");
      }, 1000);
    });
  }
}

// Enhanced Smooth Scrolling with Animation
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  const navLinks = document.querySelectorAll(".nav-links a");
  const scrollIndicator = document.querySelector(".nav-scroll-indicator");

  // Add active state management for nav links
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.pageYOffset + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Custom smooth scroll with easing animation
  function smoothScrollTo(target, duration = 1000) {
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    let startTime = null;

    // Show scroll indicator
    if (scrollIndicator) {
      scrollIndicator.classList.add("active");
    }

    // Easing function for smooth animation
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Hide scroll indicator when done
        if (scrollIndicator) {
          setTimeout(() => {
            scrollIndicator.classList.remove("active");
          }, 200);
        }
      }
    }

    requestAnimationFrame(animation);
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Add visual feedback to clicked link
      this.style.transform = "scale(0.95)";
      this.classList.add("loading");

      setTimeout(() => {
        this.style.transform = "";
        this.classList.remove("loading");
      }, 150);

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Add smooth scrolling class to body
        document.body.classList.add("smooth-scrolling");

        smoothScrollTo(targetSection, 1000);

        // Remove smooth scrolling class after animation
        setTimeout(() => {
          document.body.classList.remove("smooth-scrolling");
          updateActiveLink();
        }, 1000);
      }
    });

    // Add hover effects for desktop
    if (window.innerWidth > 768) {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px) scale(1.05)";
      });

      link.addEventListener("mouseleave", function () {
        if (!this.classList.contains("active")) {
          this.style.transform = "";
        }
      });
    }
  });

  // Update active link on scroll with throttling
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(updateActiveLink, 10);
  });

  // Set initial active link
  updateActiveLink();

  // Add intersection observer for better performance
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -20% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
}

// Custom Cursor
function initCustomCursor() {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    });

    function animateOutline() {
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;

      cursorOutline.style.left = outlineX + "px";
      cursorOutline.style.top = outlineY + "px";

      requestAnimationFrame(animateOutline);
    }

    animateOutline();

    // Cursor hover effects
    const hoverTargets = document.querySelectorAll("a, button, .skill-item, .work-item, .magnetic-btn, .cta-button");

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        cursorDot.style.transform = "scale(2)";
        cursorOutline.style.transform = "scale(2)";
      });

      target.addEventListener("mouseleave", () => {
        cursorDot.style.transform = "scale(1)";
        cursorOutline.style.transform = "scale(1)";
      });
    });
  }
}

// Parallax Effects
function initParallaxEffects() {
  const heroSection = document.querySelector(".hero");
  const particles = document.querySelectorAll(".particle");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (heroSection) {
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    }

    particles.forEach((particle, index) => {
      const speed = (index + 1) * 0.3;
      particle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });

    // Dynamic navbar background
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (scrolled > 100) {
        navbar.style.background = "rgba(15, 15, 35, 0.95)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.background = "rgba(15, 15, 35, 0.1)";
        navbar.style.backdropFilter = "blur(10px)";
      }
    }
  });
}

// Typewriter Effects
function initTypewriterEffects() {
  function typeWriter(element, text, speed = 50) {
    if (!element) return;

    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const typewriterElements = document.querySelectorAll(".typewriter");
  typewriterElements.forEach((element, index) => {
    const text = element.textContent;
    setTimeout(() => {
      typeWriter(element, text, 100);
    }, index * 500);
  });
}

// Magnetic Buttons
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll(".magnetic-btn, .cta-button");

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  // Add reveal classes and observe elements
  const sections = document.querySelectorAll("section");
  sections.forEach((section, sectionIndex) => {
    const children = section.querySelectorAll("h2, h3, p, .skill-item, .work-item, .experience-item, .feature-card");

    children.forEach((child, childIndex) => {
      if (sectionIndex % 2 === 0) {
        child.classList.add("reveal");
      } else {
        child.classList.add(childIndex % 2 === 0 ? "reveal-left" : "reveal-right");
      }

      revealObserver.observe(child);
    });
  });
}

// Interactive Features
function initInteractiveFeatures() {
  // Floating animation for skills
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add("floating");
  });

  // Interactive stats counter
  const stats = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalNumber = parseInt(target.textContent.replace(/\D/g, ""));
          animateCounter(target, finalNumber);
          statsObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => {
    statsObserver.observe(stat);
  });

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + (element.textContent.includes("+") ? "+" : "");
    }, 40);
  }

  // Dynamic background gradient
  let gradientAngle = 0;
  setInterval(() => {
    gradientAngle += 0.5;
    if (document.body) {
      document.body.style.background = `linear-gradient(${gradientAngle}deg, #0f0f23 0%, #1a1a3a 50%, #0f0f23 100%)`;
    }
  }, 100);
}

// Particle Background
function initParticleBackground() {
  const particleContainer = document.querySelector(".particle-background");
  if (!particleContainer) return;

  // Clear existing particles
  particleContainer.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particleContainer.appendChild(particle);
  }
}

// Utility function for smooth animations
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Add some extra interactive features
window.addEventListener("load", () => {
  // Add pulse animation to CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-button");
  ctaButtons.forEach((button) => {
    setInterval(() => {
      button.style.boxShadow = "0 0 30px rgba(102, 126, 234, 0.8)";
      setTimeout(() => {
        button.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
      }, 1000);
    }, 3000);
  });

  // Add tilt effect to cards
  const cards = document.querySelectorAll(".skill-item, .work-item, .experience-item");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  });
});
