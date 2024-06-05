import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/ArrivalDay/image0.jpg";
import image1 from "../../../Images/trip/ArrivalDay/image1.jpg";
import image2 from "../../../Images/trip/ArrivalDay/image2.jpg";
import image3 from "../../../Images/trip/ArrivalDay/image3.jpg";
import image4 from "../../../Images/trip/ArrivalDay/image4.JPG";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
function TripArrivalDay() {
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
  ];

  return (
    <>
      <div role="presentation" style={{ margin: "50px 0px 50px 50px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink underline="hover" color="inherit" to="/trip_page">
            Trip
          </NavLink>
          <Typography color="#d33">Arrival-Day-to-Toulouse</Typography>
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
              Arrival Day to Toulouse ( The last day in Porto )
            </div>
            That day, 30 May, Pandas woke up early and prepared to return to our
            forests. We started to take the shuttle at 8:30am and arrived the
            Porto Airport at 8:55am. We waited almost 2 hours there to get the
            boarding pass. Finally, we were completely ready for take off but
            the fight time was a little bit late. We arrived at the Blagnac
            Airport successfully ( but there is a problem to land in first time,
            the next try, RyanAir successfully landed to the Blangac Airport ).
            After that, Pandas left to their houses. That's the end of the Porto
            Trip for every Pandas.
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

export default TripArrivalDay;
