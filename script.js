// ── Tab navigation ───────────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = tab.dataset.tab;

    // Update tab active state
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show target page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(target);
    if (page) page.classList.add('active');
  });
});

// ── Hello button ─────────────────────────────────────
function sayHello() {
  const btn = document.querySelector('.hero .btn');
  const original = btn.textContent;

  btn.textContent = 'Hello! 👋';
  btn.style.background = 'var(--accent)';

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 2000);
}
