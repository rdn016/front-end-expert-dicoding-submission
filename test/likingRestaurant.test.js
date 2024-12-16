/* eslint-disable no-undef */
import favoriteRestaurantidb from '../src/global/liked-restaurant';
import { createLikeButtonPresenterWithRestaurant } from './helper/testFactories';

describe('like restaurant', () => {
  describe('liking a restaurant', ()=>{
    const addLikeButtonContainer = () =>  document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    beforeEach(() => {
      addLikeButtonContainer();
    });

    afterEach(async () => {
      (await favoriteRestaurantidb.getAllRestaurants()).forEach(async (restaurant) => {
        await favoriteRestaurantidb.deleteRestaurant(restaurant.id);
      });
    });

    it('should show like button when some restaurant has not been liked before', async () => {
      await createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });
  });
  describe('unliking a restaurant', ()=>{

  });
});