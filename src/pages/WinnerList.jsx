import React, { useState, useEffect } from "react";
import axios from "axios";

const WinnerList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const key = "834fe0c0b07ce76ff1c1036ad9abaf87";
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&itemPerPage=70&movieTypeCd=220102`;
    const getMovie = async () => {
      const res = await axios.get(url);
      console.log(res.data.movieListResult.movieList);
      const MovieList = res.data.movieListResult.movieList.map((it) => {
        return {
          movieNm: it.movieNm,
          nationAlt: it.nationAlt,
          directors: it.directors,
        };
      });
      setItems(MovieList);
    };
    getMovie();
  }, []);

  console.log(items);

  return (
    <div className="winnerList">
      <div className="container">
        <table>
          <thead>
            <tr>
              {/* <th>The table header</th> */}
              <th colspan="2">수상작 및 수상자</th>
              <th>국가</th>
              <th>수상소감</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
              <td>with two columns</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </div>
      {items.map((it) => (
        <>
          <li>{it.movieNm}</li>
        </>
      ))}
    </div>
  );
};

export default WinnerList;
