// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Dashboard tabs
document.querySelectorAll('.dash-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    const card = tab.closest('.project-card');
    card.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
    card.querySelectorAll('.dash-frame').forEach(f => f.classList.remove('active'));
    tab.classList.add('active');
    card.querySelector(`#frame-${target}`).classList.add('active');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.section-header, .about-grid, .project-card, .tool-card, .contact-icons, .projects-intro, .tools-intro, .contact-lead');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Skill bars animate on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.w + '%';
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => {
  bar.style.width = '0';
  skillObserver.observe(bar);
});
