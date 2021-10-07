const slides = document.querySelectorAll('.slide');

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    clearActiveClasses();
  }
});

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
