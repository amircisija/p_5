$(document).ready(function () {

  "use strict";
  $('#owl-intro').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    navigation: false,
    dots: false,
    autoplayTimeout: 2500,
    smartSpeed: 450,    
  });

  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 4
      }
    }
  });




  // Sticky toggle
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });





  // Counter 
  jQuery('.funfact-number').each(function() {
    var $this = jQuery(this);
    var parts = $this.text().match(/^(\d+)(.*)/);
    if (parts.length < 2) return;
  
    var scale = 20;
    var delay = 50;
    var end = 0+parts[1];
    var next = 0;
    var suffix = parts[2];
    
    var runUp = function() {
      var show = Math.ceil(next);
      $this.text(''+show+suffix);
      if (show == end) return;
      next = next + (end - next) / scale;
      window.setTimeout(runUp, delay);
    }
    runUp();
});
});