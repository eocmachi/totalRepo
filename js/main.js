const main = new Swiper(".main.swiper.mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

const best = new Swiper(".best.swiper.mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  pagination: {
    el: ".best.swiper-pagination",
  },
});

const review = new Swiper(".review.swiper.mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 2.65,
  spaceBetween: 30,
  pagination: {
    el: ".review.swiper-pagination",
  },
});

const Header = document.querySelector("#Header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Header.classList.add("on");
  } else {
    Header.classList.remove("on");
  }
});
