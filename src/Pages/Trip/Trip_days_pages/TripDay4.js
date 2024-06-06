import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day4/image0.jpg";
import image1 from "../../../Images/trip/Day4/image1.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
function TripDay4() {
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
      src: `${image0}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image1}`,
      width: 4,
      height: 3,
    },
  ];

  return (
    <>
      <div role="presentation" style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink underline="hover" color="inherit" to="/trip_page">
            Trip
          </NavLink>
          <Typography color="#d33">Panda-Plays-Football</Typography>
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
            to="/day5"
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
              Panda become Python Coder ( The Fourth Day of Panda in OPorto )
            </div>
            In the fourth day, Pandas learned the Python Fundamental Course By
            André Costa. Panda worked together to create a new basis program
            which is to estimate the fortune and to show the creativity by each
            Panda. The course is really interesting and Panda learned a lots of
            things from that course. Thank you to our Professor André Costa
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Panda Plays Football
            </div>
            Panda group found the field to play football ( 5 vs 5 ) with other
            pandas. They spend 1 hour in that field by enjoying new feeling of
            playing in Porto
            <br />
          </h3>
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

export default TripDay4;
