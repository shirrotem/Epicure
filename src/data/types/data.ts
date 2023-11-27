export interface Restaurant {
  img: string;
  name: string;
  chef: Chef;
  rating: number;
  _id: string;
}

export interface Dish {
  img: string;
  name: string;
  icon: string;
  ingredients: string;
  price: number;
  _id: string;
}

export interface ChefRestaurant {
  img: string;
  name: string;
}

export interface Chef {
  img: string;
  name: string;
  about: string;
  chefRestaurants: ChefRestaurant[];
  _id: string;
}

interface Data {
  restaurants: Restaurant[];
  dishes: Dish[];
  chefOfTheWeek: Chef;
}

export default Data;
