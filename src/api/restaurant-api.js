const baseUrl = 'http://owan-culinary.vercel.app/api';

export const getRestaurants = async () => {
  try {
    // const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const response = await fetch(`${baseUrl}/list`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRestaurantDetail = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postReview = async (reviewData, id) => {
  try {
    const response = await fetch(`${baseUrl}/postReview?id=${id}`, {
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
