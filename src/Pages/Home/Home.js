import React from "react";
import Slider from "./Slider/Slider";
import SectionOne from "./SectionOne/SectionOne";
import ModalHome from "./Modal/ModalHome";
import SectionTwo from "./SectionOne/SectionTwo";
import Puzzle from "./SectionOne/Puzzle";
import SectionThree from "./SectionOne/SectionThree";
import "./home.css";

function Home() {
  return (
    <div>
      <ModalHome />
      <Slider />
      <div
        style={{
          margin: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <SectionOne />
        <SectionTwo />
        <Puzzle />
        <SectionThree />
      </div>
    </div>
  );
}

export default Home;
