import { ChefRestaurant, Dish, Restaurant } from "./data";

export interface CarouselProps {
  items:{
    typeName: string;
    carouselType: Restaurant[] | Dish[] | ChefRestaurant[];
  };
  title: string;
}
