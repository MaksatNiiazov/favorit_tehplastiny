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



const openButtons = document.querySelectorAll('.open-popup');

openButtons.forEach(button => {
  button.addEventListener('click', () => {

    const popup = button.nextElementSibling;

    popup.classList.add('active');
    document.body.classList.add('popup-active');
    const closePopupButton = popup.querySelector('.close-popup');
    closePopupButton.addEventListener('click', () => {
      popup.classList.remove('active');
      document.body.classList.remove('popup-active');
    });
  });
});

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

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(openButton);
  card.appendChild(popup);

  cardContainer.appendChild(card);
});


