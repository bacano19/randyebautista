const main = document.querySelector('#main');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Capitalize every heading word while preserving acronyms and brand spelling.
function headingText(value) {
  return String(value).replace(/(?:[A-Z]\.){2,}|[A-Za-z]+(?:['’][A-Za-z]+)?/g, (word, offset, text) => {
    if (/^[A-Z]$/.test(word) && /\bPart\s+$/i.test(text.slice(0, offset))) return word;
    if (/[A-Z]/.test(word.slice(1))) return word;
    return word[0].toUpperCase() + word.slice(1);
  });
}

function cardLink([, , href, label]) {
  return href ? `<a href="${escapeHTML(href)}">${escapeHTML(href.startsWith('mailto:') ? label : headingText(label || 'Learn more'))}</a>` : '';
}

function featureCard(item) {
  const [t, d] = item;
  return `<article class="feature-card"><h3>${escapeHTML(headingText(t))}</h3><p>${escapeHTML(d)}</p>${cardLink(item)}</article>`;
}

function labCard([t,d]) {
  return `<article class="lab-card"><h3>${escapeHTML(headingText(t))}</h3><p>${escapeHTML(d)}</p></article>`;
}

function experienceCard(item) {
  const [t,d] = item;
  const wide = t === 'A practical GRC mindset' ? ' wide' : '';
  return `<article class="experience-card${wide}"><h3>${escapeHTML(headingText(t))}</h3><p>${escapeHTML(d)}</p></article>`;
}

function credentialCard(item) {
  const [title, description, href, label] = item;
  return `<article class="credential-card"><h3>${escapeHTML(headingText(title))}</h3><p>${escapeHTML(description)}</p>${href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noreferrer">${escapeHTML(headingText(label || 'View document'))}<span class="sr-only"> (PDF, opens in a new tab)</span></a>` : ''}</article>`;
}

function pageImages(images) {
  if (!images || images.length === 0) return '';
  return `<div class="image-gallery">${images.map(([file, alt, w, h]) => `<article class="credential-image"><img src="assets/${escapeHTML(file)}" alt="${escapeHTML(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async"></article>`).join("")}</div>`;
}

function projectScreenshot(title) {
  const shots = {
    'Eros AI Orchestration App': ['assets/Eros.png', 'Eros agent orchestration application coordinating multiple AI agents working in parallel on tasks and projects.', 1376, 768],
    'LLM Distributor': ['assets/LLM%20distributor.png', 'LLM Distributor interface showing client forwarding endpoints, provider health, and active and inactive models.', 1195, 1132]
  };
  const shot = shots[title];
  if (!shot) return '';
  const isEros = title === 'Eros AI Orchestration App';
  return `<div class="screenshot-wrapper${isEros ? ' center' : ''}"><a href="${shot[0]}" target="_blank" rel="noopener noreferrer"><img src="${shot[0]}" alt="${escapeHTML(shot[1])}" width="${shot[2]}" height="${shot[3]}" loading="lazy" decoding="async"></a></div>`;
}

function projectCards(items) {
  return `<div class="project-grid">${items.map((item) => `<article class="card project-card"><h3>${escapeHTML(headingText(item[0]))}</h3><p>${escapeHTML(item[1])}</p>${projectScreenshot(item[0])}${cardLink(item)}</article>`).join('')}</div>`;
}

function courseworkCards(items) {
  return cards(items, 'feature');
}

function credentialsContent(page) {
  const group = (title, items) => `<section class="credential-group"><h3 class="group-title">${escapeHTML(headingText(title))}</h3><div class="credential-grid">${items.map(credentialCard).join('')}</div></section>`;
  return group('Education & current study', page.cards.slice(0, 3))
    + group('Technical & Professional Training', page.cards.slice(3, 6))
    + group('Honors & recognition', page.cards.slice(6))
    + `<div class="deans-awards">${pageImages(page.images.slice(1))}</div>`;
}

function contactCTA() {
  return `<section class="section-band contact-band"><div><h2>Bring Accountability To The Next Challenge.</h2></div><a class="button primary" href="#/contact">Let's Connect →</a></section>`;
}

function photo([file, alt, width, height], eager = false) {
  return `<figure class="portfolio-photo"><img src="assets/${escapeHTML(file)}" alt="${escapeHTML(alt)}" width="${width}" height="${height}" loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? " fetchpriority=\"high\"" : ""}></figure>`;
}

function cards(items, type = 'default') {
  const renderer = { feature: featureCard, lab: labCard, experience: experienceCard }[type];
  if (renderer) return `<div class="${type}-grid">${items.map(renderer).join("")}</div>`;
  return `<div class="card-grid">${items.map(i => `<article class="card"><h3>${escapeHTML(headingText(i[0]))}</h3><p>${escapeHTML(i[1])}</p>${cardLink(i)}</article>`).join("")}</div>`;
}

function home() {
  return `<section class="hero section-band">
    <div class="hero-copy"><h1 tabindex="-1">Randy<br>Bautista</h1>
    <p class="hero-role">Cybersecurity Graduate · U.S. Army Veteran · HomeLAB'r</p>
    <p class="hero-summary">My path combines military logistics, customer-facing operations, and hands-on infrastructure work. I am pursuing a B.S. in Cybersecurity Management and building toward opportunities in GRC, IT support, and junior security analysis.</p>
    <div class="hero-actions"><a class="button primary" href="#/projects">View Projects</a><a class="button" href="https://www.linkedin.com/in/randyebautista">LinkedIn</a><a class="button" href="https://bacano19.github.io/security-plus-study/">Security+ Study Site</a></div>
    </div>
    ${photo(['professional-headshot.jpg', 'Professional portrait of Randy Bautista.', 1050, 1400], true)}
    </section>
    <section class="qualifications" aria-label="Qualifications at a glance"><div class="quick-stats"><div><span class="card-kicker">Completed</span><strong>A.S. Cybersecurity</strong><span>American Military University</span></div><div><span class="card-kicker">In Progress</span><strong>B.S. Cybersecurity Management</strong><span>Expected December 31, 2026 · GPA 3.8</span></div><div><span class="card-kicker">Professional Development</span><strong>Security+ Preparation</strong><span>Bootcamp recently started · Not yet certified</span></div></div></section>
    <section class="section-band surface"><div class="section-heading"><h2>From Military Logistics To Cybersecurity.</h2><p class="intro">Military logistics taught me accountability. Civilian operations taught me to communicate under pressure. My HomeLAB gives me a hands-on way to understand the systems that governance, risk, and compliance programs protect.</p></div>${cards([
      ['Cybersecurity direction', 'Connecting technical decisions with organizational responsibility, risk, and evidence.', '#/cybersecurity', 'Explore cybersecurity'],
      ['Practical infrastructure', 'Building and documenting a personal environment for systems, security, and local AI practice.', '#/homelab', 'Explore the lab'],
      ['Experience and education', 'Military accountability, operational strengths, and continued academic development.', '#/experience', 'View experience']
    ], 'feature')}</section>
    <section class="section-band"><div class="section-heading"><h2>Practical Work.<br>Continued Learning.</h2></div>${projectCards(portfolio.projects.cards.slice(0, 3))}<div class="hero-actions section-actions"><a class="button primary" href="#/projects">All Projects →</a><a class="button" href="#/credentials">Education And Credentials →</a></div></section>${contactCTA()}`;
}

function setMenu(open) {
  document.body.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

let revealObserver;
function initReveal() {
  revealObserver?.disconnect();
  if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.section-heading, .feature-card, .lab-card, .credential-image, .credential-card, .experience-card, .about-card, .quick-stats div');
  targets.forEach((t) => t.classList.add('reveal'));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    },
    { threshold: 0.14 }
  );
  revealObserver = observer;
  targets.forEach((t) => observer.observe(t));
}

function render() {
  if (location.hash === '#main') return;
  const route = location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  const isHome = route === '' || route === 'home';
  const page = Object.hasOwn(portfolio, route) ? portfolio[route] : null;

  if (isHome) {
    main.innerHTML = home();
  } else if (page) {
    let content = '';
    let headingImage = '';
    if (route === 'credentials') {
      headingImage = photo(page.images[0], true);
      content = credentialsContent(page);
    } else if (route === 'cybersecurity') {
      content = courseworkCards(page.cards);
    } else if (route === 'homelab') {
      headingImage = photo(page.images[0], true);
      content = `<div class="lab-icon-strip">${pageImages(page.images.slice(1))}</div>${cards(page.cards, 'lab')}`;
    } else if (route === 'experience') {
      headingImage = photo(page.images[0], true);
      content = `<div class="experience-lead">${pageImages(page.images.slice(1))}${experienceCard(page.cards[0])}</div>${cards(page.cards.slice(1), 'experience')}`;
    } else if (route === 'projects') {
      content = projectCards(page.cards);
    } else if (route === 'contact') {
      content = cards(page.cards);
    } else {
      content = cards(page.cards);
    }
    main.innerHTML = `<div class="view view-${route}"><section id="${route}" class="section-band page-heading${headingImage ? ' with-photo' : ''}"><div><h1 tabindex="-1">${escapeHTML(headingText(page.title))}</h1><p class="section-intro">${escapeHTML(page.description)}</p></div>${headingImage}</section><section class="section-band surface"><div class="section-heading"><h2>${escapeHTML(headingText(page.section))}</h2></div>${content}</section></div>${route === 'contact' ? '' : contactCTA()}`;
  } else {
    main.innerHTML = '<section class="section-band page-heading"><h1 tabindex="-1">Page Not Found</h1><p>Choose a view from the navigation or return home.</p><a class="button primary" href="#/">Return Home</a></section>';
  }

  document.title = `${isHome ? "Home" : page ? page.label : "Page not found"} | Randy Bautista`;
  document.querySelector("meta[name=\"description\"]").content = isHome
    ? "Randy Bautista: cybersecurity graduate, U.S. Army veteran, and HomeLAB'r."
    : page ? page.description : 'This portfolio view could not be found.';

  nav.querySelectorAll('a').forEach((link) => {
    const active = link.getAttribute('href') === (isHome ? '#/' : `#/${route}`);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  setMenu(false);
  main.querySelector('h1')?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });

  initReveal();
}

toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenu(false);
    if (event.target.closest('a').hash === location.hash) main.querySelector('h1')?.focus();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
});
document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
document.querySelector('.skip-link').addEventListener('click', (event) => { event.preventDefault(); main.focus(); });
window.matchMedia('(min-width: 1101px)').addEventListener('change', () => setMenu(false));
window.addEventListener('hashchange', render);
render();

