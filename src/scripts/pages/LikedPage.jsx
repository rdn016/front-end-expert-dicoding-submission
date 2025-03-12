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
          ) : likedRestaurants.length > 0 ? (
            likedRestaurants.map((restaurant) => (
              <Card key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Kamu belum menyukai restoran.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LikedPage;
