import { Container } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SectionThree() {
  return (
    <div style={{ width: "100%" }} className="sectionThreeContainer">
      <Fade duration={2000} triggerOnce={true}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
            marginBottom: "100px",
            gap: "300px",
          }}
        >
          <h1
            className="kodeMonoFont"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            To know everything about the
          </h1>

          <NavLink
            className="kodeMonoFont"
            style={{
              color: "#003",
              width: "100%",
              minWidth: "200px",
              marginTop: "50px",
              textAlign: "center",
            }}
            exact="true"
            to="/trip_page"
          >
            <Button
              style={{ color: "#fff", borderColor: "#fff" }}
              variant="outlined"
              size="medium"
              className="sectionThreeTravelButton"
            >
              Click here🖐️
            </Button>
          </NavLink>
        </Container>
      </Fade>
    </div>
  );
}

export default SectionThree;
