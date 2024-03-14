import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Nav from "./Nav/Header";

const HeaderNav = () => {
  return (
    <div className="header">
      <BurgerMenu />
      <Nav />
    </div>
  );
};

export default HeaderNav;
