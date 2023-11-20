import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data, { Chef, Dish, Restaurant } from "../../data/types/data";

interface HomePageState{
    selectedDish: Dish | null,
    isOpen: boolean,
    dataRestaurants: Restaurant[],
    dataDishes: Dish[],
    dataChefOfTheWeek: Chef

};

const initialState: HomePageState={
    selectedDish: null,
    isOpen: false,
    dataRestaurants: [],
    dataDishes: [],
    dataChefOfTheWeek: {img:"", name:"", about:"", chefRestaurants:[]},
};

const homePageSlice= createSlice({
    name: "homePage",
    initialState: initialState,
    reducers:{
        setSelectedDish(state, action: PayloadAction<Dish| null>){
            state.selectedDish= action.payload;
        },
        setIsOpen(state, action: PayloadAction<boolean>){
            state.isOpen= action.payload;
        },
        setDataRestaurants(state, action: PayloadAction<Restaurant[]>){
            state.dataRestaurants= action.payload;
        },
        setDataDishes(state, action: PayloadAction<Dish[]>){
            state.dataDishes= action.payload;
        },
        setDataChefOfTheWeek(state, action: PayloadAction<Chef>){
            state.dataChefOfTheWeek= action.payload;
        },
    }

});
export const { setSelectedDish, setIsOpen, setDataRestaurants,setDataDishes,setDataChefOfTheWeek } = homePageSlice.actions;
export default homePageSlice;