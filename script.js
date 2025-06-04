document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('donationChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Spenden in €',
        data: [200, 300, 150, 400, 5230, 0],
        backgroundColor: '#4CAF50'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
