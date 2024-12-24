import { openDB } from 'idb';

const dbName = 'favorite restaurant';
const storeName = 'restaurants';
const dbversion = 1;

const dbPromise = openDB(dbName, dbversion, {
  upgrade(database) {
    database.createObjectStore(storeName, { keyPath: 'id' });
  }
});

const favoriteRestaurantidb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    try {
      return await (await dbPromise).get(storeName, id);
    } catch (error) {
      console.error('Failed to get restaurant:', error);
    }
  },

  async getAllRestaurants() {
    try {
      return await (await dbPromise).getAll(storeName);
    } catch (error) {
      console.error('Failed to get all restaurants:', error);
    }
  },

  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant || !restaurant.hasOwnProperty('id')) {
      return;
    }
    try {
      return await (await dbPromise).put(storeName, restaurant);
    } catch (error) {
      console.error('Failed to put restaurant:', error);
    }
  },

  async deleteRestaurant(id) {
    if (!id) {
      console.error('No ID provided for deleteRestaurant');
      return;
    }
    try {
      return await (await dbPromise).delete(storeName, id);
    } catch (error) {
      console.error('Failed to delete restaurant:', error);
    }
  }
};

export default favoriteRestaurantidb;