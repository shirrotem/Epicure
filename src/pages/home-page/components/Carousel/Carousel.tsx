import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../../../../shared/components/Card/Card";
import {FC} from 'react';
import useMobileCheck from "../../../../shared/hooks/useMobileCheck";
import arrowsIcon from "../../../../assets/icons/arrows.svg";
import './Carousel.scss';
import CarouselProps from "../../../../data/types/carouselProps";


const Carousel: FC<CarouselProps> = ({ type, typeName, title, toggleModal}) => {
  const isMobile = useMobileCheck();
  
    return(
        <>
        <p className={typeName==='chefRestaurants' ? 'titleSwiperChef' : 'titleSwiper'}>{title}</p>
        <Swiper
          slidesPerView={isMobile? 'auto' : 3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="myCarousel"
        
        >
          {type.map((element: any, index: number)=> {
            const isDish = typeName === "dishes";
            return(
              <SwiperSlide key={index} className={typeName === 'chefRestaurants' ? 'swiperSlideChef' : "swiperSlideCarousel"}>
              <Card
              title= {element.name}
              img= {element.img}
              subtitle= {isDish ? element.ingredients : element.chef}
              rating={element.rating}
              icon={element.icon}
              price={element.price}
              type= {typeName}
              toggleModal={toggleModal}
              />
              </SwiperSlide>
            );
          })}
        </Swiper>
       {(isMobile || (!isMobile && typeName=== 'restaurants')) && <p className="allRestaurants">All Restaurants
          <img className="picAllRes" src={arrowsIcon}/></p>}
      </>

    );

};
export default Carousel;