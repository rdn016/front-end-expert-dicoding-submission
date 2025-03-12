/* eslint-disable react/prop-types */
const ReviewCard = ({ customerReview }) => {
  const { name, date, review } = customerReview;
  return (
    <div className="comment-card">
      <div className="name">${name}</div>
      <div className="date">${date}</div>
      <div className="review">${review}</div>
    </div>
  );
};

export default ReviewCard;
