/* eslint-disable no-undef */
const { unlikeRestaurantHelper } = require('./helpers/helper');

const assert = require('assert');
Feature('Like restaurant');

Scenario('Liking a restaurant',  async ({ I }) => {
  I.amOnPage('/');
  I.wait('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/liked');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title a');
  I.seeElement('.card');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unLiking a restaurant', async ({ I }) => {

  await unlikeRestaurantHelper(I);

  I.amOnPage('/#/liked');
  I.wait('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  I.click(firstRestaurant);
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeBtn');
  I.click('#likeBtn');


  I.amOnPage('/#/liked');
  I.dontSeeElement('.card');

  I.amOnPage('/#/liked');
  I.wait('.card-title a');

});
