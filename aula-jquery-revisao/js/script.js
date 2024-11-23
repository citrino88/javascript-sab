$(function(){
 
    //DOM para encontrar o elemento:
    var btnAccordion = $('#btnAccordion')
    var divItem1 = $('#collapseOne')
 
    var controlador = true
 
    //Eventos para ter interatividade:
    btnAccordion.click(()=>{
       
        if(controlador){
            divItem1.slideUp()
            controlador = false
        }else{
            divItem1.slideDown()
            controlador = true
        }
 
    })
 
 
});