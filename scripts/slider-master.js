


let slideIndex = 0;
let timer = 0;

let next = document.getElementById('next');
const slides = document.getElementsByClassName("slider-check") //все радио контролы слайдов

//общая функция обновления активного слайда
function updateActiveSlide(n) {

  // в зависимости от слайда (n), ставим на body соответсвующий background
  switch (n) {
    case -1:
      document.querySelectorAll('.mybody')[0].style.setProperty("--background", "#FCC850");
      break;
    case 0:
      document.querySelectorAll('.mybody')[0].style.setProperty("--background", "#FEAFC3");
      break;
    case 1:
      document.querySelectorAll('.mybody')[0].style.setProperty("--background", "#69A9FF");
      break;
    case 2:
      document.querySelectorAll('.mybody')[0].style.setProperty("--background", "#FCC850");
      break;
    case 3:
      document.querySelectorAll('.mybody')[0].style.setProperty("--background", "#FEAFC3");
      break;
  }

  makeTimer();
  slideIndex = checkIndex(n)
  slides[slideIndex].checked = true
}

//здесь зацикливаем индексы
function checkIndex(n) {
  if (n >= slides.length) {
    return 0;

  }
  if (n < 0) {
    return slides.length - 1
  }
  return n
}

//листаем вправо
function nextSlide () {
  updateActiveSlide(slideIndex + 1)

}

//листаем влево
function prevSlide () {
  updateActiveSlide(slideIndex - 1)

}

//обновляем интервал
function makeTimer() {
  clearInterval(timer)
  timer = setInterval(function() { // setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
    nextSlide() //просто листаем вправо
  }, 650000); //<---- здесь можно задать временной интервал переключения слайдов в милли секундах [ 1000мс = 1с]
}

//вешаем обработчики событий

//обработчики кликов по радиокнопкам
Array.from(slides).forEach((current, index)=>{
  current.onclick = () => {
    updateActiveSlide(index)
  }
})

//обработчики на кнопки лево/право
document.querySelector('.right').onclick = nextSlide //по клику листать вправо
document.querySelector('.left').onclick = prevSlide //по клику листать влево

//запускаем листание
updateActiveSlide(slideIndex);
