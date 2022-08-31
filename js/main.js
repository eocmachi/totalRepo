const main = new Swiper(".main.swiper.mySwiper", {
    loop: true,
});

const best = new Swiper(".best.swiper.mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup : 3,
});

const review = new Swiper(".review.swiper.mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 2.65,
    spaceBetween: 30,
});