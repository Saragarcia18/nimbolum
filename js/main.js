const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const boxContent = document.querySelector('#box-content');
const imgNS = document.querySelectorAll('.img-ns');
const ConoceNos = document.querySelector('#conoce-nos');
const Juego = document.querySelectorAll('.conoce-juego');

// Evento Seccion Uno
 
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    let pot = window.scrollY
    if (pot <= 0) {
        boxContent.style.opacity = 1;
        boxContent.style.marginTop = '0px';
       
    } else if (pot >= 90) {
        boxContent.style.opacity = 0;
        boxContent.style.transitionDelay = '1.2s';
    }
})

// Evento Seccion Dos

window.addEventListener('scroll', function(){

    console.log(window.scrollY);
    let pot = window.scrollY
    
    if(pot >= 100){
        imgNS[0].style.marginTop = '0px';
        imgNS[0].style.opacity = 1;
        imgNS[0].style.transitionDelay = '1.4s';
    
        imgNS[1].style.marginTop = '0px';
        imgNS[1].style.opacity = 1;
        imgNS[1].style.transitionDelay = '1.6s';
    

    }else if(pot <= 90 ){
        imgNS[0].style.marginTop = '100px';
        imgNS[0].style.opacity = 0;
        imgNS[0].style.transitionDuration = '1s';
        imgNS[0].style.transitionDelay = '0s';
    
        imgNS[1].style.marginTop = '100px';
        imgNS[1].style.opacity = 0;
        imgNS[1].style.transitionDuration = '1.2s';
        imgNS[1].style.transitionDelay = '0s';
    
    }else if(pot >= 250 ){
        imgNS[0].style.marginTop = '100px';
        imgNS[0].style.opacity = 0;
        imgNS[0].style.transitionDuration = '1s';
        imgNS[0].style.transitionDelay = '0s';
    
        imgNS[1].style.marginTop = '100px';
        imgNS[1].style.opacity = 0;
        imgNS[1].style.transitionDuration = '1.2s';
        imgNS[1].style.transitionDelay = '0s';
    
    }
    })
     window.addEventListener('scroll', function(){
        let pot = window.scrollY
         console.log(window.scrollY);

         if (pos >= 100) {
             ConoceNos.style.marginTop = '0px';
             ConoceNos.style.opacity = 1;
             ConoceNos.style.transitionDelay = '1.4s';
            }else if (pos >= 300) {
                ConoceNos.style.opacity = 0;
            }
    })

    // Evento Seccion Tres
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);
        let pot = window.scrollY
        let pos = window.scrollY
        if (pos >= 500) {
            Juego.style.opacity = 1;
            Juego.style.marginTop = '0px';
            // Juego.style.marginTop = '0px';
            // Juego.style.opacity = 1;
            // boxContent.style.opacity = 1;
            // boxContent.style.marginTop = '0px';
        } else if (pos >= 10) {
            boxContent.style.opacity = 0;
            Juego.style.opacity = 0;
            Juego.style.marginTop = '100px';
        }
    })




 
    