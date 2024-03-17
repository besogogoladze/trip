import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./scrollTopButton.css";

function ScrollTopButton() {
  const [scrollYPosition, setScrollYPosition] = React.useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ position: "relative" }}>
      {scrollYPosition <= 100 ? null : (
        <button className="scrollButton" onClick={scrollToTop}>
          <ArrowUpwardIcon
            className="scrollArrow"
            style={{
              
            }}
          />
        </button>
      )}
    </div>
  );
}

export default ScrollTopButton;
