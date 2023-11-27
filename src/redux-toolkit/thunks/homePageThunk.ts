import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPopularRestaurants,
  fetchSignatureDish,
  fetchChefOfTheWeek,
} from "../adapters/homePageAdapter";

export const getPopularRestaurants = createAsyncThunk("popularRestaurants", async () => {
  try {
    return await fetchPopularRestaurants();
  } catch (error: any) {
    return error.message;
  }
});

export const getSignatureDish = createAsyncThunk("signatureDish", async () => {
  try {
    return await fetchSignatureDish();
  } catch (error: any) {
    return error.message;
  }
});

export const getChefOfTheWeek = createAsyncThunk("chefOfTheWeek", async () => {
  try {
    return await fetchChefOfTheWeek();
  } catch (error: any) {
    return error.message;
  }
});
