import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

const MV = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const MainVisual = () => {
  return (
    <section className="MainVisual section">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="main-swiper"
      >
        {MV.map((slide, idx) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/visual__0" +
                (idx + 1) +
                ".jpg"
              }
              alt=""
            />
            <div class="inner-text">
              <span>제27회 부산국제영화제</span>
              <strong>수상작 및 수상자</strong>
              <Link to="/page02">
                <button>🡒</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="swiper-button">
          <button ref={navigationPrevRef} className="prev">
            🡐
          </button>
          <button ref={navigationNextRef} className="next">
            🡒
          </button>
        </div> */}
      </Swiper>
    </section>
  );
};

export default MainVisual;
