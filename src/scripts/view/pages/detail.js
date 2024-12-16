import api from '../../../global/restaurant-api';
import { createRestaurantDetail } from '../templates/template';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-btn-initiator';

const restaurantDetail = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display ='none';
    return `  
    <div class="detail"></div>
    <div id="likeButtonContainer"></div>
  `;
  },
  async afterRender() {
    const url = urlParser.parseActiveWithoutCombiner();

    const restaurantData = await api.getRestaurantDetail(url.id);
    const restaurants = restaurantData.restaurant;

    const container = document.querySelector('.detail');
    container.innerHTML = '<p id="loading">Loading...</p>';
    container.innerHTML = createRestaurantDetail(restaurants);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    if (likeButtonContainer) {
      likeButtonInitiator.init({
        container: likeButtonContainer,
        likedRestaurant: {
          id: restaurants.id,
          city: restaurants.city,
          name: restaurants.name,
          pictureId: restaurants.pictureId,
          rating: restaurants.rating,
          description: restaurants.description,
          categories: restaurants.categories,
        },
      });
    }
  }
};
export default restaurantDetail;
