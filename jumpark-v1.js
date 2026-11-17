document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('image-lightbox');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const count = document.getElementById('lightbox-counter');
  const entries = Array.from(document.querySelectorAll('[data-full]'));
  let current = 0;
  let opener = null;
  function show(index) {
    current = (index + entries.length) % entries.length;
    const button = entries[current];
    image.src = button.dataset.full;
    image.alt = button.dataset.caption || button.getAttribute('aria-label') || 'Pieza ampliada';
    caption.textContent = button.dataset.caption || '';
    count.textContent = `${current + 1} / ${entries.length}`;
  }
  entries.forEach((button, index) => button.addEventListener('click', () => {
    opener = button;
    show(index);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { image.removeAttribute('src'); if (opener) opener.focus(); });
});
