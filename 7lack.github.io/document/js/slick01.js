$(function () {
  $(".main_slider").on("init reInit afterChange", function (e, s, c) {
    console.log(e, s, c);
    $(".num").text((c ? c + 1 : 1) + "/" + s.slideCount);
    let cur = $(".slick-current");
    cur.addClass("xx").siblings().removeClass("xx");
  });

  $(".main_slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  });
});
