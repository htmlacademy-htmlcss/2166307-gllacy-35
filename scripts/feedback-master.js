//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ----------------------------------------------



var OpenWinEvent = document.querySelectorAll('.feedback-btn')[0];
OpenWinEvent.addEventListener('click', showModalWin)

function showModalWin() {
  var darkLayer = document.querySelectorAll('.shadow')[0]; // слой затемнения
  document.querySelectorAll('.shadow')[0].style.setProperty('--display', 'block'); // делаем полупрозрачный фон видимым
  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  modalWin.style.display = 'block'; // делаем его видимым

  darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
    document.querySelectorAll('.shadow')[0].style.setProperty('--display', 'none'); // удаляем полупрозрачную заливку вокруг модального окна
    modalWin.style.display = 'none'; // выключаем модальное окно
    return false;
  };
}

var closeWinEvent = document.querySelectorAll('.close-button')[0];
closeWinEvent.addEventListener('click', function () {  // обработчик кнопки закрытия модального окна
  var modalWin = document.getElementById('popupWin'); // находим наше окошко

  document.querySelectorAll('.shadow')[0].style.setProperty('--display', 'none'); // убираем полупрозрачный фон
  document.getElementById('feedback-window').reset() // делаем сброс формы перед выключением модального окна
  modalWin.style.display = 'none'; // выключаем модальное окно

  ValidateAccess = false; // возвращаем флаг для обработки input email в исходное состояние
  document.querySelector('.email-input').style.setProperty("--color-invalid", "#B9B9B9"); // ставим исходный черный цвет на бордер input-mail
  document.querySelector('.email-container').style.setProperty("--color-invalid", "#2D3440"); // ставим исходный черный цвет на фокус input-mail
  return false;
});

// закрытие меню по нажатию клавиши ESC
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) { // код клавиши Escape, но можно использовать e.key
    var modalWin = document.getElementById('popupWin'); // находим наше окошко
    document.querySelectorAll('.shadow')[0].style.setProperty('--display', 'none'); // убираем полупрозрачный фон
    document.getElementById('feedback-window').reset() // делаем сброс формы перед выключением модального окна

    ValidateAccess = false; // возвращаем флаг для обработки input email в исходное состояние
    document.querySelector('.email-input').style.setProperty("--color-invalid", "#B9B9B9"); // ставим исходный черный цвет на бордер input-mail
    document.querySelector('.email-container').style.setProperty("--color-invalid", "#2D3440"); // ставим исходный черный цвет на фокус input-mail
    modalWin.style.display = 'none'; // выключаем модальное окно
  }
});

//----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА -----------------------------------------------
