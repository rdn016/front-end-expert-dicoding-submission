/* eslint-disable react/prop-types */
const ReviewForm = ({ submitHandler }) => {
  return (
    <div className="review-form">
      <h2>Submit Your Review</h2>
      <form id="reviewForm" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            rows="4"
            required
            maxLength="110"
            placeholder="Your review (max 110 length)"
          />
        </div>
        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
