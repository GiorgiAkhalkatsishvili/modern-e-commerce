import React, { useState } from 'react';
import './PlaceOrderPage.css';
import { useSelector } from 'react-redux';
import stripePayment from '../../assets/stripe.png';
import razPayment from '../../assets/razPay.png';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

const PlaceOrderPage = () => {
  const cartItemsArray = useSelector((state) => state.products.cartItems);
  const navigate = useNavigate();

  // Stored all form input values in one state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const totalPrice = cartItemsArray.reduce((total, item) => {
    const price = Number(item.price.replace('$', '')) || 0;
    const quantity = Number(item.quantity || 1);
    return total + (price * quantity);
  }, 0);

  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;


  const handlePlaceOrder = () => {
    const isEmpty = Object.values(formData).some((value) => value.trim() === "");

    if (isEmpty) {
      toast.warning("Please fill in all fields before placing the order.", {
        style: {
    fontFamily: 'sans-serif',
    color: "#333"
  }
});

      return;
    }

    console.log("Order placed successfully:", formData);
    toast.success("Order placed successfully!");
    setTimeout(() => {
      navigate('/')
    }, 1000)
  };

  return (
    <div className='placeOrderPage'>
      <div className="inner">
        <div className="main-inputs">
          <div className="main-heading">
            <h1>DELIVERY <span>INFORMATION</span></h1>
            <hr />
          </div>

          <div className="name-surname-inp">
            <input type="text" name="firstName" placeholder='First name' value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="email-inp">
            <input type="email" name="email" placeholder='Email address' value={formData.email} onChange={handleChange} />
          </div>

          <div className="street-inp">
            <input type="text" name="street" placeholder='Street' value={formData.street} onChange={handleChange} />
          </div>

          <div className="city-inp">
            <input type="text" name="city" placeholder='City' value={formData.city} onChange={handleChange} />
            <input type="text" name="state" placeholder='State' value={formData.state} onChange={handleChange} />
          </div>

          <div className="zipCountry-inp">
            <input type="number" name="zip" placeholder='Zipcode' value={formData.zip} onChange={handleChange} />
            <input type="text" name="country" placeholder='Country' value={formData.country} onChange={handleChange} />
          </div>

          <div className="phone-inp">
            <input type="number" name="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="items-summaray-container">
          <div className="container">
            <div className="heading">
              <h2>Cart Totals</h2>
              <hr />
            </div>
            <div className="total-price">
              <p>Items</p>
              <span>{cartItemsArray.length}</span>
            </div>
            <div className="shipping-text">
              <p>Shipping</p>
              <span>$5</span>
            </div>
            <div className="final-total-price">
              <p>Total</p>
              <span>${roundedTotalPrice}</span>
            </div>
          </div>

          <div className="payment-options">
            <div className="options-heading">
              <h4><span>PAYMENT</span> METHODS</h4>
              <hr />
            </div>
            <div className="options">
              <div className="optionOne">
                <p></p>
                <img src={stripePayment} alt="Stripe Payment" />
              </div>
              <div className="optionOne">
                <p></p>
                <img src={razPayment} alt="RazorPay Payment" />
              </div>
              <div className="optionOne" id='lastOption'>
                <p></p>
                <h4>CASH ON DELIVERY</h4>
              </div>
            </div>
          </div>

          <div className="cart-payment-button">
            <button onClick={handlePlaceOrder}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
