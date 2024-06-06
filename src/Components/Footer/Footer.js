import React from "react";
import IPI from "../../Images/IPI.png";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";
import panda from "../../Images/panda-print-baby.png";

function Footer() {
  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#d33",
          position: "relative",
        }}
      >
        <BookmarkBorderIcon
          style={{
            position: "absolute",
            top: "18px",
            right: "100px",
            fontSize: "60px",
            color: "#000",
          }}
          className="boockmarkIcon"
        />
        <img
          style={{
            position: "absolute",
            top: "-110px",
            left: "100px",
            fontSize: "60px",
            color: "#000",
            width: "100px",
          }}
          className="boockmarkIcon footerPanda"
          src={panda}
          alt="Error"
        />
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="footerBackgroundImg"
      >
        <div
          style={{
            width: "100%",
            margin: "20px 0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "100px 0",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            className="footer_up"
          >
            <div>
              <h3
                style={{
                  marginBottom: "20px",
                }}
              >
                IPI Toulouse
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <NavLink
                  exact="true"
                  target="_blank"
                  to="https://maps.app.goo.gl/J5h61LiQKm22jAXD9"
                  style={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                  className="footerNavLink"
                >
                  <PlaceIcon style={{ color: "#d33" }} />
                  <p style={{ marginLeft: "10px" }}>
                    Toulouse - 186 Route de Grenade – 31703 BLAGNAC
                  </p>
                </NavLink>
                <a
                  style={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                  href="mailto:jmbenito@groupe-igs.fr"
                  className="footerNavLink"
                >
                  <EmailIcon style={{ color: "#d33" }} />
                  <p style={{ marginLeft: "10px" }}>Jean-Marc BENITO</p>
                </a>
                <a
                  style={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                  href="tel:+33531087000"
                  className="footerNavLink"
                >
                  <SmartphoneIcon style={{ color: "#d33" }} />
                  <p style={{ marginLeft: "10px" }}>05 31 08 70 00</p>
                </a>
              </div>
            </div>
            <div>
              <h3
                style={{
                  marginBottom: "20px",
                  textWrap: "nowrap",
                }}
              >
                IPI Addresses
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "15px",
                }}
              >
                <NavLink
                  exact="true"
                  to="https://maps.app.goo.gl/zqBWuesGNwDAAp7UA"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  IPI Paris
                </NavLink>
                <NavLink
                  exact="true"
                  to="https://maps.app.goo.gl/1WgYjQUBcGye29WCA"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  IPI Lyon
                </NavLink>
                <NavLink
                  exact="true"
                  to="https://maps.app.goo.gl/J5h61LiQKm22jAXD9"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  IPI Toulouse
                </NavLink>
              </div>
            </div>
            <div>
              <h3
                style={{
                  marginBottom: "20px",
                }}
              >
                IPI Trainings
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "15px",
                }}
                id="ipiLevel"
              >
                <NavLink
                  exact="true"
                  to="https://www.ipi-ecoles.com/technicien-support-utilisateurs/"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  Level 4 (Bac)
                </NavLink>
                <NavLink
                  exact="true"
                  to="https://www.ipi-ecoles.com/technicien-superieur-en-technologies-numeriques/"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  Level 5 (Bac+2)
                </NavLink>
                <NavLink
                  exact="true"
                  to="https://www.ipi-ecoles.com/concepteur-developpeur-applications/"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  Level 6 (Bac+3/4)
                </NavLink>
                <NavLink
                  exact="true"
                  to="https://www.ipi-ecoles.com/cycle-mastere-informatique-expert-ingenierie-cloud-devops-avec-capgemini/"
                  style={{ color: "#000" }}
                  className="footerNavLink"
                >
                  Level 7 (Bac+5)
                </NavLink>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#444",
              margin: "20px 0",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            className="footer_down"
          >
            <p style={{ color: "#444", fontWeight: "bold" }}>
              Copyright © 2024,{" "}
              <NavLink
                style={{ fontSize: "20px", color: "#d33" }}
                exact="true"
                to="https://www.facebook.com/Bes096"
              >
                BG
              </NavLink>{" "}
              All rights reserved.
            </p>
            <img
              style={{ width: "100px", backgroundColor: "#fff" }}
              src={IPI}
              alt="IPI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
