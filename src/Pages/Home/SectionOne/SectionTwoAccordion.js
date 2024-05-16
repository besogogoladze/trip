import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SectionTwoAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1-content" id="panel1-header">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ textTransform: "uppercase", textAlign: "center" }}>
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
              HTML, CSS, JavaScript, frameworks like React, Angular, or Vue.js.
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
              Server-side languages like Python, Node.js, Ruby, PHP, or Java,
              along with frameworks like Django, Express.js, Ruby on Rails,
              Laravel, or Spring.
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
              Best practices for securing web applications, protecting against
              common vulnerabilities like SQL injection, cross-site scripting
              (XSS), and cross-site request forgery (CSRF).
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
              Designing websites to provide an optimal viewing experience across
              different devices and screen sizes.
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
              IDEs (Integrated Development Environments), text editors, version
              control systems like Git, and other tools for web development
              workflows.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
}

export default SectionTwoAccordion;
