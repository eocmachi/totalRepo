import React, { useState } from "react";
import "./ProjectPage.scss";
import { motion } from "framer-motion";

const RD = [
  {
    id: 0,
    title: "Gentle Monster",
    description:
      "본 프로젝트는 React를 이용하여 로그인, 장바구니, 새로운 제품 등록 등을 구현한 페이지입니다. Firebase를 통해 로그인이 가능하도록 하였고 사용자의 장바구니에 추가된 제품을 관리할 수 있도록 구현하였습니다. Admin 사용자로 로그인 할 경우 새로운 제품 등록 페이지에 접근할 수 있어 등록한 상품 정보를 Firebase의 Realtime Database와 Cloudinary에서 실시간 등록 및 수정이 가능하도록 하였습니다.",
    tools:
      " react / react-router-dom / react-query / scss / firebase / cloudinary / netlify",
    url: "https://delicate-longma-d20402.netlify.app/",
  },
  {
    id: 1,
    title: "2022 BIFF",
    description:
      "본 프로젝트는 React를 이용하여 홈, 공식상영작, 수상작 및 수상자, 작품 검색 등을 구현한 페이지입니다. Axios로 영화진흥위원회 Api를 호출하여 수상자 및 수상작 페이지를 구성하였고 OMDb Api를 이용하여 영화 검색이 가능하도록 구현하였습니다. Netlify로 배포 후 수정하고 있습니다.",
    tools: " react / react-router-dom / scss / open api / axios / netlify ",
    url: "https://classy-madeleine-f766d7.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      "본 프로젝트는 React를 이용하여 인기 동영상, 검색, 동영상 재생 등의 기능을 담은 YouTube 클론 코딩 페이지입니다. Youtube Api를 사용하여 원하는 영상을 검색할 수 있으며, 현재 대한민국 인기 동영상 20개의 리스트를 얻어와 메인화면에 구현하였습니다",
    tools: " react / css / axios / youtube api ",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 3,
    title: "Card Maker",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 카드 편집, 등록, 미리보기 등으로 구성되어있습니다. 최근 재밌게 보았던 영화 ‘everything everywhere all at once’ 를 테마로 만든 프로젝트입니다. Firebase를 통해 로그인이 가능하도록 하였고 사용자의 정보를 Firebase의 Realtime Database와 Cloudinary에서 실시간 등록 및 수정이 가능하도록 하였습니다.",
    tools: " react / react-router-dom / css / firebase / cloudinary / netlify ",
    url: "https://rococo-lamington-8b84b3.netlify.app/",
  },
  {
    id: 4,
    title: "Golden Snitch!",
    description:
      "본 프로젝트는 Javascript로 만든 간단한 게임입니다. 영화 <Harry Potter> 속 퀴티치 경기를 테마로 만들었습니다. 20초의 시간이 주어지고 시간 내에 골든 스니치 10개를 클릭하면 성공하는 아주 간단한 게임입니다. Netlify로 배포 후 수정하고 있습니다. ",
    tools: " javascript / css / netlify ",
    url: "https://zoseeee.github.io/portfolio/",
  },
  {
    id: 5,
    title: "2023 Portfolio",
    description:
      "본 프로젝트는 React를 이용하여 메인화면, 프로젝트, 웹 퍼블리싱, 모달창 등으로 구성된 포트폴리오 페이지입니다. Netlify로 배포 후 수정하고 있습니다. (각각의 프로젝트들의 부족한 부분들은 계속해서 수정중입니다... 감사합니다.)",
    tools: "react / react-router-dom / scss / netlify",
    url: "https://zoseeee.github.io/portfolio/",
  },
];

const ProjectPage = () => {
  const [index, setIndex] = useState(0);

  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  };

  return (
    <section className="project-page">
      <ul className="tab-menu">
        <li># PROJECT</li>
        {RD.map((item) => (
          <li
            key={item.id}
            className={index === item.id ? "active" : null}
            onClick={() => setIndex(item.id)}
          >
            {index === item.id ? (
              <span className="list-icon">
                <i className="xi-folder-open"></i>
              </span>
            ) : (
              <span className="list-icon">
                <i className="xi-folder-o"></i>
              </span>
            )}
            {item.title}
          </li>
        ))}
      </ul>
      {RD.filter((item) => index === item.id).map((item) => (
        <div key={item.id} className="tab-content">
          <motion.div
            className="img-cover"
            transition={{ delay: 0.1, type: "spring" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/react_0" +
                (item.id + 1) +
                ".png"
              }
              alt=""
            />
          </motion.div>
          <motion.div
            className="des-wrapper"
            transition={{ delay: 0.3, type: "spring" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <div className="title">
              <h3>{item.title}</h3>
              <div className="btn-wrapper">
                <button
                  className="btn"
                  onClick={() => window.open(`${item.url}`, "_blank")}
                >
                  WebPage
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(`${item.url}`, "_blank")}
                >
                  Github Code
                </button>
              </div>
            </div>
            <p className="tools">{item.tools}</p>
            <p className="des">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ProjectPage;
