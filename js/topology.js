$(document).ready(function() {
    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
    $('.menu .fa-search').click(function(){
    	$('.searchmenuhead').css('display','block');
    	$('.menu .fa-times').css('display','block')
        $('.fa-search').css('display','none')
    })

    $('.menu .fa-times').click(function(){
    	$('.searchmenuhead').css('display','none');
    	$('.menu .fa-times').css('display','none')
        $('.fa-search').css('display','block')
    })

    $('.pageli').mouseover(function(){
       $('.page').css({
        display: 'block',
    });
   })
    $('.page').mouseover(function(){
       $('.page').css({
        display: 'block',   
    });
   })

    $('.pageli').mouseout(function(){
       $('.page').css({
        display: 'none', 
    });
   })
    $('.page').mouseout(function(){
       $('.page').css({
        display: 'none',     
    });
   })

    $('.abovebottom').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })

   $(window).scroll(function() {
    if ($(this).scrollTop()>300)
     {
        $('.abovebottom').fadeIn();
     }
    else
     {
      $('.abovebottom').fadeOut();
     }
 });

   $('.menutab').click(function(){
       $('.menumain').animate({left: '0'}, "slow");
   })

   $('.menumain .fa-times').click(function(){
       $('.menumain').animate({left: '-400'}, "slow");
       $('.menumain .fa-times').css({
        display: 'block',     
    });
   })

 }); 
