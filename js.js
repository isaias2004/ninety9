
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
    strings: ['SOMOS UNA PRODUCTORA AUDIOVISUAL DE CONTENIDO <b>CREATIVO</b>',
    'PRODUCIMOS CONTENIDOS TESTIMONIALES PARA <b>COMUNICACIÓN</b>',
    'PRODUCIMOS MATERIALES <br>CREATIVOS PARA <b>SOCIAL MEDIA</b>',
    'CREAMOS TODO TIPO DE PIEZAS AUDIOVISUALES<br> PARA <b>PUBLICIDAD</b>'],

    typeSpeed: 50,
    startDelay: 300,
    backSpeed: 15,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});