import React from 'react'
import './BestSellersProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import iconOne from '../../assets/iconOne.png'
import iconTwo from '../../assets/iconTwo.png'
import iconThree from '../../assets/iconThree.png'

const BestSellersProducts = () => {
  const products = useSelector((state) => state.products.products);

  
  const firstFiveProducts = products.slice(0, 5);

  return (
    <div className='bestSellersProducts'>
      <div className="products-inner">
        <div className="main-headings">
          <h1><span>BEST</span> SELLERS</h1>
          <hr />
        </div>
        <div className="paragraph">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>
        <div className="products">
         {firstFiveProducts.map((item, index) => (
            <div key={index} className='eachProduct'>
              <div className="product-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="product-title">
                <p>{item.title}</p>
              </div>
              <div className="product-price">
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="icons-review">
          <div className="iconOne">
            <img src={iconOne} alt="" />
            <h4>Easy Exchange Policy</h4>
            <p>We offer hassle free exchange policy</p>
          </div>
          <div className="iconOne">
            <img src={iconTwo} alt="" />
            <h4>7 Days Return Policy</h4>
            <p>We provide 7 days free return policy</p>
          </div>
          <div className="iconOne">
            <img src={iconThree} alt="" />
            <h4>Best customer support</h4>
            <p>we provide 24/7 customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellersProducts
