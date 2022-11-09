import React from "react";
import "../css/page.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Page03 = () => {
  const activeStyle = {
    color: "#d82f36",
  };
  return (
    <section className="page03">
      <div className="content">
        <h1>공식상영작</h1>
        <ul>
          <li>
            <NavLink
              to="/page03"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              # 개·폐막작
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/today"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              # 한국영화의 오늘
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/window"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              # 아시아영화의 창
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/worldcinema"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              # 월드시네마
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/wideAngle"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              # 와이드 앵글
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default Page03;
