const stickbars = new Swiper(".stickbars-swiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    allowTouchMove: false,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".stickbars-next",
      prevEl: ".stickbars-prev",
    },
  });

const pintBg = new Swiper(".pintBg-swiper", {
  loop: true,
  effect: 'fade',
  allowTouchMove: false,
  });

const pintProduct = new Swiper(".pintProduct-swiper", {
  loop: true,
  effect: 'fade',
   allowTouchMove: false,
  });

const pintText = new Swiper(".pintText-swiper", {
  loop: true,
  direction: 'vertical',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  });

  pintText.controller.control = pintProduct;
  pintProduct.controller.control = pintText;
  pintProduct.controller.control = pintBg;


  const sns = new Swiper(".sns-swiper", {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    });


 
