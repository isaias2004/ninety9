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

var typed = new Typed('.element', {
  strings: ["Somos una productora audiovisual de <b>Contenido productivo</b>.",
   "Productora de publicidad para contenido <b>Social media</b>."],
  typeSpeed: 60,
  backSpeed: 25,
  startDelay: 300,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: '|',
  contentType: 'html',
});