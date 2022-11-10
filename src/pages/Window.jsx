import React from "react";
import { Link } from "react-router-dom";

const DB = [
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
];
const Window = () => {
  return (
    <div className="window grid">
      <div className="container">
        {DB.map((it, idx) => (
          <Link to={"/detailPage/0" + it.id}>
            <div
              className="card"
              onClick={() => {
                console.log(it.id);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../images/program__0" +
                  it.id +
                  ".jpg"
                }
                alt=""
              />
              <div className="textbox">
                <span className="tit">{it.tit}</span>
                <span className="title">{it.title}</span>
                <span className="director">{it.director}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Window;
