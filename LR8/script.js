function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // ініціалізація слайдера
  var slider = new SimpleAdaptiveSlider("#slider-1", {
    autoplay: true,
    interval: 10000,
  });

  // ініціалізація слайдера
  var slider = new SimpleAdaptiveSlider("#slider-2", {
    autoplay: true,
    interval: 10000,
  });
});
