import React from 'react'
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux';
import {removeProduct} from '../../Redux/productsSlice'

const CartPage = () => {
  const cartItemsArray = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  }

  const totalPrice = cartItemsArray.reduce((total, item) => {
  const price = Number(item.price.replace('$', '')) || 0;
  const quantity = Number(item.quantity || 1);
  return total + (price * quantity);
}, 0);
  
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <div className='cartPage'>
      <div className="cart-inner">
        <div className="main-cart-headings">
          <h2>Products</h2>
          <ul>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
        </div>
    {cartItemsArray.map((item, index) => (
    <div className='eachProduct' key={item.id}>
      <div className="product-img-texts">
        <div className="product-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="image-heading">
          <h4>{item.title}</h4>
          <p onClick={()=>handleRemoveProduct(item.id)}>Remove</p>
        </div>
      </div>
      <div className="displayed-product-details">
        <ul>
          <li>{item.price}</li>
          <li>1</li>
            <li>{item.price}</li>
        </ul>
      </div>
    </div>
    ))}
        <div className="items-summaray-container">
          <div className="container">
            <div className="heading">
              <h2>Cart Totals</h2>
            </div>
            <div className="total-price">
              <p>Items</p>
              <span>{cartItemsArray.length}</span>
            </div>
            <div className="shipping-text">
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className="final-total-price">
              <p>Total</p>
              <span>${roundedTotalPrice}</span>
            </div>
          </div>
          <div className="cart-payment-button">
          <button>Proceed checkout</button>
          </div>
      </div>
   </div>
</div>
  )
}

export default CartPage;
