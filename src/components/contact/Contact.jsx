import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hvzeoye', 'template_ubalh15', form.current, '0xE4naJL-Hg65bFn_')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'> 
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>sandhyayadav@gmail.com</h5>
          <a href="mailto:sandhya.yadav090303@gmail.com" target='blank'>Send a Message</a>
          </article>
          <article className='contact__option'> 
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Sandhya Yadav</h5>
          <a href="https://m.me/sa.723865/" target='blank'>Send a Message</a>
          </article>
          <article className='contact__option'> 
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+12345678</h5>
          <a href="https://wa.me/+918318476339" target='blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type=" text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact