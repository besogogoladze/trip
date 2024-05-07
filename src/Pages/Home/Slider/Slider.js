import React, { useEffect, useRef, useState } from "react";
import slide_1 from "../../../Images/slider1.jpg";
import slide_2 from "../../../Images/slider2.png";
import slide_3 from "../../../Images/slider3.jpg";
import slide_4 from "../../../Images/slider4.png";
import Carousel from "react-elastic-carousel";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "../home.css";
import "./slider.css";

function Slider() {
  const [isLoading, setIsLoading] = useState(true);
  const carousel = useRef(null);
  const ArrowStyle = useRef(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              margin: "auto",
            }}
          ></Box>
        </div>
      ) : (
        <div
          className="carouselDiv"
          style={{ display: "flex", position: "relative", width: "100%" }}
        >
          <Button
            className="carouselArrowButton"
            ref={ArrowStyle}
            style={{
              position: "absolute",
              left: "20px",
              top: "40%",
              zIndex: "1000",
            }}
            onClick={() =>
              carousel.current.state.activeIndex !== 0
                ? carousel.current.slidePrev()
                : carousel.current.goTo(carousel.current.state.pages.length - 1)
            }
          >
            <ArrowCircleLeftOutlinedIcon
              style={{
                fontSize: "60px",
                color: "snow",
              }}
            />
          </Button>
          <Carousel
            enableTilt={true}
            ref={carousel}
            itemsToShow={1}
            itemsToScroll={1}
            showArrows={false}
            enableSwipe={false}
            enableMouseSwipe={false}
            // enableAutoPlay={true}
            // autoPlaySpeed={2500}
            // onChange={() =>
            //   carousel.current.state.activeIndex !==
            //   carousel.current.state.pages.length - 1
            //     ? setTimeout(() => carousel.current.slideNext(), 2500)
            //     : setTimeout(() => carousel.current.goTo(0), 2500)
            // }
          >
            <img style={{ width: "100%" }} src={slide_2} alt="Img Error" />
            <img style={{ width: "100%" }} src={slide_1} alt="Img Error" />
            <img style={{ width: "100%" }} src={slide_3} alt="Img Error" />
            <img style={{ width: "100%" }} src={slide_4} alt="Img Error" />
          </Carousel>
          <Button
            className="carouselArrowButton"
            ref={ArrowStyle}
            style={{
              position: "absolute",
              right: "20px",
              top: "40%",
              color: "#000 !important",
            }}
            onClick={() =>
              carousel.current.state.activeIndex !==
              carousel.current.state.pages.length - 1
                ? carousel.current.slideNext()
                : carousel.current.goTo(0)
            }
          >
            <ArrowCircleRightOutlinedIcon
              style={{
                fontSize: "60px",
                color: "snow",
              }}
            />
          </Button>
        </div>
      )}
    </>
  );
}

export default Slider;
