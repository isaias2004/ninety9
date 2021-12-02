
var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

const typed = new Typed('.typed', {
    strings: ['Estamos muy agradecidos por tu contacto y apreciamos que estés en nuestro sitio web, será genial conocer tu <b>proyecto</b> y trabajar <b>juntos</b>!'],

    typeSpeed: 35,
    startDelay: 300,
    backSpeed: 15,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});