/* eslint-disable no-undef */
const { e2eHelper } = require('./helpers/helper');

const assert = require('assert');

Scenario('reviewing a restaurant', async ({ I }) => {
  await e2eHelper(I);

  I.seeElement('.review-form');
  I.seeElement('#name');
  I.fillField('name', 'John Doe');

  I.seeElement('#review');
  I.fillField('review', 'This is a review');

  I.waitForElement;
});
