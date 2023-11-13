import React from "react";
import './Header.scss';
import cartIcon from "../../../assets/icons/cartIcon.svg";
import hamburgerIcon from "../../../assets/icons/hamburgerIcon.svg";
import profileIcon from "../../../assets/icons/profileIcon.svg";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import logoPic from "../../../assets/images/logoPic.png";
import useMobileCheck from "../../hooks/useMobileCheck";

const Header = () => {
  const isMobile = useMobileCheck();

  return (
    <div className="header">
      {!isMobile && (
        <div className="nav-labels">
          <img className='logo' src={logoPic} alt="Logo" />
          <div className="branding">
            <h1>EPICURE</h1>
            <h1>Restaurants</h1>
            <h1>Chefs</h1>
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <img src={hamburgerIcon} alt="Hamburger" />
          <img className="logo" src={logoPic} alt="Logo" />
        </>
      )}

      <div className="navbar-images">
        <img src={searchIcon} alt="Search" />
        <img src={profileIcon} alt="Profile" />
        <img src={cartIcon} alt="Cart" />
      </div>
    </div>
  );
};

export default Header;
