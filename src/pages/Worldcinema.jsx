import React from "react";
import { Link } from "react-router-dom";

const DB = [
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
];
const Worldcinema = () => {
  return (
    <div className="worldcinema grid">
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

export default Worldcinema;
