// ======= CLOCKS (Multiple Elements) ======= //
function updateClocks() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const clockEl = document.getElementById('clock');
  const timeEl = document.getElementById('live-time');
  const dateEl = document.getElementById('live-date');

  if (clockEl) clockEl.textContent = now.toLocaleTimeString();
  if (timeEl) timeEl.textContent = timeStr;
  if (dateEl) dateEl.textContent = dateStr;
}
setInterval(updateClocks, 1000);
updateClocks();

// ======= SIDEBAR TOGGLE ======= //
const sidebarToggle = document.getElementById("sidebarToggle");
if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    document.querySelector(".sidebar")?.classList.toggle("active");
  });
}

// ======= DARK MODE TOGGLE ======= //
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
  });
}

// ======= CHART COLOR THEME ======= //
const neutralColors = ['#000000', '#222222', '#444444', '#666666', '#888888', '#aaaaaa'];

// ======= CHART CONFIG FUNCTION ======= //
function chartConfig(type, id, data, options = {}) {
  const ctx = document.getElementById(id)?.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type,
    data,
    options: {
      plugins: {
        legend: { labels: { color: '#ccc' } },
        title: {
          display: true,
          text: id.replace(/Chart$/, '') + ' Chart',
          color: '#888'
        },
        tooltip: {
          backgroundColor: '#000',
          titleColor: '#ccc',
          bodyColor: '#fff'
        }
      },
      scales: ['pie', 'doughnut', 'polarArea', 'radar'].includes(type)
        ? {}
        : {
            x: { ticks: { color: '#ccc' }, grid: { color: '#444' } },
            y: { ticks: { color: '#ccc' }, grid: { color: '#444' } }
          },
      ...options
    }
  });
}

// ======= CHARTS DATA ======= //
chartConfig('bar', 'barChart', {
  labels: ["C", "C++", "MySQL", "Python", "JavaScript", "HTML5", "CSS"],
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
    borderColor: "#888",
    backgroundColor: "rgba(136,136,136,0.1)",
    fill: true,
    tension: 0.4,
    pointBackgroundColor: "#ccc",
    pointBorderColor: "#888",
    pointRadius: 5
  }]
});

chartConfig('pie', 'pieChart', {
  labels: ["GitHub", "LinkDIn", "AI Tools", "VS Code"],
  datasets: [{
    data: [72, 54, 36, 87],
    backgroundColor: neutralColors,
    borderColor: "#ccc",
    borderWidth: 1
  }]
});

chartConfig('radar', 'radarChart', {
  labels: ["Flask", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Numpy Extra"],
  datasets: [{
    label: "Scores",
    data: [8, 9, 7, 6, 9, 8],
    backgroundColor: "rgba(136,136,136,0.2)",
    borderColor: "#888",
    pointBackgroundColor: "#ccc"
  }]
});

chartConfig('polarArea', 'polarChart', {
  labels: ["Machine Learning", "AI", "Software Engineering", "Robotics"],
  datasets: [{
    label: "Performance",
    data: [11, 16, 7, 14],
    backgroundColor: neutralColors
  }]
});

chartConfig('doughnut', 'doughnutChart', {
  labels: ["ML", "AI", "DL", "Robotics"],
  datasets: [{
    data: [20, 30, 25, 25],
    backgroundColor: neutralColors,
    borderColor: "#ccc",
    borderWidth: 1
  }]
});

// ======= FRONT PAGE RADAR CHART ======= //
const skillCanvas = document.getElementById('skillsChart');
if (skillCanvas) {
  new Chart(skillCanvas.getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['Web Development', 'Machine Learning', 'AI', 'Robotics & DL', 'Robotics', 'Programming'],
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
      plugins: { legend: { display: false } }
    }
  });
}

// ======= GITHUB REPO FETCHER ======= //
fetch('https://api.github.com/users/NirajG45/repos')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('repo-list');
    if (!list) return;

    data.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <br><small>${repo.description || 'No description'}</small>
      `;
      list.appendChild(li);
    });
  })
  .catch(err => {
    const list = document.getElementById('repo-list');
    if (list) list.innerHTML = '<li>⚠️ Could not load repositories.</li>';
    console.error(err);
  });
