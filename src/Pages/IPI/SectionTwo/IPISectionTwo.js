import React from "react";
import "./IPISectionTwo.css";
import { Container } from "@mui/material";
import ipiToulouseHall from "../../../Images/ipi-toulouse-hall.png";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bandeauIpiChiffres from "../../../Images/bandeau-IPI-chiffres.jpg";
import ipiSliderRecontrezNous from "../../../Images/ipi-slider-rencontrez-nous.png";

function IPISectionTwo() {
  return (
    <Container style={{ margin: "50px auto" }}>
      <div className="ipiSectionTwo">
        <div id="ipiSectionTwoDiscoverSchool" style={{ width: "60%" }}>
          <h3>DISCOVER THE TOULOUSE IT SCHOOL</h3>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "5px",
                backgroundColor: "#d33",
              }}
            ></div>
          </div>
          <img style={{ width: "100%" }} src={ipiToulouseHall} alt="Error" />
          <div>
            <br />
            <p>
              Our IT school in Toulouse is ideally located in the heart of the
              leading European city in aeronautics and space, which guarantees a
              promising employment area.
            </p>
            <br />
            <p>
              Beyond all technical IT skills , we are committed to supporting
              you towards a professional posture, mastery of good teamwork
              practices, interpersonal skills, professionalism and the
              acquisition of the autonomy necessary for everything. professional
              in the digital and IT sector.
            </p>
            <br />
            <h3 style={{ color: "#d33" }}>
              A COMPUTER SCHOOL IN TOULOUSE IN A DYNAMIC ECONOMIC AREA
            </h3>
            <br />
            <p>
              Our IT school in Toulouse is ideally located in the heart of the
              leading European city in aeronautics and space, which guarantees a
              promising employment area. Occitanie, with its economic fabric
              driven by innovation , offers a rich range for your professional
              careers in the IT and digital sector.
            </p>
            <br />
            <h3 style={{ color: "#d33" }}>
              A COMPUTER SCHOOL AT THE HEART OF A START-UP UNIVERSE
            </h3>
            <br />
            <p>
              Toulouse is also a digital city, labeled “ French Tech Toulouse ”,
              a community which supports the economic and digital development of
              the territory. So many advantages for training in a conducive
              environment! The IPI IT school wants to support you in your skills
              development and allow you to benefit from a network of partner
              companies which will open the doors to the most cutting-edge
              projects, the spearhead of digital innovation. Thanks to this
              network, our Business Relations services provide internships,
              work-study contracts and projects.
            </p>
            <br />
            <h3 style={{ color: "#d33" }}>
              IT COURSES AND TRAINING IN ALL AREAS
            </h3>
            <br />
            <p>
              The IPI Toulouse IT school offers IT courses and training in the
              following digital sectors: network infrastructure, Microsoft
              Windows and Unix/Linux servers, cyber security, Cloud, databases,
              web development, software development, mobile development,
              embedded computing, Big Data, information systems architecture,
              virtual reality, connected objects, etc. We work in collaboration
              with a vast network of partner companies to continually evolve
              training courses in order to respond perfectly to the expectations
              of the sector professional. This is the guarantee of supporting
              you towards employability.
            </p>
            <br />
            <div
              style={{
                margin: "5px 0 30px 0",
              }}
            >
              <NavLink
                style={{
                  color: "#fff",
                  width: "50%",
                  padding: "15px 10px",
                  fontSize: "18px",
                  backgroundColor: "#5b1514",
                  border: "1px solid #5b1514",
                }}
                to="https://www.my-admission.com/formulaire.aspx?marque=IPI_T&id=1000&axeptio_token=vfqd8mv4hgrktvyov6kl0o&_gl=1*qr9vee*_ga*MTIyNjA4NTcxNS4xNzA5MDI0MDM2*_ga_CX6HW1HNV1*MTcxMjA3OTcxNC4xMC4xLjE3MTIwODEzMjcuNjAuMC4w"
              >
                DOCUMENTATION REQUEST
              </NavLink>
            </div>
            <br />
            <h3 style={{ color: "#d33" }}>
              AN EDUCATIONAL TEAM AT YOUR SERVICE
            </h3>
            <br />
            <p>
              To support you throughout your training course, a warm, caring
              team welcomes you and remains at your entire disposal.
            </p>
            <br />
            <Accordion
              id="ipiSectionTwoAccordion"
              style={{ border: "none", boxShadow: "unset" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div style={{ width: "100%" }}>
                  <h3>2ND STUDENT CITY AFTER PARIS</h3>
                  <div
                    style={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#000",
                      margin: "10px 0",
                    }}
                  >
                    <div
                      style={{
                        width: "20%",
                        height: "5px",
                        backgroundColor: "#d33",
                      }}
                    ></div>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <strong>
                    4th city in France, 2nd student city after Paris, 1st
                    European city in aeronautics and space
                  </strong>{" "}
                  , Toulouse is a friendly and festive city. The “Pink City”
                  enjoys a regional environment conducive to French and
                  international students, teachers and researchers. A very rich
                  leisure and cultural space. The city of Toulouse shines thanks
                  to the Nobel Prize in Economics won in October 2014 by Jean
                  Tirole, French economist, researcher at the University of
                  Toulouse for his work on the analysis of market power and
                  regulation. Proof of the relevance of our computer science
                  school in Toulouse: it is also a{" "}
                  <strong>digital city </strong>, host to French Tech Toulouse,
                  a community which supports the economic and digital
                  development of the territory. Toulouse has{" "}
                  <strong>
                    twice topped the “cities where it is good to study” ranking
                  </strong>{" "}
                  (source: L’Etudiant.fr). The site was based on several
                  criteria (studies, culture, housing, outings, international
                  influence, environment, sports, transport, employment) to
                  establish its ranking. Today, Toulouse is an eminently
                  university city. More than 110,000 students attend its 3
                  universities, its 14 major schools... A cosmopolitan,
                  colorful, bustling city... Finally, it is important to note
                  that Toulouse is barely an hour and a half from Spain, ski
                  slopes, the Mediterranean and two and a half hours from the
                  Atlantic Ocean. For your IT training, Toulouse is an ideal
                  city.
                </p>
              </AccordionDetails>
            </Accordion>
            <br />
            <h3>THE TOULOUSE IT SCHOOL IN FIGURES</h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#000",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  width: "20%",
                  height: "5px",
                  backgroundColor: "#d33",
                }}
              ></div>
            </div>
            <br />
            <div style={{ width: "100%" }}>
              <NavLink to="https://www.my-admission.com/formulaire.aspx?marque=IPI_T&id=1000&axeptio_token=vfqd8mv4hgrktvyov6kl0o&_gl=1*142txh8*_ga*MTIyNjA4NTcxNS4xNzA5MDI0MDM2*_ga_CX6HW1HNV1*MTcxMjA4MzE3OS4xMS4xLjE3MTIwODMyMDEuMzguMC4w">
                <img
                  style={{ width: "100%" }}
                  src={bandeauIpiChiffres}
                  alt="Error"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div id="ipiSectionTwoTestimony" style={{ width: "30%" }}>
          <h3>TESTIMONY</h3>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "5px",
                backgroundColor: "#d33",
              }}
            ></div>
          </div>
          <div
            style={{
              wordWrap: "break-word",
              fontSize: "15px",
              color: "#414042",
              textAlign: "justify",
              padding: "12px 20px 20px 20px",
              backgroundColor: "#e9e8e9",
            }}
          >
            <p style={{ marginTop: "20px" }}>
              Holder of a Master's degree in QSE Manager, I wanted to make a
              professional change linked to my passion: IT. Having knowledge of
              the professional environment, I knew in advance that work-study
              training was an important criterion of choice to optimize my
              professional integration. I chose the IPI for its 30 years of
              experience in IT training and for the support offered in
              researching and carrying out my work-study program at Akka
              Technologies in Toulouse.
            </p>
            <br />
            <h4 style={{ marginBottom: "10px" }}>
              Jonathan NAVE, TSTN class 2013-2015, work-study at AKKA
              Technologies
            </h4>
          </div>
          <br />
          <div
            style={{
              width: "100%",
            }}
          >
            <NavLink
              style={{
                display: "inline-block",
                color: "#fff",
                width: "100%",
                padding: "15px 0px",
                fontSize: "18px",
                backgroundColor: "#5b1514",
                textAlign: "center",
                border: "2px solid #ccc",
              }}
              to="https://www.ipi-ecoles.com/decouvrir-ecole-ipi/pourquoi-choisir-lipi/"
            >
              Why choose IPI?
            </NavLink>
          </div>
          <br />
          <div
            style={{
              width: "100%",
            }}
          >
            <NavLink
              style={{
                display: "inline-block",
                color: "#fff",
                width: "100%",
                padding: "15px 0px",
                fontSize: "18px",
                backgroundColor: "#414042",
                textAlign: "center",
                border: "2px solid #ccc",
              }}
              to="https://www.ipi-ecoles.com//candidature-toulouse/"
            >
              Join IPI Toulouse
            </NavLink>
          </div>
          <br />
          <h3>MEET US!</h3>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "5px",
                backgroundColor: "#d33",
              }}
            ></div>
          </div>
          <br />
          <div style={{ width: "100%" }}>
            <NavLink to="https://www.ipi-ecoles.com/decouvrir-ecole-ipi/venez-nous-rencontrer/">
              <img
                style={{ width: "100%" }}
                src={ipiSliderRecontrezNous}
                alt="Error"
              />
            </NavLink>
          </div>
          <br />
          <h3>ACCESS & CONTACTS</h3>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "5px",
                backgroundColor: "#d33",
              }}
            ></div>
          </div>
          <br />
          <div style={{ width: "100%" }}>
            <iframe
              style={{
                width: "100%",
                height: "300px",
                border: "0",
              }}
              title="This is map of IPI"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5774.411543753916!2d1.387164!3d43.643887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea53f4e7cfb37%3A0x4fd605c00c060ba2!2sIPI%20Toulouse%20-%20%C3%89cole%20d&#39;informatique!5e0!3m2!1sfr!2sus!4v1712087318796!5m2!1sfr!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default IPISectionTwo;
