import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from "../../Card";
import {FC} from 'react';
import useMobileCheck from "../../shared/hooks/useMobileCheck";
import arrowsIcon from "../../assets/icons/arrows.svg";
import './Carousel.scss'


interface CarouselProps {
  type: any;
  typeName: string;
}

const Carousel: FC<CarouselProps> = ({ type, typeName }) => {
  const isMobile = useMobileCheck();
  const slideStyle = {
    width: isMobile ? '245px' : '380px',
  }
    return(
        <>
        <Swiper
          slidesPerView={isMobile? 1 : 3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {type.map((element: any, index: number)=> {
            const isDish = typeName === "dishes";
            return(
              <SwiperSlide key={index} style={slideStyle}>
              <Card
              title= {element.name}
              img= {element.img}
              subtitle= {isDish ? element.ingredients : element.chef}
              rating={element.rating}
              icon={element.icon}
              price={element.price}
              />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="allRestaurants">All Restaurants
          <img className="picAllRes" src={arrowsIcon}/></p>
      </>

    );

};
export default Carousel;