$(function () {

    $('.story-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        draggable : true,
        cssEase: 'linear'
      });
    $('.nail .right-box').slick({
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        arrows: true,
        draggable : true,
        cssEase: 'linear'
      });

    $('.nail .left-box').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        draggable : true,
        cssEase: 'linear'
      });

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        asNavFor: '.slider-for',
        focusOnSelect: true
      });

  })
