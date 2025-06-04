// Load account info and populate elements if present
DocumentReady(function(){
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get(['username','charity','collected'], d=>{
      document.querySelectorAll('#acc-user').forEach(el=> el.textContent = d.username || '-');
      document.querySelectorAll('#acc-charity').forEach(el=> el.textContent = d.charity || '-');
      document.querySelectorAll('#acc-amount').forEach(el=> el.textContent = (d.collected||0).toFixed(2));
    });
  }
});

function DocumentReady(cb){
  if(document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
}
