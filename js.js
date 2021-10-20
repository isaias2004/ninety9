window.addEventListener('scroll',function(){

    var imagen = document.querySelectorAll('.fade_up');

for(var i = 0; i < imagen.length; i++){
    
    
    var altura = window.innerHeight/1.1;

    var distancia = imagen[i].getBoundingClientRect().top;



    console.log(altura);
    console.log(distancia);

        imagen[i].classList.add('transform_up')


    if(distancia <= altura){

        imagen[i].classList.add('aparece');






    }
        else{
            imagen[i].classList.remove('aparece');
        }

}


})

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