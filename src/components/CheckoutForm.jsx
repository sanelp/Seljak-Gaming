import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import vippsIcon from "../img/vipps.png"; 

const CheckoutForm = ({ formData, handleChange, handlePaymentSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: formData.cardName,
      },
    });

    if (error) {
      console.error(error);
    } else {
      handlePaymentSubmit(paymentMethod.id);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Payment Method</h2>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === "card"}
            onChange={handleChange}
          />
          Credit/Debit Card
          <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="vipps"
            checked={formData.paymentMethod === "vipps"}
            onChange={handleChange}
          />
          Vipps
          <img src={vippsIcon} alt="Vipps" className="payment-icon" />
        </label>
      </div>
      {formData.paymentMethod === "card" && (
        <div className="card-details">
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name:</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardElement">Card Details:</label>
            <CardElement
              id="cardElement"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
      {formData.paymentMethod === "vipps" && (
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <button type="submit" className="checkout-button">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
