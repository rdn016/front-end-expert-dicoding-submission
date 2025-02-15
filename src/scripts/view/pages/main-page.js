import { getRestaurants } from '../../../api/restaurant-api.js';
import { skeletonRestaurantList } from '../templates/template.js';
import lazyLoadElements from '../../utils/lazy-load-element.js';
import loadLazySizes from '../../utils/load-lazysizes.js';

const restaurantList = {
  async render() {
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about-section');
    hero.style.display ='block';
    about.style.display ='flex';

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
    const restaurantData = await getRestaurants();
    const restaurants = restaurantData.restaurants;
    // const restaurantData = await getData();
    const loadMoreRestaurants = () => {
      for (let i = 5; i < restaurants.length; i++) {
        restaurantContainer.innerHTML += loadLazySizes(restaurants);
      }
      lazyLoadElements();
    };

    // Initial load
    loadMoreRestaurants();
    setTimeout(() => {
      restaurantContainer.innerHTML = '';
      loadLazySizes(restaurants);
      lazyLoadElements();
    }, 500);
  },
};

export default restaurantList;