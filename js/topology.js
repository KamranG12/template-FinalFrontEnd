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
    })

    $('.fa-times').click(function(){
    	$('.searchmenuhead').css('display','none');
    	$('.fa-times').css('display','none')
    })
 }); 
