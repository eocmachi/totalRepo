import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Program = ({ item }) => {
  return (
    <section className="program">
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
        {item.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <Link to={"/detail/" + slide.id}>
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Program;
