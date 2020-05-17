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
