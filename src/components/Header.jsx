import React, { useEffect, useRef } from "react";

const Header = () => {
  const hide = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 100
        ? hide.current.classList.add("on")
        : hide.current.classList.remove("on");
    });
  }, []);
  return (
    <header className="Header">
      <div class="hd-top" ref={hide}>
        <div class="container">
          <ul class="left-box">
            <li class="biff">
              <a href="">BIFF</a>
            </li>
            <li>
              <a href="">Asian Contents & Film Market</a>
            </li>
            <li>
              <a href="">APM</a>
            </li>
            <li>
              <a href="">BAFA</a>
            </li>
            <li>
              <a href="">ACF</a>
            </li>
            <li>
              <a href="">Community BIFF</a>
            </li>
            <li>
              <a href="">Forum BIFF</a>
            </li>
            <li>
              <a href=""> PRESS Service</a>
            </li>
          </ul>
          <ul class="right-box">
            <li>
              <a href="">로그인</a>
            </li>
            <li>
              <a href="">1:1 문의</a>
            </li>
            <li>
              <a href="">ENG</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hd-bt">
        <div class="container">
          <h1>
            <a href="">
              <img src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="" />
            </a>
          </h1>
          <nav class="gnb">
            <ul>
              <li>
                <a href="">부산국제영화제</a>
              </li>
              <li>
                <a href="">출품/신청안내</a>
              </li>
              <li>
                <a href="">커뮤니티</a>
              </li>
              <li>
                <a href="">역대영화제</a>
              </li>
              <li>
                <a href="">스태프채용</a>
              </li>
              <li>
                <a href="">자원봉사자모집</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
