import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import pandaIpi from "../../../Images/panda-ipi.gif";

function SectionOne() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h3 style={{ textTransform: "uppercase" }}>
                See more about Web Development
              </h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Frontend Development</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  HTML, CSS, JavaScript, frameworks like React, Angular, or
                  Vue.js.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Backend Development</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Server-side languages like Python, Node.js, Ruby, PHP, or
                  Java, along with frameworks like Django, Express.js, Ruby on
                  Rails, Laravel, or Spring.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Full-stack Development</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Combining frontend and backend development skills to create
                  end-to-end web applications.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Web Security</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Best practices for securing web applications, protecting
                  against common vulnerabilities like SQL injection, cross-site
                  scripting (XSS), and cross-site request forgery (CSRF).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Web Performance Optimization</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Techniques for improving website speed, such as caching,
                  minification, and image optimization.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Responsive Web Design</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Designing websites to provide an optimal viewing experience
                  across different devices and screen sizes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Web Accessibility</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ensuring websites are usable by people with disabilities and
                  comply with accessibility standards like WCAG (Web Content
                  Accessibility Guidelines).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Content Management Systems (CMS)</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Platforms like WordPress, Drupal, or Joomla for creating and
                  managing website content.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Progressive Web Apps (PWAs)</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Web applications that provide a native app-like experience,
                  including features like offline access and push notifications.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Web Development Tools</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  IDEs (Integrated Development Environments), text editors,
                  version control systems like Git, and other tools for web
                  development workflows.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
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
          to="/trip_page"
        >
          <Button
            style={{ color: "#d33", borderColor: "#d33" }}
            variant="outlined"
            size="medium"
          >
            Click here🖐️
          </Button>
        </NavLink>
      </Container>
    </div>
  );
}

export default SectionOne;
