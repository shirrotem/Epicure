import React, { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import "./HomePage.scss";
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import IconMeaning from "../IconMeaning/IconMeaning";
import { iconsArray } from "../../../../data/IconData";
import Modal from "../../../../shared/components/Modal/Modal";
import Card from "../../../../shared/components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../../../redux-toolkit/store/store";
import {
  getChefOfTheWeek,
  getPopularRestaurants,
  getSignatureDish,
} from "../../../../redux-toolkit/thunks/homePageThunk";

const HomePage = () => {
  const { selectedDish, isOpen } = useAppSelector((state) => state.homePage);
  const dispatch = useAppDispatch();
  const { dataRestaurants, dataDishes } = useAppSelector((state) => state.homePage);
  useEffect(() => {
    dispatch(getPopularRestaurants());
    dispatch(getSignatureDish());
    dispatch(getChefOfTheWeek());
  }, []);

  return (
    <>
      {isOpen && (
        <Modal>
          {selectedDish && (
            <Card
              title={selectedDish.name}
              img={selectedDish.img}
              subtitle={selectedDish.ingredients}
              icon={selectedDish.icon}
              price={selectedDish.price.toString()}
              type="dishes-Modal"
            />
          )}
        </Modal>
      )}

      <Hero />
      <Carousel
        items={{ typeName: "restaurants", carouselType: dataRestaurants }}
        title="POPULAR RESTAURANT IN EPICURE:"
      />
      <Carousel
        items={{ typeName: "dishes", carouselType: dataDishes }}
        title="SIGNATURE DISH OF:"
      />
      <IconMeaning icons={iconsArray} />
      <ChefOfTheWeek />
      <AboutUs />
    </>
  );
};

export default HomePage;
