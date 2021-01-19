import React from "react";
import logo from "./image/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="header__right">Github users search app</div>
      </div>
      <hr color="bisque" />
    </>
  );
};

export default Header;
