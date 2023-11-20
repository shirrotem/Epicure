import React, { FC } from "react";
import "./ChefOfTheWeek.scss";
import Carousel from "../Carousel/Carousel";
import { useAppSelector } from "../../../../redux-toolkit/store/store";


const ChefOfTheWeek = () => {
    const {dataChefOfTheWeek}= useAppSelector(state=> state.homePage);
    const {name,img,about} = dataChefOfTheWeek;
    const chefPrivateName= name.split(' ')[0];
    return (
        <div className="chefOfTheWeekContainer">
        <p className="titleChef">CHEF OF THE WEEK:</p>
        <div className="picAndAboutContainer">
        <div className="chefImageContainer">
            <img className="imgChef" src={img} alt={`Chef ${name}`} />
            <div className="overlay">
            <p className="nameChef">{name}</p>
            </div>
        </div>
        <p className="aboutChef">
            {about}
        </p>
        </div>
            <Carousel typeName="chefRestaurants" title={`${chefPrivateName}’s Restaurants:`}/>
        </div>
        
    );
};

export default ChefOfTheWeek;
