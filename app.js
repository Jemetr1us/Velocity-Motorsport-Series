/* ═════════ TOP BAR GROUPS ═════════
   Home stays on its own; the other links collapse into Season / Teams & Drivers / League dropdowns.
   The original <a data-v> links are moved (not recreated), so routing + active highlighting keep working.
   Runs after the page has fully loaded and never throws, so it can't break the rest of the site. */
(function(){
  function init(){
    const nav=document.querySelector('header nav'); if(!nav) return;
    if(nav.dataset.vxGrouped) return; nav.dataset.vxGrouped='1';
    const GROUPS=[
      {label:'Season',views:['standings','calendar','results','records']},
      {label:'Teams & Drivers',views:['teams','transfers']},
      {label:'League',views:['news','about','join','archive']}
    ];
    const st=document.createElement('style'); st.id='vx-navdd-css'; st.textContent=
     'header nav{overflow:visible!important}'+
     '.vx-ddbtn{background:none;border:0;color:inherit;font:inherit;text-transform:inherit;letter-spacing:inherit;cursor:pointer;padding:0;margin:0 0 0 clamp(12px,1.8vw,26px)!important;white-space:nowrap;flex:0 0 auto;display:inline-flex;align-items:center;gap:5px;opacity:.85;font-size:clamp(10px,.95vw,13px)!important;font-weight:inherit}'+
     '.vx-ddbtn:hover,.vx-ddbtn.open,.vx-ddbtn.on{opacity:1;color:#fff}'+
     '.vx-ddbtn.on{box-shadow:0 2px 0 #e8186d}'+
     '.vx-ddbtn svg{width:10px;height:10px;transition:transform .15s}.vx-ddbtn.open svg{transform:rotate(180deg)}'+
     'nav.vx-navpanel{position:fixed;z-index:9500;display:none;flex-direction:column;min-width:190px;background:#0b0b0f;border:1px solid #2a2a35;border-top:2px solid #e8186d;box-shadow:0 14px 40px rgba(0,0,0,.6);padding:6px 0}'+
     'nav.vx-navpanel.open{display:flex}'+
     'nav.vx-navpanel a{display:block!important;margin:0!important;padding:11px 18px!important;color:#cfcfd8!important;font:800 12px Arial,sans-serif!important;letter-spacing:1.2px!important;text-transform:uppercase;text-decoration:none;white-space:nowrap;border:0!important;border-left:3px solid transparent!important;background:none}'+
     'nav.vx-navpanel a:hover{background:#15151c;color:#fff!important}'+
     'nav.vx-navpanel a.on{color:#fff!important;border-left-color:#e8186d!important;background:#15151c}';
    document.head.appendChild(st);

    const home=nav.querySelector('a[data-v="home"]');
    const made=[];
    GROUPS.forEach(g=>{
      const ls=g.views.map(v=>nav.querySelector('a[data-v="'+v+'"]')).filter(Boolean); if(!ls.length) return;
      const btn=document.createElement('button'); btn.type='button'; btn.className='vx-ddbtn'; btn.setAttribute('aria-haspopup','true'); btn.setAttribute('aria-expanded','false');
      btn.innerHTML=g.label.replace(/&/g,'&amp;')+'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const panel=document.createElement('nav'); panel.className='vx-navpanel'; panel.setAttribute('aria-label',g.label);
      ls.forEach(a=>panel.appendChild(a));
      document.body.appendChild(panel);
      made.push({btn,panel});
    });
    let ref=home||null;
    made.forEach(m=>{ if(ref) ref.after(m.btn); else nav.prepend(m.btn); ref=m.btn; });

    let hideT=0;
    const closeAll=()=>made.forEach(m=>{ m.panel.classList.remove('open'); m.btn.classList.remove('open'); m.btn.setAttribute('aria-expanded','false'); });
    function openOne(m){
      clearTimeout(hideT); closeAll();
      const r=m.btn.getBoundingClientRect();
      m.panel.classList.add('open'); m.btn.classList.add('open'); m.btn.setAttribute('aria-expanded','true');
      const w=m.panel.offsetWidth;
      m.panel.style.top=Math.round(r.bottom+6)+'px';
      m.panel.style.left=Math.max(8,Math.min(r.left,innerWidth-w-8))+'px';
    }
    const later=()=>{ clearTimeout(hideT); hideT=setTimeout(closeAll,220); };
    const mark=()=>made.forEach(m=>m.btn.classList.toggle('on',!!m.panel.querySelector('a.on')));

    made.forEach(m=>{
      m.btn.addEventListener('click',e=>{ e.stopPropagation(); m.panel.classList.contains('open')?closeAll():openOne(m); });
      if(window.matchMedia&&matchMedia('(hover:hover)').matches){
        m.btn.addEventListener('mouseenter',()=>openOne(m)); m.btn.addEventListener('mouseleave',later);
        m.panel.addEventListener('mouseenter',()=>clearTimeout(hideT)); m.panel.addEventListener('mouseleave',later);
      }
      m.panel.addEventListener('click',e=>{
        closeAll();
        /* safety net: if moving the links broke the site's own click routing, navigate ourselves */
        const a=e.target.closest('a[data-v]'); if(!a) return;
        setTimeout(()=>{
          try{ if(!a.classList.contains('on') && typeof go==='function') go(a.dataset.v); }catch(_){}
          mark();
        },60);
      });
    });
    document.addEventListener('click',e=>{ if(!e.target.closest('.vx-navpanel,.vx-ddbtn')) closeAll(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeAll(); });
    addEventListener('resize',closeAll); addEventListener('scroll',closeAll,{passive:true});

    /* highlight the group button that holds the current page */
    try{
      if(typeof go==='function'){
        const _go=go;
        go=function(){ const r=_go.apply(this,arguments); mark(); return r; };
      }
    }catch(_){ /* go is const/readonly: rely on the fallbacks below */ }
    addEventListener('hashchange',()=>setTimeout(mark,0));
    setInterval(mark,500);
    mark();
  }

  function safeInit(){ try{ init(); }catch(err){ console.error('[VMS nav groups]',err); } }
  /* wait until every other script has run, so the site's own nav wiring and go() exist first */
  if(document.readyState==='complete') setTimeout(safeInit,0);
  else addEventListener('load',()=>setTimeout(safeInit,0));
})();
