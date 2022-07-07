$(function () {

    $('.main_slider').slick({
        // dots: true,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.menu_slider').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
    });
    $('.follow-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        pauseOnHover: false,
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
          $('#header .container').addClass('on');
        } else {
          $('#header .container').removeClass('on');
        }
      });


})