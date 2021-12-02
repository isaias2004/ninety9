
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
    strings: ['SOMOS UNA PRODUCTORA AUDIOVISUAL DE CONTENIDO <b style = font-size:80px;>CREATIVO</b>',
    'PRODUCIMOS CONTENIDOS TESTIMONIALES PARA <b style = font-size:80px;>COMUNICACIÓN</b>',
    'PRODUCIMOS MATERIALES CREATIVOS PARA<br> <b style = font-size:80px;>SOCIAL MEDIA</b>',
    'CREAMOS TODO TIPO DE PIEZAS AUDIOVISUALES PARA <b style = font-size:80px;>PUBLICIDAD</b>'],

    typeSpeed: 50,
    startDelay: 300,
    backSpeed: 15,
    loopCount: false,
    showCursor: true,
    smartBackSpace: true,
    cursorChar: '|',
    contentType: 'html',
});