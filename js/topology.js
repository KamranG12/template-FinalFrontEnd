// var value=0
// $.fn.Progress=function(deyer){
//   var self=this;
//   $(window).one('scroll',function() {
//     var myVar = setInterval(function(){ myTimer() }, 1);
//     function myTimer(){ value++; $(self).text(value);
//    if(value==deyer){
//       clearInterval(myVar);
//     }
//   };  
// });
// }






$(document).ready(function() {
  // $('.h21').Progress(15);
  // $('.h22').Progress(349);
  // $('.h23').Progress(506);
  // $('.h24').Progress(8);








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
   

   var value=0
  $(window).one('scroll',function() {
    var myVar = setInterval(function(){ myTimer() }, 50);
    function myTimer(){ value++; $('.year').text(value);
   if(value==15){
      clearInterval(myVar);
    }
  };  
});

  var value2=0
  $(window).one('scroll',function() {
    var myVar2 = setInterval(function(){ myTimer2() },0.00000000001);
    function myTimer2(){ value2++; $('.patient').text(value2);
   if(value2==349){
      clearInterval(myVar2);
    }
  };  
});

  var value3=0
  $(window).one('scroll',function() {
    var myVar3 = setInterval(function(){ myTimer3() },10);
    function myTimer3(){ value3++; $('.doctor').text(value3);
   if(value3==56){
      clearInterval(myVar3);
    }
  };  
});

  var value4=0
  $(window).one('scroll',function() {
    var myVar4 = setInterval(function(){ myTimer4() },100);
    function myTimer4(){ value4++; $('.depart').text(value4);
   if(value4==8){
      clearInterval(myVar4);
    }
  };  
});



  var load=0;
  $(window).one('scroll',function() {
    var w=parseInt($(document).scrollTop())
    if (w>500){
    var myLoad = setInterval(function(){ LoadTimer() },15);
    function LoadTimer(){ load++;
      $('.ellifaiz').text(load+'%')
     $('.loadbar').css('width',load+'%');
   if(load==50){
      clearInterval(myLoad);
    }
  }
  }  
});

  var load1=0;
  $(window).one('scroll',function() {
    var myLoad1 = setInterval(function(){ LoadTimer1() },50);
    function LoadTimer1(){ load1++;
      $('.iyirmifaiz').text(load1+'%')
     $('.loadbar1').css('width',load1+'%');
   if(load1==20){
      clearInterval(myLoad1);
    }
  };  
});


  var load2=0;
  $(window).one('scroll',function() {
    var myLoad2 = setInterval(function(){ LoadTimer2() },10);
    function LoadTimer2(){ load2++;
      $('.seksenfaiz').text(load2+'%')
     $('.loadbar2').css('width',load2+'%');
   if(load2==87){
      clearInterval(myLoad2);
    }
  };  
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

