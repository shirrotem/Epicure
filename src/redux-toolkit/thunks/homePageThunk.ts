import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRestaurants = createAsyncThunk("popularRestaurants", async () => {
  try {
    const response = await fetch(process.env.REACT_APP_GET_POPULAR_RESTAURANTS_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    return error.message;
  }
});

export const getSignatureDish = createAsyncThunk("SignatureDish", async () => {
  try {
    const response = await fetch(process.env.REACT_APP_GET_SIGNATURE_DISH_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    return error.message;
  }
});

export const getChefOfTheWeek = createAsyncThunk("ChefOfTheWeek", async () => {
  try {
    const response = await fetch(process.env.REACT_APP_GET_CHEF_OF_THE_WEEK_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    return error.message;
  }
});

export const getChefs = createAsyncThunk("chefs", async () => {
  try {
    const response = await fetch(process.env.REACT_APP_GET_CHEFS_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    return error.message;
  }
});
