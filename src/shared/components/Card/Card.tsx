import React, { useCallback } from "react";
import './Card.scss';
import {FC} from 'react';
import ratingsArr from "../../../data/cardData";
import nisIcon from '../../../assets/icons/nis.svg';
import useMobileCheck from "../../hooks/useMobileCheck";
import CardProps from "../../../data/types/cardProps";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/store/store";
import { setIsOpen, setSelectedDish } from "../../../redux-toolkit/slices/homePageSlice";

const Card: FC<CardProps> = ({ title, img, subtitle, rating, icon, price, type }) => {

    const {isOpen, dataDishes}= useAppSelector(state=> state.homePage);
    const dispatch = useAppDispatch();
    const isMobile = useMobileCheck();
    const isRestaurant = type === 'restaurants';
    const isDish = type === 'dishes';
    const isChef = type === 'chefRestaurants';
    const isDishModal = type === 'dishes-Modal';

   
    const handleOnClick = useCallback((dishName: string = '') => {
      if(isDish){
      const dish = dataDishes.find(dishObj => dishObj.name === dishName);
        if(dish){
          dispatch(setSelectedDish(dish));
        }
        dispatch(setIsOpen(!isOpen));
      }
    }, [dataDishes, isOpen]);
  

    return (
      <div onClick={()=> handleOnClick(title)} className={`card ${isRestaurant ? 'restaurant-card' : isDish ? 'dish-card' : isChef ? 'chef-card' : isDishModal ? 'card-modal-content' : ''}`}>
        <img src={img} alt={title} />
        <div className="card-content">
          <p className="card-title">{title}</p>
          {icon && <img className="icon-dish" src={icon} alt="Icon" />}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          {!isMobile && rating && <img className="icon-rating" src={ratingsArr[rating-1]} alt="Rating Icon" />}
          {price && (
            <div className="price-container">
                 <img className="icon-nis" src={nisIcon} alt="Rating Icon" />
                <p className="card-price">{price}</p>
            </div>
          )}
        </div>
      </div>
    );
};

export default Card;