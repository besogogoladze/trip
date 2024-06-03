import React from "react";
import { Container } from "@mui/material";
import Gallery from "react-photo-gallery";
import image0 from "../../../Images/trip/Day3/image0.jpg";
import image1 from "../../../Images/trip/Day3/image1.jpg";
import image2 from "../../../Images/trip/Day3/image2.jpg";
import image3 from "../../../Images/trip/Day3/image3.jpg";
import image4 from "../../../Images/trip/Day3/image4.jpg";
import image5 from "../../../Images/trip/Day3/image5.jpg";
import image6 from "../../../Images/trip/Day3/image6.jpg";
import image7 from "../../../Images/trip/Day3/image7.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
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
      width: 2,
      height: 2,
    },
    {
      src: `${image6}`,
      width: 4,
      height: 4,
    },
    {
      src: `${image7}`,
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
          <Typography color="#d33">Panda-Gathering-Time</Typography>
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
              How Panda will use ChatGPT ? ( The Third Day of Panda in OPorto )
            </div>
            In third day in Porto, we learned ChatGPT with our professor who is
            called André Costa. That's really interesting and after the course,
            we knew exactly how to use effectively ChatGPT with the help of Our
            Professor André Costa. <br />
            <br />
            After the courses, Panda took rest and their lunch. And they walked
            and figured out the Porto City, and took some snacks and drinks at
            the tea shop. The best snack for Pandas, Pastel de natas, which is a
            Portuguese custard tart made with puff pastry and filled with egg
            custard that is served with a dusting of powdered sugar and a pinch
            of cinnamon, the best dessert for Panda.
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Panda explore the Market
            </div>
            Bolhão At the English course , Panda decided to visit and explore
            the Market Bolhão. We can find many fruits , wine , etc there. And
            also , Panda started to make and ask some questions for the survey
            about the trip of Porto to the people who visited the OPorto. Taking
            the surveys and finding the friends from the different countries are
            the unbelievable moment for Panda.
            <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              Panda Gathering Time
            </div>
            Pandas decided to gather this evening at the restaurant (Barris Do
            Douro) with their Panda Chef. Most of the Panda came this event to
            celebrate and drink together. That was an memorable dinner for every
            Pandas who joined that event. Panda G2 took also group photo with
            the bridge in the background.
            <br />
            <div
              style={{
                borderBottom: "2px dashed #000",
                margin: "10px 0",
                width: "fit-content",
              }}
            >
              The Tripa à moda à Porto
            </div>
            Panda Ye ordered Tripa à moda à Porto at that time , when the dish
            arrived in front of the Panda Ye , he can't wait to eat it because
            of its smell and preparation , the meat are tender and soft , the
            sauce is also delicious , when he ate with rice , that is a paradise
            for him <br />
          </h3>
          <h4
            style={{ marginTop: "50px", borderBottom: "2px dashed #000" }}
            className="kodeMonoFont"
          >
            ADVICE:
          </h4>
          <p style={{ marginTop: "10px" }} className="kodeMonoFont">
            Rating: 9/10 ( must-try dish in Porto )
          </p>
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

export default TripDay3;
