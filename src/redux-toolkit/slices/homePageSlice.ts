import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data, { Dish } from "../../data/types/data";

interface HomePageState{
    selectedDish: Dish | null,
    isOpen: boolean,
    data: Data
};

const initialState: HomePageState={
    selectedDish: null,
    isOpen: false,
    data: {restaurants:[],dishes: [], chefOfTheWeek: {img:"", name:"", about:"", chefRestaurants:[]} }
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
        setData(state, action: PayloadAction<Data>){
            state.data= action.payload;
        },
    }

});
export const { setSelectedDish, setIsOpen, setData } = homePageSlice.actions;
export default homePageSlice;