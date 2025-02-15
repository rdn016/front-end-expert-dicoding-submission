import { createRestaurantList } from '../view/templates/template';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const loadLazySizes = (restaurants) => {
  const restaurantContainer = document.querySelector('#list-cards');
  for (let i = 0; i < restaurants.length; i++) {
    restaurantContainer.innerHTML += createRestaurantList(restaurants[i]);
    console.log('loaded1');
  }
};

export default loadLazySizes;