'use strict';
(()=>{
  const modal=document.getElementById('viewer');
  const img=document.getElementById('viewer-img');
  const caption=document.getElementById('viewer-caption');
  const counter=modal.querySelector('.viewer-count');
  const buttons=[...document.querySelectorAll('button.zoom')];
  const close=modal.querySelector('.close');
  let index=0;
  let origin=null;
  function present(i){
    index=(i+buttons.length)%buttons.length;
    const b=buttons[index];const full=b.getAttribute('data-full');
    img.src=full;img.alt=b.querySelector('img')?.alt||'Pieza visual ampliada';
    caption.textContent=b.getAttribute('data-caption')||'';
    counter.textContent=`${index+1} / ${buttons.length}`;
  }
  buttons.forEach((button,i)=>button.addEventListener('click',()=>{
    origin=button;present(i);modal.showModal();close.focus();
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
