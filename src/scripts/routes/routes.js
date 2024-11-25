import restaurantList from '../view/pages/main-page';
import restaurantDetail from '../view/pages/detail';
import likedPage from '../view/pages/liked';

const routes = {
  '/': restaurantList,
  '/detail/:id': restaurantDetail,
  '/liked': likedPage
};

export default routes;