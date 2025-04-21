import React, { useState } from 'react'
import './NinthProductPage.css';
import menLightCottonShirt from '../../assets/men-cotton-shirt.png';
import { useDispatch, useSelector } from 'react-redux';
import reviewStarImg from '../../assets/review-star.png';
import { addToCartItems } from '../../Redux/productsSlice';
import { createAccount } from '../../Redux/productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const NinthProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const accountCreated = useSelector((state) => state.products.createAccount);
  const dispatch = useDispatch();

  const ninthProduct = products[8];

  const handleAddProduct = () => {
    if (!accountCreated) {
      setMessage(
     <div id='error-massage' className='error' style={{width: '280px', display: 'flex', gap: '10px', alignItems: 'center'}}>
     <FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red', fontSize: '25px'}}/>
        {' '}<p>You need to log in first!</p>
        </div>
    );
  } else {
   setError(
    <div id='success-massage' className='success'  style={{width: '280px', display: 'flex', gap: '10px', alignItems: 'center'}}>
     <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green', fontSize: '25px' }} />
     {' '}<p>Product added successfully!</p>
     </div>
      );
     dispatch(createAccount());
     dispatch(addToCartItems(ninthProduct));
   }
    setTimeout(() => {
    setMessage('')
   setError('')
   },5000)
};

  return (
    <div className='eighthProductPage'>
      <div className="product-inner">
        <div className="main-product-images">
          <div className="small-image">
            <img src={menLightCottonShirt} alt="" />
          </div>
          <div className="main-image">
            <img src={menLightCottonShirt} alt="" />
          </div>
        </div>
        <div className="main-product-description">
          <div className="main-heading">
            <h1>{ninthProduct.title}</h1>
          </div>
          <div className="review-images">
            <div className="imageOne">
              <img src={reviewStarImg} alt="" />
            </div>
            <div className="imageOne">
              <img src={reviewStarImg} alt="" />
            </div>
            <div className="imageOne">
              <img src={reviewStarImg} alt="" />
            </div>
            <div className="imageOne">
              <img src={reviewStarImg} alt="" />
            </div>
            <div className="imageOne">
              <img src={reviewStarImg} alt="" />
            </div>
            <p>(122)</p>
          </div>
          <div className="product-price">
            <h3>{ninthProduct.price}</h3>
          </div>
          <div className="product-paragraph">
            <p>{ninthProduct.descirption}</p>
          </div>
          <div className="product-size-options">
            <div className="heading">
              <h3>Select size</h3>
            </div>
            <div className="size-container">
              <div className="sizeOne">
                <h4>S</h4>
              </div>
              <div className="sizeOne">
                <h4>M</h4>
              </div>
              <div className="sizeOne">
                <h4>L</h4>
              </div>
              <div className="sizeOne">
                <h4>XL</h4>
              </div>
              <div className="sizeOne">
                <h4>XXL</h4>
              </div>
            </div>
          </div>
          <div className="main-btn">
            <button onClick={handleAddProduct}>ADD TO CART</button>
          </div>
          {
              message?(
             <div className="successful-message">
             {message}
                </div>
              ) :
              ('')
              }
              {
                error ? (
                  <div className="error-massage">
                  {error}
                  </div>
                ) :
               ('') 
            }
          <div className="border">
            <hr />
          </div>
          <div className="final-descrepiton-texts">
            <p>100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    <div className="bottom-description-borders">
      <div className="headingOne">
        <h4>Description</h4>
      </div>
      <div className="headingTwo">
        <h4>Reviews</h4>
        </div>
      </div>
      <div className="main-paragraph">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. 
          <br />
          <br />
          <span>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</span>
          </p>
        </div>
    </div>
  )
}

export default NinthProductPage;
