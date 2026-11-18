'use strict';
(() => {
  const comparison = document.getElementById('comparison-frame');
  const range = document.getElementById('comparison-range');
  if (comparison && range) {
    const update = () => comparison.style.setProperty('--split', `${Number(range.value)}%`);
    range.addEventListener('input', update);
    update();
  }

  const lightbox = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');
  const imageCaption = document.getElementById('lightbox-caption');
  if (lightbox && image && imageCaption) {
    let lightboxTrigger = null;
    document.querySelectorAll('.zoom-image[data-image]').forEach(button => {
      button.addEventListener('click', () => {
        lightboxTrigger = button;
        const src = button.dataset.image;
        if (!src || !/^assets\/[a-z0-9\/_-]+\.(?:webp|png|jpe?g)$/i.test(src)) return;
        image.src = src;
        image.alt = button.querySelector('img')?.alt || 'Imagen ampliada del proyecto';
        imageCaption.textContent = button.dataset.caption || '';
        lightbox.showModal();
      });
    });
    lightbox.querySelector('.dialog-close')?.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => {
      image.removeAttribute('src');
      lightboxTrigger?.focus();
    });
  }

  const videoDialog = document.getElementById('video-dialog');
  const video = document.getElementById('case-video');
  if (videoDialog && video) {
    let videoTrigger = null;
    const open = event => {
      videoTrigger = event.currentTarget;
      videoDialog.showModal();
      video.play().catch(() => {});
    };
    document.getElementById('open-video')?.addEventListener('click', open);
    document.getElementById('open-video-poster')?.addEventListener('click', open);
    videoDialog.querySelector('.dialog-close')?.addEventListener('click', () => videoDialog.close());
    videoDialog.addEventListener('click', event => { if (event.target === videoDialog) videoDialog.close(); });
    videoDialog.addEventListener('close', () => {
      video.pause();
      video.currentTime = 0;
      videoTrigger?.focus();
    });
  }
})();
