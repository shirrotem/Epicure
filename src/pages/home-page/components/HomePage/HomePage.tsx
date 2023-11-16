import React,{useState} from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import data from "../../../../data/MockData";
import './HomePage.scss';
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import IconMeaning from "../IconMeaning/IconMeaning";
import { iconsArray } from "../../../../data/MockData";
import Modal from "../../../../shared/components/Modal/Modal";
import ModalPortal from "../../../../shared/components/Modal/ModalPortal";
import Card from "../../../../shared/components/Card/Card";
import { Dish } from "../../../../data/types/data";

const HomePage = () => {
    const [dishForModal, setDishForModal] = useState<Dish | null>(null);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (dishName: string = '') => {
      const dish = data.dishes.find(dishObj => dishObj.name === dishName);
      if(dish){
        setDishForModal(dish);
      }
      setShowModal(!showModal);
    };

    return (
        <>
      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
              {dishForModal &&  <Card
              title= {dishForModal.name}
              img= {dishForModal.img}
              subtitle= {dishForModal.ingredients}
              icon={dishForModal.icon}
              price={dishForModal.price.toString()}
              type= 'dishes-Modal'
              />}
          </Modal>
        )}
      </ModalPortal>
        <Hero/>
        <Carousel type={data.restaurants} typeName="restaurants" title="POPULAR RESTAURANT IN EPICURE:"/>
        <Carousel toggleModal={toggleModal} type={data.dishes} typeName="dishes" title="SIGNATURE DISH OF:"/>
        <IconMeaning icons={iconsArray}/>
        <ChefOfTheWeek chef={data.chefOfTheWeek}/>
        <AboutUs />
        </>
    );
};

export default HomePage;