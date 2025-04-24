import React from 'react';
import './PlaceOrderPage.css'
import { useSelector } from 'react-redux';
import stripePayment from '../../assets/stripe.png'
import razPayment from '../../assets/razPay.png'

const PlaceOrderPage = () => {
  const cartItemsArray = useSelector((state) => state.products.cartItems);

  const totalPrice = cartItemsArray.reduce((total, item) => {
  const price = Number(item.price.replace('$', '')) || 0;
  const quantity = Number(item.quantity || 1);
  return total + (price * quantity);
}, 0);
  
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <div className='placeOrderPage'>
      <div className="inner">
        <div className="main-inputs">
          <div className="main-heading">
          <h1>DELIVERY <span>INFORMATION</span></h1>
          <hr />
        </div>
          <div className="name-surname-inp">
            <input type="name" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
          </div>
          <div className="email-inp">
            <input type="email" placeholder='Email address'/>
          </div>
          <div className="street-inp">
            <input type="text" placeholder='Street'/>
          </div>
          <div className="city-inp">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className="zipCountry-inp">
            <input type="number" placeholder='Zipcode'/>
            <input type="text" placeholder='Country'/>
          </div>
          <div className="phone-inp">
            <input type="number" placeholder='Phone'/>
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
                <img src={stripePayment} alt="" />
              </div>
              <div className="optionOne">
                <p></p>
                <img src={razPayment} alt="" />
              </div>
              <div className="optionOne" id='lastOption'>
                <p></p>
                <h4>CASH ON DELIVERY</h4>
              </div>
            </div>
          </div>
          <div className="cart-payment-button">
          <button>PLACE ORDER</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default PlaceOrderPage
