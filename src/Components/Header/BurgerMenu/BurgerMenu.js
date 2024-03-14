import React, { useRef } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import "../HeaderNav.css";
import "../Nav/header.css";
import img from "../../../Images/img.png";

const BurgerMenu = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const ref = useRef();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      ref={ref}
      style={{ backgroundColor: "#003" }}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        id="BurgerNavigation"
        style={{
          position: "relative",
          display: "flex",
          gap: "10px",
          padding: "10px 10px",
          flexDirection: "column",
        }}
      >
        <NavLink exact="true" to="/">
          <img style={{ width: "150px" }} src={img} alt="img" />
        </NavLink>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/trip_page"
          >
            Trip
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/ABOUT_US"
          >
            About us
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/ABOUT"
          >
            About
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
      </List>
    </Box>
  );
  return (
    <div id="BurgerMenu">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            id="BurgerMenu"
            style={{ color: "#fff" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon style={{ fontSize: "30px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BurgerMenu;
