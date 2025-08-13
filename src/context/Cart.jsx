import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === 'string' 
        ? parseFloat(product.price.replace(/[^\d.-]/g, '')) 
        : product.price;
      return total + price;
    }, 0);
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-header">
          <h1 className="cart-title">🛒 Handlevogn</h1>
          <p className="cart-subtitle">Dine valgte produkter</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Handlevognen din er tom</h2>
            <p>Utforsk vårt utvalg av gaming-utstyr og bygg din drømme-PC!</p>
            <button 
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              <span className="btn-icon">🎮</span>
              Fortsett å handle
              <span className="btn-arrow">→</span>
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-section">
              <div className="section-header">
                <h2>Dine Produkter</h2>
                <span className="item-count">{cart.length} varer</span>
              </div>
              
              <div className="cart-items">
                {cart.map((product) => (
                  <div key={product.id} className="cart-item">
                    <div className="item-image-container">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="cart-item-image"
                      />
                      <div className="item-category-badge">
                        {product.category === 'PCs' ? 'PC' : 
                         product.category === 'Components' ? 'Komponenter' :
                         product.category === 'Accessories' ? 'Tilbehør' : 
                         product.category}
                      </div>
                    </div>
                    
                    <div className="cart-item-details">
                      <h3 className="item-name">{product.name}</h3>
                      <p className="item-description">{product.description}</p>
                      <div className="item-price">{product.price},-</div>
                    </div>
                    
                    <div className="item-actions">
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                        title="Fjern fra handlevogn"
                      >
                        <span className="remove-icon">🗑️</span>
                        Fjern
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-header">
                <h2>📋 Ordresammendrag</h2>
              </div>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Antall varer:</span>
                  <span>{cart.length}</span>
                </div>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>{calculateTotal()},-</span>
                </div>
                <div className="summary-row">
                  <span>Frakt:</span>
                  <span className="free-shipping">Gratis</span>
                </div>
                <div className="summary-row total-row">
                  <span>Totalt:</span>
                  <span className="total-price">{calculateTotal()},-</span>
                </div>
              </div>

              <div className="summary-actions">
                <button
                  className="checkout-button primary"
                  onClick={() => navigate("/checkout")}
                >
                  <span className="btn-icon">🚀</span>
                  Fullfør bestilling
                  <span className="btn-arrow">→</span>
                </button>
                
                <button
                  className="continue-shopping-btn secondary"
                  onClick={handleContinueShopping}
                >
                  <span className="btn-icon">⬅️</span>
                  Fortsett å handle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
