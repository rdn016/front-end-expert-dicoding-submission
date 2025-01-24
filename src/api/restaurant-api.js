export const getRestaurants = async () => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRestaurantDetail = async (id) => {
  try {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postReview = async (reviewData) => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  } catch (err) {
    console.error(err);
    return null;
  }
};
