import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Temporarily commented out - package needs to be installed
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Temporarily commented out - package needs to be installed
import "./Header.css";
// import logo from "../img/seljak.png"; // Replaced with text logo 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo-text">
            <span className="logo-main">SELJAK</span>
            <span className="logo-sub">GAMING</span>
          </div>
        </Link>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Produkter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Om Oss
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-link">
                <span className="cart-icon">🛒</span>
                <span className="cart-text">Handlekurv</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
