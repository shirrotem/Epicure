import React from "react";
import './Card.scss';
import {FC} from 'react';
import ratingsArr from "./data/cardData";
import nisIcon from '../src/assets/icons/nis.svg';
import useMobileCheck from "./shared/hooks/useMobileCheck";


interface CardProp{
    title: string;
    img: string;
    subtitle?: string;
    rating?: number;
    icon?: string;
    price?: string;

}

const Card: FC<CardProp> = ({ title, img, subtitle, rating, icon, price }) => {
    const isMobile = useMobileCheck();

    return (
      <div className="card">
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