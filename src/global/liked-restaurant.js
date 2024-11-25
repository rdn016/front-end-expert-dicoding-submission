import { openDB } from 'idb';

const dbName = 'favorite restaurant';
const storeName = 'restaurants';
const dbversion = 1;

const dbPromise = openDB(dbName, dbversion, {
  upgrade(database){
    database.createObjectStore(storeName, { keyPath: 'id' });
  }
});

const favoriteRestaurantidb = {
  async getRestaurant(id){
    return (await dbPromise).get(storeName, id);
  },
  async getAllRestaurants(){
    return (await dbPromise).getAll(storeName);
  },
  async putRestaurant(restaurant){
    return (await dbPromise).put(storeName, restaurant);
  },
  async deleteRestaurant(id){
    return (await dbPromise).delete(storeName, id);
  }
};

export default favoriteRestaurantidb;
