import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day8/image0.jpg";
import image1 from "../../../Images/trip/Day8/image1.jpg";
import image2 from "../../../Images/trip/Day8/image2.jpg";
import image3 from "../../../Images/trip/Day8/image3.jpg";
import image4 from "../../../Images/trip/Day8/image4.jpg";
import image5 from "../../../Images/trip/Day8/image5.png";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
function TripDay8() {
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
      width: 4,
      height: 5,
    },
    {
      src: `${image0}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image3}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image4}`,
      width: 2,
      height: 2,
    },
    
    {
      src: `${image5}`,
      width: 2,
      height: 2,
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
          <Typography color="#d33">Panda-And-Dragon</Typography>
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
            to="/day9"
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
              Panda found a new friend Dragon ( Seventh Day of Panda in OPorto )
            </div>
            Panda Ye is really fond of playing football and in Porto , there is
            one of the greatest football club which is called FC Porto. Panda
            took the metro E to go to there and bought the ticket to visit the
            museum and the stadium . At stadium , he found the new friend (
            Dragon ) at Porto. Panda took a lot of photos of the stadium and
            museum with his new friend. The stadium is so beautiful and that
            visit is memorable tour for Panda Ye in his life.
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

export default TripDay8;
