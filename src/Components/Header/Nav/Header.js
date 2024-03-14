import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import img from "../../../Images/img.png";

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
            Home
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
            Trip
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
            to="/ABOUT_US"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "isActive" : "notActive";
            }}
            exact="true"
            to="/ABOUT"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
