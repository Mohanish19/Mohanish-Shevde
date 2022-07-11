import React from 'react'
import './contact.css'
import {MdEmail } from 'react-icons/md'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>manushevde95@gmail.com</h5> */}
            <a href="mailto:manushevde95@gmail.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT FORM */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default contact