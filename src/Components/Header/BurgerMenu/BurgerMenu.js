import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../HeaderNav.css";
import "../Nav/header.css";
import img from "../../../Images/Logo2.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
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
        <li style={{ width: "100%" }} onClick={toggleDrawer()}>
          <NavLink exact="true" to="/">
            <img
              style={{ width: "150px", marginBottom: "50px" }}
              src={img}
              alt="img"
            />
          </NavLink>
        </li>
        <li style={{ width: "100%" }} onClick={toggleDrawer()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }} onClick={toggleDrawer()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/trip_page"
          >
            TRIP
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }} onClick={toggleDrawer()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
            }}
            exact="true"
            to="/ABOUT_US"
          >
            ABOUT US
          </NavLink>
        </li>
        <Divider style={{ backgroundColor: "#fff", width: "100%" }} />
        <li style={{ width: "100%" }} onClick={toggleDrawer()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "burgerMenuIsActive" : "burgerMenuNotActive";
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
  );

  return (
    <div>
      <Button
        id="BurgerMenu"
        style={{ color: "#fff" }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon style={{ fontSize: "30px" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
