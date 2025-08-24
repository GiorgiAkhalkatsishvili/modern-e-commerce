import React, { useState } from 'react'
import './FourthProductPage.css';
import womenBlueJacket from '../../assets/women-jacket.png';
import { useDispatch, useSelector } from 'react-redux';
import reviewStarImg from '../../assets/review-star.png';
import { addToCartItems } from '../../Redux/productsSlice';
import { createAccount } from '../../Redux/productsSlice';
import { toast } from 'react-toastify';

const FourthProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const accountCreated = useSelector((state) => state.products.createAccount);
  const dispatch = useDispatch();

  const fourthProduct = products[3];

  const handleAddProduct = () => {
    if (!accountCreated) {
      toast.error(
        <div className="custom-toast-message">
          <span>You need to log in first!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast custom-toast-error"
        }
      );
    } else {
      toast.success(
        <div className="custom-toast-message">
          <span>Product added successfully!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast custom-toast-success"
        }
      );
      dispatch(createAccount());
      dispatch(addToCartItems(fourthProduct));
    }
  };

  return (
    <div className='fourthProductPage'>
      <div className="product-inner">
        <div className="main-product-images">
          <div className="small-image">
            <img src={womenBlueJacket} alt="" />
          </div>
          <div className="main-image">
            <img src={womenBlueJacket} alt="" />
          </div>
        </div>
        <div className="main-product-description">
          <div className="main-heading">
            <h1>{fourthProduct.title}</h1>
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
            <h3>{fourthProduct.price}</h3>
          </div>
          <div className="product-paragraph">
            <p>{fourthProduct.descirption}</p>
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

export default FourthProductPage;
