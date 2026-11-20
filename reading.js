
function list(items) {
  const ul=document.createElement('ul'); ul.className='reading-list';
  items.forEach(t=>{ const li=document.createElement('li');
    let a; try { const u=new URL(t.url); if(['https:','http:'].includes(u.protocol)){ a=document.createElement('a'); a.href=u.href; a.target='_blank'; a.rel='noopener noreferrer'; }} catch(e){}
    if(a){a.textContent=t.title;li.append(a);}else li.textContent=t.title; ul.append(li);
  });return ul;
}
function section(title,items){if(!items?.length)return;const s=document.createElement('section');const h=document.createElement('h2');h.textContent=title;s.append(h,list(items));document.getElementById('reading-root').append(s);}
function days(title,ds,expand=false){if(!ds?.length)return;const s=document.createElement(expand?'details':'section');const h=document.createElement(expand?'summary':'h2');h.textContent=title+(expand?' ('+ds.length+' nights)':'');s.append(h);ds.slice().reverse().forEach(d=>{const div=document.createElement('div');div.className='day';const date=document.createElement('p');date.className='date';date.textContent=d.date;div.append(date,list(d.items));s.append(div);});document.getElementById('reading-root').append(s);}
fetch('/reading/queue.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(d=>{document.getElementById('updated').textContent='updated '+d.updated;document.getElementById('reading-root').replaceChildren();section('Saved for later',d.queue);section('Candidates',d.candidates);section('Saved links',d.saved);days('Delivered',d.delivered,true);}).catch(()=>{document.getElementById('reading-root').textContent='The reading list could not load. Please try again.';});
