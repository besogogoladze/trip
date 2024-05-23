import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image1 from "../../../Images/trip/Day3/image0.jpg";
import image2 from "../../../Images/trip/Day3/image1.jpg";
import image3 from "../../../Images/trip/Day3/image2.jpg";
import image4 from "../../../Images/trip/Day3/image3.jpg";
import image5 from "../../../Images/trip/Day3/image4.jpg";
import image6 from "../../../Images/trip/Day3/image5.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
function TripDay3() {
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
      src: `${image6}`,
      width: 1,
      height: 1,
    },
    {
      src: `${image4}`,
      width: 4,
      height: 4,
    },
    {
      src: `${image5}`,
      width: 4,
      height: 5,
    },
    {
      src: `${image3}`,
      width: 1,
      height: 1,
    },
  ];

  return (
    <Container style={{ marginTop: "50px" }}>
      <Fade>
        <h1>Text</h1>
      </Fade>
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

export default TripDay3;
