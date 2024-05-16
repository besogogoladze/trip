import React from "react";
import { Container } from "@mui/material";
import food_img from "../../../Images/porto-food.jpg";
import { NavLink } from "react-router-dom";
import FoodTornPaper from "../../../Components/SVG/FoodTornPaper";
import FoodTornPaperRotated from "../../../Components/SVG/FoodTornPaperRotated";
import SectionTwoAccordion from "./SectionTwoAccordion";

function SectionTwo() {
  return (
    <>
      <Container>
        <div
          style={{
            margin: "30px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="kodeMonoFont">IT Topic</h1>
          <p className="kodeMonoFont">Web Development</p>
        </div>
        <p style={{ margin: "50px 0" }} className="kodeMonoFont">
          Here will be the text why we chose this IT Topic... 👉
        </p>
        <SectionTwoAccordion />
      </Container>
      <div style={{ width: "100%", position: "relative" }}>
        <div style={{ width: "100%", position: "absolute", top: "0" }}>
          <FoodTornPaper />
        </div>
        <div
          className="foodContainer"
          style={{
            backgroundColor: "#003",
            width: "100%",
            margin: "20px 0",
          }}
        >
          <Container>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "70px",
                color: "#fff",
              }}
              className="kodeMonoFont"
            >
              Foods in Porto
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <NavLink
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  minWidth: "200px",
                }}
                to="/food"
              >
                <img
                  style={{ width: "100%", minWidth: "200px" }}
                  src={food_img}
                  alt="Error"
                />
              </NavLink>
            </div>
          </Container>
        </div>
        <div style={{ width: "100%", position: "absolute", bottom: "0" }}>
          <FoodTornPaperRotated />
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
