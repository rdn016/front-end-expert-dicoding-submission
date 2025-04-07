const LikeButton = () => {
    return (
      <button aria-label="like this restaurant" id="likeBtn" className="like">
        <i
          className="fa fa-heart-o"
          role="button"
          tabIndex="0"
          aria-hidden="false"
        ></i>
      </button>
    );
}

export default LikeButton