import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";

const DB = [
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
  {
    id: 5,
    title: "Find Golden\nSnitch",
  },
  {
    id: 6,
    title: "Find Golden\nSnitch",
  },
];
const Program = () => {
  return (
    <section className="program">
      <div class="container">
        <h2>2022 공식상영작</h2>
        <span>
          <a href="">MORE</a>
        </span>
      </div>

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="program-swiper"
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className={"swiper-slide0" + (idx + 1)}>
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/program__0" +
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

export default Program;
