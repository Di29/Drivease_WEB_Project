$(document).ready(function() {
  $("#hero-area-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    // autoplay: true,
    responsive: {
      0: {
        dots: false
      },
      767: {
        dots: false
      },
      768: {
        dots: true
      }
    }
  });

  $("#testimonial-carousel-1").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i><span>Previous</span>',
      '<span>Next</span><i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      768: {
        navText: [
          '<i class="fa fa-angle-left"></i><span>Previous</span>',
          '<span>Next</span><i class="fa fa-angle-right"></i>'
        ]
      },
      575: {
        navText: [
          '<i class="fa fa-angle-left"></i><span></span>',
          '<span></span><i class="fa fa-angle-right"></i>'
        ]
      },
      0: {
        navText: false
      }
    }
  });

  $(window).trigger("resize");
  init_map();
});
