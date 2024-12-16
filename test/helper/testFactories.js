import likeButtonInitiator from '../../src/scripts/utils/like-btn-initiator';
import favoriteRestaurantidb from '../../src/global/liked-restaurant';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButtonInitiator.init({
    container: document.querySelector('#likeButtonContainer'),
    likedRestaurant: favoriteRestaurantidb,
    restaurant
  });
};
export { createLikeButtonPresenterWithRestaurant };