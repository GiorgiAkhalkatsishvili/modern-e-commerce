import React from 'react'
import './ContactComponent.css'

const ContactComponent = () => {
  return (
    <div className='contactComponent'>
      <div className="contact-inner">
        <div className="main-heading">
          <h1>Type anything and contact me</h1>
          <p>You can type your thoughts down below and send me a message.</p>
        </div>
        <div className="main-input">
          <input type="text" placeholder='type something and send'/>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent
