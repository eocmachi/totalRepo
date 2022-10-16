import React, { useEffect, useState } from "react";
import LoadingPage from "./component/LoadingPage";
import "../src/css/Main.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {

  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 8500);
    return () => {
      clearTimeout(timer);
    };
  });

  return load === true ? (
    <div>
      <LoadingPage />
    </div>
  ) : (
    <ParallaxProvider>
      <div className="Wrap">
        <Header />
        <main>
          <Home />
          <About />
          <Project />
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default App;
