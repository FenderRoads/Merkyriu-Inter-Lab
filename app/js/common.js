$(function() {
  // Slider

  $(".carousel1").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  // Slider_

  // Mobile menu

  $(".dn-menu__hamb").on("click", function() {
    $(".drop-down-menu").toggle(500);
  });

  $(".dn-menu__search").on("click", function() {
    $("#search")
      .css({
        "-webkit-transition": "all .2s linear",
        "width": "212px"
      })
      .focusout(function() {
        $("#search").css({
          "-webkit-transition": "all .2s linear",
          "width": "44px"
        });
        $("#searchfas").css({
          "-webkit-transition": "all .2s linear",
          "left": "14px"
        });
        $('.dn-menu__vertline').css({
          "-webkit-transition": "all .2s linear",
          "opacity": "1"
        })
      });
    $("#searchfas")
      .css({
        "-webkit-transition": "all .2s linear",
        "left": "183px"
      })
    $('.dn-menu__vertline').css({
      "-webkit-transition": "all .2s linear",
      "opacity": "0"
    })
  });

  // Mobile menu_

  // Button_up
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').on('click', function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })	

  // Button_up_


});