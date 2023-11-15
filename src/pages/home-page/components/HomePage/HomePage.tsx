import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import data from "../../../../data/MockData";
import './HomePage.scss';
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import IconMeaning from "../IconMeaning/IconMeaning";
import { iconsArray } from "../../../../data/MockData";



const HomePage = () => {

    return (
        <>
        <Hero/>
        <Carousel type={data.restaurants} typeName="restaurants" title="POPULAR RESTAURANT IN EPICURE:"/>
        <Carousel type={data.dishes} typeName="dishes" title="SIGNATURE DISH OF:"/>
        <IconMeaning icons={iconsArray}/>
        <ChefOfTheWeek chef={data.chefOfTheWeek}/>
        <AboutUs />
        </>
    );
};

export default HomePage;