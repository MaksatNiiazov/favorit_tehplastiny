const sliderContainer = document.querySelector('.slider-container');
const sliderPrevButton = document.querySelector('.slider-prev');
const sliderNextButton = document.querySelector('.slider-next');
const slides = document.querySelectorAll('.slider-slide');
let slideIndex = 0;

function showSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

sliderPrevButton.addEventListener('click', showPrevSlide);
sliderNextButton.addEventListener('click', showNextSlide);
showSlide(slideIndex);