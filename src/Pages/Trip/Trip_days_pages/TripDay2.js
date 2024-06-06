import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image1 from "../../../Images/trip/Day2/image0.jpeg";
import image2 from "../../../Images/trip/Day2/image3.jpeg";
import image3 from "../../../Images/trip/Day2/image7.jpeg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
function TripDay2() {
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
      src: `${image3}`,
      width: 3,
      height: 4,
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
          <Typography color="#d33">Church-Saint-Ildefonso</Typography>
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
            to="/day3"
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
              What is SEO ( Search Engine Optimization ) ? ( The Second Day of
              Panda in OPorto )
            </div>
            SEO means Search Engine Optimization and is the process used to
            optimize a website's technical configuration, content relevance and
            link popularity so its pages can become easily findable, more
            relevant and popular towards user search queries, and as a
            consequence, search engines rank them better.
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The step by step How SEO works:
            </div>
            1.CRAWLING
            <br />
            2.INDEXING
            <br />
            3.Provide results ( quickly scan and find the topic relevant to the
            users by using complex algorithms, also ranking factors the most
            relevant and importance )<br />
            4.Ranking Algorithms
            <br />
            <br />
            The things we learned from that course: We knew that how SEO work
            and how it effects on the website to be more popular and relevant to
            find out more easily, it is more effective and useful for software
            engineers and web developers
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Church Saint Ildefonso
            </div>
            That day, Penda visited an eighteenth-century church, was built in a
            Proto-Baroque style and features a retable by the Italian artist
            Nicolau Nasoni, made up of several floors where you can find
            different sculptures and works of art, each more beautiful than the
            last. She enjoyed discovering and photographing the various
            creations.
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

export default TripDay2;
