const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');

let slidePosition = 0;
const slideWidth = slides[0].offsetWidth;
const slideCount = slides.length;

function slideToNext() {
  if (slidePosition === slideCount - 1) {
    // If at the last slide, go back to the first slide
    slider.style.transition = 'none';
    slidePosition = 0;
    slider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
    // Add animation class
    slider.classList.add('slider-transition');
    setTimeout(() => {
      slider.style.transition = '';
      slider.classList.remove('slider-transition');
    }, 10);
  } else {
    // Go to the next slide
    slidePosition++;
    slider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
  }
}

function slideToPrev() {
  if (slidePosition === 0) {
    // If at the first slide, go to the last slide
    slider.style.transition = 'none';
    slidePosition = slideCount - 1;
    slider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
    // Add animation class
    slider.classList.add('slider-transition');
    setTimeout(() => {
      slider.style.transition = '';
      slider.classList.remove('slider-transition');
    }, 10);
  } else {
    // Go to the previous slide
    slidePosition--;
    slider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
  }
}

let autoSlideInterval = setInterval(slideToNext, 5000);

function resetAutoSlideInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(slideToNext, 5000);
}

prevBtn.addEventListener('click', () => {
  slideToPrev();
  resetAutoSlideInterval();
});

nextBtn.addEventListener('click', () => {
  slideToNext();
  resetAutoSlideInterval();
});
