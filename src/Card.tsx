import React from "react";
import './Card.scss';
import {FC} from 'react';
import oneStar from '../src/assets/icons/one-star-rat.svg';
import twoStar from '../src/assets/icons/two-star-rat.svg';
import threeStar from '../src/assets/icons/three-star-rat.svg';
import fourStar from '../src/assets/icons/four-star-rate.svg';
import fiveStar from '../src/assets/icons/five-star-rate.svg';
import nisIcon from '../src/assets/icons/nis.svg';


interface CardProp{
    title: string;
    img: string;
    subtitle?: string;
    rating?: number;
    icon?: string;
    price?: string;

}

const Card: FC<CardProp> = ({ title, img, subtitle, rating, icon, price }) => {
    const ratingsArr = [oneStar,twoStar,threeStar,fourStar,fiveStar];
    return (
      <div className="card">
        <img src={img} alt={title} />
        <div className="card-content">
          <p className="card-title">{title}</p>
          {icon && <img className="icon-dish" src={icon} alt="Icon" />}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          {rating && <img className="icon-rating" src={ratingsArr[rating-1]} alt="Rating Icon" />}
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