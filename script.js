const CONFIG = {
  name: "Alfath Ariya Ilahi",
  title: ["Game Developer", "Networking"],
  about: "Hey! Saya developer yang fokus bikin pengalaman digital jadi lebih interaktif. Keahlian utama saya ada di Game Development, tapi saya juga punya skill di bidang Web Development dan Networking.",
  email: "alfathariya04@gmail.com",
  github: "https://github.com/alfathAriyaIlahi",
  linkedin: "https://www.linkedin.com/in/alfath-ariya-ilahi-075536330/",
  cvLink: "https://drive.google.com/drive/u/0/folders/1YVsUYx_Xu0cd7303RFuxa0QqRP_Nrp5I",
  location: "Lampung, Indonesia",
  education: "Universitas Lampung",
  status: "Open to Work"
};

const GITHUB_USERNAME = "alfathAriyaIlahi";
let GITHUB_REPOS = [];


const REPO_IMAGES = {
  'tetris-duel': 'Assets/tetris.png',
  'resto-online': 'Assets/resto.png',
  'FlappyBird-Clone': 'Assets/bird.png',
  'rocket-boost': 'Assets/rocket.png'
};

// Gradient palette for repo cards
const GRADIENTS = [
  "linear-gradient(135deg, #6C63FF, #3F3D99)",
  "linear-gradient(135deg, #FF6B6B, #FF8E53)",
  "linear-gradient(135deg, #00D4FF, #0099CC)",
  "linear-gradient(135deg, #F093FB, #F5576C)",
  "linear-gradient(135deg, #4FACFE, #00F2FE)",
  "linear-gradient(135deg, #43E97B, #38F9D7)",
  "linear-gradient(135deg, #FA709A, #FEE140)",
  "linear-gradient(135deg, #A18CD1, #FBC2EB)"
];

// Language to emoji mapping
const LANG_EMOJI = {
  'JavaScript': '🟨',
  'TypeScript': '🔷',
  'HTML': '🌐',
  'CSS': '🎨',
  'Python': '🐍',
  'Java': '☕',
  'C#': '🎮',
  'C++': '⚙️',
  'PHP': '🐘',
  'Blade': '🗡️',
  'Ruby': '💎',
  'Go': '🐹',
  'Rust': '🦀',
  'Swift': '🍎',
  'Kotlin': '🟣',
  'Wolfram Language': '🔬',
  'default': '📁'
};

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", icon: "devicon-laravel-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Unity", icon: "devicon-unity-plain" },
      { name: "Visual Studio 2022", icon: "devicon-visualstudio-plain" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" }
    ]
  }
];

const ICONS = {
  github: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
};

(function populatePage() {
  document.title = `${CONFIG.name} — Portfolio`;

  document.getElementById('nav-logo').textContent = CONFIG.name;

  document.getElementById('hero-greeting').textContent = "Hello, Saya";
  document.getElementById('hero-name').textContent = CONFIG.name;
  document.getElementById('hero-desc').textContent = "Mengubah ide kreatif menjadi realitas digital. Fokus utama saya adalah pengembangan game, dengan keahlian tambahan di bidang web dan networking.";

  document.getElementById('hero-roles').innerHTML = CONFIG.title.map(t => `<span class="role-tag">${t}</span>`).join('<span class="role-divider">•</span>');

  document.getElementById('btn-download-cv').href = CONFIG.cvLink;
  document.getElementById('about-cv-btn').href = CONFIG.cvLink;

  document.getElementById('hero-socials').innerHTML = `
    <a href="${CONFIG.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${ICONS.github}</a>
    <a href="${CONFIG.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ICONS.linkedin}</a>
  `;

  document.getElementById('about-paragraph').textContent = CONFIG.about;

  document.getElementById('about-cards').innerHTML = `
    <div class="about-card">
      <div class="card-icon">🎓</div>
      <div class="card-label">Education</div>
      <div class="card-value">${CONFIG.education}</div>
    </div>
    <div class="about-card">
      <div class="card-icon">📍</div>
      <div class="card-label">Location</div>
      <div class="card-value">${CONFIG.location}</div>
    </div>
    <div class="about-card">
      <div class="card-icon">💼</div>
      <div class="card-label">Status</div>
      <div class="card-value">${CONFIG.status}</div>
    </div>
  `;

  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = SKILLS.map(cat => `
    <div class="skill-category">
      <h3><span class="cat-dot"></span>${cat.category}</h3>
      <div class="skill-pills">
        ${cat.items.map(s => `
          <span class="skill-pill">
            <i class="${s.icon}"></i>
            ${s.name}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');

  showProjectsLoading();
  fetchGitHubRepos();

  document.getElementById('contact-info').innerHTML = `
    <a href="mailto:${CONFIG.email}" class="contact-item">
      <div class="ci-icon">✉️</div>
      <div>
        <div class="ci-label">Email</div>
        <div class="ci-value">${CONFIG.email}</div>
      </div>
    </a>
    <a href="${CONFIG.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-item">
      <div class="ci-icon">💼</div>
      <div>
        <div class="ci-label">LinkedIn</div>
        <div class="ci-value">${CONFIG.linkedin.replace('https://', '')}</div>
      </div>
    </a>
    <a href="${CONFIG.github}" target="_blank" rel="noopener noreferrer" class="contact-item">
      <div class="ci-icon">🐙</div>
      <div>
        <div class="ci-label">GitHub</div>
        <div class="ci-value">${CONFIG.github.replace('https://', '')}</div>
      </div>
    </a>
  `;

  document.getElementById('footer-text').innerHTML = `Designed &amp; Built by ${CONFIG.name} &copy; ${new Date().getFullYear()}`;
  document.getElementById('footer-socials').innerHTML = `
    <a href="${CONFIG.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${ICONS.github}</a>
    <a href="${CONFIG.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ICONS.linkedin}</a>
  `;
})();

function showProjectsLoading() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = Array(4).fill('').map(() => `
    <div class="project-card reveal visible">
      <div class="project-thumb">
        <div class="thumb-gradient skeleton-pulse" style="background: var(--surface)"></div>
      </div>
      <div class="project-info">
        <div class="skeleton-line" style="width:60%;height:20px;margin-bottom:12px"></div>
        <div class="skeleton-line" style="width:100%;height:14px;margin-bottom:8px"></div>
        <div class="skeleton-line" style="width:80%;height:14px"></div>
      </div>
    </div>
  `).join('');
}

async function fetchGitHubRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`);
    if (!res.ok) throw new Error('GitHub API error');
    const repos = await res.json();

    const HIDDEN_REPOS = ['cobacoba', 'reviewer', 'Game-Roket', 'SkillSwap', 'rental', 'portofolio', 'tetris-duel'];
    GITHUB_REPOS = repos.filter(r => !r.fork && !HIDDEN_REPOS.includes(r.name));

    const languages = [...new Set(GITHUB_REPOS.map(r => r.language).filter(Boolean))];
    const filterBar = document.getElementById('filter-bar');
    filterBar.innerHTML = [
      '<button class="filter-btn active" data-filter="All">All</button>',
      ...languages.map(lang => `<button class="filter-btn" data-filter="${lang}">${lang}</button>`)
    ].join('');

    renderGitHubProjects('All');
  } catch (err) {
    console.error('Failed to fetch GitHub repos:', err);
    document.getElementById('projects-grid').innerHTML = `
      <div class="github-error">
        <div class="error-icon">⚠️</div>
        <p>Gagal memuat repositori dari GitHub.</p>
        <button class="btn btn-outline" onclick="fetchGitHubRepos()">Coba Lagi</button>
      </div>
    `;
    document.getElementById('filter-bar').innerHTML = '';
  }
}

function renderGitHubProjects(filter) {
  const grid = document.getElementById('projects-grid');
  const filtered = filter === 'All'
    ? GITHUB_REPOS
    : GITHUB_REPOS.filter(r => r.language === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-secondary);grid-column:1/-1;">Tidak ada repositori untuk filter ini.</p>';
    return;
  }

  grid.innerHTML = filtered.map((repo, i) => {
    const lang = repo.language || 'Unknown';
    const emoji = LANG_EMOJI[lang] || LANG_EMOJI['default'];
    const gradient = GRADIENTS[i % GRADIENTS.length];
    const desc = repo.description || 'No description provided.';
    const hasPages = repo.has_pages;
    const pagesUrl = `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    const updated = new Date(repo.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    return `
      <div class="project-card reveal" data-category="${lang}">
        <div class="project-thumb">
          ${REPO_IMAGES[repo.name]
        ? `<img src="${REPO_IMAGES[repo.name]}" alt="${repo.name}" class="thumb-image" />`
        : `<div class="thumb-gradient" style="background:${gradient}">${emoji}</div>`
      }
          <span class="project-badge">${lang}</span>
        </div>
        <div class="project-info">
          <h3>${repo.name}</h3>
          <div class="project-links">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="link-github">GitHub</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeRevealElements();
  requestAnimationFrame(() => {
    document.querySelectorAll('.project-card.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('visible');
      }
    });
  });
}

(function createDots() {
  const container = document.getElementById('floating-dots');
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = (Math.random() * 100 + 100) + '%';
    dot.style.animationDuration = (Math.random() * 15 + 10) + 's';
    dot.style.animationDelay = (Math.random() * 10) + 's';
    dot.style.width = (Math.random() * 3 + 1.5) + 'px';
    dot.style.height = dot.style.width;
    dot.style.background = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';
    container.appendChild(dot);
  }
})();

function observeRevealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-children').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

observeRevealElements();

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a, .mobile-menu a');

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

document.getElementById('filter-bar').addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');

  renderGitHubProjects(e.target.dataset.filter);
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  e.target.reset();

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
});

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const themeToggle = document.getElementById('theme-toggle');

(function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    document.body.classList.add('light-mode');
  } else if (stored === 'dark') {
    document.body.classList.remove('light-mode');
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-mode');
  }
})();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
