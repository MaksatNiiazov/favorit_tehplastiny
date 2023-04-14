document.addEventListener('DOMContentLoaded', function() {
    var liElements = document.querySelectorAll('li');
  
    for (var i = 0; i < liElements.length; i++) {
      var spanElement = liElements[i].querySelector('span');
      spanElement.style.display = 'none';
  
      liElements[i].addEventListener('click', function() {
        var spanElement = this.querySelector('span');
        spanElement.style.display = (spanElement.style.display === 'block') ? 'none' : 'block';
      });
    }
  });


// Получаем все кнопки "Открыть попап"
const openButtons = document.querySelectorAll('.open-popup');

// Добавляем обработчик события клика на каждую кнопку "Открыть попап"
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем всплывающее окно, связанное с данной кнопкой
    const popup = button.nextElementSibling;

    // Добавляем класс "active" для показа всплывающего окна и затемнения фона
    popup.classList.add('active');
    document.body.classList.add('popup-active');

    // Добавляем обработчик события клика на кнопку "Закрыть"
    const closePopupButton = popup.querySelector('.close-popup');
    closePopupButton.addEventListener('click', () => {
      // Удаляем класс "active" для скрытия всплывающего окна и затемнения фона
      popup.classList.remove('active');
      document.body.classList.remove('popup-active');
    });
  });
});

// Создаем карточки из массива данных cardsData
const cardContainer = document.querySelector('.card-container');

cardsData.forEach(cardData => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card-img');
  image.src = cardData.image;
  image.alt = cardData.title;

  const title = document.createElement('h2');
  title.textContent = cardData.title;

  const description = document.createElement('p');
  description.textContent = cardData.description;

  const openButton = document.createElement('button');
  openButton.classList.add('open-popup');
  openButton.textContent = 'Открыть попап';

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = '<p>Попап с дополнительной информацией.</p><button class="close-popup">Закрыть</button>';

  // Добавляем созданные элементы в карточку
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(openButton);
  card.appendChild(popup);

  // Добавляем карточку в контейнер для карточек
  cardContainer.appendChild(card);
});