import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image1 from "../../../Images/trip/Day1/IMG_0734.jpg";
import image2 from "../../../Images/trip/Day1/image12.jpeg";
import image3 from "../../../Images/trip/Day1/4AA50647-3AB8-48F3-A18A-10A40CD70350.jpg";
import image4 from "../../../Images/trip/Day1/E6847B47-9DB1-4BCA-BE1C-91A27D335BFB.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
function TripDay1() {
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
      height: 3,
    },
    {
      src: `${image2}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image3}`,
      width: 2,
      height: 3,
    },
    {
      src: `${image4}`,
      width: 4,
      height: 3,
    },
  ];

  return (
    <>
      <div role="presentation" style={{ margin: "50px 0px 50px 50px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink underline="hover" color="inherit" to="/trip_page">
            Trip
          </NavLink>
          <Typography color="#d33">Dom-Luis-I-Bridge</Typography>
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
              Panda can speak Portuguese ( The First day of Panda in OPorto )
            </div>
            Pandas were really excited to go to the new University ( ISLA ) for
            their trip course ( Portugal Language Basic ). Pandas took their
            breakfast at 7:30 am and prepared to go to the ISLA. Firstly, they
            bought the Andante Ticket to visit the OPorto and took the bus 905
            to go to the ISLA. Pandas started to learn the language Portugal (
            months, days, numbers, greeting, etc ) for their first course.{" "}
            <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The Bacalhau Assado no Forno
            </div>
            With the suggestion of the Professor who taught the language
            Portugal to Pandas, We try the Balcalhau Assado no Forno at Carpa (
            near the ISLA, estimate 10 mins walk ), they prepared the dish with
            rice, fish, potatos ( as the main ingredient ). The taste is really
            mouth-watering for the pandas who can't wait to try the Portugal
            dish. <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Dom Luis I Bridge
            </div>
            After finished their lunch, Pandas started to go to the Famous
            Bridge Dom Luis I in Porto. The view is incredible and pandas got
            the memorable and unbelievable time for them ( the breath of the
            pandas stop there because of the magnificent view )
          </h3>
          <h4
            style={{ marginTop: "50px", borderBottom: "2px dashed #000" }}
            className="kodeMonoFont"
          >
            ADVICE:
          </h4>
          <p style={{ marginTop: "10px" }} className="kodeMonoFont">
            Rating: 8.5 / 10 rating for Bacalhau Assado no Forno ( Must Try Food
            in OPorto )
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

export default TripDay1;
