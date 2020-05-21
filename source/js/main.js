var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/*pop-up*/

var cart = document.querySelectorAll(".js-button");
var popup = document.querySelector(".modal-popup");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show")
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
