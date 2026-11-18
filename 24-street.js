(()=>{
  'use strict';
  document.body.classList.add('js-on');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver(entries => {
      for (const item of entries) if(item.isIntersecting){ item.target.classList.add('in');observer.unobserve(item.target); }
    }, {threshold:0.08});
    reveal.forEach(node=>observer.observe(node));
  } else reveal.forEach(node=>node.classList.add('in'));

  const progress=document.querySelector('.scroll-progress');
  let pending=false;
  function updateProgress(){
    const range=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(range>0?Math.min(100,window.scrollY/range*100):0)+'%';
    pending=false;
  }
  window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateProgress);}}, {passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  updateProgress();

  const nav=document.querySelector('#nav-mobile');
  const toggle=document.querySelector('.nav-toggle');
  function closeNav(){nav.hidden=true;toggle.textContent='☰';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú');}
  toggle.addEventListener('click',()=>{
    if(!nav.hidden){closeNav();return;}
    nav.hidden=false;toggle.textContent='×';toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Cerrar menú');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNav));
  window.addEventListener('keydown',event=>{if(event.key==='Escape'&&!nav.hidden){closeNav();toggle.focus();}});

  // Semantically mark the current section while the reader scrolls.
  const sections=Array.from(document.querySelectorAll('main section[id]'));
  const jumpLinks=Array.from(document.querySelectorAll('.case-jump a'));
  if('IntersectionObserver' in window){
    const locationObserver=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting);
      if(!visible.length)return;
      visible.sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      const current='#'+visible[0].target.id;
      for(const link of jumpLinks){
        const active=link.getAttribute('href')===current;
        link.classList.toggle('is-active',active);
        if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
      }
    },{rootMargin:'-14% 0px -60% 0px',threshold:[0,.15,.35,.5]});
    sections.forEach(section=>locationObserver.observe(section));
  }

  const dialog=document.getElementById('image-lightbox');
  const large=dialog.querySelector('img');
  const caption=dialog.querySelector('.lightbox-caption');
  const counter=dialog.querySelector('.lightbox-count');
  // Keep each lightbox journey inside its own editorial section.
  const cards=Array.from(document.querySelectorAll('.enlarge'));
  let gallery=cards;
  let active=0;let trigger=null;
  function showItem(index){
    if (!gallery.length) return;
    active=(index+gallery.length)%gallery.length;
    const card=gallery[active];
    const thumb=card.querySelector('img');
    large.src=card.dataset.full||thumb.currentSrc||thumb.src;
    large.alt=thumb.alt;
    caption.textContent=card.dataset.caption||thumb.alt;
    counter.textContent=`${String(active+1).padStart(2,'0')} / ${String(gallery.length).padStart(2,'0')}`;
  }
  cards.forEach(card=>card.addEventListener('click',()=>{
    trigger=card;
    const section=card.closest('section');
    gallery=cards.filter(item=>item.closest('section')===section);
    showItem(gallery.indexOf(card));
    dialog.showModal();
  }));
  dialog.querySelector('.close-lightbox').addEventListener('click',()=>dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click',()=>showItem(active-1));
  dialog.querySelector('.lightbox-next').addEventListener('click',()=>showItem(active+1));
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();showItem(active-1);}
    if(event.key==='ArrowRight'){event.preventDefault();showItem(active+1);}
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{large.removeAttribute('src');if(trigger)trigger.focus();});

  const video=document.getElementById('barbie-video');
  const play=document.querySelector('.video-toggle');
  function syncVideo(){const paused=video.paused;play.textContent=paused?'REPRODUCIR ▶':'PAUSAR Ⅱ';play.setAttribute('aria-label',paused?'Reproducir video de campaña':'Pausar video de campaña');}
  play.addEventListener('click',async()=>{
    if(!video.paused){video.pause();return;}
    try{await video.play();}catch{syncVideo();}
  });
  video.addEventListener('play',syncVideo);video.addEventListener('pause',syncVideo);
  if('IntersectionObserver' in window){
    const videoObserver=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting&&!video.paused)video.pause();
    },{threshold:0.05});videoObserver.observe(video);
  }
  syncVideo();
})();
