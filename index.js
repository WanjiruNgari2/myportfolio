// Hamburger menu for mobile
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});

// Your existing smooth scroll (slightly cleaned)
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const target = document.querySelector(targetId);
  
  if (target) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, null, targetId);
  }
}