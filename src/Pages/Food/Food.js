import { Container } from "@mui/material";
import React from "react";
import sandwich from "../../Images/food_sandwich.png";
import breadcrumbles from "../../Images/food_breadcrumbs.png";
import aletria from "../../Images/food_aletria.png";
import "../Home/home.css";
import FoodTornPaperRotated from "../../Components/SVG/FoodTornPaperRotated";
import FoodTornPaper from "../../Components/SVG/FoodTornPaper";

function Food() {
  return (
    <div>
      <Container style={{ position: "relative", marginTop: "20px" }}>
        <div
          style={{ width: "100%", position: "absolute", top: "0", left: "0" }}
        >
          <FoodTornPaper />
        </div>
        <div className="foodContainer">
          <h1
            className="kodeMonoFont"
            style={{
              textAlign: "center",
              marginTop: "20px",
              backgroundColor: "#003",
              color: "#fff",
              borderRadius: "50px",
              padding: "20px 0",
            }}
          >
            TOP THINGS TO EAT IN <br /> PORTO
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          <FoodTornPaperRotated />
        </div>
      </Container>
      <Container
        style={{
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            marginBottom: "50px",
            textAlign: "center",
          }}
          className="kodeMonoFont"
        >
          Francesinha sandwich
        </h1>
        <div
          className="foodText"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ width: "100%" }} className="kodeMonoFont">
              Francesinha ( meaning little French woman ) is a Portuguese
              sandwich, originally from Porto , made with layers of toasted
              bread and assorted hot meats such as roast , steak ,wet-cured ham
              , linguica or chipolata over which sliced cheese is melted by the
              ladling of a near-boiling tomato-and-beer sauce called molho de
              francesinha ( typically served with French fries )
            </p>
          </div>
          <img
            style={{ width: "60%", borderRadius: "0 50px 50px 0" }}
            src={sandwich}
            alt="Error"
          />
        </div>
      </Container>
      <Container
        style={{
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            marginBottom: "50px",
            textAlign: "center",
          }}
          className="kodeMonoFont"
        >
          Bolinhos de Bacalhau
        </h1>
        <div
          className="foodTextReverse"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "60%",
              transform: "rotateY(180deg)",
              borderRadius: "0 50px 50px 0",
            }}
            src={breadcrumbles}
            alt="Error"
          />
          <div>
            <p style={{ width: "100%" }} className="kodeMonoFont">
              Food in Portugal is undeniably tasty, including bolinhos de
              bacalhau—or Portuguese codfish balls—a well-seasoned sphere of
              potato and codfish, coated in golden breadcrumbs.
            </p>
          </div>
        </div>
      </Container>
      <Container
        style={{
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            marginBottom: "50px",
            textAlign: "center",
          }}
          className="kodeMonoFont"
        >
          Aletria
        </h1>
        <div
          className="foodText"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ width: "100%" }} className="kodeMonoFont">
              Another traditional Portuguese dish, Aletria is a sweet dessert
              made of fine, stringy pasta, with milk, egg yolks, sugar, lemon
              rind, and cinnamon for a custardy, zesty finish. The dish is
              usually topped with a criss-cross pattern of cinnamon powder.
              Vermicelli noodles can also be used to make aletria, which is
              typically eaten during the holidays in Portugal.
            </p>
          </div>
          <img
            style={{ width: "60%", borderRadius: "0 50px 50px 0" }}
            src={aletria}
            alt="Error"
          />
        </div>
      </Container>
    </div>
  );
}

export default Food;
