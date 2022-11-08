import React from "react";
import Header from "./components/Header";
import "./css/Main.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page02 from "./pages/Page02";
import Page01 from "./pages/Page01";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";
import WideAngle from "./pages/WideAngle";
import Today from "./pages/Today";
import Window from "./pages/Window";
import Worldcinema from "./pages/Worldcinema";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03" element={<Page03 />}>
          <Route path="" element={<WideAngle />} />
          <Route path="today" element={<Today />} />
          <Route path="window" element={<Window />} />
          <Route path="worldcinema" element={<Worldcinema />} />
        </Route>
        <Route path="/page04" element={<Page04 />} />
        <Route path="/page05" element={<Page05 />} />
        <Route path="/page06" element={<Page06 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
