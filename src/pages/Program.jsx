import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import React, { useRef, useState } from "react";

const DB = [
  {
    id: 1,
    title: "남매의 여름밤",
    director: "윤단비",
    tit: "한국영화의 오늘",
  },
  {
    id: 2,
    title: "윤희에게",
    director: "윤단비",
    tit: "아시아영화의 창",
  },
  {
    id: 3,
    title: "미나리",
    director: "윤단비",
    tit: "아시아영화의 창",
  },
  {
    id: 4,
    title: "범죄도시2",
    director: "윤단비",
    tit: "월드시네마",
  },
  {
    id: 5,
    title: "공조 2: 인터내셔날",
    director: "윤단비",
    tit: "월드시네마",
  },
  {
    id: 6,
    title: "기생충",
    director: "윤단비",
    tit: "월드시네마",
  },
  {
    id: 7,
    title: "브로커",
    director: "윤단비",
    tit: "와이드 앵글",
  },
  {
    id: 8,
    title: "바람의 향기",
    director: "윤단비",
    tit: "와이드 앵글",
  },
];
const Program = () => {
  return (
    <section className="program section">
      <div class="container">
        <h2>2022 BIFF 공식상영작</h2>
        <span>
          <a href="/">MORE</a>
        </span>
      </div>
      <Swiper
        rewind={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="program-swiper"
      >
        {DB.map((slide, idx) => (
          <SwiperSlide>
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/program__0" +
                (idx + 1) +
                ".jpg"
              }
              alt=""
            />
            <div className="textbox">
              <span className="tit">{slide.tit}</span>
              <span className="title">{slide.title}</span>
              <span className="director">{slide.director}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Program;
