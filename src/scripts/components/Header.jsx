// components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

/**
 * Header - Navbar utama dengan opsi login/logout.
 */
const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  /**
   * Handle logout dengan hapus token dari localStorage.
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Kamu sudah logout.");
    navigate("/");
  };

  return (
    <header>
      <nav>
        <h1 id="judul" tabIndex="0">
          <span id="span">Owan</span> Culinary
        </h1>
        <ul id="navbar" tabIndex="0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/liked">Liked Restaurant</Link>
          </li>
          <li>
            {/* Tombol ikon user */}
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="user-icon"
            >
              <i className="fa fa-user"></i>
            </button>
            {showUserMenu && (
              <ul className="user-menu">
                {token ? (
                  <li onClick={handleLogout}>
                    <span>Logout</span>
                    <i className="fa fa-sign-out"></i>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
