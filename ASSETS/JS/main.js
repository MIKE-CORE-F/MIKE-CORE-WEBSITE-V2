/* =========================================================
   MIKE‑CORE ECOSYSTEM • MAIN JAVASCRIPT
   ---------------------------------------------------------
   Light, safe, audit‑friendly UI interactions for the
   MIKE‑CORE public ecosystem website.
   ========================================================= */

/* Smooth scrolling for internal links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* Card hover ripple effect (optional aesthetic) */
document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

/* Simple collapsible sections (if used later) */
document.querySelectorAll('.collapse-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const target = document.getElementById(toggle.dataset.target);
    if (target) {
      target.classList.toggle('open');
    }
  });
});

/* Optional: Dark/Light mode toggle (future-proof) */
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
