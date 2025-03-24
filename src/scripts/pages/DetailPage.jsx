import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentCard from "../components/comment/ReviewCard";
import ReviewForm from "../components/comment/Form";
import { getRestaurantDetail, postReview } from "../../api/restaurantApi";
import { toast } from "react-toastify";

/**
 * DetailPage - Menampilkan detail restoran dan review.
 * Fitur review mengharuskan user login.
 */
const DetailPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  // Fetch detail restoran saat komponen dimount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantDetail(id);
        // Karena API response-nya berbentuk { restaurant: { ... } }
        if (data && data.restaurant) {
          setRestaurant(data.restaurant);
          setReviews(data.restaurant.customerReviews || []);
        } else {
          toast.error("Restaurant not found.");
        }
      } catch (error) {
        toast.error("Failed to fetch restaurant details. Error: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  /**
   * Handle review form submission.
   * Cek autentikasi, kalau belum login, munculin toast dan arahkan ke /login.
   */
const handleReviewSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const reviewText = form.review.value;

  if (!reviewText.trim()) {
    toast.error("Review tidak boleh kosong!");
    return;
  }

  if (!localStorage.getItem("token")) {
    toast.error("Kamu harus login dulu ya!");
    return;
  }

  try {
    const response = await postReview(id, reviewText);

    if (response && response.message === "Review berhasil ditambahkan") {
      // Refresh data untuk mendapatkan review terbaru
      const updatedData = await getRestaurantDetail(id);
      if (updatedData && updatedData.restaurant) {
        setReviews(updatedData.restaurant.customerReviews || []);
        form.reset();
        toast.success(response.message);
      }
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message;
    toast.error(`Gagal menambahkan review: ${errorMessage}`);
  }
};

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!restaurant) {
    return (
      <>
        <Header />
        <main>
          <p>Restaurant not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  const { name, city, rating, address, description, menus, pictureId } =
    restaurant;

  return (
    <>
      <Header />
      <main className="detail">
        <div className="detail-main">
          <h1>
            {name} <span>{rating} ★</span>
          </h1>
          <img
            src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
            alt={`gambar ${name}`}
            crossOrigin="anonymous"
          />
        </div>
        <div className="restaurant-information">
          <h3>City</h3>
          <p>{city}</p>
          <h3>Address</h3>
          <p>{address}</p>
          <div className="restaurant-information-menu">
            <h3 className="restaurant-information-menu-header">Menu</h3>
            <h3>Food</h3>
            <p>
              {menus?.foods?.map((food) => food.name).join(", ") ||
                "No food available"}
            </p>
            <h3>Drink</h3>
            <p>
              {menus?.drinks?.map((drink) => drink.name).join(", ") ||
                "No drinks available"}
            </p>
          </div>
        </div>
        <div className="restaurant-description">
          <h3>Restaurant Description</h3>
          <p>{description}</p>
        </div>
        <div className="comment-section">
          <h1 className="section-title">Customer Reviews</h1>
          <div id="comments-container" className="comments-container">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <CommentCard key={index} customerReview={review} />
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <ReviewForm submitHandler={handleReviewSubmit} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailPage;