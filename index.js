// DETECTING BUTTON PRESS

$(".drum").on("click", function () {
  var btnInnerHtml = this.innerHTML;
  makeSound(btnInnerHtml);
  btnAnimation(btnInnerHtml);
});

$(document).on("keypress", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var stom1 = new Audio("sounds/tom-1.mp3");
      stom1.play();
      break;

    case "a":
      var stom2 = new Audio("sounds/tom-2.mp3");
      stom2.play();
      break;

    case "s":
      var stom3 = new Audio("sounds/tom-3.mp3");
      stom3.play();
      break;

    case "d":
      var stom4 = new Audio("sounds/tom-4.mp3");
      stom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}

function btnAnimation(currentKey) {
  $("." + currentKey).addClass("pressed");

  setTimeout(function () {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}
