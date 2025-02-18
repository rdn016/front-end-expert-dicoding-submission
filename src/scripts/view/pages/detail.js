import { getRestaurantDetail } from '../../../api/restaurant-api';
import { createRestaurantDetail, createSkeletonRestaurantDetail } from '../templates/template';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-btn-initiator';
import favoriteRestaurantidb from '../../../api/liked-restaurant';
import  submitHandler  from '../../utils/form';

const restaurantDetail = {
  async render() {
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about-section');
    hero.style.display ='none';
    about.style.display ='none';
    return `  
    <div class="detail"></div>
    <div id="likeButtonContainer"></div>
  `;
  },
  async afterRender() {
    const container = document.querySelector('.detail');
    const url = urlParser.parseActiveWithoutCombiner();

    const restaurants = await getRestaurantDetail(url.id);;

    container.innerHTML = createSkeletonRestaurantDetail();
    setTimeout(() => {
      container.innerHTML = '';
      container.innerHTML = createRestaurantDetail(restaurants);

      //limit karakter jadi 110 di bagian review
      const reviews = document.querySelectorAll('.review');
      const maxLength = 110;
      reviews.forEach((review) => {
        const TruncatedReview = review.textContent.slice(0, maxLength);
        review.innerHTML = TruncatedReview;
      });

      const form = document.querySelector('form');
      form.addEventListener('submit', (event) => event.preventDefault());

      submitHandler(url.id);
    }, 150);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    if (likeButtonContainer) {
      likeButtonInitiator.init({
        container: likeButtonContainer,
        favoriteRestaurant: favoriteRestaurantidb,
        restaurant: {
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
