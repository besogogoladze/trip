import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/image0.jpeg";
import image1 from "../../../Images/trip/image1.jpeg";
import image2 from "../../../Images/trip/image2.jpeg";
import image3 from "../../../Images/trip/image3.jpeg";
import image4 from "../../../Images/trip/image4.jpeg";
import image5 from "../../../Images/trip/image5.jpeg";
import image6 from "../../../Images/trip/image6.jpeg";
import image7 from "../../../Images/trip/image7.jpeg";
import image8 from "../../../Images/trip/image8.jpeg";
import image9 from "../../../Images/trip/image9.jpeg";
import image11 from "../../../Images/trip/image11.jpeg";
import image12 from "../../../Images/trip/image12.jpeg";
import image13 from "../../../Images/trip/image13.jpeg";
import image14 from "../../../Images/trip/image14.jpeg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
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
      src: `${image0}`,
      width: 3,
      height: 3,
    },
    {
      src: `${image1}`,
      width: 1,
      height: 2,
    },
    {
      src: `${image2}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image3}`,
      width: 4,
      height: 5,
    },
    {
      src: `${image4}`,
      width: 2,
      height: 3,
    },
    {
      src: `${image5}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image6}`,
      width: 3,
      height: 4,
    },
    {
      src: `${image7}`,
      width: 2,
      height: 3,
    },
    {
      src: `${image8}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image9}`,
      width: 2,
      height: 2,
    },
    {
      src: `${image11}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image12}`,
      width: 3,
      height: 3,
    },
    {
      src: `${image13}`,
      width: 4,
      height: 3,
    },
    {
      src: `${image14}`,
      width: 4,
      height: 3,
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

export default TripDay1;
