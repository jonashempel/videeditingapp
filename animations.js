// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // Loading Animation
  const loaderWrapper = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loaderWrapper.style.opacity = '0';
    loaderWrapper.style.visibility = 'hidden';
  }, 1500);

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  
  // Grow cursor on links and buttons
  const links = document.querySelectorAll('a, button, .work-item, .card-button, .shop-button');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-grow');
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-grow');
    });
  });
  
  // Scroll animations
  const revealElements = document.querySelectorAll('.section, .hero-content, .hero-image, .work-item, .pricing-card, .shop-item');
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Wrap all card elements with shine effect
  const shineElements = document.querySelectorAll('.work-item, .pricing-card, .shop-item');
  shineElements.forEach(element => {
    element.classList.add('card-shine');
  });
  
  // Menu toggle functionality (keeping original functionality)
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.textContent = this.textContent === '☰' ? '✕' : '☰';
  });

  // Close menu when a menu item is clicked (keeping original functionality)
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.menu-toggle').textContent = '☰';
    });
  });
});
