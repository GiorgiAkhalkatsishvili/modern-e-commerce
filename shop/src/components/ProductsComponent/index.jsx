import React from 'react'
import './ProductsComponent.css';
import { useDispatch, useSelector } from 'react-redux';



const ProductsComponent = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className='productsComponent'>
      <div className="products-inner">
        <div className="main-headings">
          <div className="first-heading">
          <h1><span>LATEST</span> COLLECTIONS</h1>
            <hr />
          </div>
          <div className="info-text">
            <p>Down below are test e-commerce products which you can check out!</p>
          </div>
        </div>
        <div className="products">
        {products.map((item, index) => (
         <div key={index} className='eachProduct'>
         <div className="product-img">
           <img src={item.img} alt={item.title}/>
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
      </div>
    </div>
  )
}

export default ProductsComponent
