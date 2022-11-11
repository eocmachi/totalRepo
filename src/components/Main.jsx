import React from "react";
import Archive from "../pages/Archive";
import MainVisual from "../pages/MainVisual";
import Program from "../pages/Program";

const Main = ({ item }) => {
  return (
    <div className="Main">
      <MainVisual />
      <Program item={item} />
      <Archive />
    </div>
  );
};

export default Main;
