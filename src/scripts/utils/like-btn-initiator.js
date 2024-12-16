import favoriteRestaurantidb from '../../global/liked-restaurant';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../view/templates/template';

const likeButtonInitiator = {
  async init({ container, likedRestaurant, restaurant }) {
    this._container = container;
    this._likedRestaurant = likedRestaurant;
    this._restaurant = restaurant;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._likedRestaurant;

    if (await this.isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantidb.getRestaurant(id);
    return !!restaurant;
  },
  async _renderLike() {
    this._container.innerHTML = createLikeButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await favoriteRestaurantidb.putRestaurant(this._likedRestaurant);
      this._renderButton();
    });
  },
  async _renderLiked(){
    this._container.innerHTML = createLikedButtonTemplate();
    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await favoriteRestaurantidb.deleteRestaurant(this._likedRestaurant.id);
      this._renderButton();
    });
  }
};

export default likeButtonInitiator;
