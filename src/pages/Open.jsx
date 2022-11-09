import React from "react";

const DB = [
  {
    id: 8,
    title: "바람의 향기",
    director: "하디 모하게흐",
    tit: "개막작",
  },
  {
    id: 11,
    title: "한 남자",
    director: "이시카와 케이",
    tit: "폐막작",
  },
];

const Open = () => {
  return (
    <div className="open">
      <div className="container">
        {DB.map((it, idx) => (
          <div className="card">
            <img
              src={
                process.env.PUBLIC_URL + "./images/program__0" + it.id + ".jpg"
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

export default Open;
