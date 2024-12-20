import api from '../../../global/restaurant-api.js';
import { createRestaurantList, skeletonRestaurantList } from '../templates/template.js';

const restaurantList = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'block';

    return `
    <div class="list">
      <h1 id="list">Restaurant List</h1>
      <br />
      <div class="list-cards" id="list-cards">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#list-cards');

    // Render skeletons
    for (let i = 0; i < 20; i++) {
      restaurantContainer.innerHTML += skeletonRestaurantList();
    }

    const restaurantData = await api.getRestaurants();
    const restaurants = restaurantData.restaurants;

    setTimeout(() => {
      restaurantContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantList(restaurant);
      });
    }, 1000);
  },
};

export default restaurantList;
