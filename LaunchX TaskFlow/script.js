// ==========================================================================
// LaunchX Landing Page – Minimal interactivity
// Mobile menu toggle + smooth scroll for anchor links
// No dependencies – pure vanilla JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu toggle ────────────────────────────────────────
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks   = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });

    // Close menu when clicking any link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });
  }


  // ── Smooth scroll for anchor links ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Skip if it's not a real section link
      if (this.getAttribute('href') === '#') return;

      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80; // approximate header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
