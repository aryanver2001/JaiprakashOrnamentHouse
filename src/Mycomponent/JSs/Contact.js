import React from 'react';
import Hero from "./Hero";
import Footertail from "./Footertail";
import linedesign from "../Images/line-design.png";

export default function Contact() {
  return (
    <div>
      <Hero />

      <div className='df col bg-contact'>
        <div className="df col">
          <span className="heads">CONTACT US</span>
          <span className="contents">Have questions or need assistance?</span>
          <img src={linedesign} alt="" id="line" />
        </div>

        <div className='df fd' data-aos="fade-in">
          {/* ---FORM--- */}
          <div className="form">
            <div className='form-head'>
              <span>Send Us a Message</span>
            </div>
            <div className="form-cont">
              <form action="https://formspree.io/f/mvoekpak" method='POST'>
                <input type="text" name="Name" className="form-control" autoComplete='off' placeholder="Name" required />
                <input type="email" name='Email' className="form-control" autoComplete='off' placeholder="Email" required />
                <input type="number" name='Number' className="form-control" autoComplete='off' placeholder="Phone Number" required />
                <textarea name='Message' className="form-control" rows="3" placeholder='Message' required></textarea>
                <button type="submit" className="btn">Send</button>
              </form>
            </div>
          </div>

          {/* ---MAP--- */}
          <div className='df col map' data-aos="fade-in">
            <span className='map-head'>Find Us On Maps</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.663092238176!2d83.5829432751031!3d25.58287327746468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ff64c1775aa1%3A0xc11f09cad82b9869!2sJai%20Prakash%20Ornament%20House!5e0!3m2!1sen!2sin!4v1706701015578!5m2!1sen!2sin" title='Map' width="350px" height="350px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <Footertail />
    </div>
  )
}
