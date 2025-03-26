// pages/LikedPage.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { getAllLikedRestaurants } from "../../api/restaurantApi";

/**
 * LikedPage - Menampilkan restoran yang udah disukai.
 */
const LikedPage = () => {
  const [likedRestaurants, setLikedRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch liked restaurants saat komponen dimount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllLikedRestaurants();
      setLikedRestaurants(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="list liked">
        <h1 id="list">Liked Restaurant</h1>
        <div className="list-cards" id="list-cards">
          {loading ? (
            <p>Loading...</p>
          ) : likedRestaurants.restaurants.length > 0 ? (
            likedRestaurants.restaurants.map((restaurant) => (
              <Card key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <h1 id="no-liked-restaurants">Kamu belum menyukai restoran</h1>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LikedPage;
