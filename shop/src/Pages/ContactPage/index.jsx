import React from 'react'
import './ContactPage.css';
import contactImg from '../../assets/contact-img.png';

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <div className="contact-inner">
        <div className="main-heading">
          <h1><span>CONTACT</span> US</h1>
          <hr />
        </div>
        <div className="main-img-texts">
          <div className="main-img">
            <img src={contactImg} alt="" />
          </div>
          <div className="main-texts">
            <div className="first-heading">
              <h2>Our Store</h2>
            </div>
            <div className="address-text">
              <p>54709 Willms Station
Suite 350, Washington, USA</p>
            </div>
            <div className="contact-text">
              <p>Tel: (415) 555-0132
Email: admin@forever.com</p>
            </div>
            <div className="second-heading">
              <h2>Careers at Forever</h2>
            </div>
            <div className="final-paragraph">
              <p>Learn more about our teams and job openings.</p>
            </div>
            <div className="contact-btn">
              <button>Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-inner">
        <div className="main-heading">
          <h1>Type anything and contact me</h1>
          <p>You can type your thoughts down below and send me a message.</p>
        </div>
       <div className="main-input">
          <form action="https://api.web3forms.com/submit" method="POST">
             <input type="hidden" name="access_key" value="f6050f4a-60d0-4bb7-bb52-61f7bca1c076"></input>
            <input type="text" name='message' placeholder='Type a message and send'/>
          <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;
