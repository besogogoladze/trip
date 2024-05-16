import React from "react";
import { Container } from "@mui/material";
import pandaIpi from "../../../Images/panda-ipi.gif";

function SectionOne() {
  return (
    <>
      <h1 className="kodeMonoFont">INSENTOS</h1>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <p className="kodeMonoFont">
          We are happy to present our trip to Porto, where we can see the
          possibility of taking English language courses to improve our 4 skills
          (reading, writing, listening and speaking) and chances to study and
          communicate with other international friends. We will be in Porto for
          10 days to visit this magnificent city. We hope that this trip will
          allow us to discover and acquire new skills and knowledge in the field
          of cyber security. We are going to share and talk about our
          experiences in Porto and what we learned and observed during this
          Porto trip in this website.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <img className="pandaIpi" src={pandaIpi} alt="Error" />
        </div>
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
    </>
  );
}

export default SectionOne;
