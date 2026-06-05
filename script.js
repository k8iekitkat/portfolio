const progressFill = document.getElementById('progress-fill');
const sections = document.querySelectorAll('main section');

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressFill.style.width = `${progress.toFixed(1)}%`;
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        const activeLinks = document.querySelectorAll(`.bottom-bar-links a[href='#${id}']`);
        document.querySelectorAll('.bottom-bar-links a').forEach((link) => link.classList.remove('active'));
        activeLinks.forEach((link) => link.classList.add('active'));
      });
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
observeSections();
updateProgress();
