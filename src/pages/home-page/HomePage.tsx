import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Card from "../../Card";
import claroImg from "../../assets/images/claro.png";
import spicyIcon from "../../assets/icons/spicy.svg"

const HomePage = () => {
    return (
        <>
        <Hero/>
        <div>
        <Card
            title="Claro"
            img= {claroImg}
            subtitle="Ran Shmueli"
            rating={4}
            icon={spicyIcon}
            price="88"
        />
        </div>
        <AboutUs />
        </>
    );
};

export default HomePage;