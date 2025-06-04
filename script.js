DocumentReady(function(){
  const barCtx = document.getElementById('donationChart');
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
});

DocumentReady(function(){
  const track = document.querySelector('.carousel-track');
  if(track){
    track.innerHTML += track.innerHTML;
  }
});

DocumentReady(function(){
  const arc = document.getElementById('progressCircle');
  const text = document.getElementById('progressText');
  const goalAmount = document.getElementById('goalAmount');
  if(arc && text && goalAmount){
    const current = 120;
    const goal = 1000;
    const percent = Math.min(100, current / goal * 100);
    const radius = arc.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    arc.style.strokeDasharray = circumference;
    arc.style.strokeDashoffset = circumference;
    requestAnimationFrame(() => {
      arc.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    });
    text.textContent = percent.toFixed(0) + '% deines Jahresziels';
    goalAmount.textContent = 'Ziel: ' + goal.toFixed(0) + ' \u20AC';
  }
});

// Removed the local DocumentReady function. Ensure common.js provides this function.

