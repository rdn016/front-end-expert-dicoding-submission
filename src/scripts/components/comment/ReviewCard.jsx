// components/comment/ReviewCard.jsx
/* eslint-disable react/prop-types */
const ReviewCard = ({ customerReview }) => {
  // Gunakan fallback kalau properti tidak ada
  const username = customerReview.user || customerReview.name || "Anonymous";
  const reviewText = customerReview.review;
  const dateString = customerReview.review_date || customerReview.date;
  const formattedDate = dateString
    ? new Date(dateString).toLocaleDateString()
    : "";

  return (
    <div className="comment-card">
      <div className="name">{username}</div>
      <div className="date">{formattedDate}</div>
      <div className="review">{reviewText}</div>
    </div>
  );
};

export default ReviewCard;
