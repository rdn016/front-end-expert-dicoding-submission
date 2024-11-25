import { createRestaurantList, } from '../templates/template';
import favoriteRestaurantidb from '../../../global/liked-restaurant';

const likedPage = {
  async render(){
    return `
    <div class="list">
    <h1 id="list">Liked Restaurant </h1>
    <br />
    <p id="loading">Loading...</p>
    <div class="list-cards" id="list-cards">

    </div>
  </div>`;
  },
  async afterRender(){
    const restaurants = await favoriteRestaurantidb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#list-cards');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant);
    });
  }
};
export default likedPage;