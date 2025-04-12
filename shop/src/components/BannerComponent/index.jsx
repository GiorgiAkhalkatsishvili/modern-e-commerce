import React from 'react'
import './BannerComponent.css';
import bannerImg from '../../assets/bannerImg.png'

const BannerComponent = () => {
  return (
    <div className='bannerComponent'>
      <div className="banner-inner">
        <div className="banner-texts">
          <div className="inner-banner-texts">
            <div className="first-texts">
          <hr />
          <p>OUR BESTSELLERS</p>
          </div>
          <h2>Latest Arrivals</h2>
          <div className="banner-bottom-texts">
            <p>SHOP NOW</p>
            <hr />
          </div>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerComponent
