import React from "react";

const DB = [
  {
    id: 1,
    title: "남매의 여름밤",
    director: "윤단비",
    tit: "한국영화의 오늘",
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
    id: 14,
    title: "글리치",
    director: "노덕",
    tit: "한국영화의 오늘",
  },
];
const Today = () => {
  return (
    <div className="today grid">
      <div className="container">
        {DB.map((it, idx) => (
          <div className="card">
            <img
              src={
                process.env.PUBLIC_URL + "../images/program__0" + it.id + ".jpg"
              }
              alt=""
            />
            <div className="textbox">
              <span className="tit">{it.tit}</span>
              <span className="title">{it.title}</span>
              <span className="director">{it.director}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Today;
