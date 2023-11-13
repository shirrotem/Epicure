interface Restaurant {
    img: string;
    name: string;
    chef: string;
    rating: number;
  }
  
  interface Dish {
    img: string;
    name: string;
    icon: string;
    ingredients: string;
    price: number;
  }
  
  interface ChefRestaurant {
    img: string;
    name: string;
  }
  
  interface Data {
    restaurants: Restaurant[];
    dishes: Dish[];
    chefRestaurants: ChefRestaurant[];
  }
  
  export default Data;
  