import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { getUsernameFromToken } from "../utils/auth";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  
  const userIconRef = useRef(null);
  const username = getUsernameFromToken()

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Kamu sudah logout.");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // Handle clicks outside menus to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle mobile menu clicks
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.classList.contains("mobile-menu-icon")
      ) {
        setMobileMenuOpen(false);
      }

      // Handle user menu clicks
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        !userIconRef.current.contains(event.target)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, showUserMenu]);

  // Apply animation class to user menu
  useEffect(() => {
    const userMenu = userMenuRef.current;
    if (userMenu) {
      if (showUserMenu) {
        userMenu.style.opacity = "1";
        userMenu.style.visibility = "visible";
        userMenu.style.transform = "translateY(0)";
      } else {
        userMenu.style.opacity = "0";
        userMenu.style.visibility = "hidden";
        userMenu.style.transform = "translateY(-10px)";
      }
    }
  }, [showUserMenu]);

  return (
    <header>
      <nav>
        <h1 id="judul" tabIndex="0">
          <span id="span">Owan</span> Culinary
        </h1>
        {/* Desktop Navbar */}
        <ul id="navbar" tabIndex="0" className="desktop-nav">
          <li>
            <Link to="/#">Home</Link>
          </li>
          <li>
            <a href="/#about-us">About Us</a>
          </li>
          <li>
            <Link to="/liked">Liked Restaurant</Link>
          </li>
          <li>
            <button
              ref={userIconRef}
              onClick={toggleUserMenu}
              className="user-icon"
            >
              <i className="fa fa-user"></i>
            </button>
            <ul ref={userMenuRef} className="user-menu">
              {/* kalau user udah login */}
              {token ? (
                <>
                  <li>
                    <i className="fa fa-user"></i>
                    <p>{username}</p>
                  </li>
                  <li onClick={handleLogout}>
                    <a style={{ cursor: "pointer" }}>Logout</a>
                  </li>
                </>
              ) : (
                // kalau user belom login
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
            <Link to="/#" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about-us" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/liked" onClick={toggleMobileMenu}>
              Liked Restaurant
            </Link>
          </li>
          <a>
            {/* kalau user udah login */}
            {token ? (
              <>
                <a
                  onClick={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                  className="user-menu-btn"
                >
                  Logout <i className="fa fa-sign-out logout-btn"></i>
                </a>
                <li>
                  <i className="fa fa-user"></i>
                  <p>{username}</p>
                </li>
              </>
            ) 
            //kalau user belom login tampilkan login dan register menu
            : (
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
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
