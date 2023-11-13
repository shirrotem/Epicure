import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import data from "../../../../data/MockData";
import './HomePage.scss';
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import IconMeaning from "../IconMeaning/IconMeaning";



const HomePage = () => {

    return (
        <>
        <Hero/>
        <p className="titleSwiper">POPULAR RESTAURANT IN EPICURE:</p>
        <Carousel type={data.restaurants} typeName="restaurants"/>
        <p className="titleSwiper">SIGNATURE DISH OF:</p>
        <Carousel type={data.dishes} typeName="dishes"/>
        <IconMeaning/>
        <ChefOfTheWeek chef={data.chefOfTheWeek}/>
        <AboutUs />
        </>
    );
};

export default HomePage;