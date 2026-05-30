// ==========================================================================
// Ultra-Premium Portfolio Interactive JavaScript Layer
// Features: Dynamic Phrase Typing, Project Category Filters, Intersection Observers
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = currentYear;
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        const navToggle = document.getElementById('nav-toggle');
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          if (navToggle) navToggle.classList.remove('open');
        }

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile navigation drawer toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // Dynamic typing animation in Hero landing
  const typedTextSpan = document.getElementById('typed-text');
  if (typedTextSpan) {
    const phrases = [
      "Full-Stack Software Engineer.",
      "SaaS Creator & Architect.",
      "Computer Science Specialist.",
      "Zero-Knowledge Security Builder."
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIdx];
      
      if (isDeleting) {
        typedTextSpan.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typedTextSpan.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
      }

      let typeSpeed = isDeleting ? 30 : 60;

      if (!isDeleting && charIdx === currentPhrase.length) {
        typeSpeed = 2000; // Hold full phrase longer
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typeSpeed = 400; // Brief pause before starting next
      }

      setTimeout(typeEffect, typeSpeed);
    }

    // Start typing loop
    setTimeout(typeEffect, 800);
  }

  // Dynamic Project Grid Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectWrappers = document.querySelectorAll('.card-wrapper');

  if (filterButtons.length > 0 && projectWrappers.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active states in button group
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const activeFilter = button.getAttribute('data-filter');

        projectWrappers.forEach(wrapper => {
          const categories = wrapper.getAttribute('data-category').split(' ');
          
          if (activeFilter === 'all' || categories.includes(activeFilter)) {
            wrapper.classList.remove('hidden');
          } else {
            wrapper.classList.add('hidden');
          }
        });
      });
    });
  }

  // IntersectionObserver Reveal Animation on Scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -50px 0px"
  });

  // Observe all primary structural sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    revealObserver.observe(section);
  });
});
