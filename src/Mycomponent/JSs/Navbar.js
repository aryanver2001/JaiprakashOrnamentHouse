import React from "react";
import { Link } from "react-router-dom";
import shoplogo from "../Images/Shop-logo.png";
// import usericon from "../Images/user.png"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="top">
        <div className="container-fluid">
          <div className="shop-logo">
            <img src={shoplogo} alt="LOGO" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            className="navbar-toggler-icon"
            <span className="fa fa-bars" style={{color: "#FFD43B",}}></span>
          </button>

          <div className="nav-contents">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="nav-contents">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <img src={usericon} alt="" style={{ height: "30px", width: "30px" }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

        </div>
      </nav>
    </div>
  );
}
