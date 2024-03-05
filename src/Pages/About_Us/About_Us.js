import React from "react";
import { Container } from "@mui/system";
import "./about_Us.css";
import "../../index.css";
import ImgBesiki from "../../Images/1409039214015.jpg";
function About_Us() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="kodeMonoFont"
          style={{
            marginTop: "150px",
          }}
        >
          Groupe Members
        </h1>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexDirection: "column",
          border: "5px dashed #003",
          padding: "20px",
          margin: "20px",
        }}
      >
        <li>
          <h3>GOGOLADZE Besiki</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
          >
            <img src={ImgBesiki} alt="img error" />
            <p className="kodeMonoFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia.
            </p>
          </div>
        </li>
        <div
          style={{
            width: "100%",
            border: "2px dashed #000",
            margin: "50px 0 20px 0",
          }}
        ></div>
        <li>
          <h3>ADJA Ndiaye</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/dd3c85_afde82542b5e4cce8d7c526246761e51~mv2.png/v1/fill/w_181,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Capture%20d'%C3%A9cran%202023-03-30%20111828.png"
              alt="img error"
            />
            <p className="kodeMonoFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia.
            </p>
          </div>
        </li>
        <div
          style={{
            width: "100%",
            border: "2px dashed #000",
            margin: "50px 0 20px 0",
          }}
        ></div>
        <li>
          <h3>Ye Wint Hlaing</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/dd3c85_afde82542b5e4cce8d7c526246761e51~mv2.png/v1/fill/w_181,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Capture%20d'%C3%A9cran%202023-03-30%20111828.png"
              alt="img error"
            />
            <p className="kodeMonoFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default About_Us;
