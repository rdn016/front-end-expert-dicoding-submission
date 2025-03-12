// pages/MainPage.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { getRestaurants } from "../../api/restaurantApi";

/**
 * MainPage - Halaman utama yang menampilkan daftar restoran.
 */
const MainPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data restoran saat komponen dimount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      if (data) {
        setRestaurants(data.restaurants || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <main className="list">
        <h1 id="list">Restaurant List</h1>
        <div className="list-cards" id="list-cards">
          {loading ? (
            <p>Loading...</p>
          ) : restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <Card key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
