import React from "react";
import img1 from "../Images/Carousel_Images/crousel1.jpg";
import img2 from "../Images/Carousel_Images/crousel2.jpg";
import img3 from "../Images/Carousel_Images/crousel3.jpg";


export default function Hero() {
  return (
    <div>
      <header className="df col hero-cont">
        <span className="hero-head">JAIPRAKASH ORNAMENT HOUSE</span>
      </header>

      {/* ---carousel--- */}
      <div id="carouselExampleAutoplaying" className="carousel slide hero-cont" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="img3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}
