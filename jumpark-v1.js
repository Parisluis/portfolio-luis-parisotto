document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('image-lightbox');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const count = document.getElementById('lightbox-counter');
  const entries = Array.from(document.querySelectorAll('[data-full]'));
  // Group the viewer by visual theme; the archives are separate stories.
  const groupOf = button => button.closest('.archive, .identity-pair') || button.closest('section');
  let gallery = entries;
  let current = 0;
  let opener = null;
  function show(index) {
    if (!gallery.length) return;
    current = (index + gallery.length) % gallery.length;
    const button = gallery[current];
    image.src = button.dataset.full;
    image.alt = button.dataset.caption || button.getAttribute('aria-label') || 'Pieza ampliada';
    caption.textContent = button.dataset.caption || '';
    count.textContent = `${current + 1} / ${gallery.length}`;
  }
  entries.forEach(button => button.addEventListener('click', () => {
    opener = button;
    const group = groupOf(button);
    gallery = entries.filter(item => groupOf(item) === group);
    show(gallery.indexOf(button));
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      dialog.querySelector('.lightbox-close')?.focus();
    }
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
