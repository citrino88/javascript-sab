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