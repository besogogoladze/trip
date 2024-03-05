import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <NavLink exact="true" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/TRIP">
              Trip
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/ABOUT_US">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
