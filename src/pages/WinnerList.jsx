import React, { useState, useEffect } from "react";
import axios from "axios";

const WinnerList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const key = "834fe0c0b07ce76ff1c1036ad9abaf87";
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&itemPerPage=50&movieTypeCd=220102`;
    const getMovie = async () => {
      const res = await axios.get(url);
      console.log(res.data.movieListResult.movieList);
      const MovieList = res.data.movieListResult.movieList.map((it) => {
        return {
          movieNm: it.movieNm,
          movieNmEn: it.movieNmEn,
          prdtYear: it.prdtYear,
          directors: it.directors,
          genreAlt: it.genreAlt,
        };
      });
      setItems(MovieList);
    };
    getMovie();
  }, []);

  console.log(items);

  return (
    <div className="winnerList">
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>수상작 및 수상자</th>
              <th>제작연도</th>
              <th>장르</th>
              <th>수상소감</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr>
                <td>
                  <span className="title">&lt; {it.movieNm} &gt;</span>
                  {/* <span>{it.movieNmEn}</span> */}
                  <span>
                    {it.directors.map((i) => (
                      <div>{i.peopleNm} | 감독</div>
                    ))}
                  </span>
                </td>
                <td>{it.prdtYear}</td>
                <td>{it.genreAlt}</td>
                <td><button>수상소감</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinnerList;
