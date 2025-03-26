const BASE_URL = "http://localhost:3000/api"; // Ubah ke endpoint backend lo

/**
 * Mengambil daftar restoran dari API.
 * @returns {Promise<Object>} JSON response yang berisi list restoran.
 */
export const getRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`);
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
    const response = await fetch(`${BASE_URL}/detail/${id}`);
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
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User not authenticated");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/detail/${restaurantId}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify({ review }),
      }
    );

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


export const getAllLikedRestaurants = async () => {
  const token = localStorage.getItem("token")
  try {
    const response = await fetch(`${BASE_URL}/liked`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
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

/* api fetching untuk handle login user */
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    const response = (await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password})
    }))

    await response.json();

  } catch (err) {
    console.error(err);
  }
};
