// ---------- JS: main.js ----------
(function(){
  // Theme
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if(stored){ root.classList.toggle('light', stored === 'light'); }
  const toggle = document.getElementById('themeToggle');
  toggle?.addEventListener('click', () => {
    const nowLight = !root.classList.contains('light');
    root.classList.toggle('light', nowLight);
    localStorage.setItem('theme', nowLight ? 'light' : 'dark');
  });

  // Mobile nav
  const nav = document.getElementById('nav');
  const openBtn = document.querySelector('.nav-toggle');
  const closeBtn = document.querySelector('.nav-close');
  openBtn?.addEventListener('click', () => {
    nav?.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
  });
  closeBtn?.addEventListener('click', () => {
    nav?.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
  }));

  // Footer year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Contact form -> mailto
  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', () => {
    const [name, email, message] = Array.from(form.querySelectorAll('input, textarea'));
    const subject = encodeURIComponent(`Portfolio contact from ${name.value}`);
    const body = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`);
    const mail = document.querySelector('a[href^="mailto:"]')?.getAttribute('href')?.replace('mailto:', '') || 'you@example.com';
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  });
})();


// Respect prefers-reduced-motion: disable smooth behavior if user prefers reduced motion
try {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
} catch(e) {}
