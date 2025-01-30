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
      alert("Please complete all shipping information.");
    }
  };

  const handlePaymentSubmit = async (paymentMethodId) => {
    const response = await fetch(
      "http://localhost:3001/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: calculateTotal() * 100 }),
      }
    );

    const { clientSecret } = await response.json();

  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="checkout">
      <h1>Hele ordre</h1>
      <div className="checkout-summary">
        <h2>Dine varer</h2>
        {cart.map((product) => (
          <div key={product.id} className="checkout-item">
            <img
              src={product.images[0]}
              alt={product.name}
              className="checkout-item-image"
            />
            <div className="checkout-item-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price},-</p>
            </div>
          </div>
        ))}
        <div className="checkout-total">
          <h2>Sum: {calculateTotal()},-</h2>
        </div>
      </div>
      <form className="checkout-form" onSubmit={handleShippingSubmit}>
        <h2>Dine opplysninger</h2>
        <div className="form-group">
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">By:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postnummer:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Land:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="checkout-button">
          Fortsett til betaling
        </button>
      </form>
      
    </div>
  );
};

export default Checkout;
