/* eslint-disable no-undef */
const e2eHelper = async (I) => {
  I.amOnPage('/');
  I.wait('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeBtn');
  I.click('#likeBtn');
  return firstRestaurantTitle;
};

module.exports = {
  e2eHelper,
};
