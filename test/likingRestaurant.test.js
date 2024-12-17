/* eslint-disable no-undef */
import favoriteRestaurantidb from '../src/global/liked-restaurant';
import { createLikeButtonPresenterWithRestaurant } from './helper/testFactories';

describe('like restaurant', () => {

  const addLikeButtonContainer = () =>  document.body.innerHTML = '<div id="likeButtonContainer"></div>';

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(async () => {
    (await favoriteRestaurantidb.getAllRestaurants()).forEach(async (restaurant) => {
      await favoriteRestaurantidb.deleteRestaurant(restaurant.id);
    });
  });

  describe('liking a restaurant',  ()=>{
    it('should show like button when some restaurant has not been liked before', async () => {
      await createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should be able to like a restaurant', async () => {
      await createLikeButtonPresenterWithRestaurant({ id: 1 });

      const likeButton = document.querySelector('#likeBtn');

      likeButton.dispatchEvent(new Event('click'));
      const restaurant = await favoriteRestaurantidb.getRestaurant(1);
      expect(restaurant).toEqual([]);
    });


  });
  describe('unliking a restaurant', ()=>{

  });
});
