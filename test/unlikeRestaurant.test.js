/* eslint-disable no-undef */
import { event } from 'codeceptjs';
import favoriteRestaurantidb from '../src/api/liked-restaurant';
import * as testFactories from './helper/testFactories';

describe('unlike a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurantidb.putRestaurant({ id: 1 });
  });
  afterEach(async () => {
    await favoriteRestaurantidb.deleteRestaurant(1);
  });

  it('should show the unlike button', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });
  it('should not show the like button', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to unlike restaurant', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    const likeButton = document.querySelector('[aria-label="unlike this restaurant"]');
    likeButton.dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantidb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the liked restaurant is not in the list', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await favoriteRestaurantidb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantidb.getAllRestaurants()).toEqual([]);
  });
});