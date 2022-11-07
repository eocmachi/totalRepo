import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";

const MV = [
  {
    id: 1,
    title: "YouTube\nClone Coding",
  },
  {
    id: 2,
    title: "2022 BIFF",
  },
  {
    id: 3,
    title: "나이키 Nike",
  },
  {
    id: 4,
    title: "Find Golden\nSnitch",
  },
];

const MainVisual = () => {
  return (
    <section className="MainVisual section">
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="main-swiper"
      >
        {MV.map((slide, idx) => (
          <SwiperSlide className="swiper-slide">
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/visual__0" +
                (idx + 1) +
                ".jpg"
              }
              alt=""
            />
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
