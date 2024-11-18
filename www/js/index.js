document.querySelector('#mobile-nav').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const link = event.target.querySelector('a');
    if (link) {
      link.click();
    }
  }
});

function xMenu(x) {
  x.classList.toggle('menu-open');
  const hiddenMenu = document.getElementById('mobile-nav');
  hiddenMenu.classList.toggle('open');
  hiddenMenu.classList.toggle('hidden');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  location.hash = sectionId;
  section.scrollIntoView({ behavior: 'smooth' });
};