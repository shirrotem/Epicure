import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRestaurants = createAsyncThunk("popularRestaurants", async () => {
  try {
    const response = await fetch("http://localhost:3000/getPopularRestaurants");
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
    const response = await fetch("http://localhost:3000/getSignatureDish");
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
    const response = await fetch("http://localhost:3000/getChefOfTheWeek");
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
    const response = await fetch("http://localhost:3000/chefs");
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    return error.message;
  }
});
