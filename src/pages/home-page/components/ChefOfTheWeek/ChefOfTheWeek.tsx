import React, { FC } from "react";
import "./ChefOfTheWeek.scss";
import Carousel from "../Carousel/Carousel";
import ChefOfTheWeekProps from "../../../../data/types/chefProps";
  
const ChefOfTheWeek: FC<ChefOfTheWeekProps> = ({chef}) => {
    const {name,img,about,chefRestaurants} = chef;
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
        <p className="titleSwiperChef">{`${chefPrivateName}’s Restaurants:`}</p>
            <Carousel type={chefRestaurants} typeName="chefRestaurants"/>
        </div>
        
    );
};

export default ChefOfTheWeek;
