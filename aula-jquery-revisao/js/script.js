/* PARTE 1 - ACCORDION

$(function(){
 
    //DOM para encontrar o elemento:
    var btnAccordion = {
        um: $('#btnAccordion'),
        dois: $('#btnAccordion2'),
        tres: $('#btnAccordion3')
    }

    var divItem = {
        um: $('#collapseOne'),
        dois: $('#collapseTwo'),
        tres: $('#collapseThree')
    }
 
    var controlador = {
        um: true,
        dois: false,
        tres: false
    }


 
    //Eventos para ter interatividade:
    btnAccordion.um.click(()=>{
       
        if(controlador){

            divItem.um.slideUp()
            controlador = false

        }else{

            divItem.um.slideDown()
            controlador = true

        }
 
    })

    btnAccordion.dois.click(()=>{
       
        if(controlador.dois){

            divItem.dois.slideUp()
            controlador.dois = false

        }else{

            divItem.dois.slideDown()
            controlador.dois = true

        }
 
    })

    btnAccordion.tres.click(()=>{
       
        if(controlador.tres){

            divItem.tres.slideUp()
            controlador.tres = false

        }else{

            divItem.tres.slideDown()
            controlador.tres = true

        }
 
    })
 
 
}); 

*/

// Slider funcionando

// $(function(){

//     var carrosselItem = $('.carousel-item')

//     /* exemplos 
//     $(carrosselItem[0]).removeClass('active')
//     $(carrosselItem[2]).addClass('active') */

//     var btnSlider = {
//         voltar: $('.carousel-control-prev'),
//         proximo: $('.carousel-control-next')
//     }

//     var controlador = 0

//     btnSlider.voltar.click(()=>{
                
//         if (controlador == 0) {

//             $(carrosselItem[0]).removeClass('active')
//             $(carrosselItem[2]).addClass('active')
//             controlador = 2
            
//         } else if (controlador == 1) {

//             $(carrosselItem[1]).removeClass('active')
//             $(carrosselItem[0]).addClass('active')
//             controlador = 0
            
//         } else {

//             $(carrosselItem[2]).removeClass('active')
//             $(carrosselItem[1]).addClass('active')
//             controlador = 1
            
//         }

//     })
    
//     btnSlider.proximo.click(()=>{
        
//         if (controlador == 0) {

//             $(carrosselItem[0]).removeClass('active')
//             $(carrosselItem[1]).addClass('active')
//             controlador = 1
            
//         } else if (controlador == 1) {

//             $(carrosselItem[1]).removeClass('active')
//             $(carrosselItem[2]).addClass('active')
//             controlador = 2
            
//         } else {

//             $(carrosselItem[2]).removeClass('active')
//             $(carrosselItem[0]).addClass('active')
//             controlador = 0
            
//         }

//     })

// });


// Abrir e Fechar um modal

$(function(){

    var btnModal = {
        abrir: $('#abrir'),
        fechar: $('#fechar')
    }

    var card = $('.card')

    btnModal.abrir.click(()=>{
        btnModal.abrir.addClass('fechado')
        card.removeClass('fechado')        
    })

    btnModal.fechar.click(()=>{
        card.addClass('fechado')  
        btnModal.abrir.removeClass('fechado')      
    })
})