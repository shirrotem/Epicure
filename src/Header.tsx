import React from "react";
import './Header.scss';
import cartIcon from "./assets/icons/cartIcon.svg";
import hamburgerIcon from "./assets/icons/hamburgerIcon.svg";
import profileIcon from "./assets/icons/profileIcon.svg";
import searchIcon from "./assets/icons/searchIcon.svg";
import logoPic from "./assets/images/logoPic.png";

const Header = () => {
  return (
    <div className="header">
      <img src={hamburgerIcon} alt="Hamburger" />

      <div className="logo">
        <img src={logoPic} alt="Logo" />
      </div>

      <div className="navbar-images">
        <img src={cartIcon} alt="Cart" />
        <img src={profileIcon} alt="Profile" />
        <img src={searchIcon} alt="Search" />
      </div>
    </div>
  );
};

export default Header;
