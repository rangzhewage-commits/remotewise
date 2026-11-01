(()=>{const $=s=>document.querySelector(s),m=$('#menu'),n=$('#nav');
m&&m.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===c));
document.querySelectorAll('#list .card').forEach(a=>a.hidden=c.dataset.f!=='all'&&a.dataset.cat!==c.dataset.f)}));
const sr=$('#sr');if(sr){const q=(new URLSearchParams(location.search).get('q')||'').trim();$('#sq').value=q;
fetch('/search-index.json').then(r=>r.json()).then(d=>{const l=d.filter(a=>(a.t+' '+a.d).toLowerCase().includes(q.toLowerCase()));
sr.textContent=q?l.length+' result(s) for "'+q+'"':'Enter a search term.';
$('#list').innerHTML=q?l.map(a=>'<article class="card"><span class="tag"></span><h3><a></a></h3><p></p></article>').join(''):'';
$('#list').querySelectorAll('article').forEach((e,i)=>{const a=l[i];e.querySelector('.tag').textContent=a.c;const k=e.querySelector('a');k.textContent=a.t;k.href=a.u;e.querySelector('p').textContent=a.d})}).catch(()=>sr.textContent='Search unavailable.')}
const f=$('#cf');f&&f.addEventListener('submit',e=>{const r=$('#res');const bad=[];
[['n','name'],['s','subject']].forEach(([i,l])=>{if(!$('#'+i).value.trim())bad.push('Enter your '+l)});
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($('#e').value.trim()))bad.push('Enter a valid email');if($('#m').value.trim().length<10)bad.push('Message needs at least 10 characters');
if(bad.length||!f.getAttribute('action')){e.preventDefault();r.textContent=!f.getAttribute('action')?'The contact form is not connected yet, so nothing was sent.':bad.join('. ')+'.'}})})();
