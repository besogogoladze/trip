import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day7/image0.jpg";
import image1 from "../../../Images/trip/Day7/image1.jpg";
import image2 from "../../../Images/trip/Day7/image2.jpg";
import image3 from "../../../Images/trip/Day7/image3.jpg";
import image4 from "../../../Images/trip/Day7/image4.jpg";
import image5 from "../../../Images/trip/Day7/image5.jpg";
import image6 from "../../../Images/trip/Day7/image6.jpg";
import image7 from "../../../Images/trip/Day7/image7.jpg";
import image8 from "../../../Images/trip/Day7/image8.jpg";
import image9 from "../../../Images/trip/Day7/image9.jpg";
import image10 from "../../../Images/trip/Day7/image10.jpg";
import image11 from "../../../Images/trip/Day7/image11.jpg";
import image12 from "../../../Images/trip/Day7/image12.jpg";
import image13 from "../../../Images/trip/Day7/image13.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
function TripDay7() {
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
      src: `${image4}`,
      width: 2,
      height: 2,
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
      src: `${image5}`,
      width: 4,
      height: 5,
    },
    {
      src: `${image6}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image7}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image8}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image9}`,
      width: 4,
      height: 5,
    },
    {
      src: `${image10}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image11}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image12}`,
      width: 4,
      height: 5,
    },
    {
      src: `${image13}`,
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
          <Typography color="#d33">Boat-Tour-In-Aveiro</Typography>
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
              Panda change and explore another environment ( Aveiro, 55 mins bus
              from the Porto )
            </div>
            Panda bought the ticket to go to Aveiro before the day we will go.
            Today, Panda group change their environment ( Aveiro ) which is away
            from 55 mins bus from the Porto. Panda discovered the magnificent
            city of Aveiro, where she visited a beautiful garden named Infante
            Dom Pedro Park. In the park, Penda enjoyed beautiful views as well
            as a small lake where birds lived. Then it was time to visit a
            museum, if you really love paintings of crucifixions, tomb
            sculptures and saints. The princess's sarcophagus is amazing, but it
            doesn't show her supposed modesty. The church is full of gold and
            baroque decorations: a sight for the eyes that doesn't mean much in
            our modern less religious times
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Boat tour in Aveiro
            </div>
            After visiting the museum, Panda Group started to buy the ticket for
            the boat visit, that was almost 40 mins to visit in central canal to
            explore the old houses along the canal, these views are really
            incredible for Panda Group. Panda took rest at the Central Mall and
            spend their time by doing shopping there. Panda Group returned to
            Porto at night. Their new adventure for that day was well finished.
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

export default TripDay7;
