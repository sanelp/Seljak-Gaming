import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2>{product.name}</h2>
                  <p className="price">{product.price},-</p>
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total: {calculateTotal()},-</p>
            <button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
