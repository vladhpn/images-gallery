const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    // hundleClick();
    slide.classList.add('active');

    console.log('click');
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}

function hundleClick() {
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      slide.classList.toggle('active');
    });
  });
}
