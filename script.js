// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const notification = document.getElementById('notification');
  const closeNotification = document.getElementById('closeNotification');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form submission code)
    setTimeout(() => {
      // Show notification
      notification.classList.add('active');
      
      // Reset form
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 1500);
  });

  // Close notification
  closeNotification.addEventListener('click', function() {
    notification.classList.remove('active');
  });

  // Close when clicking outside
  notification.addEventListener('click', function(e) {
    if (e.target === notification) {
      notification.classList.remove('active');
    }
  });
});

// faq
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggleBtn = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    
    // Toggle answer when clicking the question
    question.addEventListener('click', () => {
      answer.classList.toggle('show');
      toggleBtn.textContent = answer.classList.contains('show') ? '-' : '+';
    });
    
    // Toggle answer when clicking the button (prevent double trigger)
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      answer.classList.toggle('show');
      toggleBtn.textContent = answer.classList.contains('show') ? '-' : '+';
    });
  });
});

//testimonials
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('testimonialCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cards = document.querySelectorAll('.testimonial-card');
  
  let currentIndex = 0;
  let isAnimating = false; // Prevents rapid clicks during animation
  
  // Function to get the correct card width including gap
  function getScrollAmount() {
    const card = cards[0];
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(carousel).gap) || 32; // Default to 32px if gap isn't set
    return cardWidth + gap;
  }
  
  // Function to update carousel position
  function updateCarousel(direction) {
    if (isAnimating) return;
    isAnimating = true;
    
    const scrollAmount = getScrollAmount();
    let targetScroll;
    
    if (direction === 'next') {
      currentIndex = Math.min(currentIndex + 1, cards.length - 1);
      targetScroll = currentIndex * scrollAmount;
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
      targetScroll = currentIndex * scrollAmount;
    }
    
    carousel.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Reset animation lock after transition completes
    setTimeout(() => {
      isAnimating = false;
    }, 500); // Matches the CSS transition duration
  }
  
  // Button event listeners
  nextBtn.addEventListener('click', () => updateCarousel('next'));
  prevBtn.addEventListener('click', () => updateCarousel('prev'));
  
  // Optional: Recalculate on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      carousel.scrollTo({
        left: currentIndex * getScrollAmount(),
        behavior: 'auto' // No animation on resize
      });
    }, 250);
  });
  
  // Optional: Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      updateCarousel('next');
    } else if (e.key === 'ArrowLeft') {
      updateCarousel('prev');
    }
  });
});

    //hamburger
    const hamburger = document.getElementById('hamburger');
        const navContainer = document.getElementById('navContainer');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

        // Close menu when clicking on links (mobile)
        document.querySelectorAll('.nav-container a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navContainer.classList.remove('active');
                }
            });
        });

        // Reset menu when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navContainer.classList.remove('active');
            }
        });
        