'use strict';
(()=>{
  const modal=document.getElementById('viewer');
  const img=document.getElementById('viewer-img');
  const caption=document.getElementById('viewer-caption');
  const counter=modal.querySelector('.viewer-count');
  const buttons=[...document.querySelectorAll('button.zoom')];
  const close=modal.querySelector('.close');
  // Each content series stays together in the viewer.
  const groupSelector='.experience-one, .food-live, .campaign-section, .menu-section, .space-section, .gallery-section';
  const groupOf=button=>button.closest(groupSelector)||button.closest('section');
  let gallery=buttons;
  let index=0;
  let origin=null;
  function present(i){
    if(!gallery.length)return;
    index=(i+gallery.length)%gallery.length;
    const b=gallery[index];
    const full=b.getAttribute('data-full');
    img.src=full;
    img.alt=b.querySelector('img')?.alt||'Pieza visual ampliada';
    caption.textContent=b.getAttribute('data-caption')||img.alt;
    counter.textContent=`${index+1} / ${gallery.length}`;
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{
    origin=button;
    const group=groupOf(button);
    gallery=buttons.filter(item=>groupOf(item)===group);
    present(gallery.indexOf(button));
    modal.showModal();
    close.focus();
  }));
  modal.querySelector('.previous').addEventListener('click',()=>present(index-1));
  modal.querySelector('.next').addEventListener('click',()=>present(index+1));
  close.addEventListener('click',()=>modal.close());
  modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
  modal.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();present(index-1)}
    if(event.key==='ArrowRight'){event.preventDefault();present(index+1)}
  });
  modal.addEventListener('close',()=>{img.removeAttribute('src');origin?.focus()});
})();
