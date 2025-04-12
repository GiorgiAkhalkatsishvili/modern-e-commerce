import React from 'react'
import BannerComponent from '../../components/BannerComponent';
import BestSellersProducts from '../../components/BestSellersProducts';
import ContactComponent from '../../components/ContactComponent';
import FooterComponent from '../../components/FooterComponent';
import ProductsComponent from '../../components/ProductsComponent';

const HomePage = () => {
  return (
    <div className='homePage'>
      <BannerComponent/>
      <ProductsComponent />
      <BestSellersProducts />
      <ContactComponent />
    </div>
  )
}

export default HomePage;
