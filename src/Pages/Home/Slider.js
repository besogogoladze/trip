import React, { useEffect, useRef, useState } from "react";
import slide_1 from "../../Images/portugal-douro-porto-croisieurope-slider-pli-shutterstock.jpg";
import slide_2 from "../../Images/1701822270_portoslider2023001.jpg";
import Carousel from "react-elastic-carousel";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./home.css"

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
          >
          </Box>
        </div>
      ) : (
        <div style={{ display: "flex", position: "relative", width: "100%" }}>
          <Button
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
                fontSize: "40px",
              }}
            />
          </Button>
          <Carousel
            enableTilt={true}
            ref={carousel}
            itemsToShow={1}
            // enableAutoPlay={true}
            // autoPlaySpeed={2500}
            showArrows={false}
            enableSwipe={false}
            enableMouseSwipe={false}
            // onChange={(currentItem) =>
            //   currentItem.index !== carousel.current.state.pages.length - 1
            //     ? carousel.current.goTo(currentItem.index + 1)
            //     : carousel.current.goTo(0)
            // }
          >
            <img style={{ width: "100%" }} src={slide_1} alt="Img Error" />
            <img style={{ width: "100%" }} src={slide_2} alt="Img Error" />
          </Carousel>
          <Button
            ref={ArrowStyle}
            style={{ position: "absolute", right: "20px", top: "40%", color:"#000 !important" }}
            onClick={() =>
              carousel.current.state.activeIndex !==
              carousel.current.state.pages.length - 1
                ? carousel.current.slideNext()
                : carousel.current.goTo(0)
            }
          >
            <ArrowCircleRightOutlinedIcon
              style={{
                fontSize: "40px",
              }}
            />
          </Button>
        </div>
      )}
    </>
  )
}

export default Slider
