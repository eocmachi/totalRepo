import React from "react";
import "../css/page.scss";
import { useNavigate, useParams, useEffect, useRef } from "react-router-dom";

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
    director: "임대형",
    tit: "아시아영화의 창",
  },
  {
    id: 3,
    title: "미나리",
    director: "정이삭",
    tit: "아시아영화의 창",
  },
  {
    id: 4,
    title: "범죄도시2",
    director: "이상용",
    tit: "월드시네마",
  },
  {
    id: 5,
    title: "공조 2: 인터내셔날",
    director: "이석훈",
    tit: "월드시네마",
  },
  {
    id: 6,
    title: "기생충",
    director: "봉준호",
    tit: "월드시네마",
  },
  {
    id: 7,
    title: "브로커",
    director: "고레에다 히로카즈",
    tit: "월드시네마",
  },
  {
    id: 8,
    title: "바람의 향기",
    director: "하디 모하게흐",
    tit: "개막작",
  },
  {
    id: 9,
    title: "소년들",
    director: "정지영",
    tit: "한국영화의 오늘",
  },
  {
    id: 10,
    title: "20세기 소녀",
    director: "방우리",
    tit: "한국영화의 오늘",
  },
  {
    id: 11,
    title: "한 남자",
    director: "이시카와 케이",
    tit: "폐막작",
  },
  {
    id: 12,
    title: "남쪽, 적막철도",
    director: "샤오추첸",
    tit: "와이드 앵글",
  },
  {
    id: 13,
    title: "따스한 오후",
    director: "란 티안",
    tit: "와이드 앵글",
  },
  {
    id: 14,
    title: "글리치",
    director: "노덕",
    tit: "한국영화의 오늘",
  },
];

const DetailPage = () => {
  const { itm } = useParams();
  const navigate = useNavigate();
  const matchItm = DB.find((it) => itm === String(it.id));
  return (
    <section className="detailPage section">
      <h1>detailPage</h1>
      <h2>{matchItm.id}</h2>
    </section>
  );
};

export default DetailPage;
