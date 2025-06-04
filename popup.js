const TARGET = 100;

document.addEventListener('DOMContentLoaded', () => {
  const loginC = document.getElementById('login-container');
  const mainC  = document.getElementById('main-container');
  const btn     = document.getElementById('toggle-btn');
  const sel     = document.getElementById('charity');
  const prog    = document.getElementById('progress');
  const amt     = document.getElementById('amount');
  const userIn  = document.getElementById('user');
  const passIn  = document.getElementById('pass');
  const loginB  = document.getElementById('login-btn');
  const errP    = document.getElementById('login-error');
  const dashB   = document.getElementById('dashboard-btn');

  // Prüfe Login
  chrome.storage.sync.get('loggedIn', d => {
    if (d.loggedIn) initMain();
    else loginC.style.display = 'block';
  });

  loginB.addEventListener('click', () => {
    if (userIn.value==='admin' && passIn.value==='admin') {
      chrome.storage.sync.set({ loggedIn:true, username:'admin' }, initMain);
      loginC.style.display = 'none';
    } else {
      errP.textContent = 'Falsche Daten';
    }
  });

  function initMain() {
    mainC.style.display = 'block';
    // lade Zustand
    chrome.storage.sync.get(['active','charity','collected'], data => {
      const active   = data.active || false;
      const charity  = data.charity || sel.value;
      const collected= data.collected || 6.37;
      sel.value = charity;
      btn.textContent = active?'SPENDEN AKTIVIERT':'SPENDEN AKTIVIEREN';
      btn.classList.toggle('active', active);
      updateProgress(collected);
    });
    // Klick-Handler
    btn.addEventListener('click', _=>{
      chrome.storage.sync.get('active', d=>{
        const next = !d.active;
        chrome.storage.sync.set({active:next});
        btn.textContent = next?'SPENDEN AKTIVIERT':'SPENDEN AKTIVIEREN';
        btn.classList.toggle('active', next);
      });
    });
    sel.addEventListener('change', ()=>chrome.storage.sync.set({charity:sel.value}));
    dashB.addEventListener('click', ()=>{
      chrome.tabs.create({url: chrome.runtime.getURL('index.html')});
    });
    // Footer-Links
    document.querySelectorAll('.footer a').forEach(a=>{
      a.addEventListener('click', e=>{
        const page = e.target.dataset.page;
        let url = `landing.html#${page}`;
        if(page==='about') url = 'about.html';
        if(page==='privacy') url = 'datenschutz.html';
        chrome.tabs.create({url: chrome.runtime.getURL(url)});
      });
    });
  }

  function updateProgress(value) {
    const pct = Math.min(100, value/TARGET*100);
    prog.style.width = pct+'%';
    amt.textContent = `Dein Beitrag: ${value.toFixed(2)} € gesammelt`;
  }
});
