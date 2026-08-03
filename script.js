document.getElementById('year').textContent = new Date().getFullYear();

// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => observer.observe(el));

// Contact form (Formspree AJAX submit)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = 'Sending…';
    formStatus.className = 'form-status is-pending';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = "Thanks — I'll be in touch shortly.";
        formStatus.className = 'form-status is-success';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Something went wrong. Please email me directly instead.';
        formStatus.className = 'form-status is-error';
      }
    } catch (err) {
      formStatus.textContent = 'Something went wrong. Please email me directly instead.';
      formStatus.className = 'form-status is-error';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
