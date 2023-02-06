
var CatalogEvent = document.getElementById('catalog-btn');
CatalogEvent.addEventListener('click', CatalogToggleFunction);

var SearchEvent = document.getElementById('search-btn');
SearchEvent.addEventListener('click', SearchToggleFunction);

var LoginEvent = document.getElementById('login-btn');
LoginEvent.addEventListener('click', LoginToggleFunction);

var BasketEvent = document.getElementById('basket-btn');
BasketEvent.addEventListener('click', BasketToggleFunction);



// закрытие меню по нажатию клавиши ESC
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
		 //закрываем логин, если он открыт
     document.querySelector('.login-form').style.setProperty("--display", "none");
     document.getElementById("login-btn").value="off";
     document.querySelector('.login-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
     document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/login-icon.svg')");
     document.querySelector('.login-button').style.setProperty("--color", "#2D3440");
     document.querySelector('.login-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
     document.querySelector('.login-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
     document.querySelector('.login-button').style.setProperty("--opacity-hover", "1");
     document.querySelector('.login-button').style.setProperty("--opacity-active", "1");
     document.querySelector('.login-button').style.setProperty("--border", "2px solid #2D3440");

     //закрываем корзину, если она открыта
   document.querySelector('.basket-form').style.setProperty("--display", "none");
   document.getElementById("basket-btn").value="off";
   document.querySelector('.basket-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
   document.querySelector('.basket-button').style.setProperty("--background-image", "url('../images/сart-icon.svg')");
   document.querySelector('.basket-button').style.setProperty("--color", "#2D3440");
   document.querySelector('.basket-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
   document.querySelector('.basket-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
   document.querySelector('.basket-button').style.setProperty("--opacity-hover", "1");
   document.querySelector('.basket-button').style.setProperty("--opacity-active", "1");
   document.querySelector('.basket-button').style.setProperty("--border", "2px solid #2D3440");

   //закрываем поиск, если он открыт
document.querySelector('.search-form').style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
 document.querySelector('.search-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelector('.search-button').style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelector('.search-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelector('.search-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelector('.search-button').style.setProperty("--opacity-hover", "1");
 document.querySelector('.search-button').style.setProperty("--opacity-active", "1");
 document.querySelector('.search-button').style.setProperty("--border", "2px solid #2D3440");

//закрываем каталог-меню, если оно открыто
 document.querySelector('.catalog-menu').style.setProperty("--display", "none");
document.getElementById("catalog-btn").value="off";
document.querySelector('.catalog-button').style.setProperty("--background-color", "transparent");
 document.querySelector('.catalog-button').style.setProperty("--color", "#2D3440");
 document.querySelector('.catalog-button').style.setProperty("--top", "8.5px");
 document.querySelector('.catalog-button').style.setProperty("--background-image", "url('../images/down-arrow.svg')");
 document.querySelector('.catalog-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelector('.catalog-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelector('.catalog-button').style.setProperty("--opacity-hover", "1");
 document.querySelector('.catalog-button').style.setProperty("--opacity-active", "1");
 document.querySelector('.catalog-button').style.setProperty("--border", "2px solid #2D3440");
	}
});


function CatalogToggleFunction() {
  if(document.getElementById("catalog-btn").value=="off") {
   document.getElementById("catalog-btn").value="on";

 document.querySelector('.catalog-button').style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
 document.querySelector('.catalog-button').style.setProperty("--color", "#FCFCFC"); // текст сделали белым
 document.querySelector('.catalog-button').style.setProperty("--top", "11.5px"); // стрелку белую чутка перепозиционировали
 document.querySelector('.catalog-button').style.setProperty("--background-image", "url('../images/up-arrow.svg')"); //стрелку перевернули и сделали белой
 document.querySelector('.catalog-button').style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
 document.querySelector('.catalog-button').style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
 document.querySelector('.catalog-button').style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
 document.querySelector('.catalog-button').style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
 document.querySelector('.catalog-button').style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
 document.querySelector('.catalog-menu').style.setProperty("--display", "flex");

 // закрытие элемента по клику вне элемента
 document.addEventListener("mouseup", function(event) {
  var obj = document.querySelector('.catalog-menu');
  if (!obj.contains(event.target) ) {
    document.querySelector('.catalog-menu').style.setProperty("--display", "none");
    document.getElementById("catalog-btn").value="off";
    document.querySelector('.catalog-button').style.setProperty("--background-color", "transparent");
     document.querySelector('.catalog-button').style.setProperty("--color", "#2D3440");
     document.querySelector('.catalog-button').style.setProperty("--top", "8.5px");
     document.querySelector('.catalog-button').style.setProperty("--background-image", "url('../images/down-arrow.svg')");
     document.querySelector('.catalog-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
     document.querySelector('.catalog-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
     document.querySelector('.catalog-button').style.setProperty("--opacity-hover", "1");
     document.querySelector('.catalog-button').style.setProperty("--opacity-active", "1");
     document.querySelector('.catalog-button').style.setProperty("--border", "2px solid #2D3440");
  }
  else {
    //  alert("Обнаружен ВНУТРЕННИЙ клик!");
; //иначе, если клик состоялся по элементу ---> тогда НИЧЕГО не делаем
  }
} );

}
else {

document.querySelector('.catalog-menu').style.setProperty("--display", "none");
document.getElementById("catalog-btn").value="off";
//все св-ва возвращаем на исходные позиции
document.querySelector('.catalog-button').style.setProperty("--background-color", "transparent");
 document.querySelector('.catalog-button').style.setProperty("--color", "#2D3440");
 document.querySelector('.catalog-button').style.setProperty("--top", "8.5px");
 document.querySelector('.catalog-button').style.setProperty("--background-image", "url('../images/down-arrow.svg')");
 document.querySelector('.catalog-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelector('.catalog-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelector('.catalog-button').style.setProperty("--opacity-hover", "1");
 document.querySelector('.catalog-button').style.setProperty("--opacity-active", "1");
 document.querySelector('.catalog-button').style.setProperty("--border", "2px solid #2D3440");
}
}


function SearchToggleFunction() {
  if(document.getElementById("search-btn").value=="off") {

   document.getElementById("search-btn").value="on";
   document.querySelector('.search-button').style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
   document.querySelector('.search-button').style.setProperty("--background-image", "url('../images/search-on-icon.svg')"); //делаем лупу белой
   document.querySelector('.search-button').style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
   document.querySelector('.search-button').style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
   document.querySelector('.search-button').style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
   document.querySelector('.search-button').style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
   document.querySelector('.search-button').style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
   document.querySelector('.search-form').style.setProperty("--display", "flex");

   // закрытие элемента по клику вне элемента
 document.addEventListener("mouseup", function(event) {
  var obj = document.querySelector('.search-form');
  if (!obj.contains(event.target) ) {
    document.querySelector('.search-form').style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
//все св-ва возвращаем на исходные позиции
 document.querySelector('.search-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelector('.search-button').style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelector('.search-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelector('.search-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelector('.search-button').style.setProperty("--opacity-hover", "1");
 document.querySelector('.search-button').style.setProperty("--opacity-active", "1");
 document.querySelector('.search-button').style.setProperty("--border", "2px solid #2D3440");
  }
  else {
    //  alert("Обнаружен ВНУТРЕННИЙ клик!");
; //иначе, если клик состоялся по элементу ---> тогда НИЧЕГО не делаем
  }
} );

}
else {
document.querySelector('.search-form').style.setProperty("--display", "none");
document.getElementById("search-btn").value="off";
//все св-ва возвращаем на исходные позиции
 document.querySelector('.search-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
 document.querySelector('.search-button').style.setProperty("--background-image", "url('../images/search-icon.svg')");
 document.querySelector('.search-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
 document.querySelector('.search-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
 document.querySelector('.search-button').style.setProperty("--opacity-hover", "1");
 document.querySelector('.search-button').style.setProperty("--opacity-active", "1");
 document.querySelector('.search-button').style.setProperty("--border", "2px solid #2D3440");
}
}


function LoginToggleFunction() {
  if(document.getElementById("login-btn").value=="off") {

   document.getElementById("login-btn").value="on";

   document.querySelector('.login-button').style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
   document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/logged-icon.svg')"); //делаем иконку белой
   document.querySelector('.login-button').style.setProperty("--color", "#FCFCFC");
   document.querySelector('.login-button').style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
   document.querySelector('.login-button').style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
   document.querySelector('.login-button').style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
   document.querySelector('.login-button').style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
   document.querySelector('.login-button').style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
   document.querySelector('.login-button').style.setProperty("--display", "flex");
  document.querySelector('.login-form').style.setProperty("--display", "flex");

   // закрытие элемента по клику вне элемента
   document.addEventListener("mouseup", function(event) {
    var obj = document.querySelector('.login-form');
    if (!obj.contains(event.target) ) {
      document.querySelector('.login-form').style.setProperty("--display", "none");
document.getElementById("login-btn").value="off";
//все св-ва возвращаем на исходные позиции
document.querySelector('.login-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/login-icon.svg')");
document.querySelector('.login-button').style.setProperty("--color", "#2D3440");
document.querySelector('.login-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelector('.login-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelector('.login-button').style.setProperty("--opacity-hover", "1");
document.querySelector('.login-button').style.setProperty("--opacity-active", "1");
document.querySelector('.login-button').style.setProperty("--border", "2px solid #2D3440");
    }
    else {
      //  alert("Обнаружен ВНУТРЕННИЙ клик!");
  ; //иначе, если клик состоялся по элементу ---> тогда НИЧЕГО не делаем
    }
  } );
}
else {
document.querySelector('.login-form').style.setProperty("--display", "none");
document.getElementById("login-btn").value="off";

//все св-ва возвращаем на исходные позиции
document.querySelector('.login-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/login-icon.svg')");
document.querySelector('.login-button').style.setProperty("--color", "#2D3440");
document.querySelector('.login-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelector('.login-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelector('.login-button').style.setProperty("--opacity-hover", "1");
document.querySelector('.login-button').style.setProperty("--opacity-active", "1");
document.querySelector('.login-button').style.setProperty("--border", "2px solid #2D3440");
}
}



function BasketToggleFunction() {
  if(document.getElementById("basket-btn").value=="off") {

   document.getElementById("basket-btn").value="on";

  document.querySelector('.basket-button').style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
  document.querySelector('.basket-button').style.setProperty("--background-image", "url('../images/opened-cart.svg')"); //делаем иконку белой
  document.querySelector('.basket-button').style.setProperty("--color", "#FCFCFC");
  document.querySelector('.basket-button').style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
  document.querySelector('.basket-button').style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
  document.querySelector('.basket-button').style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
  document.querySelector('.basket-button').style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
  document.querySelector('.basket-button').style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
  document.querySelector('.basket-button').style.setProperty("--display", "flex");
  document.querySelector('.basket-form').style.setProperty("--display", "flex");

  // закрытие элемента по клику вне элемента
  document.addEventListener("mouseup", function(event) {
    var obj = document.querySelector('.basket-form');
    if (!obj.contains(event.target) ) {
      document.querySelector('.basket-form').style.setProperty("--display", "none");
      document.getElementById("basket-btn").value="off";

      //все св-ва возвращаем на исходные позиции
      document.querySelector('.basket-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
      document.querySelector('.basket-button').style.setProperty("--background-image", "url('../images/сart-icon.svg')");
      document.querySelector('.basket-button').style.setProperty("--color", "#2D3440");
      document.querySelector('.basket-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
      document.querySelector('.basket-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
      document.querySelector('.basket-button').style.setProperty("--opacity-hover", "1");
      document.querySelector('.basket-button').style.setProperty("--opacity-active", "1");
      document.querySelector('.basket-button').style.setProperty("--border", "2px solid #2D3440");
    }
    else {
      //  alert("Обнаружен ВНУТРЕННИЙ клик!");
  ; //иначе, если клик состоялся по элементу ---> тогда НИЧЕГО не делаем
    }
  } );
}
else {
document.querySelector('.basket-form').style.setProperty("--display", "none");
document.getElementById("basket-btn").value="off";

//все св-ва возвращаем на исходные позиции
document.querySelector('.basket-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
document.querySelector('.basket-button').style.setProperty("--background-image", "url('../images/сart-icon.svg')");
document.querySelector('.basket-button').style.setProperty("--color", "#2D3440");
document.querySelector('.basket-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
document.querySelector('.basket-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
document.querySelector('.basket-button').style.setProperty("--opacity-hover", "1");
document.querySelector('.basket-button').style.setProperty("--opacity-active", "1");
document.querySelector('.basket-button').style.setProperty("--border", "2px solid #2D3440");
}
}
