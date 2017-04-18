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
 }); 
