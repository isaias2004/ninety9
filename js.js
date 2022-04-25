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

const $form = document.querySelector('#form') 
        const $buttonMailto = document.querySelector('#trucazo') 

        $form.addEventListener('submit', handleSubmit)

        function handleSubmit(event){
        event.preventDefault()
        const form = new FormData(this)
        console.log(form.get('name'))
        $buttonMailto.setAttribute('href', `mailto:ninety9@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
        $buttonMailto.click()
        
    }