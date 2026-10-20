/* Parses OCR text of the in-game leaderboard into rows. Works in the browser (window.VMSParse) and in node (module.exports). */
(function(root){
function lev(a,b){ const m=[]; for(let i=0;i<=a.length;i++){m[i]=[i];} for(let j=1;j<=b.length;j++) m[0][j]=j;
  for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++) m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1)); return m[a.length][b.length]; }
function gapOf(s){
  let m;
  if(/LEAD/.test(s)) return {gap:'Leader',kind:'lead'};
  if(/NO\s*TIME/.test(s)) return {gap:'No time',kind:'none'};
  if((m=s.match(/\+\s*(\d+)\s*LAPS?/))) return {gap:'+'+m[1]+(m[1]==='1'?' Lap':' Laps'),kind:'lap'};
  if((m=s.match(/(\d+):(\d{2})[.,:]?(\d{3})/))) return {gap:m[1]+':'+m[2]+'.'+m[3],kind:'time'};
  if((m=s.match(/\+\s*(\d{1,3})[.,]?(\d{3})(?!\d)/))) return {gap:'+'+m[1]+'.'+m[2],kind:'gap'};
  return null;
}
function parseBoard(text,known){
  known=(known||[]).map(k=>k.toUpperCase());
  const out={rows:[],finished:false,type:null,lap:0};
  const T=String(text||'').toUpperCase();
  out.finished=/FINISH/.test(T);
  if(/QUAL/.test(T)) out.type='Qualifying'; else if(/RACE/.test(T)) out.type='Race';
  const seen={};
  String(text||'').toUpperCase().split(/\n+/).forEach(line=>{
    const g=gapOf(line); if(!g) return;
    let code=null, idx=-1, m;
    if(known.length){
      for(const k of known){ const i=line.indexOf(k); if(i>=0&&(idx<0||i<idx)){code=k;idx=i;} }
    }
    if(!code){
      m=line.match(/([A-Z]{3})(?=\s*(?:L\s?\d|\+|LEAD|NO\b|\d+:|\s|$))/);
      if(m){ code=m[1]; idx=m.index; if(known.length){ const c=known.find(k=>lev(k,code)<=1); if(c) code=c; else return; } }
    }
    if(!code||seen[code]) return;
    const rest=line.slice(idx+3), lm=rest.match(/L\s?([0-9SOIB]{1,3})(?!\d)/);
    const raw=lm?lm[1].replace(/[S]/g,'8').replace(/[OB]/g,'0').replace(/I/g,'1'):null, lap=raw&&/^\d+$/.test(raw)?+raw:null;
    seen[code]=1; out.rows.push({code,lap,gap:g.gap,kind:g.kind});
  });
  const c={}; out.rows.forEach(r=>{ if(r.lap) c[r.lap]=(c[r.lap]||0)+1; });
  out.lap=+(Object.keys(c).sort((a,b)=>c[b]-c[a]||b-a)[0]||0);
  return out;
}
const API={parseBoard,gapOf};
if(typeof module!=='undefined'&&module.exports) module.exports=API; else root.VMSParse=API;
})(typeof window!=='undefined'?window:globalThis);
