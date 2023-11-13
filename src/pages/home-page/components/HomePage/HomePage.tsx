import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import data from "../../../../data/MockData";
import './HomePage.scss';



const HomePage = () => {

    return (
        <>
        <Hero/>
        <p className="titleSwiper">POPULAR RESTAURANT IN EPICURE:</p>
        <Carousel type={data.restaurants} typeName="restaurants"/>
        <p className="titleSwiper">SIGNATURE DISH OF:</p>
        <Carousel type={data.dishes} typeName="dishes"/>
        <p className="titleSwiperChef">YOSSI’S RESTAURANTS:</p>
        <Carousel type={data.chefRestaurants} typeName="chefRestaurants"/>
        <AboutUs />
        </>
    );
};

export default HomePage;