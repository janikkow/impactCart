const u = document.getElementById('user'),
      p = document.getElementById('pass'),
      b = document.getElementById('login-btn'),
      e = document.getElementById('error');

b.addEventListener('click', ()=>{
  if (u.value==='admin' && p.value==='admin') {
    chrome.storage.sync.set({loggedIn:true,username:'admin'}, ()=> {
      location.href = 'index.html';
    });
  } else {
    e.textContent = 'Falsche Daten';
  }
});
