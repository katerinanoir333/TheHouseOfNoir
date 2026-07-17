const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
menuButton?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
const status = form?.querySelector('.form-status');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  form.querySelectorAll('.field').forEach(field => field.classList.remove('invalid'));
  let valid = true;
  form.querySelectorAll('input[required]').forEach(input => {
    if (!input.checkValidity()) {
      input.closest('.field')?.classList.add('invalid');
      valid = false;
    }
  });
  if (!valid) { status.textContent = 'Please complete the required details.'; return; }
  const endpoint = window.THON_CONFIG?.formEndpoint;
  if (!endpoint) {
    status.textContent = 'The private channel is being prepared. Please return shortly.';
    return;
  }
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.querySelector('span').textContent = 'Sending…';
  status.textContent = '';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Your signal has been received. If there is resonance, The House will contact you privately.';
    button.querySelector('span').textContent = 'Signal received';
  } catch (_) {
    status.textContent = 'Your signal could not be sent. Please try again in a moment.';
    button.disabled = false;
    button.querySelector('span').textContent = 'Send my signal';
  }
});
