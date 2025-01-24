import { createNewReview } from '../view/templates/template';
export default function loadReviews(reviews) {
  const reviewContainer = document.querySelector('.comments-container'); // Adjust the selector as needed
  reviewContainer.innerHTML = ''; // Clear existing reviews
  reviews.forEach((review) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('comment-card');
    reviewElement.innerHTML = createNewReview(review);;
    reviewContainer.appendChild(reviewElement);
  });
}