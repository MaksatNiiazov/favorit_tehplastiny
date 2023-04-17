const overlay = document.querySelector('.custom-overlay');
const popup = document.querySelector('.custom-popup');
const closeButton = document.querySelector('.custom-close-popup');
const openButton = document.querySelector('.contact-us-button');

// Открытие попапа
openButton.addEventListener('click', function() {
  overlay.style.display = 'flex';
});

// Закрытие попапа по клику на крестик
closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});

// Закрытие попапа по клику вне попапа
overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});