/* eslint-disable no-undef */
import favoriteRestaurantidb from '../src/global/liked-restaurant';
import * as testFactories from './helper/testFactories';

describe('like restaurant', () => {
  const addLikeButtonContainer = () =>
    (document.body.innerHTML = '<div id="likeButtonContainer"></div>');

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(async () => {
    (await favoriteRestaurantidb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await favoriteRestaurantidb.deleteRestaurant(restaurant.id);
      }
    );
  });

  describe('liking a restaurant', () => {
    it('should show like button when some restaurant has not been liked before', async () => {
      await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(
        document.querySelector('[aria-label="like this restaurant"]')
      ).toBeTruthy();
    });

    it('should not show unlike button when some restaurant has not been liked before', async () => {
      await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(
        document.querySelector('[aria-label="unlike this restaurant"]')
      ).toBeFalsy();
    });

    it('should be able to like a restaurant', async () => {
      const restaurant = { id: 1, name: 'Test Restaurant' };
      await testFactories.createLikeButtonPresenterWithRestaurant(restaurant);

      const likeButton = document.querySelector('#likeBtn');
      likeButton.dispatchEvent(new Event('click'));

      const addedRestaurant = await favoriteRestaurantidb.getRestaurant(1);
      expect(addedRestaurant).toEqual(restaurant);
    });

    it('should not add a restaurant when already exist', async () => {
      await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1, });
      document.querySelector('#likeBtn').dispatchEvent(new Event('click'));
      const likeButton = document.querySelector('#likeBtn');

      likeButton.dispatchEvent(new Event('click'));

      const addedRestaurant = await favoriteRestaurantidb.getAllRestaurants();
      expect(addedRestaurant).toEqual([{ id: 1 }]);
    });

    it('should not add a restaurant without id', async () => {
      await testFactories.createLikeButtonPresenterWithRestaurant({});
      const likeButton = document.querySelector('#likeBtn');
      likeButton.dispatchEvent(new Event('click'));

      expect(await favoriteRestaurantidb.getAllRestaurants()).toEqual([]);
    });
  });
});
