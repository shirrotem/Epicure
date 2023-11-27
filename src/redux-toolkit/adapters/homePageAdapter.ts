export async function fetchPopularRestaurants() {
  try {
    const response = await fetch(process.env.REACT_APP_GET_POPULAR_RESTAURANTS_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function fetchSignatureDish() {
  try {
    const response = await fetch(process.env.REACT_APP_GET_SIGNATURE_DISH_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function fetchChefOfTheWeek() {
  try {
    const response = await fetch(process.env.REACT_APP_GET_CHEF_OF_THE_WEEK_URL!);
    if (!response.ok) {
      throw new Error("Request to server failed!");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
