import React from "react";
import { Container } from "@mui/material";
import food_img from "../../../Images/porto-food.jpg";
import { NavLink } from "react-router-dom";
import FoodTornPaper from "../../../Components/SVG/FoodTornPaper";
import FoodTornPaperRotated from "../../../Components/SVG/FoodTornPaperRotated";
import SectionTwoAccordion from "./SectionTwoAccordion";
import { Fade } from "react-awesome-reveal";

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
          <Fade direction="down" duration={2000}>
            <h1 className="kodeMonoFont">IT Topic</h1>
            <p className="kodeMonoFont">Web Development</p>
          </Fade>
        </div>
        <Fade direction="down" duration={2000}>
          <p style={{ margin: "50px 0" }} className="kodeMonoFont">
            All the members in INSENTOS will take the
            software and website development the next year ( at IPI ). Our group
            is really fond of learning and creating websites and softwares.
            That's why we chose this topic to present to you.
          </p>
        </Fade>
        <Fade direction="down" triggerOnce={true} duration={2000}>
          <SectionTwoAccordion />
        </Fade>
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
            <Fade direction="down" duration={2000}>
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
            </Fade>
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
