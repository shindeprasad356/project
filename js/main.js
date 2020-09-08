$(document).ready(function() {
         $('.playbtn').on('click', function(ev) {
         $(".img").hide(1000);
         $("#video")[0].src += "&autoplay=1";
         ev.preventDefault();
         
         });
         });
         $(function() {
         
         $(".progress").each(function() {
         
         var value = $(this).attr('data-value');
         var left = $(this).find('.progress-left .progress-bar');
         var right = $(this).find('.progress-right .progress-bar');
         
         if (value > 0) {
         if (value <= 50) {
         right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
         } else {
         right.css('transform', 'rotate(180deg)')
         left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
         }
         }
         
         })
         
         function percentageToDegrees(percentage) {
         
         return percentage / 100 * 360
         
         }
         
         });
         $('.autoplay').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
          responsive: [
    
    
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
         });
         $('.Badges').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         dots: true,
         autoplaySpeed: 2000,
         responsive: [
    
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
         });
         $('.stepslide').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         dots: true,
         autoplaySpeed: 2000,
           responsive: [
    
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 661,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
         });
          $('.boxeslide').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         dots: true,
         autoplaySpeed: 2000,
         responsive: [
         {
         breakpoint: 661,
         settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 2
         }
         },
         {
         breakpoint: 485,
         settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
         }
         }
         ]
         });
         $('.center').slick({
         centerMode: true,
         centerPadding: '60px',
         slidesToShow: 5,
         responsive: [
         {
         breakpoint: 770,
         settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
         }
         },
         {
         breakpoint: 485,
         settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
         }
         }
         ]
         });
         
         $(".share").click(function(){
         
         $(".social").toggleClass("open");
         });
         
         AOS.init();
         