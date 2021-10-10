window.addEventListener('scroll',function(){

    var imagen = document.querySelectorAll('.fade_up')[0];


    var altura = window.innerHeight/1.1;

    var distancia = imagen.getBoundingClientRect().top;



    console.log(altura);
    console.log(distancia);

        imagen.classList.add('transform_up')


    if(distancia <= altura){

        imagen.classList.add('aparece');






    }
        else{
            imagen.classList.remove('aparece');
        }




})