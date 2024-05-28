import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day5/image0.jpg";
import image1 from "../../../Images/trip/Day5/image1.jpg";
import image2 from "../../../Images/trip/Day5/image2.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
function TripDay5() {
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
    {
      src: `${image2}`,
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
          <Typography color="#d33">What-Is-Metyis</Typography>
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
              What is Metyis ( The Fifth Day of Panda in OPorto )
            </div>
            Today, Pandas are really excited to go to the company which is
            called Metyis ( 25 mins from the ISLA ) and one of the most
            innovative and technology company in the world. Metyis is a tech
            giant company which provides and delivers the best services like, AI
            & Data, Digital Commerce, Marketing and Design solution to their
            partners and Customers. This company visit is really effective for
            the pandas who want to study and become software developer or web
            developer in the next year because of the good presentation of the
            developers at Metyis. <br />
            <br />
            The thing we learn from that visit : most of the entreprise software
            are created by Java (Spring), Node.js, React.js. that depends on the
            developers but the projects like ( Sennheiser, Carlsberg, Metyis )
            in that presentation are created with those technologies
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Panda Free time
            </div>
            Pandas returned to their forests and they did homework and the
            things need to upload for their blogs
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

export default TripDay5;
