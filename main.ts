const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;
try { paused = localStorage.getItem('webora-motion') === 'paused'; } catch {}
const motionAllowed = () => !reducedMotion.matches && !paused;
const root = document.documentElement;
root.classList.add('js');
const motionButton = document.querySelector<HTMLButtonElement>('.motion-toggle');
function updateMotion() {
  root.classList.toggle('motion-paused', !motionAllowed());
  motionButton?.setAttribute('aria-pressed', String(paused));
  if (motionButton) motionButton.textContent = paused ? 'Resume motion' : 'Pause motion';
  if (!motionAllowed()) document.querySelectorAll<HTMLElement>('[data-parallax], [data-drift], .orb').forEach(el => el.style.transform = 'none');
}
updateMotion();
reducedMotion.addEventListener('change', updateMotion);
motionButton?.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('webora-motion', paused ? 'paused' : 'playing'); } catch {}
  updateMotion();
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .06 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const menu = document.querySelector<HTMLButtonElement>('.menu')!;
const navigation = document.querySelector<HTMLElement>('#navigation')!;
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu +'; }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Close −' : 'Menu +'; });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const briefDialog = document.querySelector<HTMLDialogElement>('#brief-dialog')!;
document.querySelector('#brief-open')?.addEventListener('click', () => { briefDialog.showModal(); document.body.style.overflow = 'hidden'; });
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close(); });
});
const select = document.querySelector<HTMLSelectElement>('#service-select')!;
const requestedService = new URLSearchParams(location.search).get('service');
if (requestedService && [...select.options].some(option => option.value === requestedService)) select.value = requestedService;
document.querySelector('#year')!.textContent = String(new Date().getFullYear());
document.querySelector<HTMLFormElement>('#brief-form')!.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Hi Webora! I'm ${data.get('name')}.\n\nService: ${data.get('service')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  const url = `https://wa.me/918469030829?text=${encodeURIComponent(message)}`;
  const status = document.querySelector('#form-status')!;
  status.replaceChildren();
  const fallback = document.createElement('a');
  fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'Open your WhatsApp draft ↗';
  status.append('Review and send your message in WhatsApp. If it did not open, ', fallback);
  window.open(url, '_blank', 'noopener,noreferrer');
});
const filters = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll<HTMLElement>('.work-index .project').forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
    if (!project.hidden) { count++; project.classList.add('visible'); }
  });
  document.querySelector('.filter-status')!.textContent = `Showing ${count} concept project${count === 1 ? '' : 's'}`;
}));
const progress = document.querySelector<HTMLElement>('.scroll-progress')!;
const showcase = document.querySelector<HTMLElement>('.showcase');
const orb = document.querySelector<HTMLElement>('.orb');
const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const drift = [...document.querySelectorAll<HTMLElement>('[data-drift]')];
const brandStory = document.querySelector<HTMLElement>('.brand-story');
let ticking = false;
function paintScroll() {
  const scrollable = root.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${scrollable > 0 ? scrollY / scrollable : 0})`;
  if (motionAllowed()) {
    if (brandStory) { const r = brandStory.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) brandStory.style.setProperty('--story-turn', `${(innerHeight - r.top) * .15}deg`); }
    if (showcase && orb) { const r = showcase.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) orb.style.transform = `translateY(${(innerHeight / 2 - r.top) * .035}px) rotate(${-20 + (innerHeight / 2 - r.top) * .02}deg)`; }
    parallax.forEach(el => { const r = el.parentElement!.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) el.style.transform = `translateY(${(innerHeight / 2 - r.top) * Number(el.dataset.parallax)}px)`; });
    drift.forEach(el => { const r = el.parentElement!.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) el.style.transform = `translateX(${-(innerHeight - r.top) * .1}px)`; });
  }
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(paintScroll); } }, { passive: true });
window.addEventListener('resize', paintScroll);
paintScroll();
// A short exit transition only for normal, same-origin page navigation.
document.addEventListener('click', event => {
  const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download') || !motionAllowed()) return;
  const next = new URL(anchor.href, location.href);
  if (next.origin !== location.origin || next.pathname === location.pathname || !next.pathname.endsWith('.html')) return;
  event.preventDefault();
  root.classList.add('page-leaving');
  setTimeout(() => location.assign(next.href), 260);
});
window.addEventListener('pageshow', () => root.classList.remove('page-leaving'));
