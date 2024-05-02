import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import SectionOne from "./SectionOne/SectionOne";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import modalImg from "../../Images/ipi-guide-metier-popup.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

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
  // const [expirationTime, setExpirationTime] = React.useState(null);
  // // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  //   setModalStorage(localStorage.setItem("modal", true));
  //   const now = new Date();
  //   const expiration = new Date(now.getTime()).getMinutes + 10;
  //   setExpirationTime(expiration);
  //   const expirationTime = 10;
  //   const currentTime = new Date().getSeconds();
  //   console.log(expiration, expirationTime, currentTime);
  //   const timeDifference = expirationTime - currentTime;
  //   console.log(timeDifference);
  //   let timeoutId;
  //   if (timeDifference > 0) {
  //     timeoutId = setTimeout(() => {
  //       localStorage.removeItem("modal");
  //     }, expirationTime);
  //   }

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // };
  // console.log(expirationTime);
  // const [data, setData] = React.useState();

  // React.useEffect(() => {
  //   fetch("http://sql11.freesqldatabase.com/companies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data)
  //     });
  // }, []);
  // React.useEffect(() => {
  //   modalStorage === null ? setOpen(true) : setOpen(false);
  // }, []);
  const [expired, setExpired] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [expirationTime, setExpirationTime] = useState(null);

  useEffect(() => {
    let timeoutId;

    if (clicked && expirationTime && modalStorage) {
      const currentTime = new Date().getTime();
      const timeDifference = expirationTime - currentTime;

      if (timeDifference > 0) {
        timeoutId = setTimeout(() => {
          setExpired(true);
          localStorage.removeItem("modal");
        }, timeDifference);
      } else {
        setExpired(true);
      }
    }
    modalStorage === null ? setOpen(true) : setOpen(false);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = () => {
    setOpen(false);
    const now = new Date();
    const expiration = new Date(now.getTime() + 1 * 1000);
    setExpirationTime(expiration.getTime());
    setClicked(true);
    setModalStorage(localStorage.setItem("modal", true));
  };
  return (
    <div>
      {/* {data?.map((i, index) => (
        <div key={index}>
          <p>{i.name}</p>
          <p>{i.address}</p>
        </div>
      ))} */}
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
