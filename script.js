const CONFIG = {
  name: "Alfath Ariya Ilahi",
  title: ["Game Developer", "Networking"],
  about: "Hey! Saya developer yang fokus bikin pengalaman digital jadi lebih interaktif. Keahlian utama saya ada di Game Development, tapi saya juga punya skill di bidang Web Development dan Networking.",
  email: "alfathariya04@gmail.com",
  github: "https://github.com/alfathAriyaIlahi",
  linkedin: "https://www.linkedin.com/in/alfath-ariya-ilahi-075536330/",
  whatsapp: "https://wa.me/6288276463230",
  instagram: "https://www.instagram.com/alfthary?igsh=a3gwdjhvMjgwMzZj",
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
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>`
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
    <a href="${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${ICONS.whatsapp}</a>
    <a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${ICONS.instagram}</a>
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
    <a href="${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-item">
      <div class="ci-icon">💬</div>
      <div>
        <div class="ci-label">WhatsApp</div>
        <div class="ci-value">088276463230</div>
      </div>
    </a>
    <a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer" class="contact-item">
      <div class="ci-icon">📸</div>
      <div>
        <div class="ci-label">Instagram</div>
        <div class="ci-value">@alfthary</div>
      </div>
    </a>
  `;

  document.getElementById('footer-text').innerHTML = `Designed &amp; Built by ${CONFIG.name} &copy; ${new Date().getFullYear()}`;
  document.getElementById('footer-socials').innerHTML = `
    <a href="${CONFIG.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${ICONS.github}</a>
    <a href="${CONFIG.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ICONS.linkedin}</a>
    <a href="${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${ICONS.whatsapp}</a>
    <a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${ICONS.instagram}</a>
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
