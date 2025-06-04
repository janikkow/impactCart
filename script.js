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

DocumentReady(function(){
  const ctx = document.getElementById('impactChart');
  if(ctx){
    const monate = ['Januar','Februar','M\u00e4rz','April','Mai','Juni'];
    const gesamtStand = [1200,2500,4100,5800,7000,8300];
    new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: monate,
        datasets: [{
          label: 'Impact Cart Gesamtstand (\u20AC)',
          data: gesamtStand,
          backgroundColor: '#ff9800',
          borderRadius: 4,
          barThickness: 40
        }]
      },
      options: {
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        },
        scales: {
          x: { title: { display: true, text: 'Monat' } },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Gesamtbetrag (\u20AC)' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.parsed.y.toLocaleString()} \u20AC`
            }
          }
        }
      }
    });
  }
});

// Removed the local DocumentReady function. Ensure common.js provides this function.

