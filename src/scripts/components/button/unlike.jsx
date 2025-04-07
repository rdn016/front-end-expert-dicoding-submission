const UnLikeButton = () => {
  return (
    <button aria-label="unlike this restaurant" id="likeBtn" className="like">
      <i
        className="fa fa-heart"
        role="button"
        tabIndex="0"
        aria-hidden="false"
      ></i>
    </button>
  );
};

export default UnLikeButton;
