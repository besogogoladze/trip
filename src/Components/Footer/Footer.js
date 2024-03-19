import React from "react";
import IPI from "../../Images/IPI.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#003",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "100px 0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          className="footer_up"
        >
          <div>
            <h3>CONTACTS</h3>
            <div>
              <p>address</p>
              <p>Email</p>
              <p>tel</p>
            </div>
          </div>
          <div>
            <h3>IPI</h3>
            <div>
              <p>Ecole IPI</p>
              <p>tstn1</p>
              <p>Groupe IGS</p>
            </div>
          </div>
          <div>
            <h3>Menu</h3>
            <div>
              <h3>Ecole IPI</h3>
              <p>tstn1</p>
              <p>Groupe IGS</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#fff",
            margin: "20px 0",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          className="footer_down"
        >
          <p style={{ color: "#645E58", fontWeight: "bold" }}>
            Copyright © 2024,{" "}
            <NavLink
              style={{ fontSize: "20px", color: "#d33" }}
              exact="true"
              to="https://www.facebook.com/Bes096"
            >
              BG
            </NavLink>{" "}
            All rights reserved.
          </p>
          <img
            style={{ width: "100px", backgroundColor: "#fff" }}
            src={IPI}
            alt="IPI"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
