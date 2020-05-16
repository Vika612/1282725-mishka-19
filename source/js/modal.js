var cart = document.querySelectorAll('.js-button');
var popup = document.querySelector('.modal-popup');

cart.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

/*закрытие окна?*/
