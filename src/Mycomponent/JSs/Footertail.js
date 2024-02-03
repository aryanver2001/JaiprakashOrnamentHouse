import React from 'react';
import { Link } from "react-router-dom";
import shoplogo from "../Images/Shop-logo.png";

export default function footer() {
    return (
        <div className="footer">
            <div className="row1">
                <div className="df col about colw">
                    <img src={shoplogo} alt="LOGO" />
                    <span className='footer-about-cont'>JAIPRAKASH ORNAMENT HOUSE stands as a premier authority in the realm of jewellery, boasting an illustrious track record of delivering superior products and unrivaled customer service.</span>
                </div>
                <div className="cont-col colw  phn-hide">
                    <span className='fhead'>Quick Links</span>
                    <div className='resp-d'>
                        <Link className="conts" aria-current="page" to="/">Home</Link>
                        <Link className="conts" to="/about">About Us</Link>
                        <Link className="conts" to="/products">Products</Link>
                        <Link className="conts" to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="cont-col colw">
                    <span className='fhead'>Contact Us</span>
                    <div className='resp-d'>
                        <Link to="https://maps.app.goo.gl/RUb3mzS2PetjDEhX8" className='fa fa-map-marker' target='blank'>
                            <span className='email conts add'>Jaiprakash Ornament House, Gandhipath, Ghazipur, Uttar Pradesh, 233001</span>
                        </Link>
                        <Link to="mailto:aryanver6@gmail.com" className="fa fa-envelope">
                            <span className='email conts'>aryanver6@gmail.com</span>
                        </Link>
                        <Link to="tel:+919919205737" className="fa fa-phone">
                            <span className='email conts'>+91-9919205737</span>
                        </Link>
                    </div>
                </div>
                <div className="cont-col colw">
                    <span className='fhead'>Follow Us On</span>
                    <div className='df'>
                        <Link to="https://www.facebook.com/jaiprakashornamenthouse" target='blank' className="fa fa-facebook follow"></Link>
                        <Link to="https://www.instagram.com/jaiprakashornament1965/" target='blank' className="fa fa-instagram follow"></Link>
                    </div>
                </div>
            </div>
            <div className="df row2">
                <span>Copyright &#169; 2023 JaiPrakash Ornament House. All Rights Reserved</span>
            </div>

        </div>

    )
}
