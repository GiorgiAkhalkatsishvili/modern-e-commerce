import React from 'react';
import './FooterComponent.css';
import headingText from '../../assets/heading-text.png';

const FooterComponent = () => {
  return (
    <div className='footerComponent'>
      <div className="footer-inner">
        <div className="main-heading">
          <img src={headingText} alt="" />
          <p>Hi, my name is George. I built this website to showcase my skills in front end development. This is a test e-commerce website that you can check out and send feedback in the input field on top.</p>
        </div>
          <div className="listOne">
            <p>COMPANY</p>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="listOne">
            <p>GET IN TOUCH</p>
            <ul>
            <li>+1-000-000-0000</li>
            <li>georgeakhalkatsishvili748@gmail.com</li>
            </ul>
          </div>
      </div>
      <hr />
      <div className="final-text">
        <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default FooterComponent
