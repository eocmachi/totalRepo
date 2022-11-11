import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper";

const DB = [
  {
    id: 1,
    title: "제 27회, 2022",
  },
  {
    id: 2,
    title: "제 26회, 2021",
  },
  {
    id: 3,
    title: "제 25회, 2020",
  },
  {
    id: 4,
    title: "제 24회, 2019",
  },
  {
    id: 5,
    title: "제 23회, 2018",
  },
  {
    id: 6,
    title: "제 22회, 2017",
  },
  {
    id: 7,
    title: "제 21회, 2016",
  },
  {
    id: 8,
    title: "제 20회, 2015",
  },
  {
    id: 9,
    title: "제 19회, 2014",
  },
  {
    id: 10,
    title: "제 18회, 2013",
  },
  {
    id: 11,
    title: "제 17회, 2012",
  },
  {
    id: 12,
    title: "제 16회, 2011",
  },
];

const Archive = () => {
  return (
    <section className="archive">
      <div class="container">
        <h2>BIFF Archive</h2>
        <p>역대 영화제 (2022 ~ 2011)</p>
      </div>
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        class="archive-swiper"
      >
        {DB.map((ar, idx) => (
          <SwiperSlide className="swiper-slide" key={ar.id}>
            <Link to="/page04">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./images/poster__0" +
                  (idx + 1) +
                  ".jpg"
                }
                alt=""
              />
            </Link>
            <p>{ar.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Archive;
