$(document).ready(function() {
    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
    $('.fa-search').click(function(){
    	$('.searchmenuhead').css('display','block');
    	$('.fa-times').css('display','block')
        $('.fa-search').css('display','none')
    })

    $('.fa-times').click(function(){
    	$('.searchmenuhead').css('display','none');
    	$('.fa-times').css('display','none')
        $('.fa-search').css('display','block')
    })

    $('.pageli').mouseover(function(){
       $('.page').css('display','block');
   })
    $('.page').mouseover(function(){
       $('.page').css('display','block');
   })

    $('.pageli').mouseout(function(){
       $('.page').css('display','none');
   })
    $('.page').mouseout(function(){
       $('.page').css('display','none');
   })
 }); 
