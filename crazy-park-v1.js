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
  let current = -1;
  let lastFocused = null;
  const render = index => {
    current = (index + triggers.length) % triggers.length;
    const button = triggers[current];
    display.src = button.dataset.full;
    display.alt = button.querySelector('img')?.alt || 'Imagen ampliada del proyecto';
    caption.textContent = button.dataset.caption || '';
    counter.textContent = `${current + 1} / ${triggers.length}`;
  };
  triggers.forEach((button, i) => button.addEventListener('click', () => {
    lastFocused = button;
    render(i);
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
