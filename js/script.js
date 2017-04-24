var ary_img=['images/pages/typography-01-770x420.jpg','images/pages/services-01-870x440.jpg','images/pages/services-02-870x440.jpg'];
var ary_headp=["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.","We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.","Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."];
var ary_headh1=["HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT","AFFORDABLE PEDIATRIC DENTISTRY SERVICES","WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"]
$(document).ready(function() {
   $('.dot').click(function(){
      var x=$(this).attr('index');
      $('.threedots div').each(function(){
          $(this).removeClass('active')
      });
      $(this).addClass('active');
      $('.head img').attr('src',ary_img[x]);
      $('.headh1').html(ary_headh1[x]);
      $('.headp').html(ary_headp[x]);
   })



   $('.menutab').click(function(){
       $('.menu').animate({left: '0'}, "slow");
   })

     $('.whool').click(function(){
       $('.menu').animate({left: '-400'}, "slow");
   })

   $('.fa-times').click(function(){
       $('.menu').animate({left: '-400'}, "slow");
   })


   $('.add').click(function(){
       if($('.nameinput').val()=='' && $('.emailinput').val()==''){
           $('.nameinput').attr('value','The text field is required.').css('color','red');
           $('.emailinput').attr('value','The email is required.').css('color','red');
       }else if($('.nameinput').val()==''){
           $('.nameinput').attr('value','The text field is required.').css('color','red');
       }else if($('.emailinput').val()==''){
           $('.emailinput').attr('value','The email is required.').css('color','red');
       }
   })


   $('#flowbutton1 h4').mouseover(function(){
       $('#figur1').animate({left: '0'},'100')
   })
   $('#flowbutton1').mouseout(function(){
       $('#figur1').animate({left: '-12'})
   })

   $('#flowbutton2 h4').mouseover(function(){
       $('#figur2').animate({left: '0'},'100')
   })
   $('#flowbutton2').mouseout(function(){
       $('#figur2').animate({left: '-12'})
   })

   $('#flowbutton3 h4').mouseover(function(){
       $('#figur3').animate({left: '0'},'100')
   })
   $('#flowbutton3').mouseout(function(){
       $('#figur3').animate({left: '-12'})
   })


   $('.dot1').click(function(){
      var y=$(this).attr('index');
      $('.threedots1 div').each(function(){
          $(this).removeClass('active1')
      });
      $(this).addClass('active1');
      $('.fullsize').animate({left: y*(-100)+'%'});
   })



   $('.dot2').click(function(){
      var y=$(this).attr('index');
      $('.threedots2 div').each(function(){
          $(this).removeClass('active2')
      });
      $(this).addClass('active2');
      $('.fullteam').animate({left: y*(-100)+'%'},'slow');
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
 }); 


