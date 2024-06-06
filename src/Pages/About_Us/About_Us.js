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
import { Bounce, Fade, JackInTheBox, Slide } from "react-awesome-reveal";

function About_Us() {
  // let getYear = new Date().getFullYear();
  // let getMonth = new Date().getMonth();
  // let getDate = new Date().getDate();
  // let besikiAge = getYear - 1996;
  // if (getMonth <= 8 || getDate < 29) {
  //   besikiAge = besikiAge - 1;
  // }
  // let adjaAge = getYear - 2004;
  // if (getMonth <= 5 || getDate < 24) {
  //   adjaAge = adjaAge - 1;
  // }
  // let yeAge = getYear - 2001;
  // if (getMonth <= 5 || getDate < 24) {
  //   yeAge = yeAge - 1;
  // }
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
          <JackInTheBox triggerOnce={true}>
            <h3 style={{ marginBottom: "30px" }}>GOGOLADZE Besiki</h3>
          </JackInTheBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <Bounce duration={2000} triggerOnce={true}>
              <img
                style={{ width: "200px", borderRadius: "20px" }}
                src={Besiki}
                alt={ImgBesiki}
              />
            </Bounce>
            <Bounce duration={2000} triggerOnce={true}>
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
                interested in computers and Ai. I have been a rugby player for
                12 years and i'm still a professional rugby player.
              </p>
            </Bounce>
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
          <JackInTheBox triggerOnce={true}>
            <h3 style={{ marginBottom: "30px" }}>ADJA Ndiaye</h3>
          </JackInTheBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <Bounce duration={2000} triggerOnce={true}>
              <img
                style={{ width: "200px", borderRadius: "20px" }}
                src={Adja}
                alt={ImgBesiki}
              />
            </Bounce>
            <Bounce duration={2000} triggerOnce={true}>
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
            </Bounce>
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
          <JackInTheBox triggerOnce={true}>
            <h3 style={{ marginBottom: "30px" }}>Ye Wint Hlaing</h3>
          </JackInTheBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "60px",
            }}
            className="groupeMembers_img_p"
          >
            <Bounce duration={2000} triggerOnce={true}>
              <img
                style={{ width: "200px", borderRadius: "20px" }}
                src={Ye}
                alt={ImgBesiki}
              />
            </Bounce>
            <Bounce duration={2000} triggerOnce={true}>
              <p className="kodeMonoFont">
                Hi Everybody, My name is Ye Wint Hlaing. I am 22 years olds. I
                am from Myanmar{" "}
                <img src={Burma} style={{ width: "20px" }} alt={ImgBesiki} />
                (Burma). Now, I am studying Bachelor of information Technology
                in IPI Toulouse. Because I’m really interested in coding and
                developing Website, Application. That’s why I chose this major
                in IPI Toulouse. I play football and chess with my friend, in my
                free time. I really like to read books about military, history
                and some novels. I want to become software engineer In future,
                when I finish my Bachelor at IPI Toulouse.
              </p>
            </Bounce>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default About_Us;
