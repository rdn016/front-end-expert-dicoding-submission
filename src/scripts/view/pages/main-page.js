import api from '../../../global/restaurant-api.js';
import { createRestaurantList } from '../templates/template.js';

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
    const restaurantData = await api.getRestaurants();
    const restaurants = restaurantData.restaurants;
    const restaurantContainer = document.querySelector('#list-cards');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default restaurantList;
