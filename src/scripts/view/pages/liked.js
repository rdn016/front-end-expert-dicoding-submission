import { createRestaurantList, skeletonRestaurantList } from '../templates/template';
import favoriteRestaurantidb from '../../../global/liked-restaurant';
import lazyLoadElements from '../../utils/lazy-load-element';

const likedPage = {
  async render(){
    const hero = document.querySelector('.hero');
    hero.style.display = 'block';
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
    const restaurants = await favoriteRestaurantidb.getAllRestaurants();
    if (restaurants.length > 0){ {
      for (let i = 0; i < restaurants.length; i++) {
        restaurantContainer.innerHTML += skeletonRestaurantList();
      }
    }
    setTimeout(() => {
      restaurantContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantList(restaurant);
      });
      lazyLoadElements();
    }, 500);
    }
  }
};
export default likedPage;