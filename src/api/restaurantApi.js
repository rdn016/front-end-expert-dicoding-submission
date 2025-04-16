/* eslint-disable no-undef */
const BASE_URL = "http://localhost:3000/api"; // Ubah ke endpoint backend lo
const token = localStorage.getItem("token");
// Get API key from environment variables
const API_KEY = import.meta.env.VITE_API_KEY 

/**
 * Mengambil daftar restoran dari API.
 * @returns {Promise<Object>} JSON response yang berisi list restoran.
 */
export const getRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`, {
      headers: {
        "X-API-KEY": API_KEY
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return null;
  }
};

/**
 * Mengambil detail restoran berdasarkan id.
 * @param {string} id - ID restoran.
 * @returns {Promise<Object>} JSON response yang berisi detail restoran.
 */
export const getRestaurantDetail = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/detail/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-API-KEY": API_KEY
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching restaurant detail:", error);
    return null;
  }
};

/**
 * Mengirim review baru untuk restoran.
 * Harus terautentikasi, jadi token diambil dari localStorage.
 * @param {Object} reviewData - Objek review (name, review).
 * @param {string} id - ID restoran.
 * @returns {Promise<Object>} JSON response yang berisi list review terupdate.
 */
export const postReview = async (restaurantId, review) => {
  if (!token) {
    throw new Error("User not authenticated");
  }

  try {
    const response = await fetch(`${BASE_URL}/detail/${restaurantId}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-API-KEY": API_KEY
      },
      body: JSON.stringify({ review }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Gagal menambahkan review");
    }

    return data;
  } catch (error) {
    console.error("Error posting review:", error);
    throw error;
  }
};

// ambil semua restoran yang disukai
export const getAllLikedRestaurants = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/liked`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-API-KEY": API_KEY
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error getting all liked restaurants:", error);
    return [];
  }
};

// sukai restoran
export const likeRestaurant = async (restaurantId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/detail/${restaurantId}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-API-KEY": API_KEY
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error liking restaurant:", error);
    return null;
  }
};

//unlike restoran
export const unLikeRestaurant = async (restaurantId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/detail/${restaurantId}/unlike`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-API-KEY": API_KEY
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error liking restaurant:", error);
    return null;
  }
};

/* api fetching untuk handle login user */
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.token; // Return the token from the response
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

/* handler buat register */
export const register = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      },
      body: JSON.stringify({ username, password }),
    });

    await response.json();
  } catch (err) {
    console.error(err);
  }
};
