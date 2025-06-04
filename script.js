document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('donationChart');
  if (!ctx) return;

  const finalData = [200, 300, 150, 400, 5230, 0];
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Spenden in €',
        data: finalData.map(() => 0),
        backgroundColor: '#4CAF50'
      }]
    },
    options: {
      animation: {
        duration: 1000
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  setTimeout(() => {
    chart.data.datasets[0].data = finalData;
    chart.update();
  }, 300);
});
