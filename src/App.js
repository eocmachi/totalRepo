import React from "react";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Program from "./components/Program";
import "./css/Main.scss";

const App = () => {
  return (
    <>
      <Header />
      <MainVisual />
      <Program />
    </>
  );
};

export default App;
