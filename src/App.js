import React from "react";
import { Route, Routes } from "react-router-dom";
import DesignPage from "./components/DesignPage/DesignPage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ReactPage from "./components/ReactPage/ReactPage";
import "./css/app.scss";

const App = () => {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/javascript" element={<DesignPage />} />
      </Routes>
    </div>
  );
};

export default App;
