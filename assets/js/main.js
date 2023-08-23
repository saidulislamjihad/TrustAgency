  // Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').click(function(){
  $('.nav-items-wrapper').toggleClass('menu-visible');
  $('body').toggleClass('body-overflow');
});

// fixed header
$(window).scroll(function(){
  var scrollTop =$(window).scrollTop();
  if(scrollTop >=100){
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header');
  }
});

//Portfolio Js
$('.portfolio-items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})

//Portfolio Js
$('.review-items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})