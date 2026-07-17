const checkbox = document.getElementById('terms-confirm');
const links = document.querySelectorAll('.gift-card .button');
const hint = document.getElementById('terms-hint');

function updateTerms() {
  const accepted = checkbox.checked;
  document.body.classList.toggle('terms-accepted', accepted);
  links.forEach(link => link.setAttribute('aria-disabled', String(!accepted)));
  hint.textContent = accepted
    ? 'The retailer links are active. Each one opens in a new tab.'
    : 'Confirm the terms to activate the retailer links.';
}

checkbox.addEventListener('change', updateTerms);
updateTerms();

document.getElementById('copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    button.querySelector('i').textContent = 'Copied';
    setTimeout(() => { button.querySelector('i').textContent = 'Copy'; }, 1800);
  } catch (_) {
    button.querySelector('i').textContent = 'Select & copy';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
