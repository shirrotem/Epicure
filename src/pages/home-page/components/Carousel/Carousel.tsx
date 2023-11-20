import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../../../../shared/components/Card/Card";
import {FC} from 'react';
import useMobileCheck from "../../../../shared/hooks/useMobileCheck";
import arrowsIcon from "../../../../assets/icons/arrows.svg";
import './Carousel.scss';
import CarouselProps from "../../../../data/types/carouselProps";
import { useAppSelector } from "../../../../redux-toolkit/store/store";


const Carousel: FC<CarouselProps> = ({typeName, title}) => {
  const isMobile = useMobileCheck();
  const {data}= useAppSelector(state=> state.homePage);
  let type: any;
  if(typeName==="chefRestaurants"){
    type= data.chefOfTheWeek.chefRestaurants;
  }
  else if(typeName==="dishes"){
    type= data.dishes;
  }
  else if(typeName==="restaurants"){
    type= data.restaurants;
  }
  
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