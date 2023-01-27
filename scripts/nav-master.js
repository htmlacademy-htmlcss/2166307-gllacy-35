
var CatalogEvent = document.getElementById('catalog-btn');
CatalogEvent.addEventListener('click', CatalogToggleFunction);

var SearchEvent = document.getElementById('search-btn');
SearchEvent.addEventListener('click', SearchToggleFunction);

var LoginEvent = document.getElementById('login-btn');
LoginEvent.addEventListener('click', LoginToggleFunction);

var BasketEvent = document.getElementById('basket-btn');
BasketEvent.addEventListener('click', BasketToggleFunction);


function CatalogToggleFunction() {
  if(document.getElementById("catalog-btn").value=="off") {
   document.getElementById("catalog-btn").value="on";

 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--color", "#FCFCFC"); // текст сделали белым
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--top", "11.5px"); // стрелку белую чутка перепозиционировали
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/up-arrow.svg')"); //стрелку перевернули и сделали белой
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
 document.querySelectorAll('.catalog-menu')[0].style.setProperty("--display", "flex");

}
else {
document.querySelectorAll('.catalog-menu')[0].style.setProperty("--display", "none");
document.getElementById("catalog-btn").value="off";
//все св-ва возвращаем на исходные позиции
document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-color", "transparent");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--color", "#2D3440");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--top", "8.5px");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/down-arrow.svg')");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--opacity-hover", "1");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--opacity-active", "1");
 document.querySelectorAll('.catalog-button')[0].style.setProperty("--border", "2px solid #2D3440");
}
}


function SearchToggleFunction() {
  if(document.getElementById("search-btn").value=="off") {

   document.getElementById("search-btn").value="on";
   document.querySelectorAll('.search-button')[0].style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
   document.querySelectorAll('.search-button')[0].style.setProperty("--background-image", "url('../images/search-on-icon.svg')"); //делаем лупу белой
   document.querySelectorAll('.search-button')[0].style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
   document.querySelectorAll('.search-button')[0].style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
   document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
   document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
   document.querySelectorAll('.search-button')[0].style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
   document.querySelectorAll('.search-form')[0].style.setProperty("--display", "flex");

     //закрываем логин, если он открыт
  document.querySelectorAll('.login-form')[0].style.setProperty("--display", "none");
  document.getElementById("login-btn").value="off";
  document.querySelectorAll('.login-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
  document.querySelectorAll('.login-button')[0].style.setProperty("--background-image", "url('../images/login-icon.svg')");
  document.querySelectorAll('.login-button')[0].style.setProperty("--color", "#2D3440");
  document.querySelectorAll('.login-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
  document.querySelectorAll('.login-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
  document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-hover", "1");
  document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-active", "1");
  document.querySelectorAll('.login-button')[0].style.setProperty("--border", "2px solid #2D3440");

  //закрываем корзину, если она открыта
document.querySelectorAll('.basket-form')[0].style.setProperty("--display", "none");
document.getElementById("basket-btn").value="off";
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-image", "url('../images/сart-icon.svg')");
document.querySelectorAll('.basket-button')[0].style.setProperty("--color", "#2D3440");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-hover", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-active", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--border", "2px solid #2D3440");

}
else {
document.querySelectorAll('.search-form')[0].style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
//все св-ва возвращаем на исходные позиции
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-hover", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-active", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--border", "2px solid #2D3440");
}
}


function LoginToggleFunction() {
  if(document.getElementById("login-btn").value=="off") {

   document.getElementById("login-btn").value="on";

   document.querySelectorAll('.login-button')[0].style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
   document.querySelectorAll('.login-button')[0].style.setProperty("--background-image", "url('../images/logged-icon.svg')"); //делаем иконку белой
   document.querySelectorAll('.login-button')[0].style.setProperty("--color", "#FCFCFC");
   document.querySelectorAll('.login-button')[0].style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
   document.querySelectorAll('.login-button')[0].style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
   document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
   document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
   document.querySelectorAll('.login-button')[0].style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
   document.querySelectorAll('.login-button')[0].style.setProperty("--display", "flex");
  document.querySelectorAll('.login-form')[0].style.setProperty("--display", "flex");

//закрываем корзину, если она открыта
document.querySelectorAll('.basket-form')[0].style.setProperty("--display", "none");
document.getElementById("basket-btn").value="off";
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-image", "url('../images/сart-icon.svg')");
document.querySelectorAll('.basket-button')[0].style.setProperty("--color", "#2D3440");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-hover", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-active", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--border", "2px solid #2D3440");

//закрываем поиск, если он открыт
document.querySelectorAll('.search-form')[0].style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-hover", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-active", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--border", "2px solid #2D3440");
}
else {
document.querySelectorAll('.login-form')[0].style.setProperty("--display", "none");
document.getElementById("login-btn").value="off";

//все св-ва возвращаем на исходные позиции
document.querySelectorAll('.login-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-image", "url('../images/login-icon.svg')");
document.querySelectorAll('.login-button')[0].style.setProperty("--color", "#2D3440");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-hover", "1");
document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-active", "1");
document.querySelectorAll('.login-button')[0].style.setProperty("--border", "2px solid #2D3440");
}
}



function BasketToggleFunction() {
  if(document.getElementById("basket-btn").value=="off") {

   document.getElementById("basket-btn").value="on";

  document.querySelectorAll('.basket-button')[0].style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
  document.querySelectorAll('.basket-button')[0].style.setProperty("--background-image", "url('../images/opened-cart.svg')"); //делаем иконку белой
  document.querySelectorAll('.basket-button')[0].style.setProperty("--color", "#FCFCFC");
  document.querySelectorAll('.basket-button')[0].style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
  document.querySelectorAll('.basket-button')[0].style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
  document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
  document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
  document.querySelectorAll('.basket-button')[0].style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
  document.querySelectorAll('.basket-button')[0].style.setProperty("--display", "flex");
  document.querySelectorAll('.basket-form')[0].style.setProperty("--display", "flex");

  //закрываем логин, если он открыт
  document.querySelectorAll('.login-form')[0].style.setProperty("--display", "none");
document.getElementById("login-btn").value="off";
document.querySelectorAll('.login-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-image", "url('../images/login-icon.svg')");
document.querySelectorAll('.login-button')[0].style.setProperty("--color", "#2D3440");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelectorAll('.login-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-hover", "1");
document.querySelectorAll('.login-button')[0].style.setProperty("--opacity-active", "1");
document.querySelectorAll('.login-button')[0].style.setProperty("--border", "2px solid #2D3440");

//закрываем поиск, если он открыт
document.querySelectorAll('.search-form')[0].style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-hover", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--opacity-active", "1");
 document.querySelectorAll('.search-button')[0].style.setProperty("--border", "2px solid #2D3440");

}
else {
document.querySelectorAll('.basket-form')[0].style.setProperty("--display", "none");
document.getElementById("basket-btn").value="off";

//все св-ва возвращаем на исходные позиции
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-image", "url('../images/сart-icon.svg')");
document.querySelectorAll('.basket-button')[0].style.setProperty("--color", "#2D3440");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-hover", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--opacity-active", "1");
document.querySelectorAll('.basket-button')[0].style.setProperty("--border", "2px solid #2D3440");
}
}
