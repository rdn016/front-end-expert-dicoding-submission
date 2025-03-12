import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

/**
 * Header - Navbar utama dengan opsi login/logout.
 * Di desktop, tampil seperti biasa sesuai styling sebelumnya.
 * Di mobile, navbar disembunyikan dan ditampilkan via off-canvas menu.
 */
const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const mobileMenuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Kamu sudah logout.");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle klik di luar menu untuk menutup off-canvas
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.classList.contains("mobile-menu-icon")
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      <nav>
        <h1 id="judul" tabIndex="0">
          <span id="span">Owan</span> Culinary
        </h1>
        {/* Desktop Navbar */}
        <ul id="navbar" tabIndex="0" className="desktop-nav">
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

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>

      {/* Off-Canvas Mobile Navbar */}
      <div
        ref={mobileMenuRef}
        className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/liked" onClick={toggleMobileMenu}>
              Liked Restaurant
            </Link>
          </li>
          <li>
            {token ? (
              <button
                onClick={() => {
                  toggleMobileMenu();
                  handleLogout();
                }}
                className="user-menu-btn"
              >
                Logout <i className="fa fa-sign-out"></i>
              </button>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={toggleMobileMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={toggleMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
