/* Индекс слайда по умолчанию */
var slideIndex = 1;
var j = 0;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function slider() {
    let div1 = document.getElementById('slider');
    let div2 = document.getElementById('slider-dots');
    j = j + 1
    let name = document.forms['myForm']['name'].value;
    div1.insertAdjacentHTML('afterbegin', '<div class="item"><div class="slideText" id="name"></div></div>');
    document.getElementById("name").innerHTML = name;

    div2.insertAdjacentHTML('beforeend', '<span class="slider-dots_item" onclick="currentSlide(' + j + ')"></span>');
}