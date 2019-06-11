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

  // $(".dn-menu__search").on("click", function() {
  //   $("#search")
  //     .css({
  //       "-webkit-transition": "all .2s linear",
  //       "width": "212px"
  //     })
  //     .focusout(function() {
  //       $("#search").css({
  //         "-webkit-transition": "all .2s linear",
  //         "width": "44px"
  //       });
  //       $("#searchfas").css({
  //         "-webkit-transition": "all .2s linear",
  //         "left": "14px"
  //       });
  //       $('.dn-menu__vertline').css({
  //         "-webkit-transition": "all .2s linear",
  //         "opacity": "1"
  //       })
  //     });
  //   $("#searchfas")
  //     .css({
  //       "-webkit-transition": "all .2s linear",
  //       "left": "183px"
  //     })
  //   $('.dn-menu__vertline').css({
  //     "-webkit-transition": "all .2s linear",
  //     "opacity": "0"
  //   })
  // });

  // Mobile menu_

  // Button_up
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });
  $(".top").on("click", function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

  // Button_up_

  // Menu-fixed

  $(window).scroll(function() {
    if ($(this).scrollTop() > 207.05) {
      $(".top-line").addClass("topline-fixed");
      $(".top-line").css({ "box-shadow": "none" });
      $(".top-line-bg").fadeIn(1);
      $(".menu-wrapper").addClass("menu-wrapper-fixed");
      $(".menu-wrapper-bg").fadeIn(1);
    } else {
      $(".top-line").removeClass("topline-fixed");
      $(".top-line-bg").fadeOut(1);
      $(".menu-wrapper").removeClass("menu-wrapper-fixed");
      $(".menu-wrapper-bg").fadeOut(1);
    }
  });
  // Menu-fixed

  // Accordeon

  // $('.main-list > li').hide().prev().on('click', function() {
  //   $('.elem-7-level-2').not(this).slideUp(500)
  //   $(this).next().not(":visible").slideDown()
  // })

  // Accordeon_

  // Range

  $("input[name=multirange]").nativeMultiple({
    stylesheet: "slider",
    onCreate: function() {
      console.log(this);
    },
    onChange: function(first_value, second_value) {
      console.log("onchange", [first_value, second_value]);
    },
    onSlide: function(first_value, second_value) {
      console.log("onslide", [first_value, second_value]);
    }
  });

  // Range_
});
