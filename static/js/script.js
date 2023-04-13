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