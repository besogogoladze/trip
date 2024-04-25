import React from "react";
import { Container } from "@mui/system";
import "./about_Us.css";
import "../../index.css";
import ImgBesiki from "../../Images/incognito.jpg";
import Besiki from "../../Images/Besiki.JPEG";
import Adja from "../../Images/Adja.jpg";
import Ye from "../../Images/Ye.jpeg";
import Georgia from "../../Images/georgia.png";
import Burma from "../../Images/Burma.png";
import Senegal from "../../Images/Senegal.png";

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
            <img style={{ width: "200px" }} src={Besiki} alt={ImgBesiki} />
            <p className="kodeMonoFont">
              Hello, my name is Besiki Gogoladze. I'm 27 years old. I'm from
              Georgia{" "}
              <img
                src={Georgia}
                style={{ width: "20px" }}
                alt="Flag of georgia"
              />
              . I'm a student in IPI Computer Science. My goal is to become a
              professional developer of web and web mobile. also, i am
              interested in computers and Ai. I have been a rugby player for 12
              years and i'm still a professional rugby player. My inspiration
              words in life: "You will do everything if you really want it!".
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
            <img style={{ width: "200px" }} src={Adja} alt={ImgBesiki} />
            <p className="kodeMonoFont">
              My name is Adja Ndiaye, I'm 19 years old, and I'm from Senegal{" "}
              <img src={Senegal} style={{ width: "20px" }} alt={ImgBesiki} />.
              Currently, I'm a student in computer science at IPI Toulouse,
              which is part of the IGS groupe. I'm really into technology, and
              I'm passionate about computers. I enjoy paying attention to
              details and learning new things. I'm determined to succeed in my
              studies and hope to make a meaningful impact in the field of
              technology someday.
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
            <img style={{ width: "200px" }} src={Ye} alt={ImgBesiki} />
            <p className="kodeMonoFont">
              Hi Everybody, My name is Ye Wint Hlaing. I am 22 years olds. I am
              from Myanmar{" "}
              <img src={Burma} style={{ width: "20px" }} alt={ImgBesiki} />
              (Burma). Now, I am studying Bachelor of information Technology in
              IPI Toulouse. Because I’m really interested in coding and
              developing Website, Application. That’s why I chose this major in
              IPI Toulouse. I play football and chess with my friend, in my free
              time. I really like to read books about military, history and some
              novels. I want to become software engineer In future, when I
              finish my Bachelor at IPI Toulouse.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default About_Us;
