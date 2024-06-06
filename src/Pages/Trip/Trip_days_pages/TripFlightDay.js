import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image1 from "../../../Images/trip/voyage/image1.jpeg";
import image2 from "../../../Images/trip/voyage/image2.jpeg";
import image3 from "../../../Images/trip/voyage/image3.jpg";
import image4 from "../../../Images/trip/voyage/image4.jpg";
import image5 from "../../../Images/trip/voyage/image5.jpg";
import image6 from "../../../Images/trip/voyage/image6.jpg";
import image7 from "../../../Images/trip/voyage/image7.png";
import image8 from "../../../Images/trip/Day2/image4.png";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
function TripFlightDay() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [
    {
      src: `${image1}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image2}`,
      width: 3,
      height: 3,
    },
    {
      src: `${image3}`,
      width: 6,
      height: 5,
    },
    {
      src: `${image7}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image5}`,
      width: 3,
      height: 3,
    },
    {
      src: `${image4}`,
      width: 5,
      height: 4,
    },
    {
      src: `${image6}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image8}`,
      width: 2,
      height: 2,
    },
  ];

  return (
    <>
      <div
        role="presentation"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink underline="hover" color="inherit" to="/trip_page">
            Trip
          </NavLink>
          <Typography color="#d33">Departure day</Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "5px",
            }}
            underline="hover"
            color="inherit"
            to="/day1"
          >
            Next Day <EastIcon />
          </NavLink>
        </Breadcrumbs>
      </div>
      <Container style={{ marginTop: "50px" }}>
        <Fade triggerOnce={true}>
          <Gallery
            photos={photos}
            direction={"column"}
            onClick={openLightbox}
          />
        </Fade>
        <Fade triggerOnce={true}>
          <h3 style={{ marginTop: "50px" }} className="kodeMonoFont">
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The Panda Day ( The Departure Day )
            </div>
            Most of the pandas arrived at 1:15 pm Blagnac airport ( Hall C ) and
            some didn't arrive in time. So, Pandas waited their friends to
            explore and travel together. At 2 pm, Pandas get their bamboo shoots
            ( air-tickets ) and waited their magnificent trip. The airplane took
            off at 4:20 pm(in France) and landed at 5pm (in Portugal Time).
            Pandas went to their forest (Porto Republica Hostel & Suites ) with
            shuttle, they arrived at 7:20pm. Pandas took just 10 mins to set up
            their luggage bags and started to explore The OPorto.
            <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The First Night First Shot 🥪
            </div>
            Panda can't wait to eat the Portuguese Sandwich ( Francesinha ). The
            preparation look like delicious and the taste of soup is perfect to
            eat with Sandwich. Actually, Panda found that the sandwich is a
            little bit salty at the first try ( first bite ). When they finished
            the 2/3 of Sandwich, they can't continue anymore to finish that
            sandwich.
          </h3>
          <h4
            style={{ marginTop: "50px", borderBottom: "2px dashed #000" }}
            className="kodeMonoFont"
          >
            ADVICE:
          </h4>
          <p style={{ marginTop: "10px" }} className="kodeMonoFont">
            Rating: 7 / 10, Should try the Portuguese Sandwich ( not everyday )
            because there are a lot of Portugal foods to try and taste.
          </p>
        </Fade>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </>
  );
}

export default TripFlightDay;
