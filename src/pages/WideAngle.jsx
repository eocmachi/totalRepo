import React from "react";

const DB = [
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
];
const WideAngle = () => {
  return (
    <div className="wideAngle grid">
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

export default WideAngle;
