const api = {
  getRestaurants: async () => {
    try {
      const response = await fetch('https://restaurant-api.dicoding.dev/list');

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  getRestaurantDetail: async (id) => {
    try {
      const response = await fetch(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
export default api;
