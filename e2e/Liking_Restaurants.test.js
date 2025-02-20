/* eslint-disable no-undef */
const { e2eHelper } = require('./helpers/helper');

const assert = require('assert');
Feature('Like restaurant');

Scenario('Liking a restaurant',  async ({ I }) => {
  await e2eHelper(I);

  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/liked');
  const restaurantTitle = await I.grabTextFrom('.card-title a');
  I.seeElement('.card');

  assert.strictEqual(firstRestaurantTitle, restaurantTitle);
});

Scenario('unLiking a restaurant', async ({ I }) => {

  await e2eHelper(I);

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

Scenario('Persisting liked state after reload', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card-title a');
  I.seeElement('.card-title a');
  const firstRestaurant = locate('.card-title a').first();
  I.click(firstRestaurant);
  I.seeElement('#likeBtn');
  I.click('#likeBtn');
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.refreshPage();
  I.seeElement('[aria-label="unlike this restaurant"]');
});

