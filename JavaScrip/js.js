const slideContainer = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.carousel-controls button:first-child');
const nextButton = document.querySelector('.carousel-controls button:last-child');
const slideWidth = document.querySelector('.carousel-item').clientWidth;

let currentIndex = 0;

function updateSlidePosition() {
  slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 8) % 8;
  updateSlidePosition();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 8;
  updateSlidePosition();
}