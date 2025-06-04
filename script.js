DocumentReady(function(){
  const barCtx = document.getElementById('donationChart');
  const progressCtx = document.getElementById('goalChart');
  if(barCtx){
    const monthly = [4300,5200,6100,4800,5900,6700,5500,6200,5300,6100,4900,6600];
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mrz','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
        datasets: [{
          label: 'Gesamtspenden €',
          data: monthly,
          backgroundColor: 'rgba(10,62,98,0.7)'
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { display:false } },
        scales: { y: { beginAtZero:true } }
      }
    });
  }
  if(progressCtx){
    const own = 120;
    const goal = 1000;
    new Chart(progressCtx, {
      type: 'doughnut',
      data: {
        labels: ['Dein Beitrag','Ziel'],
        datasets: [{
          data: [own, goal-own],
          backgroundColor: ['rgba(10,62,98,0.8)','rgba(10,62,98,0.2)'],
          borderWidth: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: { legend: { display:false } }
      }
    });
  }
});

function DocumentReady(cb){
  if(document.readyState!=='loading')cb();
  else document.addEventListener('DOMContentLoaded',cb);
}
