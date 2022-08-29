$(function () {
    ////////////////////
    $('.top-close-btn').on('click', function () {
        $('.TopBanner').addClass('on')
    });

    $('.main-slider').slick({
        arrows: false,
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })

    ////////////////////
})

