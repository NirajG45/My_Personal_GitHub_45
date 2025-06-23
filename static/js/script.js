// Live Clock Function
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Toggle Sidebar
document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

// Chart.js Theme Colors
const neutralColors = ['#000000', '#222222', '#444444', '#666666', '#888888', '#aaaaaa'];

// Chart Config
const chartConfig = (type, id, data, options = {}) => {
  new Chart(document.getElementById(id), {
    type,
    data,
    options: Object.assign({
      plugins: {
        legend: { labels: { color: '#ccc' } },
        title: { display: true, text: id + ' Chart', color: '#888888' },
        tooltip: {
          backgroundColor: '#000000',
          titleColor: '#cccccc',
          bodyColor: '#ffffff'
        }
      },
      scales: type !== 'pie' && type !== 'doughnut' && type !== 'polarArea' && type !== 'radar'
        ? {
            x: { ticks: { color: '#ccc' }, grid: { color: '#444' } },
            y: { ticks: { color: '#ccc' }, grid: { color: '#444' } }
          }
        : {}
    }, options)
  });
};

// All Graphs
chartConfig('bar', 'barChart', {
  labels: ["C", "C++", "MySQL", "Python", "JavaScript", "HMTL/HTML5", "CSS"],
  datasets: [{
    label: "Programming Languages",
    data: [18, 17.4, 15, 9.9, 6.9, 18, 12],
    backgroundColor: neutralColors,
    borderWidth: 1
  }]
});

chartConfig('line', 'lineChart', {
  labels: ["SE", "ML", "DL", "Computer Fun.", "CyberSecurity", "Computer Net."],
  datasets: [{
    label: "Theoretical Subjects",
    data: [8.7, 7.2, 5.4, 8, 5, 9],
    borderColor: "#888888",
    backgroundColor: "rgba(136,136,136,0.1)",
    fill: true,
    tension: 0.4,
    pointBackgroundColor: "#ccc",
    pointBorderColor: "#888888",
    pointRadius: 5
  }]
});

chartConfig('pie', 'pieChart', {
  labels: ["GitHub", "LinkDIn", "AI Tools", "VS code"],
  datasets: [{
    data: [72, 54, 36, 87],
    backgroundColor: neutralColors,
    borderColor: "#ccc",
    borderWidth: 1
  }]
});

chartConfig('radar', 'radarChart', {
  labels: ["Flask", "Scikit-learn", "Pandash", "NumPye", "Tenserflow", "Niex"],
  datasets: [{
    label: "Scores",
    data: [8, 9, 7, 6, 9, 8],
    backgroundColor: "rgba(136,136,136,0.2)",
    borderColor: "#888888",
    pointBackgroundColor: "#ccc"
  }]
});

chartConfig('polarArea', 'polarChart', {
  labels: ["Machine Learning", "AI", "Software Engineering", "Robotic"],
  datasets: [{
    label: "Performance",
    data: [11, 16, 7, 14],
    backgroundColor: neutralColors
  }]
});

chartConfig('doughnut', 'doughnutChart', {
  labels: ["ML", "AI", "DL", "Robotic"],
  datasets: [{
    data: [20, 30, 25, 25],
    backgroundColor: neutralColors,
    borderColor: "#ccc",
    borderWidth: 1
  }]
});

// Load GitHub Repos
fetch('https://api.github.com/users/NirajG45/repos')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('repo-list');
    data.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a><br><small>${repo.description || 'No description'}</small>`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById('repo-list').innerHTML = '<li>⚠️ Could not load repositories.</li>';
    console.error(err);
  });

//   for front page
// Live Time Update
function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('live-time');
    const dateEl = document.getElementById('live-date');
    
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

setInterval(updateTime, 1000);
updateTime();

// Radar Chart (Skills)
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Web Development', 'Machine Learning', 'AI', 'Robotics & Deep Learning', 'Robotics', 'Programming'],
        datasets: [{
            label: 'Skills',
            data: [9, 8, 6, 7, 5, 7],
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
            borderColor: '#00f0ff',
            pointBackgroundColor: '#00f0ff',
            pointBorderColor: '#00f0ff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00f0ff'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { color: '#333' },
                grid: { color: '#444' },
                pointLabels: { color: '#00f0ff', font: { size: 14 } },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});