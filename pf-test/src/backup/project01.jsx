import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const DB = [
  {
    id: 1,
    content: "YouTube",
    info: "유튜브 사이트를 클론코딩하였습니다. 검색기능, 비디오 상세화면 등을 구현하였습니다. \n(사이트 추가예정입니다.)",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 2,
    content: "2022 PORTFOLIO",
    info: "2022년 포트폴리오 사이트입니다.",
    type: "개인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 3,
    content: "Spotify",
    info: "스포티파이 사이트를 클론코딩하였습니다. 로그인, 검색기능 등을 구현하였습니다. \n(사이트 추가예정입니다.)",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
];

const Project = () => {
  SwiperCore.use([Navigation]);
  return (
    <section className="Project" id="project">
      <header className="project-title">
        <h2>MY PROJECT</h2>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/portfolio-2022"
            >
              <span>REACT</span>
              01
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project02"
            >
              <span
                className={({ isActive }) =>
                  "navLink" + (isActive ? ".on" : "")
                }
              >
                JavaScript
              </span>
              02
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project03"
            >
              <span
                className={({ isActive }) =>
                  "navLink" + (isActive ? ".on" : "")
                }
              >
                TOY
              </span>
              03
            </NavLink>
          </li>
        </ul>
      </header>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="project-swiper"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className="swiper-slide">
            <div className="slide-content">
              <figure className="left-box">
                {/* <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/image/project01_draft0" +
                    (idx + 1) + "-1" +
                    ".png"
                  }
                  alt=""
                /> */}
                <img
                  src={process.env.PUBLIC_URL + "/assets/image/pf03_01.png"}
                  alt=""
                />
              </figure>
              <div className="right-box">
                <h3>{slide.content}</h3>
                <p className="info">{slide.info}</p>
                <ul>
                  <li>
                    <span>Type</span>
                    <p>{slide.type}</p>
                  </li>
                  <li>
                    <span>Work</span>
                    <p>{slide.work}</p>
                  </li>
                  <li>
                    <span>Tools</span>
                    <p>{slide.tools}</p>
                  </li>
                  <li>
                    <span>Font</span>
                    <p>{slide.font}</p>
                  </li>
                  <li>
                    <span>Color</span>
                    <p>{slide.color}</p>
                  </li>
                </ul>
                <div>
                  <button>
                    <a
                      href={slide.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WebPage
                    </a>
                  </button>
                  <button>StyleGuide</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;