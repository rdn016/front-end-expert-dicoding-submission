import { showLoading, hideLoading, sleep, } from '../scripts/utils/loading-indicator';

const loadingElement = document.querySelector('#loading');
const api = {
  getRestaurants: async () => {
    showLoading(loadingElement);
    try {
      const response = await fetch('https://restaurant-api.dicoding.dev/list');
      if (!response.ok){
        throw new Error(`error: ${response.status}`);
      }

      await sleep();

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      hideLoading(loadingElement);
    }
  },
  getRestaurantDetail: async (id) => {
    showLoading(loadingElement);
    try {
      const response = await fetch(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      if (!response.ok){
        throw new Error(`error: ${response.status}`);
      }

      await sleep();

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      hideLoading(loadingElement);
    }
  },
};
export default api;
