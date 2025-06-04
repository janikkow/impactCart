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
  const canvas = document.getElementById('impactChart');
  if(canvas){
    const monthNames = ['Januar','Februar','M\u00e4rz','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    const now = new Date();
    const labels = [];
    for(let i = 5; i >= 0; i--){
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(monthNames[d.getMonth()]);
    }
    const totals = labels.map(() => Math.floor(Math.random() * (9000 - 4000 + 1)) + 4000);
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Impact Cart Gesamt (\u20AC)',
          data: totals,
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

