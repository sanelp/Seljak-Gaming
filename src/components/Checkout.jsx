import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "card",
    cardName: "",
    phoneNumber: "",
  });
  const [isShippingComplete, setIsShippingComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.postalCode &&
      formData.country
    ) {
      setIsShippingComplete(true);
    } else {
      alert("Vennligst fyll ut all leveringsinformasjon.");
    }
  };

  const handlePaymentSubmit = async (paymentMethodId) => {
    // Payment logic here
    console.log("Processing payment...");
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === 'string' 
        ? parseFloat(product.price.replace(/[^\d.-]/g, '')) 
        : product.price;
      return total + price;
    }, 0);
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        <div className="checkout-header">
          <h1 className="checkout-title">Checkout</h1>
          <p className="checkout-subtitle">Fullfør din bestilling</p>
        </div>

        <div className="checkout-layout">
          <div className="checkout-summary">
            <div className="summary-header">
              <h2>🛒 Din Handlekurv</h2>
              <span className="item-count">{cart.length} varer</span>
            </div>
            
            <div className="checkout-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-icon">🛒</div>
                  <p>Handlekurven din er tom</p>
                  <button className="continue-shopping">Fortsett å handle</button>
                </div>
              ) : (
                cart.map((product) => (
                  <div key={product.id} className="checkout-item">
                    <div className="item-image">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="checkout-item-image"
                      />
                      <div className="item-badge">PC</div>
                    </div>
                    <div className="checkout-item-details">
                      <h3>{product.name}</h3>
                      <p className="item-description">{product.description}</p>
                      <div className="item-price">{product.price},-</div>
                    </div>
                    <div className="item-actions">
                      <button className="remove-item">✖</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="checkout-total">
                <div className="total-breakdown">
                  <div className="subtotal">
                    <span>Subtotal:</span>
                    <span>{calculateTotal()},-</span>
                  </div>
                  <div className="shipping">
                    <span>Frakt:</span>
                    <span>Gratis</span>
                  </div>
                  <div className="total">
                    <span>Totalt:</span>
                    <span>{calculateTotal()},-</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleShippingSubmit}>
              <div className="form-header">
                <h2>📋 Leveringsinformasjon</h2>
                <div className="step-indicator">
                  <span className={`step ${!isShippingComplete ? 'active' : 'completed'}`}>1</span>
                  <span className="step-line"></span>
                  <span className={`step ${isShippingComplete ? 'active' : ''}`}>2</span>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Fullt navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Skriv inn ditt fulle navn"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email">
                    <span className="label-icon">📧</span>
                    E-post adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@email.com"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">
                    <span className="label-icon">🏠</span>
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Gate og husnummer"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    <span className="label-icon">🏙️</span>
                    By
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="By navn"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postalCode">
                    <span className="label-icon">📮</span>
                    Postnummer
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="0000"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="country">
                    <span className="label-icon">🌍</span>
                    Land
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Velg land</option>
                    <option value="Norge">Norge</option>
                    <option value="Sverige">Sverige</option>
                    <option value="Danmark">Danmark</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="checkout-button primary">
                <span className="button-icon">🚀</span>
                Fortsett til betaling
                <span className="button-arrow">→</span>
              </button>
            </form>

            {isShippingComplete && (
              <div className="payment-section">
                <h3>💳 Betalingsmetode</h3>
                <div className="payment-options">
                  <div className="payment-option selected">
                    <div className="payment-info">
                      <span className="payment-icon">💳</span>
                      <span>Kort</span>
                    </div>
                    <span className="checkmark">✓</span>
                  </div>
                  <div className="payment-option">
                    <div className="payment-info">
                      <span className="payment-icon">📱</span>
                      <span>Vipps</span>
                    </div>
                  </div>
                </div>
                <button className="checkout-button success">
                  <span className="button-icon">🛒</span>
                  Fullfør bestilling
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
