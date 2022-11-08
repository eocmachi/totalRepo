import React from "react";
import Archive from "../pages/Archive";
import MainVisual from "../pages/MainVisual";
import Program from "../pages/Program";

const Main = () => {
  return (
    <div className="Main">
      <MainVisual />
      <Archive />
      <Program />
    </div>
  );
};

export default Main;
