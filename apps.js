$(function (){
  
    let hide = $('.hide1 .btn .hide')
    let img = $('.hide1 img')
    
    hide.click( function(){
         img.hide(400)
        
     

    })

    let show = $('.hide1 .btn .show')
    show.click( function(){
        img.show(400)
    })

    let hide1 = $('.hide1 .btn .hide2')
    hide1.click( function(){
        alert('hlw')
    }) 
     
    let hide3 = $('.hide1 .btn .hide3')
      hide3.click( function (){
        img.toggle(500)
      })



      let faq = $('#faqWrapper .faq')

      faq.click(function () {
  
          
           if($(this).hasClass('active')){
              $(this).removeClass("active");
           } else{
  
               faq.removeClass('active')
               $(this).addClass('active')
           }
  
  
      });
})