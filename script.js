// Enhanced smooth scrolling with animations
document.addEventListener("DOMContentLoaded", function () {
  // Custom Cursor
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (cursorDot && cursorOutline) {
    document.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    });

    // Hover effects for interactive elements
    const hoverElements = document.querySelectorAll("a, button, .cta-button, .skill-item, .project-card");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("hover");
      });

      el.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("hover");
      });
    });
  }

  // Parallax Scrolling
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll(".particle");
    const heroBackground = document.querySelector(".hero-background");

    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    particles.forEach((particle, index) => {
      const speed = (index + 1) * 0.5;
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Typewriter Effect
  const typewriterElements = document.querySelectorAll(".typewriter");

  const typeWriter = (element, text, speed = 100) => {
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
  };

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("typewriter")) {
          const text = entry.target.getAttribute("data-text");
          setTimeout(() => {
            typeWriter(entry.target, text, 50);
          }, 500);
        }

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".skill-item, .project-card, .typewriter");
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

  // Magnetic Button Effect
  const magneticButtons = document.querySelectorAll(".cta-button");

  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px) scale(1)";
    });
  });
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  // Toggle mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open"); // Prevent body scroll when menu is open
    });
  }

  // Close mobile menu when link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", function () {
      if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (mobileMenuToggle && navLinks && !mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileMenuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  // Handle navigation links with enhanced animations
  const navLinksScroll = document.querySelectorAll('.nav-links a[href^="#"]');
  let isScrolling = false;

  navLinksScroll.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (isScrolling) return; // Prevent multiple clicks during scroll
      isScrolling = true;

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      console.log("Navigating to:", targetId, targetSection); // Debug log

      if (targetSection) {
        // Add loading state to clicked link
        this.classList.add("loading");

        // Calculate target position
        const offsetTop = targetSection.offsetTop - 80;
        const currentScroll = window.scrollY;
        const distance = Math.abs(offsetTop - currentScroll);
        const duration = Math.min(Math.max(distance / 3, 600), 1200); // Shorter duration

        // Animate scroll with custom easing
        smoothScrollTo(offsetTop, duration, () => {
          // Animation complete callback
          this.classList.remove("loading");
          isScrolling = false;

          // Add entrance animation to target section
          targetSection.classList.add("section-entrance");
          setTimeout(() => {
            targetSection.classList.remove("section-entrance");
          }, 600);

          console.log("Navigation complete to:", targetId); // Debug log
        });
      }
    });
  });

  // Custom smooth scroll function with easing
  function smoothScrollTo(target, duration, callback) {
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, target);
        if (callback) callback();
      }
    }

    // Easing function for smooth animation
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Enhanced navbar with active link highlighting
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section[id]");

  // Create active indicator
  const activeIndicator = document.createElement("div");
  activeIndicator.className = "nav-active-indicator";
  document.querySelector(".nav-links").appendChild(activeIndicator);

  // Update active link on scroll
  function updateActiveLink() {
    let current = "";
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // Update active states
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        updateActiveIndicator(link);
      }
    });
  }

  // Update active indicator position
  function updateActiveIndicator(activeLink) {
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = document.querySelector(".nav-links").getBoundingClientRect();

      activeIndicator.style.left = `${linkRect.left - navRect.left}px`;
      activeIndicator.style.width = `${linkRect.width}px`;
      activeIndicator.style.opacity = "1";
    } else {
      activeIndicator.style.opacity = "0";
    }
  }

  // Enhanced navbar scroll effects
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // Navbar background and shadow
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active link
    updateActiveLink();

    // Parallax effect for navbar
    navbar.style.transform = `translateY(${Math.min(scrollY * 0.1, 10)}px)`;
  });

  // Initialize active indicator
  updateActiveLink();

  // Counter Animation for Hero Stats
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }

  // Trigger counter animation when hero section is in view
  const heroSection = document.querySelector("#hero-section");
  let countersAnimated = false;

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          const statNumbers = document.querySelectorAll(".stat-number[data-target]");
          statNumbers.forEach((stat) => {
            const target = parseInt(stat.dataset.target);
            animateCounter(stat, target);
          });
          countersAnimated = true;
        }
      });
    },
    { threshold: 0.3 }
  );

  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  // CTA Button Actions
  const ctaButtons = document.querySelectorAll(".cta-button");
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("View My Work")) {
        // Scroll to work section
        const workSection = document.querySelector("#work");
        if (workSection) {
          workSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (this.textContent.includes("Download CV")) {
        // Add download functionality or open CV
        alert("CV download functionality would be implemented here");
      }
    });
  });

  // Terminal typing effect enhancement
  const terminalOutputs = document.querySelectorAll(".terminal-output");
  terminalOutputs.forEach((output, index) => {
    // Add slight delay to each terminal output
    output.style.animationDelay = `${index * 0.5}s`;
  });

  // Skills Section Interactive Tabs
  const skillCategories = document.querySelectorAll(".skill-category");
  const skillsGrids = document.querySelectorAll(".skills-grid");

  skillCategories.forEach((category) => {
    category.addEventListener("click", function () {
      const targetCategory = this.dataset.category;

      // Remove active class from all categories and grids
      skillCategories.forEach((cat) => cat.classList.remove("active"));
      skillsGrids.forEach((grid) => grid.classList.remove("active"));

      // Add active class to clicked category and corresponding grid
      this.classList.add("active");
      const targetGrid = document.querySelector(`[data-content="${targetCategory}"]`);
      if (targetGrid) {
        targetGrid.classList.add("active");

        // Animate skill bars
        setTimeout(() => {
          const skillBars = targetGrid.querySelectorAll(".skill-progress");
          skillBars.forEach((bar) => {
            const width = bar.dataset.width;
            bar.style.setProperty("--width", width);
          });
        }, 200);
      }
    });
  });

  // Initialize first skill category
  if (skillCategories.length > 0) {
    skillCategories[0].click();
  }

  // Testimonials Slider
  let currentTestimonial = 0;
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");

  function showTestimonial(index) {
    // Remove active class from all cards and dots
    testimonialCards.forEach((card) => card.classList.remove("active"));
    testimonialDots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current card and dot
    if (testimonialCards[index]) {
      testimonialCards[index].classList.add("active");
    }
    if (testimonialDots[index]) {
      testimonialDots[index].classList.add("active");
    }
  }

  // Navigation functions for testimonials
  window.changeTestimonial = function (direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonialCards.length - 1;
    } else if (currentTestimonial >= testimonialCards.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  };

  window.currentTestimonial = function (index) {
    currentTestimonial = index - 1;
    showTestimonial(currentTestimonial);
  };

  // Auto-play testimonials
  if (testimonialCards.length > 0) {
    setInterval(() => {
      changeTestimonial(1);
    }, 5000);

    // Initialize first testimonial
    showTestimonial(0);
  }

  // Contact Form Enhancement
  const contactForm = document.querySelector(".contact-form-element");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.innerHTML = '<span class="btn-text">Sending...</span><i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        submitBtn.innerHTML = '<span class="btn-text">Message Sent!</span><i class="fas fa-check"></i>';
        submitBtn.style.background = "linear-gradient(135deg, #00ff00, #008000)";

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = "";
          submitBtn.disabled = false;
          contactForm.reset();
        }, 2000);
      }, 2000);
    });
  }

  // Form input focus effects
  const formInputs = document.querySelectorAll(".form-group input, .form-group select, .form-group textarea");
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

  // Project cards hover effect enhancement
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Animate elements on scroll
  const animatedElements = document.querySelectorAll(".experience-item, .project-card, .skill-item");

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
    animationObserver.observe(element);
  });

  // Add typing effect to code snippets
  function typeWriter(element, text, speed = 50) {
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

  // Trigger typing effect for code previews when in view
  const codePreviewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const codeLines = entry.target.querySelectorAll(".code-line");
          codeLines.forEach((line, index) => {
            setTimeout(() => {
              line.style.opacity = "1";
              line.style.transform = "translateX(0)";
            }, index * 200);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const codePreviews = document.querySelectorAll(".code-preview");
  codePreviews.forEach((preview) => {
    const codeLines = preview.querySelectorAll(".code-line");
    codeLines.forEach((line) => {
      line.style.opacity = "0";
      line.style.transform = "translateX(-20px)";
      line.style.transition = "all 0.5s ease";
    });
    codePreviewObserver.observe(preview);
  });

  // Smooth reveal for stats in testimonials
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(".stat-number");
          statNumbers.forEach((stat, index) => {
            setTimeout(() => {
              const finalValue = stat.textContent;
              stat.textContent = "0";

              if (finalValue.includes("+")) {
                const target = parseInt(finalValue.replace("+", ""));
                animateCounter(stat, target);
                setTimeout(() => {
                  stat.textContent = finalValue;
                }, 2000);
              } else if (finalValue.includes("%")) {
                const target = parseFloat(finalValue.replace("%", ""));
                let current = 0;
                const increment = target / 100;

                const counter = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                  } else {
                    stat.textContent = current.toFixed(1) + "%";
                  }
                }, 20);
              } else {
                stat.textContent = finalValue;
              }
            }, index * 200);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const testimonialStats = document.querySelector(".testimonial-stats");
  if (testimonialStats) {
    statsObserver.observe(testimonialStats);
  }

  // Add cursor blink effect to the last terminal line
  function addCursorBlink() {
    const lastTerminalLine = document.querySelector(".terminal-body .terminal-line:last-child");
    if (lastTerminalLine) {
      const cursor = document.createElement("span");
      cursor.textContent = "_";
      cursor.style.animation = "blink-caret 1s step-end infinite";
      cursor.style.color = "#00ff00";
      lastTerminalLine.appendChild(cursor);
    }
  }

  // Add cursor after a delay
  setTimeout(addCursorBlink, 3000);

  // Enhanced floating animation for tech icons
  const techIcons = document.querySelectorAll(".tech-icon");
  techIcons.forEach((icon, index) => {
    // Add random movement
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2) rotate(360deg)";
      this.style.transition = "all 0.3s ease";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Animate elements on scroll (renamed to avoid duplicate variable names)
  const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, scrollObserverOptions);

  // Elements to animate (renamed collection)
  const scrollAnimateElements = document.querySelectorAll(".expertise-item, .experience-item, .testimonial, .project-card");

  scrollAnimateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    scrollObserver.observe(el);
  });

  // Typing effect for hero title (renamed to avoid duplicate 'typeWriter')
  function typeWriterHero(element, text, speed = 100) {
    let i = 0;
    element.textContent = "";

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Add typing effect to hero title
  const heroTitle = document.querySelector(".hero-title");
  const originalText = heroTitle.textContent;

  // Start typing effect after a small delay
  setTimeout(() => {
    typeWriter(heroTitle, originalText, 80);
  }, 1000);

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
      const speed = 0.5;
      heroContent.style.transform = `translateY(${scrolled * speed}px)`;
    }
  });

  // Active navigation highlighting
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Add click effects to buttons
  const buttons = document.querySelectorAll(".btn-primary, .contact-link");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .btn-primary, .contact-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links a.active {
        color: #007bff;
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;

document.head.appendChild(style);

// Enhanced scroll animations with intersection observer
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

// Create enhanced intersection observer
const enhancedObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add staggered animation for cards within the same section
      const cards = entry.target.querySelectorAll(".skill-card, .project-card, .experience-card, .testimonial-card");

      if (cards.length > 0) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.classList.add("animate-in");
          }, index * 100);
        });
      } else {
        // Animate the section itself
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animate-in");
      }
    }
  });
}, observerOptions);

// Enhanced elements to animate
const sectionsToAnimate = document.querySelectorAll(".expertise, .work, .experience, .testimonials, .contact");
const cardsToAnimate = document.querySelectorAll(".skill-card, .project-card, .experience-card, .testimonial-card");

// Initialize sections for animation
sectionsToAnimate.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  enhancedObserver.observe(section);
});

// Initialize cards for animation
cardsToAnimate.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
});

// Enhanced hover effects for project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
    this.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.1)";
  });
});
