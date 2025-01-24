import {  postReview, getRestaurantDetail } from '../../api/restaurant-api';
import loadReviews from './loadReview';

export default function submitHandler(reviewId) {
  const submitButton = document.getElementById('submit-btn');

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    if (name && review) {
      const newReview = {
        id: reviewId,
        name: name,
        review: review,
      };
      // fetch ulang setelah post review
      try {
        const customerReviews = await postReview(newReview);
        if (customerReviews){
          await getRestaurantDetail(reviewId);
          const container = document.querySelector('.comments-container');
          container.innerHTML = '';
          loadReviews(customerReviews);
        } else {
          console.log('gagal menambah review');
        }
      } catch (err) {
        console.error(err);
      }
    }
  });
}