export interface Restaurant {
    img: string;
    name: string;
    chef: string;
    rating: number;
  }
  
  export interface Dish {
    img: string;
    name: string;
    icon: string;
    ingredients: string;
    price: number;
  }

  export interface ChefRestaurant {
    img: string;
    name: string;
  }

  export interface Chef{
    img: string;
    name: string;
    about: string;
    chefRestaurants: ChefRestaurant[];
  }

  interface Data {
    restaurants: Restaurant[];
    dishes: Dish[];
    chefOfTheWeek: Chef;
  }
  
  export default Data;
  