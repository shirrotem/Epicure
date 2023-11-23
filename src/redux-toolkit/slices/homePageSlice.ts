import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Chef, Dish, Restaurant } from "../../data/types/data";
import {
  getPopularRestaurants,
  getChefOfTheWeek,
  getSignatureDish,
  getChefs,
} from "../thunks/homePageThunk";
import { rmdirSync } from "fs";

interface HomePageState {
  selectedDish: Dish | null;
  isOpen: boolean;
  dataRestaurants: Restaurant[];
  dataDishes: Dish[];
  dataChefOfTheWeek: Chef;
  dataChefs: Chef[];
}

const initialState: HomePageState = {
  selectedDish: null,
  isOpen: false,
  dataRestaurants: [],
  dataDishes: [],
  dataChefOfTheWeek: { img: "", name: "", about: "", chefRestaurants: [], _id: "" },
  dataChefs: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    setSelectedDish(state, action: PayloadAction<Dish | null>) {
      state.selectedDish = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setDataRestaurants(state, action: PayloadAction<Restaurant[]>) {
      state.dataRestaurants = action.payload;
    },
    setDataDishes(state, action: PayloadAction<Dish[]>) {
      state.dataDishes = action.payload;
    },
    setDataChefOfTheWeek(state, action: PayloadAction<Chef>) {
      state.dataChefOfTheWeek = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getPopularRestaurants.fulfilled, (state, action: PayloadAction<any>) => {
        const restaurants = action.payload.map((res: any) => {
          return {
            img: res.img,
            name: res.name,
            chef: state.dataChefs.find((chef: Chef) => chef.chefRestaurants.includes(res._id)),
            rating: res.rating,
            _id: res._id,
          };
        });
        state.dataRestaurants = restaurants;
      })
      .addCase(getPopularRestaurants.rejected, (state) => {
        state.dataRestaurants = [];
      })
      .addCase(getSignatureDish.fulfilled, (state, action: PayloadAction<any>) => {
        const dishes = action.payload.map((dish: any) => {
          return {
            img: dish.img,
            name: dish.name,
            icon: dish.icon,
            ingredients: dish.ingredients,
            price: dish.price,
            _id: dish._id,
          };
        });
        state.dataDishes = dishes;
      })
      .addCase(getSignatureDish.rejected, (state) => {
        state.dataDishes = [];
      })
      .addCase(getChefOfTheWeek.fulfilled, (state, action: PayloadAction<any>) => {
        const chef = action.payload[0];
        const chefRes = state.dataRestaurants.filter((res) => chef.restaurants.includes(res._id));
        const chefRestaurants = chefRes.map((res) => {
          return {
            name: res.name,
            img: res.img,
          };
        });

        state.dataChefOfTheWeek = {
          name: chef.name,
          img: chef.img,
          about: chef.about,
          chefRestaurants: chefRestaurants,
          _id: chef._id,
        };
      })
      .addCase(getChefOfTheWeek.rejected, (state) => {
        state.dataChefOfTheWeek = { img: "", name: "", about: "", chefRestaurants: [], _id: "" };
      })
      .addCase(getChefs.fulfilled, (state, action: PayloadAction<any>) => {
        const chefs = action.payload.map((chef: any) => {
          const chefRes = state.dataRestaurants.find((res) => chef.restaurants.includes(res._id));

          return {
            name: chef.name,
            img: chef.img,
            about: chef.about,
            chefRestaurants: chefRes ? [chefRes] : [],
            _id: chef._id,
          };
        });
        state.dataChefs = chefs;
      })
      .addCase(getChefs.rejected, (state) => {
        state.dataChefs = [];
      });
  },
});

export const {
  setSelectedDish,
  setIsOpen,
  setDataRestaurants,
  setDataDishes,
  setDataChefOfTheWeek,
} = homePageSlice.actions;
export default homePageSlice;
