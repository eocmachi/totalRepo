const card = new Swiper(".card", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
});

const review = new Swiper(".review", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  // autoplay: true,
  loopFillGroupWithBlank: true,
});

const btn = document.querySelector(".family-site");

function handleBtnClick() {
  btn.classList.toggle("on");
}

btn.addEventListener("click", handleBtnClick);
