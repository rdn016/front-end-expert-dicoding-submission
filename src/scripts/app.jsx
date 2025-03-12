// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import LikedPage from "./pages/LikedPage";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * App - Router utama aplikasi.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout dengan About dan Hero untuk halaman utama */}
        <Route path="/" element={<MainPage />} />

        {/* Layout tanpa About untuk halaman detail & liked */}
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/liked" element={<LikedPage />} />

        {/* Halaman autentikasi tanpa header/footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;
