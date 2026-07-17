const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('learnsphere-theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

mobileToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
});

themeToggle?.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', currentTheme);
  localStorage.setItem('learnsphere-theme', currentTheme);
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
    mobileMenu.style.display = 'none';
  }
});
