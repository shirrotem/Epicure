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

const HomePage = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    return (
        <>
           <div>
      <h1>React Modal Example</h1>
      <button onClick={toggleModal}>Open Modal</button>
      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
            <h2>Modal Content</h2>
            <p>This is a modal window</p>
          </Modal>
        )}
      </ModalPortal>
    </div>
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