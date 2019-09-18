$(function() {
  // Slider

  
  $(".carousel1").owlCarousel({
    loop: ($(".carousel1 .item").length > 1) ? true : false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    items: 1,
    touchDrag: ($(".carousel1 .item").length > 1) ? true : false,
    mouseDrag: ($(".carousel1 .item").length > 1) ? true : false
  });

  // Slider_

  // Mobile menu

  // $(".dn-menu__hamb").on("click", function() {
  //   $(".drop-down-menu").toggle(500);
  // });

  // $(".dn-menu__search").on("click", function() {
  //   $('#mob-line__search-wrap').show();
  //   $("#mob-title-search-input").focus();
  //   $("#mob-title-search-input")
  //     .css({
  //       "-webkit-transition": "all .2s linear",
  //       "width": "212px",
  //       "font-size": "17px",
  //     })
  //     .focusout(function() {
  //       $("#mob-title-search-input").css({
  //         "-webkit-transition": "all .2s linear",
  //         "width": "44px",
  //         "font-size": "0px"
  //       });
  //       $("#searchfas, #searchfas2").css({
  //         "-webkit-transition": "all .2s linear",
  //         "left": "14px"
  //       });
  //       $('.dn-menu__vertline').css({
  //         "-webkit-transition": "all .2s linear",
  //         "opacity": "1"
  //       });
  //       $('#mob-line__search-wrap').hide();
  //       $('.dn-menu__search #searchfas').show();
  //     });
  //     $('#mob-line__search-wrap .search-title-button').show();
  //     $('.dn-menu__search #searchfas').hide();
  //   $("#searchfas, #searchfas2")
  //     .css({
  //       "-webkit-transition": "all .2s linear",
  //       "left": "166px"
  //     });
  //   $('.dn-menu__vertline').css({
  //     "-webkit-transition": "all .2s linear",
  //     "opacity": "0"
  //   });
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

  // $('#accordion > li').on('click', function() {
  //   $('#accordion > li > ul').hide().slideUp();
  //   $(this).parent().next().slideDown();
  // })
  
  $('.accordion').accordion({
    singleOpen: true,
    transitionSpeed: 500
  });
  // Accordeon_

  // Range



  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 600,
    values: [135, 500],
    slide: function( event, ui ) {
      $( "#amount1" ).val(ui.values[ 0 ]);
      $( "#amount2" ).val(ui.values[ 1 ]);

      $( ".amount3" ).val(ui.values[ 0 ]);
      $( ".amount4" ).val(ui.values[ 1 ]);
    }
  })
  $('.ui-slider-handle').append('<input type="text" class="nested-input amount3" placeholder="135" disabled><input type="text" class="nested-input amount4" placeholder="500" disabled>')


  // Range_


  // Modal

  $(".modalbox").fancybox()

  // Modal_
});
