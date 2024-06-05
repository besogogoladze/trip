import React from "react";
import { Container } from "@mui/material";
import pandaIpi from "../../../Images/panda-ipi.gif";
import { Fade } from "react-awesome-reveal";

function SectionOne() {
  return (
    <>
      <Fade direction="down" duration={2000}>
        <h1 className="kodeMonoFont">INSENTOS</h1>
      </Fade>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Fade direction="down" duration={2000} triggerOnce={true}>
          <p className="kodeMonoFont">
            We are happy to present our trip to Porto, where we can see the
            possibility of taking English language courses to improve our 4
            skills (reading, writing, listening and speaking) and chances to
            study and communicate with other international friends. We will be
            in Porto for 10 days to visit this magnificent city. We hope that
            this trip will allow us to discover and acquire new skills and
            knowledge in the field of cyber security. We are going to share and
            talk about our experiences in Porto and what we learned and observed
            during this Porto trip in this website.
          </p>
        </Fade>
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
        <Fade direction="down" duration={2000}>
          <h3
            className="kodeMonoFont"
            style={{
              fontStyle: "italic",
              marginLeft: "20%",
              marginTop: "60px",
            }}
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
              [32h] Hours of lessons/conference in English
            </li>
            <li style={{ listStyle: "initial" }}>
              [9h] Hours of English reinforcement lessons
            </li>
            <li style={{ listStyle: "initial" }}>
              [2] Cultural visits (Portugal language course / Tourism day at
              ISLA with Portuguese students)
            </li>
            <li style={{ listStyle: "initial" }}>[1] Company visits</li>
          </ul>
        </Fade>
      </Container>
    </>
  );
}

export default SectionOne;
