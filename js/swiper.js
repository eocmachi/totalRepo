const btn = document.querySelector(".family-site");

function handleBtnClick() {
  btn.classList.toggle("on");
}
btn.addEventListener("click", handleBtnClick);

const main = new Swiper(".main", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".main.swiper-pagination",
    clickable: true,
  },
});

const card = new Swiper(".card", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".cure-next",
    prevEl: ".cure-prev",
    clickable: true,
  },
});

const review = new Swiper(".review", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
