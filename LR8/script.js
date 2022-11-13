function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider("#slider-1", {
    autoplay: true,
    interval: 10000,
  });

  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider("#slider-2", {
    autoplay: true,
    interval: 10000,
  });
});
