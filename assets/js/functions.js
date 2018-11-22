$(document).ready(function () {

  "use strict";
  $('#owl-intro').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    navigation: false,
    dots: false
  });

  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
  // WOW Animation
  new WOW().init();

});