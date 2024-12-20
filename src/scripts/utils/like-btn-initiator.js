import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../view/templates/template';

const likeButtonInitiator = {
  async init({ container, restaurant, favoriteRestaurant }) {
    this._container = container;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;

    if (await this.isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },
  async _renderLike() {
    this._container.innerHTML = createLikeButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  async _renderLiked(){
    this._container.innerHTML = createLikedButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }
};

export default likeButtonInitiator;