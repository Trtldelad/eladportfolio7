// preloader
$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // nav shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  $(".skills-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // scrollit plug
  $.scrollIt({
    topOffset: -100,
  });

  // navbar collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
