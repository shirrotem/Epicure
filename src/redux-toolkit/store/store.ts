import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "../slices/homePageSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store= configureStore({
    reducer:{
        homePage: homePageSlice.reducer
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;