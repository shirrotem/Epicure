import React, { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import data from "../../../../data/MockData";
import './HomePage.scss';
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import IconMeaning from "../IconMeaning/IconMeaning";
import { iconsArray } from "../../../../data/MockData";
import Modal from "../../../../shared/components/Modal/Modal";
import Card from "../../../../shared/components/Card/Card";
import {useAppDispatch, useAppSelector } from "../../../../redux-toolkit/store/store";
import {setDataChefOfTheWeek, setDataDishes, setDataRestaurants } from "../../../../redux-toolkit/slices/homePageSlice";


const HomePage = () => {
  
    const {selectedDish, isOpen }= useAppSelector(state=> state.homePage);
    const dispatch= useAppDispatch();

    useEffect(()=>{
      dispatch(setDataRestaurants(data.restaurants));
      dispatch(setDataDishes(data.dishes));
      dispatch(setDataChefOfTheWeek(data.chefOfTheWeek));
    },[]);

    return (
        <>
        {isOpen && (
          <Modal>
              {selectedDish &&  <Card
              title= {selectedDish.name}
              img= {selectedDish.img}
              subtitle= {selectedDish.ingredients}
              icon={selectedDish.icon}
              price={selectedDish.price.toString()}
              type= 'dishes-Modal'
              />}
          </Modal>
        )}
      
        <Hero/>
        <Carousel typeName="restaurants" title="POPULAR RESTAURANT IN EPICURE:"/>
        <Carousel typeName="dishes" title="SIGNATURE DISH OF:"/>
        <IconMeaning icons={iconsArray}/>
        <ChefOfTheWeek/>
        <AboutUs />
        </>
    );
};

export default HomePage;