const createRestaurantList = (restaurant) => {
  import('lazysizes')
    .then(() => {
      console.log('lazysizes library loaded');
    })
    .catch((error) => {
      console.error('Failed to load lazysizes', error);
    });

  return `
    <div class="card lazyload" tabindex="0" id="${restaurant.id}">
      <div class="card-head lazyload">
        <p id="city">${restaurant.city}</p>
        <p id="rating">★ ${restaurant.rating}</p>
      </div>
      <div class="skeleton-image"></div>
      <img 
        class="lazyload"
        data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" 
        alt="restoran ${restaurant.name}" crossorigin="anonymous"
        style="display: none;"
      />
      <div class="card-title lazyload">
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
          src="https://restaurant-api.dicoding.dev/images/small/${
  restaurant.pictureId
}"
          alt="gambar ${restaurant.name}" crossorigin="anonymous"
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

const skeletonRestaurantList = () => `
  <div class="skeleton">
    <div class="skeleton-head">
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
    <div class="skeleton-image"></div>
    <div class="skeleton-line"></div>
    <div class="skeleton-line short"></div>
  </div>
`;

export {
  createRestaurantDetail,
  createRestaurantList,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  skeletonRestaurantList,
};
