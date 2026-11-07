/* ═══════════════════════════════════════════════════════════════════════════
   VMS BETS — play-money sportsbook for the VMS F1 / F2 / F3 site
   • Fully separate: own file, own storage, own overlay. app.js is NOT modified.
   • Load it AFTER app.js:   <script src="betting.js"></script>
   • Play money only. Nothing real is ever wagered.
   Markets (next race weekend): Race Winner · Podium · Top 6 · Fastest Lap · Pole
                                Teammate / Top head-to-heads · Total DNFs O/U
   Bets: singles + parlays, American odds, bankroll, daily bonus, rebuy,
         bet history, stats, auto-settlement from the site's real race results.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(typeof D==='undefined'||typeof real==='undefined'||typeof nextRace!=='function'||typeof canon!=='function'){
  console.warn('[VMS Bets] load betting.js AFTER app.js'); return;
}

/* ───────── constants / helpers ───────── */
const KEY='vms-bets-v1', START=1000, DAILY=250, REBUY=500, NY='America/New_York', IT=6000;
const DNF_RE=/DNF|DSq|DSQ|DNS|Retired|Mechanical|Not Classified/i;
const SER=['f1','f2','f3'];
const $=id=>document.getElementById(id);
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r2=n=>Math.round(n*100)/100;
const money=n=>(n<0?'-':'')+'$'+Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtAm=a=>a>0?'+'+a:String(a);
const decOf=a=>a>0?1+a/100:1+100/-a;
const amOfDec=d=>d>=2?Math.round((d-1)*100):-Math.round(100/Math.max(.0001,d-1));
function toAm(dec){
  dec=Math.min(101,Math.max(1.05,dec));
  let am=dec>=2?(dec-1)*100:-100/(dec-1);
  const step=Math.abs(am)>=1000?50:5; am=Math.round(am/step)*step;
  if(am>-100&&am<100) am=am<0?-100:100;
  return am;
}
const amFromP=(p,ov)=>toAm(1/(Math.min(.97,Math.max(.004,p))*ov));
const day=()=>new Date().toLocaleDateString('en-CA');
const fdate=t=>new Date(t).toLocaleString(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
const FUL=s=>(typeof FULL!=='undefined'&&FULL[s])||('VMS '+s.toUpperCase());

/* ───────── persistent state ───────── */
const blank=()=>({v:1,bal:START,dep:START,bets:[],hist:[{t:Date.now(),b:START}],bonusDay:''});
function load(){ try{ const j=JSON.parse(localStorage.getItem(KEY)); if(j&&typeof j.bal==='number') return Object.assign(blank(),j); }catch(e){} return blank(); }
let S=load();
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function setBal(d){ S.bal=r2(S.bal+d); S.hist.push({t:Date.now(),b:S.bal}); if(S.hist.length>500) S.hist.splice(0,S.hist.length-500); }
const openBets=()=>S.bets.filter(b=>b.status==='open');

/* ───────── race clock (league times are US Eastern) ───────── */
function nyToUtc(y,mo,d,h,mi){
  for(const off of [4,5]){
    const t=Date.UTC(y,mo,d,h+off,mi||0);
    const p=new Intl.DateTimeFormat('en-US',{timeZone:NY,hour:'numeric',hour12:false,day:'numeric'}).formatToParts(new Date(t));
    const hh=+p.find(x=>x.type==='hour').value%24, dd=+p.find(x=>x.type==='day').value;
    if(hh===h&&dd===d) return t;
  }
  return Date.UTC(y,mo,d,h+5,mi||0);
}
function closeAt(s,race){
  const sd=D.sessions&&D.sessions[s]; if(!sd) return Infinity;
  const m=String(sd.time).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i); if(!m) return Infinity;
  let h=+m[1]%12; if(/pm/i.test(m[3])) h+=12;
  const ds=/sun/i.test(sd.day)?(race.sunDate||race.satDate):race.satDate;
  const p=String(ds||'').trim().split(' '), mo=MON[p[0]], d=parseInt(p[1]);
  if(mo===undefined||isNaN(d)) return Infinity;
  return nyToUtc(2026,mo,d,h,+m[2]);
}
function raceFor(s){ const r=nextRace(); return r&&(r.series||[]).includes(s)?r:null; }

/* ───────── odds model ───────── */
function rng(seed){ let a=seed>>>0; return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function hash(str){ let h=2166136261; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const gum=r=>-Math.log(-Math.log(Math.min(1-1e-12,Math.max(1e-12,r()))));

function pool(s){
  const seen=new Set(), out=[];
  (D.info[s]||[]).forEach(t=>(t.drivers||[]).forEach(dr=>{
    if(!dr||!dr.name||dr.name==='—') return; const c=canon(s,dr.name); if(seen.has(c)) return; seen.add(c);
    out.push({name:dr.name,c,team:t.name});
  }));
  if(out.length<6){
    D.standings[s].drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts).slice(0,16).forEach(d=>{
      const c=canon(s,d.name); if(seen.has(c)) return; seen.add(c); out.push({name:d.name,c,team:d.team||''});
    });
  }
  return out;
}
function dStats(s,c){
  const rounds=roundsWithResults(s), n=Math.max(1,rounds.length);
  const se=D.standings[s].drivers.find(d=>canon(s,d.name)===c);
  let races=0,dnfs=0; const last=[];
  rounds.forEach(r=>{
    const row=(D.results[rkey(r,s)]||[]).find(x=>canon(s,x.name)===c);
    if(row){ races++; if(DNF_RE.test(row.note||'')) dnfs++; }
    last.push(row?(+row.pts||0):0);
  });
  const rec=last.slice(-3), recent=rec.length?rec.reduce((a,b)=>a+b,0)/rec.length:0;
  const ppr=(se?+se.pts||0:0)/n;
  return {rating:.55*ppr+.45*recent+.8, dnfp:Math.min(.45,(dnfs+.6)/(races+4))};
}

const LEGS={}, memo={};
function board(s,race){
  const rk=rkey(race,s), key=rk+':'+roundsWithResults(s).length;
  if(memo[rk]&&memo[rk].key===key) return memo[rk];
  const drv=pool(s); drv.forEach(d=>{ const st=dStats(s,d.c); d.rating=st.rating; d.lw=1.7*Math.log(st.rating); d.dnfp=st.dnfp; });
  const N=drv.length, B={key,rk,s,race,drv,markets:[]};
  memo[rk]=B; if(N<4) return B;

  const byR=drv.map((d,i)=>i).sort((a,b)=>drv[b].lw-drv[a].lw);
  /* head-to-head pairs: teammates + top-rated matchups */
  const pairs=[], used=new Set(), pk=(a,b)=>a<b?a+'_'+b:b+'_'+a;
  const teams={}; byR.forEach(i=>{ (teams[drv[i].team]=teams[drv[i].team]||[]).push(i); });
  Object.keys(teams).filter(t=>teams[t].length>=2).map(t=>teams[t]).sort((x,y)=>(drv[y[0]].lw+drv[y[1]].lw)-(drv[x[0]].lw+drv[x[1]].lw)).slice(0,8)
    .forEach(t=>{ pairs.push({a:t[0],b:t[1],kind:'team'}); used.add(pk(t[0],t[1])); });
  for(let k=0;k+1<byR.length&&pairs.filter(p=>p.kind==='top').length<6;k+=2){
    const a=byR[k], b=byR[k+1]; if(used.has(pk(a,b))) continue; pairs.push({a,b,kind:'top'}); used.add(pk(a,b));
  }
  /* Monte-Carlo (seeded so the lines don't jump around on refresh) */
  const R=rng(hash(rk+'|'+N)), win=new Float64Array(N), pod=new Float64Array(N), t6=new Float64Array(N), fl=new Float64Array(N), pole=new Float64Array(N);
  const wa=new Float64Array(pairs.length), wb=new Float64Array(pairs.length), dc=new Array(N+1).fill(0);
  const sc=new Float64Array(N), dn=new Array(N), idx=drv.map((d,i)=>i);
  for(let it=0;it<IT;it++){
    let nd=0;
    for(let i=0;i<N;i++){ dn[i]=R()<drv[i].dnfp; if(dn[i]){ nd++; sc[i]=-1e9+R(); } else sc[i]=drv[i].lw+gum(R); }
    dc[nd]++;
    const ord=idx.slice().sort((a,b)=>sc[b]-sc[a]);
    for(let k=0;k<6;k++){ const i=ord[k]; if(dn[i]) break; if(k===0) win[i]++; if(k<3) pod[i]++; t6[i]++; }
    let bf=-1,bfv=-1e9,bp=-1,bpv=-1e9;
    for(let i=0;i<N;i++){
      if(!dn[i]){ const v=.8*drv[i].lw+gum(R); if(v>bfv){ bfv=v; bf=i; } }
      const q=1.15*drv[i].lw+gum(R); if(q>bpv){ bpv=q; bp=i; }
    }
    if(bf>=0) fl[bf]++; pole[bp]++;
    for(let k=0;k<pairs.length;k++){
      const a=pairs[k].a, b=pairs[k].b;
      if(dn[a]&&dn[b]) continue;
      if(dn[b]||(!dn[a]&&sc[a]>sc[b])) wa[k]++; else wb[k]++;
    }
  }
  const L=(kind,mid,title,oid,label,sub,am,x)=>{
    const l=Object.assign({id:rk+'|'+mid+'|'+oid,mk:kind,mid,mkTitle:title,s,rk,rnd:race.rnd,raceName:race.name,label,sub,am,dec:decOf(am),st:'open'},x);
    LEGS[l.id]=l; return l;
  };
  const P=(arr,i)=>Math.max(.003,arr[i]/IT);
  const lm=(kind,title,note,arr,ov)=>({id:kind,title,note,type:'list',
    outs:byR.map(i=>L(kind,kind,title,String(i),drv[i].name,drv[i].team,amFromP(P(arr,i),ov),{pick:drv[i].c,drivers:[drv[i].c]}))});
  B.markets.push(lm('winner','Race Winner','Who takes P1',win,1.15));
  B.markets.push(lm('podium','Podium Finish','Top 3 · classified',pod,1.10));
  B.markets.push(lm('top6','Top 6 Finish','Top 6 · classified',t6,1.08));
  B.markets.push(lm('fl','Fastest Lap','Needs the fastest-lap flag in results · else void',fl,1.18));
  B.markets.push(lm('pole','Pole Position','Needs the pole flag in results · else void',pole,1.18));
  const pm=(kind,title,note,ids)=>{
    if(!ids.length) return;
    B.markets.push({id:kind,title,note,type:'pairs',rows:ids.map(k=>{
      const p=pairs[k], pa=wa[k]/Math.max(1,wa[k]+wb[k]), ov=1.048, mid='h2h'+k;
      const A=drv[p.a], Bd=drv[p.b], ds=[A.c,Bd.c];
      return {title:A.name+' vs '+Bd.name,outs:[
        L('h2h',mid,'Head-to-Head',A.c,A.name,'vs '+Bd.name,amFromP(pa,ov),{pick:A.c,opp:Bd.c,drivers:ds}),
        L('h2h',mid,'Head-to-Head',Bd.c,Bd.name,'vs '+A.name,amFromP(1-pa,ov),{pick:Bd.c,opp:A.c,drivers:ds})]};
    })});
  };
  pm('team','Teammate Battles','Higher classified finish wins · DNF loses to a finisher · both out = void',pairs.map((p,k)=>p.kind==='team'?k:-1).filter(k=>k>=0));
  pm('top','Top Driver Matchups','Same rules as teammate battles',pairs.map((p,k)=>p.kind==='top'?k:-1).filter(k=>k>=0));
  if(N>=8){
    let cum=0,m=0; for(m=0;m<=N;m++){ cum+=dc[m]; if(cum/IT>=.5) break; }
    const line=m+.5, pu=cum/IT;
    B.markets.push({id:'dnf',title:'Total DNFs',note:'Counts DNF / DNS / DSQ rows in the results',type:'pairs',rows:[{title:'Retirements in the race',outs:[
      L('dnf','dnf','Total DNFs','o','Over '+line,'',amFromP(1-pu,1.048),{side:'over',line,drivers:[]}),
      L('dnf','dnf','Total DNFs','u','Under '+line,'',amFromP(pu,1.048),{side:'under',line,drivers:[]})]}]});
  }
  return B;
}

/* practice results (random, from the same model) */
const gm=()=>gum(Math.random);
function simRows(B){
  const sc=B.drv.map(d=>{ const dn=Math.random()<d.dnfp; return {d,dn,s:dn?-1e9+Math.random():d.lw+gm()}; }).sort((x,y)=>y.s-x.s);
  let fl=null,flv=-1e9,po=null,pov=-1e9;
  sc.forEach(x=>{ if(!x.dn){ const v=.8*x.d.lw+gm(); if(v>flv){ flv=v; fl=x; } } const q=1.15*x.d.lw+gm(); if(q>pov){ pov=q; po=x; } });
  return sc.map((x,i)=>({pos:i+1,name:x.d.name,team:x.d.team,pts:0,fl:x===fl,pole:x===po,note:x.dn?'DNF':''}));
}

/* ───────── settlement ───────── */
function legOutcome(l,rows){
  const m={}; rows.forEach(r=>{ const c=canon(l.s,r.name); if(!m[c]) m[c]=r; });
  const cl=r=>r&&!DNF_RE.test(r.note||'')&&+r.pos>0?+r.pos:null;
  const me=m[l.pick];
  switch(l.mk){
    case 'winner': return !me?'void':(cl(me)===1?'won':'lost');
    case 'podium': return !me?'void':(cl(me)&&cl(me)<=3?'won':'lost');
    case 'top6':   return !me?'void':(cl(me)&&cl(me)<=6?'won':'lost');
    case 'fl':     return (!me||!rows.some(x=>x.fl))?'void':(me.fl?'won':'lost');
    case 'pole':   return (!me||!rows.some(x=>x.pole))?'void':(me.pole?'won':'lost');
    case 'h2h': {
      const op=m[l.opp]; if(!me||!op) return 'void';
      const a=cl(me), b=cl(op); if(!a&&!b) return 'void'; if(a&&b&&a===b) return 'void';
      return (a&&(!b||a<b))?'won':'lost';
    }
    case 'dnf': { const n=rows.filter(x=>DNF_RE.test(x.note||'')).length; return (l.side==='over'?n>l.line:n<l.line)?'won':'lost'; }
  }
  return 'void';
}
function resolve(b,out){
  if(b.status!=='open') return false;
  const lost=b.legs.some(l=>l.st==='lost');
  if(!lost&&b.legs.some(l=>l.st==='open')) return false;
  const live=b.legs.filter(l=>l.st==='won');
  if(lost){ b.status='lost'; b.payout=0; }
  else if(!live.length){ b.status='void'; b.payout=b.stake; setBal(b.stake); }
  else { b.dec=live.reduce((a,l)=>a*l.dec,1); b.payout=r2(b.stake*b.dec); b.status='won'; setBal(b.payout); }
  b.settledAt=Date.now(); out.push(b); return true;
}
function settle(src){ /* src(rk) -> rows|null ; default = real results from the site */
  const done=[];
  S.bets.forEach(b=>{
    if(b.status!=='open') return;
    b.legs.forEach(l=>{
      if(l.st!=='open') return;
      const rows=src?src(l.rk):(D.results[l.rk]&&D.results[l.rk].length?D.results[l.rk]:null);
      if(rows){ l.st=legOutcome(l,rows); l.src=src?'sim':'result'; }
    });
    resolve(b,done);
  });
  if(done.length){
    save(); const w=done.filter(b=>b.status==='won');
    toast(done.length+' bet'+(done.length>1?'s':'')+' settled'+(w.length?' · '+w.length+' won '+money(w.reduce((a,b)=>a+b.payout-b.stake,0)):'')); refresh();
  }
  return done.length;
}

/* ───────── UI state ───────── */
const ui={tab:'markets',s:'f1',mode:'singles'};
const slip={legs:[],stakes:{},p:''};

const css=document.createElement('style'); css.id='vb-css'; css.textContent=
'#vb-fab{position:fixed;right:14px;bottom:14px;z-index:9000;background:linear-gradient(90deg,#e8186d,#ff6b00);color:#fff;border:0;padding:12px 16px;font:900 12px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer;box-shadow:0 6px 24px rgba(232,24,109,.35)}#vb-fab:hover{filter:brightness(1.1)}'+
'#vb-fab i{font-style:normal;background:#fff;color:#e8186d;border-radius:10px;padding:1px 7px;margin-left:8px}'+
'#vb-ov{position:fixed;inset:0;z-index:99995;background:#07070a;color:#fff;font-family:Arial,sans-serif;display:none;flex-direction:column}#vb-ov.open{display:flex}#vb-ov *{box-sizing:border-box}'+
'.vb-head{display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap;padding:12px 18px;border-bottom:1px solid #23232c;background:#0b0b0f}'+
'.vb-logo{font:900 18px Arial;letter-spacing:2px}.vb-logo span{color:#e8186d}.vb-logo small{display:block;font:700 9px Arial;letter-spacing:2px;color:#777;margin-top:2px}'+
'.vb-bal{margin-left:auto;text-align:right}.vb-bal b{display:block;font:900 22px Arial;color:#4ade80;font-variant-numeric:tabular-nums}.vb-bal small{font:700 10px Arial;color:#888;letter-spacing:1px;text-transform:uppercase}'+
'.vb-btn{background:transparent;border:1px solid #444;color:#ddd;padding:8px 12px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vb-btn:hover:not(:disabled){border-color:#e8186d;color:#fff}.vb-btn:disabled{opacity:.4;cursor:default}'+
'.vb-btn.hot{background:linear-gradient(90deg,#e8186d,#ff6b00);border-color:transparent;color:#fff}.vb-x{font:900 28px Arial;color:#888;background:none;border:0;cursor:pointer;padding:0 4px}.vb-x:hover{color:#fff}'+
'.vb-body{flex:1;display:grid;grid-template-columns:minmax(0,1fr) 350px;min-height:0}.vb-main{overflow:auto;padding:18px 22px 100px}'+
'.vb-slip{border-left:1px solid #23232c;overflow:auto;background:#0b0b0f;padding:0 16px 18px}'+
'.vb-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}.vb-tabs button{background:transparent;border:1px solid #333;color:#bbb;padding:8px 14px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vb-tabs button.on{background:#e8186d;border-color:#e8186d;color:#fff}.vb-tabs.sm button{padding:6px 11px;font-size:10px}'+
'.vb-race{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;background:#101015;border:1px solid #23232c;border-left:4px solid #e8186d;padding:12px 16px;margin-bottom:14px}.vb-race b{font:900 16px Arial}.vb-race span{font:700 12px Arial;color:#999}.vb-race .cd{margin-left:auto;color:#ffd34e;font-weight:900}.vb-race .cd.closed{color:#ef4444}'+
'.vb-mk{background:#0e0e13;border:1px solid #1e1e27;margin-bottom:10px}.vb-mk summary{cursor:pointer;padding:12px 14px;font:900 13px Arial;letter-spacing:1px;text-transform:uppercase;list-style:none;display:flex;gap:10px;align-items:baseline}.vb-mk summary::-webkit-details-marker{display:none}.vb-mk summary:before{content:"▸";color:#e8186d}.vb-mk[open] summary:before{content:"▾"}.vb-mk summary small{font:600 11px Arial;color:#777;text-transform:none;letter-spacing:0}'+
'.vb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;padding:4px 14px 14px}.vb-prow{padding:0 14px 12px}.vb-prow h5{margin:0 0 6px;font:700 12px Arial;color:#aaa}.vb-prow .vb-grid{padding:0;grid-template-columns:1fr 1fr}'+
'.vb-sel{display:flex;justify-content:space-between;align-items:center;gap:8px;background:#15151c;border:1px solid #262630;color:#fff;padding:10px 12px;cursor:pointer;font:700 13px Arial;text-align:left}.vb-sel:hover:not(:disabled){border-color:#e8186d}.vb-sel:disabled{opacity:.45;cursor:not-allowed}'+
'.vb-sel .n{min-width:0}.vb-sel .n b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vb-sel .n small{display:block;font:600 10px Arial;color:#777;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}.vb-sel .o{font:900 14px Arial;color:#ffd34e;font-variant-numeric:tabular-nums}.vb-sel.on{background:#e8186d;border-color:#e8186d}.vb-sel.on .o,.vb-sel.on .n small{color:#fff}'+
'.vb-empty{color:#888;font:700 13px Arial;padding:26px 6px;text-align:center;line-height:1.5}'+
'.vb-sliphd{display:flex;align-items:center;gap:10px;padding:14px 0;font:900 14px Arial;letter-spacing:1px;text-transform:uppercase;position:sticky;top:0;background:#0b0b0f;z-index:2;cursor:pointer}.vb-sliphd .cnt{background:#e8186d;border-radius:10px;padding:1px 9px;font-size:12px}'+
'.vb-leg{position:relative;background:#14141b;border:1px solid #23232c;padding:10px 30px 10px 12px;margin-bottom:8px}.vb-leg .t{font:800 13px Arial;display:flex;justify-content:space-between;gap:8px}.vb-leg .t i{font-style:normal;color:#ffd34e}.vb-leg small{display:block;color:#777;font:600 11px Arial;margin-top:3px}.vb-leg .rm{position:absolute;top:4px;right:6px;background:none;border:0;color:#777;font:900 18px Arial;cursor:pointer}.vb-leg .rm:hover{color:#fff}'+
'.vb-in{width:100%;margin-top:8px;background:#0b0b0f;border:1px solid #333;color:#fff;padding:9px 10px;font:800 14px Arial;outline:0}.vb-in:focus{border-color:#e8186d}'+
'.vb-chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}.vb-chips button{background:#14141b;border:1px solid #2c2c36;color:#ccc;padding:6px 10px;font:800 11px Arial;cursor:pointer}.vb-chips button:hover{border-color:#e8186d;color:#fff}'+
'.vb-sum{border-top:1px solid #23232c;margin-top:10px;padding-top:10px;font:700 13px Arial;color:#bbb}.vb-sum div{display:flex;justify-content:space-between;margin:5px 0}.vb-sum b{color:#fff;font-variant-numeric:tabular-nums}.vb-sum .g{color:#4ade80}'+
'.vb-warn{background:#3a1d0d;border-left:3px solid #ff6b00;padding:8px 10px;margin:8px 0;font:700 12px Arial;color:#ffb27a}'+
'.vb-place{width:100%;margin-top:12px;padding:14px;background:linear-gradient(90deg,#e8186d,#ff6b00);color:#fff;border:0;font:900 13px Arial;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}.vb-place:hover{filter:brightness(1.1)}'+
'.vb-bet{background:#101015;border:1px solid #23232c;border-left:4px solid #ffd34e;margin-bottom:10px;padding:12px 14px}.vb-bet.won{border-left-color:#22c55e}.vb-bet.lost{border-left-color:#ef4444}.vb-bet.void{border-left-color:#777}'+
'.vb-bet .h{display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 14px;margin-bottom:8px}.vb-bet .h b{font:900 13px Arial;text-transform:uppercase;letter-spacing:.5px}.vb-bet .h span{font:700 12px Arial;color:#999}'+
'.vb-pill{font:900 10px Arial;letter-spacing:1px;padding:3px 8px;text-transform:uppercase;background:#333;color:#ddd;margin-left:8px}.vb-pill.won{background:#166534;color:#bbf7d0}.vb-pill.lost{background:#7f1d1d;color:#fecaca}.vb-pill.open{background:#5c4a00;color:#ffd34e}'+
'.vb-lg{display:flex;gap:8px;font:700 12px Arial;color:#ccc;margin:4px 0}.vb-lg .ic{width:16px;text-align:center;font-weight:900}.vb-lg.won .ic{color:#22c55e}.vb-lg.lost .ic{color:#ef4444}.vb-lg.open .ic{color:#ffd34e}.vb-lg.void .ic{color:#888}.vb-lg small{display:block;color:#777;font-weight:600;font-size:11px}'+
'.vb-sim{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;background:#101015;border:1px dashed #444;padding:10px 14px;margin-bottom:8px;font:700 12px Arial;color:#bbb}.vb-sim .btn{margin-left:auto}'+
'.vb-stats{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-bottom:18px}.vb-stat{background:#101015;border:1px solid #23232c;padding:14px}.vb-stat b{display:block;font:900 22px Arial;font-variant-numeric:tabular-nums}.vb-stat span{font:700 10px Arial;color:#888;letter-spacing:1.5px;text-transform:uppercase}'+
'.vb-ch{background:#101015;border:1px solid #23232c;padding:12px}.vb-ch svg{width:100%;height:auto;display:block}.vb-ch h4{margin:0 0 6px;font:800 11px Arial;letter-spacing:2px;color:#888;text-transform:uppercase}'+
'.vb-note{color:#666;font:600 11px Arial;margin-top:18px;line-height:1.5}'+
'#vb-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:99999;background:#14141b;border:1px solid #e8186d;color:#fff;padding:11px 18px;font:800 12px Arial;letter-spacing:.5px;display:none;max-width:90vw;text-align:center}'+
'@media(max-width:900px){.vb-body{grid-template-columns:1fr}.vb-slip{position:fixed;left:0;right:0;bottom:0;max-height:72vh;border-left:0;border-top:2px solid #e8186d;transform:translateY(calc(100% - 52px));transition:transform .25s;z-index:3}.vb-slip.open{transform:none}.vb-main{padding:14px 12px 90px}.vb-grid{grid-template-columns:1fr 1fr}.vb-bal{margin-left:0}}'+
'@media(max-width:520px){.vb-grid{grid-template-columns:1fr}}';
document.head.appendChild(css);

const fab=document.createElement('button'); fab.id='vb-fab'; fab.type='button'; document.body.appendChild(fab);
const ov=document.createElement('div'); ov.id='vb-ov';
ov.innerHTML='<div class="vb-head" id="vb-hd"></div><div class="vb-body"><div class="vb-main" id="vb-main"></div><aside class="vb-slip" id="vb-slip"></aside></div>';
document.body.appendChild(ov);
const tst=document.createElement('div'); tst.id='vb-toast'; document.body.appendChild(tst);
let tT=0; function toast(m){ tst.textContent=m; tst.style.display='block'; clearTimeout(tT); tT=setTimeout(()=>tst.style.display='none',3600); }

/* ───────── renderers ───────── */
function renderHead(){
  const claimed=S.bonusDay===day(), broke=S.bal<5&&!openBets().length;
  $('vb-hd').innerHTML='<div class="vb-logo">VMS <span>BETS</span><small>PLAY MONEY · NO REAL STAKES</small></div>'+
    '<button class="vb-btn'+(claimed?'':' hot')+'" data-act="daily"'+(claimed?' disabled':'')+'>🎁 '+(claimed?'Bonus claimed today':'Daily bonus +'+money(DAILY).replace('.00',''))+'</button>'+
    (broke?'<button class="vb-btn hot" data-act="rebuy">♻ Rebuy '+money(REBUY).replace('.00','')+'</button>':'')+
    '<button class="vb-btn" data-act="reset">Reset</button>'+
    '<div class="vb-bal"><small>Bankroll</small><b>'+money(S.bal)+'</b></div><button class="vb-x" data-act="close" aria-label="Close">×</button>';
}
function renderFab(){
  const n=openBets().length;
  fab.innerHTML='💰 Bets · '+money(S.bal).replace(/\.00$/,'')+(n?'<i>'+n+'</i>':'');
}
function tabsH(items,active,attr,cls){
  return '<div class="vb-tabs'+(cls?' '+cls:'')+'">'+items.map(([k,l])=>'<button class="'+(k===active?'on':'')+'" data-'+attr+'="'+k+'">'+E(l)+'</button>').join('')+'</div>';
}
function selBtn(l,closed){
  return '<button class="vb-sel" data-lid="'+E(l.id)+'"'+(closed?' disabled':'')+'><span class="n"><b>'+E(l.label)+'</b>'+(l.sub?'<small>'+E(l.sub)+'</small>':'')+'</span><span class="o">'+fmtAm(l.am)+'</span></button>';
}
function renderMain(){
  const m=$('vb-main');
  let h=tabsH([['markets','Markets'],['bets','My Bets'+(openBets().length?' ('+openBets().length+')':'')],['stats','Stats']],ui.tab,'tab');
  if(ui.tab==='markets') h+=marketsH();
  else if(ui.tab==='bets') h+=betsH();
  else h+=statsH();
  m.innerHTML=h; syncSel(); tick();
}
function marketsH(){
  let h=tabsH(SER.map(s=>[s,FUL(s)]),ui.s,'ser','sm');
  const race=raceFor(ui.s);
  if(!race) return h+'<div class="vb-empty">No upcoming race on the calendar for '+E(FUL(ui.s))+'.</div>';
  if(D.results[rkey(race,ui.s)]) return h+'<div class="vb-empty">Results for '+E(race.name)+' are in — open bets settle automatically.<br>New markets appear when the next round is up.</div>';
  const B=board(ui.s,race), close=closeAt(ui.s,race), closed=Date.now()>=close;
  h+='<div class="vb-race"><b>'+E(race.flag||'')+' '+E(race.name)+'</b><span>Round '+E(race.rnd)+' · '+E(race.circuit)+'</span><span class="cd'+(closed?' closed':'')+'" id="vb-cd" data-c="'+(isFinite(close)?close:0)+'"></span></div>';
  if(!B.markets.length) return h+'<div class="vb-empty">Lineup for '+E(FUL(ui.s))+' isn\'t published yet — no markets.</div>';
  B.markets.forEach((mk,i)=>{
    h+='<details class="vb-mk"'+(i===0?' open':'')+'><summary>'+E(mk.title)+'<small>'+E(mk.note||'')+'</small></summary>';
    if(mk.type==='list') h+='<div class="vb-grid">'+mk.outs.map(l=>selBtn(l,closed)).join('')+'</div>';
    else h+=mk.rows.map(r=>'<div class="vb-prow"><h5>'+E(r.title)+'</h5><div class="vb-grid">'+r.outs.map(l=>selBtn(l,closed)).join('')+'</div></div>').join('');
    h+='</details>';
  });
  return h+'<div class="vb-note">Odds are generated from the live standings, recent form and DNF history. Bets settle against the results posted on this site. A driver who doesn\'t start, or a market missing its flag (pole / fastest lap), is void and refunded.</div>';
}
const IC={won:'✓',lost:'✗',open:'●',void:'↺'};
function betCard(b){
  const t=b.type==='parlay'?b.legs.length+'-Leg Parlay':'Single';
  const stl={open:'Open',won:'Won',lost:'Lost',void:'Refunded'}[b.status];
  const ret=b.status==='open'?'To win '+money(r2(b.stake*(b.dec-1))):(b.status==='won'?'Paid '+money(b.payout):(b.status==='void'?'Refunded '+money(b.stake):''));
  return '<div class="vb-bet '+b.status+'"><div class="h"><b>'+t+' · '+fmtAm(b.type==='parlay'?amOfDec(b.dec):b.legs[0].am)+'<span class="vb-pill '+b.status+'">'+stl+'</span></b>'+
    '<span>Stake '+money(b.stake)+(ret?' · '+ret:'')+' · '+fdate(b.ts)+'</span></div>'+
    b.legs.map(l=>'<div class="vb-lg '+l.st+'"><span class="ic">'+IC[l.st]+'</span><span><b>'+E(l.label)+'</b> '+(l.mk==='h2h'?E(l.sub):'')+' <i style="font-style:normal;color:#ffd34e">'+fmtAm(l.am)+'</i>'+
      '<small>'+E(l.mkTitle)+' · '+E(FUL(l.s))+' R'+E(l.rnd)+' '+E(l.raceName)+(l.src==='sim'?' · practice sim':'')+'</small></span></div>').join('')+'</div>';
}
function betsH(){
  const op=openBets(); let h='';
  const groups={}; op.forEach(b=>b.legs.forEach(l=>{ if(l.st==='open') groups[l.rk]=l; }));
  Object.keys(groups).forEach(rk=>{ const l=groups[rk];
    h+='<div class="vb-sim"><span>⏳ Waiting on <b>'+E(FUL(l.s))+' R'+E(l.rnd)+' '+E(l.raceName)+'</b> results</span><button class="vb-btn btn" data-sim="'+E(rk)+'">⚡ Simulate race (practice)</button></div>'; });
  if(op.length) h+='<h4 style="margin:18px 0 8px;font:900 12px Arial;letter-spacing:2px;color:#888">OPEN</h4>'+op.slice().reverse().map(betCard).join('');
  const done=S.bets.filter(b=>b.status!=='open');
  if(done.length) h+='<h4 style="margin:18px 0 8px;font:900 12px Arial;letter-spacing:2px;color:#888">SETTLED</h4>'+done.slice().reverse().slice(0,60).map(betCard).join('');
  return h||'<div class="vb-empty">No bets yet. Head to Markets, tap some odds and build a slip.</div>';
}
function statsH(){
  const set=S.bets.filter(b=>b.status!=='open'), res=set.filter(b=>b.status==='won'||b.status==='lost');
  const staked=r2(res.reduce((a,b)=>a+b.stake,0)), ret=r2(res.reduce((a,b)=>a+(b.payout||0),0)), net=r2(ret-staked);
  const won=res.filter(b=>b.status==='won'), best=won.reduce((a,b)=>Math.max(a,b.payout-b.stake),0);
  let streak=0,kind=''; for(let i=set.length-1;i>=0;i--){ const k=set[i].status; if(k==='void') continue; if(!kind) kind=k; if(k===kind) streak++; else break; }
  const open=openBets().reduce((a,b)=>a+b.stake,0), pl=r2(S.bal+open-S.dep);
  const card=(v,l,c)=>'<div class="vb-stat"><b'+(c?' style="color:'+c+'"':'')+'>'+v+'</b><span>'+l+'</span></div>';
  const col=n=>n>0?'#4ade80':n<0?'#ef4444':'#fff';
  let h='<div class="vb-stats">'+card(money(S.bal),'Bankroll')+card((pl>0?'+':'')+money(pl),'Net P/L (all-time)',col(pl))+card(S.bets.length,'Bets placed')+
    card(won.length+'-'+(res.length-won.length),'Record (W-L)')+card(res.length?Math.round(won.length/res.length*100)+'%':'—','Hit rate')+
    card(staked?(net/staked*100>0?'+':'')+(net/staked*100).toFixed(1)+'%':'—','ROI',staked?col(net):'')+card(best?money(best):'—','Biggest win','#4ade80')+
    card(streak?streak+(kind==='won'?'W':'L'):'—','Streak',kind==='won'?'#4ade80':kind==='lost'?'#ef4444':'')+card(money(open),'At risk (open)')+'</div>';
  const pts=S.hist.slice(-150), W=700, H=170, pad=8;
  if(pts.length>1){
    const mn=Math.min(START,...pts.map(p=>p.b)), mx=Math.max(START,...pts.map(p=>p.b)), rg=Math.max(1,mx-mn);
    const X=i=>pad+i*(W-2*pad)/(pts.length-1), Y=v=>pad+(1-(v-mn)/rg)*(H-2*pad);
    h+='<div class="vb-ch"><h4>Bankroll history</h4><svg viewBox="0 0 '+W+' '+H+'"><line x1="'+pad+'" x2="'+(W-pad)+'" y1="'+Y(START)+'" y2="'+Y(START)+'" stroke="#333" stroke-dasharray="4 5"/>'+
      '<path d="'+pts.map((p,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(p.b).toFixed(1)).join(' ')+'" fill="none" stroke="#e8186d" stroke-width="2.6" stroke-linejoin="round"/></svg></div>';
  } else h+='<div class="vb-ch"><h4>Bankroll history</h4><div class="vb-empty">Place a bet to start your chart.</div></div>';
  return h;
}

/* slip */
function conflict(){
  const ms=new Set(), byR={};
  for(const l of slip.legs){
    const k=l.rk+'|'+l.mid; if(ms.has(k)) return 'A parlay can\'t include two picks from the same market ('+l.mkTitle+').'; ms.add(k);
    const set=byR[l.rk]=byR[l.rk]||new Set();
    for(const d of l.drivers||[]){ if(set.has(d)) return 'A parlay can\'t include the same driver twice in one race (correlated). Switch to Singles or remove one.'; }
    (l.drivers||[]).forEach(d=>set.add(d));
  }
  return '';
}
function calc(){
  const par=slip.legs.length>1&&ui.mode==='parlay';
  if(par){ const dec=slip.legs.reduce((a,l)=>a*l.dec,1), st=r2(parseFloat(slip.p)||0); return {par,dec,total:st,win:r2(st*(dec-1))}; }
  let total=0,win=0; slip.legs.forEach(l=>{ const st=r2(parseFloat(slip.stakes[l.id])||0); total+=st; win+=st*(l.dec-1); });
  return {par,total:r2(total),win:r2(win)};
}
function renderSlip(){
  const el=$('vb-slip'), n=slip.legs.length;
  let h='<div class="vb-sliphd" data-act="slipt"><b>Bet slip</b><span class="cnt">'+n+'</span></div>';
  if(!n){ el.innerHTML=h+'<div class="vb-empty">Tap any odds to add a selection.</div>'; return; }
  if(n>1) h+=tabsH([['singles','Singles'],['parlay','Parlay']],ui.mode,'mode','sm');
  const par=n>1&&ui.mode==='parlay';
  h+=slip.legs.map(l=>'<div class="vb-leg"><button class="rm" data-rm="'+E(l.id)+'" aria-label="Remove">×</button><div class="t"><span>'+E(l.label)+(l.mk==='h2h'?' <small style="display:inline">'+E(l.sub)+'</small>':'')+'</span><i>'+fmtAm(l.am)+'</i></div><small>'+E(l.mkTitle)+' · '+E(FUL(l.s))+' R'+E(l.rnd)+'</small>'+
    (par?'':'<input class="vb-in" inputmode="decimal" placeholder="Stake $" data-stake="'+E(l.id)+'" value="'+E(slip.stakes[l.id]||'')+'">')+'</div>').join('');
  h+='<div class="vb-chips">'+[10,25,50,100].map(v=>'<button data-chip="'+v+'">$'+v+'</button>').join('')+'<button data-chip="max">MAX</button></div>';
  if(par){
    const cf=conflict();
    h+='<input class="vb-in" inputmode="decimal" placeholder="Parlay stake $" data-pstake="1" value="'+E(slip.p||'')+'">'+(cf?'<div class="vb-warn">'+E(cf)+'</div>':'');
  }
  h+='<div class="vb-sum" id="vb-sum"></div><button class="vb-place" data-act="place">Place bet</button>';
  el.innerHTML=h; slipTotals();
}
function slipTotals(){
  const s=$('vb-sum'); if(!s) return; const c=calc();
  s.innerHTML=(c.par?'<div><span>Parlay odds ('+slip.legs.length+' legs)</span><b>'+fmtAm(amOfDec(c.dec))+'</b></div>':'')+
    '<div><span>Total stake</span><b>'+money(c.total)+'</b></div><div><span>Potential profit</span><b class="g">'+money(c.win)+'</b></div><div><span>Potential payout</span><b>'+money(r2(c.total+c.win))+'</b></div>';
}
function syncSel(){ ov.querySelectorAll('.vb-sel').forEach(b=>b.classList.toggle('on',slip.legs.some(l=>l.id===b.dataset.lid))); }
function refresh(){ renderHead(); renderFab(); if(ov.classList.contains('open')){ renderMain(); renderSlip(); } }

/* ───────── actions ───────── */
function toggleLeg(id){
  const i=slip.legs.findIndex(l=>l.id===id);
  if(i>=0){ slip.legs.splice(i,1); delete slip.stakes[id]; }
  else { const l=LEGS[id]; if(!l) return; slip.legs.push(l); if(slip.legs.length>1&&slip.legs.length===2) ui.mode=ui.mode||'singles'; $('vb-slip').classList.add('open'); }
  renderSlip(); syncSel();
}
function place(){
  const now=Date.now();
  for(const l of slip.legs){ const race=real.find(r=>r.rnd===l.rnd); if(!race||now>=closeAt(l.s,race)){ toast('Betting is closed for '+FUL(l.s)+' R'+l.rnd); return; } }
  const c=calc();
  if(c.total<=0){ toast('Enter a stake first'); return; }
  if(c.total>S.bal+.001){ toast('Not enough bankroll ('+money(S.bal)+')'); return; }
  const mk=(type,stake,legs,dec)=>({id:'b'+now.toString(36)+Math.random().toString(36).slice(2,6),ts:now,type,stake,dec,legs:legs.map(l=>Object.assign({},l,{st:'open'})),status:'open',payout:0});
  if(c.par){
    const cf=conflict(); if(cf){ toast(cf); return; }
    if(c.total<1){ toast('Minimum stake is $1'); return; }
    if(slip.legs.length>12){ toast('Max 12 legs per parlay'); return; }
    S.bets.push(mk('parlay',c.total,slip.legs,c.dec)); setBal(-c.total);
    slip.legs=[]; slip.p='';
  } else {
    const keep=[]; let placed=0;
    for(const l of slip.legs){
      const st=r2(parseFloat(slip.stakes[l.id])||0);
      if(st<=0){ keep.push(l); continue; }
      if(st<1){ toast('Minimum stake is $1'); return; }
      S.bets.push(mk('single',st,[l],l.dec)); setBal(-st); placed++; delete slip.stakes[l.id];
    }
    slip.legs=keep;
  }
  save(); toast('Bet placed ✔ · good luck'); renderSlip(); renderHead(); renderFab(); renderMain();
}
function simulate(rk){
  const l=S.bets.flatMap(b=>b.legs).find(x=>x.rk===rk); if(!l) return;
  const race=real.find(r=>r.rnd===l.rnd); if(!race) return;
  const rows=simRows(board(l.s,race)), w=rows.find(r=>r.pos===1&&!DNF_RE.test(r.note||''));
  const n=settle(k=>k===rk?rows:null);
  toast('Practice sim · '+(w?w.name+' wins':'chaos')+' · '+n+' bet'+(n===1?'':'s')+' settled');
}
function doReset(){
  if(!confirm('Reset your bankroll to '+money(START)+' and wipe all bet history?')) return;
  S=blank(); slip.legs=[]; slip.stakes={}; slip.p=''; save(); refresh(); toast('Fresh start · '+money(START));
}

/* ───────── events ───────── */
ov.addEventListener('click',e=>{
  const t=e.target, q=a=>t.closest('['+a+']');
  let el;
  if((el=q('data-lid'))){ if(!el.disabled) toggleLeg(el.dataset.lid); return; }
  if((el=q('data-rm'))){ toggleLeg(el.dataset.rm); return; }
  if((el=q('data-tab'))){ ui.tab=el.dataset.tab; renderMain(); return; }
  if((el=q('data-ser'))){ ui.s=el.dataset.ser; renderMain(); return; }
  if((el=q('data-mode'))){ ui.mode=el.dataset.mode; renderSlip(); return; }
  if((el=q('data-sim'))){ simulate(el.dataset.sim); return; }
  if((el=q('data-chip'))){
    const par=slip.legs.length>1&&ui.mode==='parlay', v=el.dataset.chip;
    const amt=v==='max'?Math.floor(S.bal/(par?1:Math.max(1,slip.legs.length))*100)/100:+v;
    if(par) slip.p=String(amt); else slip.legs.forEach(l=>slip.stakes[l.id]=String(amt));
    renderSlip(); return;
  }
  if((el=q('data-act'))){
    const a=el.dataset.act;
    if(a==='close') close();
    else if(a==='slipt'){ if(innerWidth<=900) $('vb-slip').classList.toggle('open'); }
    else if(a==='place') place();
    else if(a==='reset') doReset();
    else if(a==='daily'){ if(S.bonusDay!==day()){ S.bonusDay=day(); S.dep+=DAILY; setBal(DAILY); save(); refresh(); toast('🎁 +'+money(DAILY)+' daily bonus'); } }
    else if(a==='rebuy'){ if(S.bal<5&&!openBets().length){ S.dep+=REBUY; setBal(REBUY); save(); refresh(); toast('♻ Rebuy · +'+money(REBUY)); } }
  }
});
ov.addEventListener('input',e=>{
  const t=e.target;
  if(t.dataset.stake){ slip.stakes[t.dataset.stake]=t.value; slipTotals(); }
  else if(t.dataset.pstake){ slip.p=t.value; slipTotals(); }
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&ov.classList.contains('open')) close(); });
fab.addEventListener('click',open);

function open(){ ov.classList.add('open'); document.body.style.overflow='hidden'; settle(); refresh(); }
function close(){ ov.classList.remove('open'); document.body.style.overflow=''; }

/* countdown + lock watcher + auto-settle */
let lastLock=null;
function tick(){
  const cd=$('vb-cd'); if(!cd) return; const c=+cd.dataset.c; if(!c){ cd.textContent=''; return; }
  const ms=c-Date.now();
  if(ms<=0){ cd.className='cd closed'; cd.textContent='🔒 Betting closed'; return; }
  const s=Math.floor(ms/1000), d=Math.floor(s/86400), h=Math.floor(s%86400/3600), m=Math.floor(s%3600/60);
  cd.textContent='Betting closes in '+(d?d+'d ':'')+h+'h '+String(m).padStart(2,'0')+'m '+String(s%60).padStart(2,'0')+'s';
}
setInterval(()=>{
  if(!ov.classList.contains('open')) return;
  const cd=$('vb-cd'); const lock=cd?(+cd.dataset.c&&Date.now()>=+cd.dataset.c):null;
  if(lastLock!==null&&lock!==lastLock&&ui.tab==='markets') renderMain();
  lastLock=lock; tick();
},1000);
setInterval(()=>settle(),15000);
document.addEventListener('visibilitychange',()=>{ if(!document.hidden) settle(); });

/* ───────── boot ───────── */
settle(); renderHead(); renderFab();
window.VMSBets={open,close,reset:doReset,state:()=>S};
try{ if(location.hash==='#bets') open(); }catch(e){}
})();
