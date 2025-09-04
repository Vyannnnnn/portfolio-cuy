// Testimonial Slider Functionality
(function () {
  let currentTestimonialIndex = 0;
  const totalTestimonials = 5;

  // Initialize testimonial slider when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    initTestimonialSlider();
  });

  function initTestimonialSlider() {
    // Auto-play testimonials every 6 seconds
    setInterval(() => {
      changeTestimonial(1);
    }, 6000);

    // Add keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        changeTestimonial(-1);
      } else if (e.key === "ArrowRight") {
        changeTestimonial(1);
      }
    });

    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    const testimonialTrack = document.querySelector(".testimonial-track");
    if (testimonialTrack) {
      testimonialTrack.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

      testimonialTrack.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
      });
    }

    function handleSwipe() {
      const diffX = startX - endX;
      if (Math.abs(diffX) > 50) {
        // Minimum swipe distance
        if (diffX > 0) {
          changeTestimonial(1); // Swipe left, go to next
        } else {
          changeTestimonial(-1); // Swipe right, go to previous
        }
      }
    }
  }

  function changeTestimonial(direction) {
    const testimonialTrack = document.querySelector(".testimonial-track");
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".testimonial-dots .dot");

    if (!testimonialTrack || !testimonialCards.length) return;

    // Update current index
    currentTestimonialIndex += direction;

    // Handle wrap around
    if (currentTestimonialIndex >= totalTestimonials) {
      currentTestimonialIndex = 0;
    } else if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = totalTestimonials - 1;
    }

    // Update testimonial display
    updateTestimonialDisplay();
  }

  function currentTestimonial(index) {
    currentTestimonialIndex = index - 1; // Convert to 0-based index
    updateTestimonialDisplay();
  }

  function updateTestimonialDisplay() {
    const testimonialTrack = document.querySelector(".testimonial-track");
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".testimonial-dots .dot");

    if (!testimonialTrack || !testimonialCards.length) return;

    console.log("Current testimonial index:", currentTestimonialIndex);
    console.log("Total testimonial cards found:", testimonialCards.length);

    // Update active states for cards - hide all, show current
    testimonialCards.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentTestimonialIndex) {
        card.classList.add("active");
        console.log("Activated card at index:", index);
      }
    });

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === currentTestimonialIndex) {
        dot.classList.add("active");
      }
    });
  }

  // Make functions globally available for onclick handlers
  window.changeTestimonial = changeTestimonial;
  window.currentTestimonial = currentTestimonial;
})(); // Close IIFE
