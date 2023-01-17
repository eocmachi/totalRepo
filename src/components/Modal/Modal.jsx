import React, { useEffect, useRef } from "react";
import "./Modal.scss";
import { motion } from "framer-motion";

const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const variants = {
    hidden: { y: -15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 },
  };

  return (
    <div className="modal-area">
      <motion.div
        className="modal"
        transition={{ delay: 0.1, type: "spring" }}
        ref={modalRef}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="modal-header">
          <button className="close" onClick={closeModal}>
            <i className="xi-close-min"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="intro box">
            <div className="intro-des">
              <div className="pov">
                <div className="eng">
                  <span className="ori">ORIGINALITY</span> : like no other
                </div>
                <div className="kor">“ 독창성 : 유일무이한 ”</div>
              </div>
              <p className="des">
                안녕하세요. 저는 실패를 원동력으로 성장하는 프론트엔드 개발자
                이정은입니다.<br />
                저는 ❝ 도전은 반드시 자신의 세계를 넓히게 마련이다. ❞ 라는 말을 좋아합니다. 많은 도전을 통해 많은 것을 느끼고 경험하고 저의 세계를 넓히기 위해 노력하고 있습니다. <br /> 개발도 마찬가지로 계속해서 새로운 지식과 기술들을 배우고 또, 제가 배운 것을 공유하고 나눌 수 있는 개발자가 되고 싶습니다.
              </p>
            </div>
          </div>
          <div className="education box">
            <h3>EDUCATION</h3>
            <ul className="edu-list">
              <li>Udemy The Web Developer Bootcamp | 2021</li>
              <li>Nomad Coder Vanilla JavaScript Course | 2021</li>
              <li>Kimbug HTML / CSS Course | 2021</li>
              <li>
                Green Computer Academy Web Frontend and Design Course | 2021
              </li>
              <li>Dream Coding Academy React JavaScript Course | 2021</li>
            </ul>
          </div>
          <div className="skills box">
            <h3>SKILLS</h3>
            <ul className="skills-detail">
              <li className="front-end">
                <span className="title">🔨 Front-end</span>
                <div className="svg-wrppaer">
                  <div className="html">
                    <img
                      src={process.env.PUBLIC_URL + "./images/html.svg"}
                      alt=""
                    />
                    <span>HTML5</span>
                  </div>
                  <div className="css">
                    <img
                      src={process.env.PUBLIC_URL + "./images/css.svg"}
                      alt=""
                    />
                    <span>CSS3</span>
                  </div>
                  <div className="js">
                    <img
                      src={process.env.PUBLIC_URL + "./images/js.svg"}
                      alt=""
                    />
                    <span>JavaScript</span>
                  </div>
                  <div className="sass">
                    <img
                      src={process.env.PUBLIC_URL + "./images/sass.svg"}
                      alt=""
                    />
                    <span>SASS</span>
                  </div>
                  <div className="react">
                    <img
                      src={process.env.PUBLIC_URL + "./images/react.svg"}
                      alt=""
                    />
                    <span>REACT</span>
                  </div>
                </div>
              </li>
              <li className="back-end">
                <span className="title">🔨 Back-end</span>
                <div className="svg-wrppaer">
                  <div className="firebase">
                    <img
                      src={process.env.PUBLIC_URL + "./images/firebase.svg"}
                      alt=""
                    />
                    <span>FIREBASE</span>
                  </div>
                  <div className="node">
                    <img
                      src={process.env.PUBLIC_URL + "./images/node.svg"}
                      alt=""
                    />
                    <span>Node.js</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="archive box">
            <h3>ARCHIVE</h3>
            <div className="archive-detail">
              <div
                className="github"
                onClick={() =>
                  window.open("https://github.com/zoseeee", "_blank")
                }
              >
                <img
                  src={process.env.PUBLIC_URL + "./images/github.png"}
                  alt=""
                />
                <span className="name">GITHUB</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
