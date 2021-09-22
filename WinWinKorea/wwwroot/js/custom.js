$(function () {
    AOS.init();
    //scroll menu
    $(window).scroll( () => {
      var windowTop = $(window).scrollTop();
       windowTop  ? $('.nav').addClass('header-sticky') : $('.nav').removeClass('header-sticky');
       windowTop > 500 ? $('.scroll-up').addClass('show') : $('.scroll-up').removeClass('show');
    });
    //show-menu-mobile
    $(".bar-mobile").on("click", function(){
      $("body").toggleClass("show-menu");
    });
});

function IndexJs() {
  $(".banner-owl").owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop: true,
      animateOut: 'fadeOut',
      smartSpeed: 1000,
      navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
      autoplay: true,
      autoplayTimeout: 8000,
  });

  $(".partner").owlCarousel({
      margin: 20,
      autoplay: true,
      //lazyLoad: true,
      responsiveClass: true,
      responsive: {
          0: {
              margin: 10,
              items: 2
          },
          600: {
              margin: 15,
              items: 3
          },
          1000: {
              items: 3
          }
      }
  });
}

function bannerSchoolJs(){
    $(".school-owl").owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}