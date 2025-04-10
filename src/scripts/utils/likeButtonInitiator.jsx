/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import LikeButton from "../components/button/like";
import UnLikeButton from "../components/button/unlike";
import { likeRestaurant, unLikeRestaurant } from "../../api/restaurantApi";

const LikeButtonInitiator = ({ restaurant }) => {
  const [isLiked, setIsLiked] = useState(restaurant.isUserLiked);
  const handleLikeClick = async () => {
    try {
      if (!localStorage.getItem("token")) {
        toast.error("Kamu harus login dulu ya!");
        return;
      }

      if (isLiked) {
        await unLikeRestaurant(restaurant.id);
      } else {
        await likeRestaurant(restaurant.id);
      }

      setIsLiked(!isLiked);
    } catch (err) {
      toast.error("failed to update like status");
      console.error(err);
    }
  };

  return (
    <div className="like-button-container" onClick={handleLikeClick}>
      {isLiked ? <UnLikeButton /> : <LikeButton />}
    </div>
  );
};

export default LikeButtonInitiator;
