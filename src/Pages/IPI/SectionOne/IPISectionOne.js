import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import SquareIcon from "@mui/icons-material/Square";
import "./ipiSectionOne.css";
import ".././ipi.css";

function IPISectionOne() {
  let text1 =
    "IPI Toulouse is organizing a day dedicated to the presentation of its training programs. We invite you to come and interact with the IPI team and its students. You will also be offered a campus tour. Saturday March 23, 2024 Do you want to continue your studies in a Computer Science School, on a human scale?";
  text1 = text1.substring(0, 110);
  text1 = text1 + ` ...`;
  let text2 =
    "Take part in the IPI School Job Dating on March 27, 2024! We look forward to meeting you on Wednesday March 27, 2024 during our Job Dating, the opportunity to meet our partner companies and find your work-study position! Job Dating On March 27, 2024, come and meet 50 partner companies, who will be present for";
  text2 = text2.substring(0, 110);
  text2 = text2 + ` ...`;
  let text3 =
    "For the 11th consecutive year, the Agile Toulouse association and the IPI, School of Computer Science and Digital Technology, are pleased to invite you to their Agility through play discovery day! Wednesday February 7, 2024 ​ IPI & Association AGILE Toulouse Stade Ernest Wallon – from 9 a.m. to 4:30 p.m. Discover the interview with Cyrille François, member of the Association";
  text3 = text3.substring(0, 110);
  text3 = text3 + ` ...`;

  let text4 =
    "To join the IPI Toulouse School on the training course of your choice (Bac to Bac+5), it's very simple! Here is the procedure to follow: We first invite you to create an online application file. You will then be asked for your contact details, your motivations, the elements relating to your file";
  text4 = text4.substring(0, 120);
  text4 = text4 + ` ...`;
  return (
    <div>
      <Container style={{ margin: "50px auto" }}>
        <h1 style={{ color: "#d33" }}>IT TRAINING IN TOULOUSE</h1>
        <div style={{ margin: "100px 0" }}>
          <div>
            <h3>IT TRAINING OFFERED AT THE TOULOUSE CAMPUS</h3>
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/bachelor-developpeur/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                BACHELOR DEVELOPER
              </NavLink>
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/bachelor-infrastructure-reseaux-securite/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                BACHELOR NETWORK INFRASTRUCTURE CYBERSECURITY
              </NavLink>
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/cycle-mastere-informatique-expert-systemes-reseaux-et-cybersecurite/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                MASTER’S CYCLE IN COMPUTER SCIENCE – NETWORK SYSTEMS AND
                CYBERSECURITY EXPERT
              </NavLink>
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/cycle-mastere-informatique-expert-ingenierie-logicielle/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                MASTER’S CYCLE IN COMPUTER SCIENCE – SOFTWARE ENGINEERING EXPERT
              </NavLink>
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/cycle-mastere-informatique-expert-ingenierie-cloud-devops-avec-capgemini/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                MASTER’S CYCLE IN IT – CLOUD & DEVOPS ENGINEERING EXPERT WITH
                CAPGEMINI
              </NavLink>
              <NavLink
                className="ipiNavLink"
                exact="true"
                to="https://www.ipi-ecoles.com/digitalents-expert-developpement-logiciel/"
              >
                <SquareIcon
                  style={{
                    color: "d33",
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                />
                MASTER'S CYCLE IN COMPUTER SCIENCE DIGITALENTS – EXPERT IN
                SOFTWARE DEVELOPMENT WITH SOPRA STERIA
              </NavLink>
            </div>
          </div>
        </div>
        <div id="ipiSectionOneNews">
          <h3>OUR NEWS</h3>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ width: "255px" }}>
              <img
                style={{ maxWidth: "270px", width: "100%" }}
                src="https://www.ipi-ecoles.com/wp-content/uploads/2020/12/jpo-toulouse-05-dec.jpg"
                alt="error"
              />
              <div
                className="ipiSectionOneNews"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4 style={{ color: "#d33" }}>OPEN DOORS DAY</h4>
                <p style={{ textOverflow: "ellipsis" }}>{text1}</p>
                <NavLink
                  to="https://www.ipi-ecoles.com/jpo-ipi-toulouse/"
                  style={{ alignSelf: "end", color: "#d33" }}
                >
                  Read more
                </NavLink>
              </div>
            </div>
            <div style={{ width: "255px" }}>
              <img
                style={{ maxWidth: "270px", width: "100%" }}
                src="https://www.ipi-ecoles.com/wp-content/uploads/2023/03/header-JD-Tlse-270x102.png"
                alt="error"
              />
              <div
                className="ipiSectionOneNews"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4 style={{ color: "#d33" }}>OPEN DOORS DAY</h4>
                <p>{text2}</p>
                <NavLink
                  to="https://www.ipi-ecoles.com/job-dating-alternance-3eme-annee-masteres/"
                  style={{ alignSelf: "end", color: "#d33" }}
                >
                  Read more
                </NavLink>
              </div>
            </div>
            <div style={{ width: "255px" }}>
              <img
                style={{ maxWidth: "270px", width: "100%" }}
                src="https://www.ipi-ecoles.com/wp-content/uploads/2022/01/IPI_TLSE_AFF_AGILITE_PAR_LE_JEU_IMG_ACTUS_SITE_WEB-270x102.png"
                alt="error"
              />
              <div
                className="ipiSectionOneNews"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4 style={{ color: "#d33" }}>OPEN DOORS DAY</h4>
                <p>{text3}</p>
                <NavLink
                  to="https://www.ipi-ecoles.com/journee-agile/"
                  style={{ alignSelf: "end", color: "#d33" }}
                >
                  Read more
                </NavLink>
              </div>
            </div>
            <div style={{ width: "255px" }}>
              <img
                style={{ maxWidth: "270px", width: "100%" }}
                src="https://www.ipi-ecoles.com/wp-content/uploads/2016/01/Site_IPI_034-270x102.jpg"
                alt="error"
              />
              <div
                className="ipiSectionOneNews"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4 style={{ color: "#d33" }}>OPEN DOORS DAY</h4>
                <p>{text4}</p>
                <NavLink
                  to="https://www.ipi-ecoles.com/candidature-ecole-ipi-toulouse/"
                  style={{ alignSelf: "end", color: "#d33" }}
                >
                  Read more
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IPISectionOne;
