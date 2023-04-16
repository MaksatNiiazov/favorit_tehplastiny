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



const container = document.querySelector('.slider-container1');
const prevButton = document.querySelector('.slider-prev1');
const nextButton = document.querySelector('.slider-next1');
const slides1 = document.querySelectorAll('.slider-slide1');
let index = 0;

function displaySlide(slideIndex) {
  container.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function displayPrevSlide() {
  index--;
  if (index < 0) {
    index = slides1.length - 1;
  }
  displaySlide(index);
}

function displayNextSlide() {
  index++;
  if (index >= slides1.length) {
    index = 0;
  }
  displaySlide(index);
}

prevButton.addEventListener('click', displayPrevSlide);
nextButton.addEventListener('click', displayNextSlide);
displaySlide(index);
