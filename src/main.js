import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // 2. Navbar shrink on scroll
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      navbar.style.background = 'rgba(10, 25, 47, 0.95)';
      navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
      navbar.style.height = '70px';
    } else {
      navbar.style.background = 'rgba(10, 25, 47, 0.85)';
      navbar.style.boxShadow = 'none';
      navbar.style.height = '100px';
    }
    lastScrollTop = scrollTop;
  });

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Disable submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call for form submission
    setTimeout(() => {
      formStatus.textContent = 'Thank you! Your message has been sent successfully.';
      formStatus.className = 'form-status success';
      contactForm.reset();
      
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      // Clear message after 5 seconds
      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    }, 1500);
  });
});
