import React from "react";
import { Container } from "@mui/system";
import "./about_Us.css";
import "../../index.css";
import ImgBesiki from "../../Images/incognito.jpg";
function About_Us() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <h1 className="kodeMonoFont">Groupe Members</h1>
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
        <li className="groupeMembers_li">
          <h3 style={{ marginBottom: "30px" }}>GOGOLADZE Besiki</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <img style={{ width: "250px" }} src={ImgBesiki} alt="img error" />
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
        <li className="groupeMembers_li">
          <h3 style={{ marginBottom: "30px" }}>ADJA Ndiaye</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <img style={{ width: "250px" }} src={ImgBesiki} alt="img error" />
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
        <li className="groupeMembers_li">
          <h3 style={{ marginBottom: "30px" }}>Ye Wint Hlaing</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <img style={{ width: "250px" }} src={ImgBesiki} alt="img error" />
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
