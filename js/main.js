document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  if (localStorage.getItem('pageTheme') === 'vintage') {
    body.classList.add('vintage-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('vintage-mode');
      
      if (body.classList.contains('vintage-mode')) {
        localStorage.setItem('pageTheme', 'vintage');
      } else {
        localStorage.setItem('pageTheme', 'default');
      }
    });
  }

  const slider = document.getElementById('membersSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn && nextBtn && slider) {
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -220, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 220, behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerText = '¡Mensaje recibido por los héroes del código!';
      }
      contactForm.reset();
    });
  }

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    const toggleMenu = () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    };

    const closeMenu = () => {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('active');
    };

    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && e.target !== hamburgerBtn) {
        closeMenu();
      }
    });
  }
});
