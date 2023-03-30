import React, { useEffect, useState } from "react";
import LoadingPage from "./component/LoadingPage";
import "../src/css/Main.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Forest from "./pages/Forest";
import Divider from "./pages/Divider";
import { Route, Routes } from "react-router-dom";
import Project02 from "./component/Project02";
import Project03 from "./component/Project03";
import Contact from "./component/Contact";

const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5500);
    return () => {
      clearTimeout(timer);
    };
  });

  // 로딩화면 포함
  // return load === true ? (
  //   <div>
  //     <LoadingPage />
  //   </div>
  // ) : (
  //   <div className="Wrap">
  //     <Header />
  //     <main>
  //       <Home />
  //       <Divider />
  //       <About />
  //       <Forest />
  //       <Routes>
  //         <Route path="/portfolio-2022" element={<Project />} />
  //         <Route path="/project02" element={<Project02 />} />
  //         <Route path="/project03" element={<Project03 />} />
  //       </Routes>
  //       <Contact />
  //     </main>
  //   </div>
  // );

  return (
    <div className="Wrap">
      <Header />
      <main>
        <Home />
        <Divider />
        <About />
        <Forest />
        <Routes>
          <Route path="/portfolio-2022" element={<Project />} />
          <Route path="/project02" element={<Project02 />} />
          <Route path="/project03" element={<Project03 />} />
        </Routes>
        <Contact />
      </main>
    </div>
  );
};

export default App;
