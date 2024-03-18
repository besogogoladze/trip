import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import img from "../../../Images/Logo2.png";

function Nav() {
  return (
    <div id="Navigation" style={{ width: "100%" }}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "isActive" : "notActive";
            }}
            exact="true"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "isActive" : "notActive";
            }}
            exact="true"
            to="/trip_page"
          >
            TRIP
          </NavLink>
        </li>
        <NavLink exact="true" to="/">
          <img style={{ width: "150px" }} src={img} alt="img" />
        </NavLink>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "isActive" : "notActive";
            }}
            exact="true"
            to="/about_us"
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "isActive" : "notActive";
            }}
            exact="true"
            to="/ipi"
          >
            IPI
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
