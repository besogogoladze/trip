import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import SectionOne from "./SectionOne/SectionOne";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import modalImg from "../../Images/ipi-guide-metier-popup.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [open, setOpen] = React.useState(false);
  const [modalStorage, setModalStorage] = React.useState(
    localStorage.getItem("modal")
  );
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [getTime, setGetTime] = useState(null);
  const [expirationTime, setExpirationTime] = useState(null);

  useEffect(() => {
    const expiration = currentTime + 24 * 60 * 60 * 1000;
    setExpirationTime(expiration);
    const timeDifference = currentTime - expirationTime;
    if (timeDifference > 0) {
      localStorage.removeItem("modal");
    }
    modalStorage === null ? setOpen(true) : setOpen(false);
  }, []);
  console.log(getTime);

  const handleClick = () => {
    setOpen(false);
    setGetTime(new Date().getTime());
    setModalStorage(localStorage.setItem("modal", true));
  };
  return (
    <div>
      {!modalStorage && (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modalClass"
        >
          <Box
            className="modalBoxClass"
            style={{ position: "relative", padding: "0" }}
            sx={style}
          >
            <Button
              style={{
                color: "#000",
                position: "absolute",
                top: "-15px",
                right: "-15px",
                minWidth: "unset",
                padding: "2px",
                borderRadius: "2rem",
                backgroundColor: "#d33",
                border: "1px solid #000",
              }}
              className="modal"
              onClick={handleClick}
            >
              <CloseOutlinedIcon />
            </Button>
            <Link to="https://www.ipi-ecoles.com/telecharger-le-guide-metier-de-lipi/">
              <img style={{ width: "100%" }} src={modalImg} alt="Error" />
            </Link>
          </Box>
        </Modal>
      )}
      <Slider />
      <SectionOne />
    </div>
  );
}

export default Home;
