import React from "react";
import { Container } from "@mui/material";
import { SmartButtonOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
function SectionOne() {
  return (
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
      <h1 className="kodeMonoFont">INSENTOS</h1>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <p className="kodeMonoFont">
          We are delighted to present to you our internship trip to Barcelona
          where we had the opportunity to take courses in English on
          cybersecurity. For 10 days, we had the opportunity to discover this
          magnificent city while learning about a subject that is increasingly
          important in our connected world. This trip allowed me to acquire new
          skills and knowledge in the field of cybersecurity, as well as to meet
          people from different backgrounds and to discuss our experiences. In
          this presentation, we are going to tell you about our experience in
          Barcelona and what we learned during this cybersecurity internship.
        </p>
        <h3
          className="kodeMonoFont"
          style={{ fontStyle: "italic", marginLeft: "20%", marginTop: "60px" }}
        >
          Short Description
        </h3>
        <ul
          className="kodeMonoFont"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: "10%",
            fontStyle: "italic",
          }}
        >
          <li style={{ listStyle: "initial" }}>
            [time] hours of lessons/conference in English
          </li>
          <li style={{ listStyle: "initial" }}>
            [time] hours of English reinforcement lessons
          </li>
          <li style={{ listStyle: "initial" }}>
            [number of visits] cultural visits
          </li>
          <li style={{ listStyle: "initial" }}>
            [number of visits] company visits
          </li>
        </ul>
      </Container>
      <Container
        style={{ display: "flex", flexDirection: "column", marginTop: "100px" }}
      >
        <h1
          className="kodeMonoFont"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          To know everything about the trip 👇
        </h1>

        <NavLink
          className="kodeMonoFont"
          style={{
            color: "#003",
            width: "150px",
            marginTop: "50px",
            alignSelf: "center",
          }}
          exact="true"
          to="/ABOUT_US"
        >
          <Button color="secondary" variant="outlined" size="medium">
            Click here🖐️
          </Button>
        </NavLink>
      </Container>
    </div>
  );
}

export default SectionOne;
