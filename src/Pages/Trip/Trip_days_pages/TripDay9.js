import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day9/image0.jpg";
import image1 from "../../../Images/trip/Day9/image1.jpg";
import image2 from "../../../Images/trip/Day9/image2.jpg";
import image3 from "../../../Images/trip/Day9/image3.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
function TripDay9() {
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
  ];

  return (
    <>
      <div role="presentation" style={{ margin: "50px 0px 50px 50px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink underline="hover" color="inherit" to="/trip_page">
            Trip
          </NavLink>
          <Typography color="#d33">CISCO/CCNA</Typography>
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
              CISCO/CCNA DAY ( Ninth Day of Panda in OPorto )
            </div>
            Pandas went back to the ISLA for CISCO/CCNA course. Firstly, we
            studied about What is network and the protocols ( what is HTTP ,
            HTTPS , FTP , UDP DHCP DNS ) and the type of IP Address . After that
            , we started to practice the five exercises to improve our
            configurations on network projects. After the CCNA/CISCO course , we
            took the lunch at near the school. We attended to the Eng Course (
            with Krista ) to work on our blog and website ( we will make
            presentation after the trip ).
            <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The Tour of Proto with Cruise
            </div>
            Pandas Group 2 grouped near the riverside at 15:30 pm. The cruise
            started the tour at 4 pm .The tour took about at least 45 mins. We
            passed under many bridges by looking each sides of the riverside
            (like the beautiful buildings along the riverside ). We finished our
            tour with Cruise at 5:10 pm . Pandas left the group with their own
            plans to pass the last night of Porto.
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

export default TripDay9;
