$(function () {
    $('.n-slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        verticalSwiping: true,

        prevArrow: $('.notice-prevArrow'),
        nextArrow: $('.notice-nextArrow'),
    });
})