/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  const { id, city, rating, name, pictureId } = restaurant;
  return (
    <div className="card lazyload" tabIndex="0" id={id}>
      <div className="card-head lazyload">
        <p id="city">{city}</p>
        <p id="rating">★ {rating}</p>
      </div>
      <div className="skeleton-image"></div>
      <img
        className="lazyload"
        data-src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={`restoran ${name}`}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      <div className="card-title lazyload">
        <Link to={`/detail/${id}`}>{name}</Link>
      </div>
    </div>
  );
};

export default Card;
