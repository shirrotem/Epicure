import React from "react";
import "./AboutUs.scss";
import epicureLogo from "../../../../assets/images/epicureLogo.png";
import googlePlayLogo from "../../../../assets/images/googleplaylogo.png";
import appleLogo from "../../../../assets/images/appleLogo.png";


const AboutUs = () =>{
    return(
        <div className="about-us">
        <img src={epicureLogo} className= "epicureLogo" alt='epicure Logo' />
        <div className="playAndGoogleLogos">
            <img src={googlePlayLogo} className= "googlePlayLogo" alt='google Play Logo' />
            <img src={appleLogo} className= "appleLogo" alt='apple Logo' />
        </div>
        <div className="content">
            <h1>ABOUT US:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In a lacus vel justo fermentum bibendum non 
                eu ipsum. Cras porta malesuada eros, eget blandit
                turpis suscipit at.  Vestibulum sed massa in magna sodales porta. Vivamus elit urna, 
                dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.</p>
        </div>
      </div>

    );


};

export default AboutUs;