import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../img/seljak.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Seljak Gaming" className="header-logo" />
        </Link>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
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
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
