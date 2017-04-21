$(document).ready(function() {
    $('body').scroll(function(){
       if ($('body').scrollTop > 125) {
        $('.menu').css('position','fixed')
    } else {
        $('.menu').css('position','absolute')
    }
   })
 }); 
