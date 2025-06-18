document.addEventListener('DOMContentLoaded', ()=>{
  chrome.storage.sync.get(['loggedIn','username','charity','collected'], d=>{
    if (!d.loggedIn) return location.href='login.html';
    document.getElementById('acc-user').textContent     = d.username;
    document.getElementById('acc-charity').textContent  = d.charity || '–';
    document.getElementById('acc-amount').textContent   = (d.collected||0).toFixed(2);
  });
});
