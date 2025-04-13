import React from 'react'
import './AboutPage.css';
import aboutImg from '../../assets/aboutImg.png'

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className="about-inner">
        <div className="main-heading">
          <h1><span>ABOUT</span> US</h1>
          <hr />
        </div>
        <div className="main-img-texts">
          <div className="main-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="main-info-text">
            <div className="first-container">
              <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            </div>
            <div className="second-container">
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            </div>
            <div className="text-heading">
              <h3>Our Mission</h3>
            </div>
            <div className="third-container">
              <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-info-containers">
        <div className="bottom-main-heading">
          <h2><span>WHY</span> CHOOSE US</h2>
          <hr />
        </div>
        <div className="bottom-borders">
          <div className="borderOne">
            <div className="border-texts">
              <h4>Quality Assurance:</h4>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
          </div>
          <div className="borderOne">
            <div className="border-texts">
              <h4>Quality Assurance:</h4>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
          </div>
          <div id='final-border' className="borderOne final-border-container">
            <div className="border-texts">
              <h4>Quality Assurance:</h4>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
