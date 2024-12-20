import { createRestaurantList, skeletonRestaurantList } from '../templates/template';
import favoriteRestaurantidb from '../../../global/liked-restaurant';

const likedPage = {
  async render(){
    return `
    <div class="list">
    <h1 id="list">Liked Restaurant </h1>
    <br />
    <div class="list-cards" id="list-cards">

    </div>
  </div>`;
  },
  async afterRender(){
    const restaurantContainer = document.querySelector('#list-cards');
    // Render skeletons
    for (let i = 0; i < 1; i++) {
      restaurantContainer.innerHTML += skeletonRestaurantList();
    }
    const restaurants = await favoriteRestaurantidb.getAllRestaurants();
    setTimeout(() => {
      restaurantContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantList(restaurant);
      });
    }, 500);
  }
};
export default likedPage;