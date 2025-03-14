/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  const { id, city, rating, name, pictureId } = restaurant;
  return (
    <div className="card " tabIndex="0" id={id}>
      <div className="card-head ">
        <p id="city">{city}</p>
        <p id="rating">★ {rating}</p>
      </div>
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={`restoran ${name}`}
        crossOrigin="anonymous"
      />
      <div className="card-title ">
        <Link to={`/detail/${id}`}>{name}</Link>
      </div>
    </div>
  );
};

export default Card;
