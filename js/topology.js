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

   $('.panel1').click(function() {
        $('.panel-body1').each(function() {
            $(this).slideUp(500);
            $('.plus1').css('display','block');
            $('.minus1').css('display','none');
        });
        if($(this).find('.panel-body1').css('display')==='block'){
        $(this).find('.panel-body1').slideUp(500);
        $(this).find('.plus1').css('display','block');
        $(this).find('.minus1').css('display','none');
      }else{
        $(this).find('.panel-body1').slideToggle(500);
        $(this).find('.plus1').css('display','none');
        $(this).find('.minus1').css('display','block');
      }
    });

   $('.panel').click(function() {
        $('.panel-body').each(function() {
            $(this).slideUp(500);
            $('.plus').css('display','block');
            $('.minus').css('display','none');
        });
        if($(this).find('.panel-body').css('display')==='block'){
        $(this).find('.panel-body').slideUp(500);
        $(this).find('.plus').css('display','block');
        $(this).find('.minus').css('display','none');
      }else{
        $(this).find('.panel-body').slideToggle(500);
        $(this).find('.plus').css('display','none');
        $(this).find('.minus').css('display','block');
      }
    });
   
   var index=0;
   $('.tab ul li').click(function(){
      $('.tab ul').find('li').removeClass('active');
      $(this).addClass('active');
      index=$(this).attr('index');
      $('.pler').find('p').removeClass('active1');
      $('.pler p').eq(index).addClass('active1')
   })

   $('.tab1 ul li').click(function(){
      $('.tab1 ul').find('li').removeClass('active3');
      $(this).addClass('active3');
      index=$(this).attr('index');
      $('.pler1').find('p').removeClass('active4');
      $('.pler1 p').eq(index).addClass('active4')
   })



 }); 

