'use strict';
(() => {
  const dialog = document.querySelector('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const display = dialog.querySelector('figure img');
  const caption = dialog.querySelector('figcaption');
  const counter = dialog.querySelector('.lightbox-counter');
  const triggers = [...document.querySelectorAll('.open-image[data-full]')];
  const close = dialog.querySelector('.lightbox-close');
  const prev = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  // Keep identities, concept/installation, experiences and Crazy Spa separate.
  const groupOf = button => button.closest('.identity-grid, .comparison, .feature-grid, .space-grid, .spa-grid') || button.closest('section');
  let gallery = triggers;
  let current = -1;
  let lastFocused = null;
  const render = index => {
    if (!gallery.length) return;
    current = (index + gallery.length) % gallery.length;
    const button = gallery[current];
    display.src = button.dataset.full;
    display.alt = button.querySelector('img')?.alt || 'Imagen ampliada del proyecto';
    caption.textContent = button.dataset.caption || '';
    counter.textContent = `${current + 1} / ${gallery.length}`;
  };
  triggers.forEach(button => button.addEventListener('click', () => {
    lastFocused = button;
    const group = groupOf(button);
    gallery = triggers.filter(item => groupOf(item) === group);
    render(gallery.indexOf(button));
    dialog.showModal();
    close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  prev.addEventListener('click', () => render(current - 1));
  next.addEventListener('click', () => render(current + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { display.removeAttribute('src'); lastFocused?.focus(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); render(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); render(current - 1); }
  });
})();
