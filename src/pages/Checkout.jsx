import React, { useState } from "react";
import "./CheckoutPage.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash-on-delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <div className="payment-option">
            <input
              type="radio"
              id="cash-on-delivery"
              name="paymentMethod"
              value="cash-on-delivery"
              checked={formData.paymentMethod === "cash-on-delivery"}
              onChange={handleChange}
            />
            <label htmlFor="cash-on-delivery">Cash on Delivery Only</label>
          </div>
        </div>
        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
