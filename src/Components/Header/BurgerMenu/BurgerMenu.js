import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../HeaderNav.css";
import "../Nav/header.css";
import img from "../../../Images/Logo2.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div id="BurgerMenu">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "62%",
        }}
      >
        <Button style={{ color: "#fff" }} onClick={toggleDrawer}>
          <MenuIcon style={{ fontSize: "30px" }} />
        </Button>
        <NavLink exact="true" to="/">
          <img style={{ width: "80px" }} src={img} alt="img" />
        </NavLink>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ zIndex: "100000" }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List
            id="BurgerNavigation"
            style={{
              width: "92%",
              position: "relative",
              display: "flex",
              gap: "10px",
              padding: "10px 10px",
              flexDirection: "column",
            }}
          >
            <li style={{ width: "100%" }}>
              <NavLink exact="true" to="/">
                <img
                  style={{ width: "150px", marginBottom: "50px" }}
                  src={img}
                  alt="img"
                />
              </NavLink>
            </li>
            <li style={{ width: "100%" }}>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "burgerMenuIsActive"
                    : "burgerMenuNotActive";
                }}
                exact="true"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
            <li style={{ width: "100%" }}>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "burgerMenuIsActive"
                    : "burgerMenuNotActive";
                }}
                exact="true"
                to="/trip_page"
              >
                TRIP
              </NavLink>
            </li>
            <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
            <li style={{ width: "100%" }}>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "burgerMenuIsActive"
                    : "burgerMenuNotActive";
                }}
                exact="true"
                to="/ABOUT_US"
              >
                ABOUT US
              </NavLink>
            </li>
            <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
            <li style={{ width: "100%" }}>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "burgerMenuIsActive"
                    : "burgerMenuNotActive";
                }}
                exact="true"
                to="/IPI"
              >
                IPI
              </NavLink>
            </li>
            <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
