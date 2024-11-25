const createRestaurantList = (restaurant) => {
  const tabIndex = 3;
  return `
<div class="card" tabindex="${tabIndex + 2}" id="${restaurant.id}">
  <div class="card-head">
    <p id="city">${restaurant.city}</p>
    <p id="rating">★ ${restaurant.rating}</p>
  </div>
  <img 
    src="https://restaurant-api.dicoding.dev/images/medium/${
  restaurant.pictureId}" 
    alt="restoran ${restaurant.name}" crossorigin="anonymous"
  />
  <div class="card-title">
    <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
  </div>
</div>

        `;
};

const createCustomerReviews = (reviews) => {
  return reviews
    .map(
      (review) => `
      <div class="comment-card">
        <div class="name">${review.name}</div>
        <div class="date">${review.date}</div>
        <div class="review">${review.review}</div>
      </div>
    `
    )
    .join('');
};

const createRestaurantDetail = (restaurant) => {
  return `

      <div class="detail-main">
        <h1>${restaurant.name} <span>${restaurant.rating} ★</span></h1>
        <img
          src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
          alt="gambar ${restaurant.name}"
        />
      </div>
   <div class="restaurant-information">
        <h3>City</h3>
        <p>${restaurant.city}</p>
        <h3>Address</h3>
        <p>${restaurant.address}</p>
        <h3>Categories</h3>
        <p>${restaurant.categories
    .map((category) => category.name)
    .join(', ')}</p>
        <div class="restaurant-information-menu">
          <h3 class="restaurant-information-menu-header">Menu</h3>
          <h3>Food</h3>
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          <h3>Drink</h3>
          <p>${restaurant.menus.drinks
    .map((drink) => drink.name)
    .join(', ')}</p>
        </div>
      </div>
      <div class="restaurant-description">
        <h3>Restaurant Description</h3>
        <p>${restaurant.description} </p>
      </div>
      <div class="comment-section">
        <h1 class="section-title">Customer Reviews</h1>
        <div id="comments-container" class="comments-container">
          ${createCustomerReviews(restaurant.customerReviews)}
        </div>
      </div>

  `;
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeBtn" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeBtn" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetail,
  createRestaurantList,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
