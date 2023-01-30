import React, { useState } from "react";
import "./ProjectPage.scss";
import { motion } from "framer-motion";

const RD = [
  {
    id: 0,
    title: "Gentle Monster",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://delicate-longma-d20402.netlify.app/",
  },
  {
    id: 1,
    title: "2022 BIFF",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해 사용자가 google 과 github를 통해 로그인 할 수 있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://zoseeee.github.io/BIFF/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 3,
    title: "Business Card Maker",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://zoseeee.github.io/BIFF/",
  },
  {
    id: 4,
    title: "2023 Portfolio",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
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
        <li># 태그</li>
        {RD.map((item) => (
          <li
            key={item.id}
            className={index === item.id ? "active" : null}
            onClick={() => setIndex(item.id)}
          >
            {index === item.id ? (
              <span className="list-icon">
                <i className="xi-time"></i>
              </span>
            ) : (
              <span className="list-icon">
                <i className="xi-radiobox-blank"></i>
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
