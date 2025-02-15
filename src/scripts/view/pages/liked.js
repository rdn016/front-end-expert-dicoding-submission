import { createRestaurantList, skeletonRestaurantList, noLikedRestaurants } from '../templates/template';
import favoriteRestaurantidb from '../../../api/liked-restaurant';
import lazyLoadElements from '../../utils/lazy-load-element';

const likedPage = {
  async render() {
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about-section');
    hero.style.display ='none';
    about.style.display ='none';
    return `
    <div class="list liked">
      <h1 id="list">Liked Restaurant</h1>
      <br />
      <div class="list-cards" id="list-cards"></div>
    </div>`;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#list-cards');
    const restaurants = await favoriteRestaurantidb.getAllRestaurants();

    if (restaurants.length > 0) {
      for (let i = 0; i < restaurants.length; i++) {
        restaurantContainer.innerHTML += skeletonRestaurantList();
      }
      setTimeout(() => {
        restaurantContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantList(restaurant);
        });
        lazyLoadElements();
      }, 500);
    } else {
      restaurantContainer.classList.add('no-liked');
      restaurantContainer.innerHTML = noLikedRestaurants();
    }
  },
};

export default likedPage;