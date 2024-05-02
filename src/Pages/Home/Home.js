import React from "react";
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
  const [expirationTime, setExpirationTime] = React.useState(null);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setModalStorage(localStorage.setItem("modal", true));
    const now = new Date();
    const expiration = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    setExpirationTime(expiration.getTime());
    const expirationTime = 365 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    const currentTime = new Date().getTime();
    const timeDifference = expirationTime - currentTime;
    console.log(timeDifference, expirationTime, currentTime);
    let timeoutId;
    if (timeDifference > 0) {
      timeoutId = setTimeout(() => {
        localStorage.removeItem("modal");
      }, expirationTime);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  };
  // const [data, setData] = React.useState();

  // React.useEffect(() => {
  //   fetch("http://sql11.freesqldatabase.com/companies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data)
  //     });
  // }, []);
  React.useEffect(() => {
    modalStorage === null ? setOpen(true) : setOpen(false);
  }, []);
  return (
    <div>
      {/* {data?.map((i, index) => (
        <div key={index}>
          <p>{i.name}</p>
          <p>{i.address}</p>
        </div>
      ))} */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ position: "relative", padding: "0" }} sx={style}>
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
            onClick={handleClose}
          >
            <CloseOutlinedIcon />
          </Button>
          <Link to="https://www.ipi-ecoles.com/telecharger-le-guide-metier-de-lipi/">
            <img style={{ width: "100%" }} src={modalImg} alt="Error" />
          </Link>
        </Box>
      </Modal>
      <Slider />
      <SectionOne />
    </div>
  );
}

export default Home;
