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
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
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
      width: 4,
      height: 3,
    },
    {
      src: `${image3}`,
      width: 6,
      height: 5,
    },
    {
      src: `${image4}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image5}`,
      width: 3,
      height: 3,
    },
    {
      src: `${image6}`,
      width: 5,
      height: 4 ,
    },
    {
      src: `${image7}`,
      width: 2,
      height: 1,
    },
  ];

  return (
    <Container style={{ marginTop: "50px" }}>
      <Fade>
        <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
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
  );
}

export default TripFlightDay;
