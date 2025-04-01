import React from "react";
import Hero from "./Hero";
import Footertail from "./Footertail";
import linedesign from "../Images/line-design.png"
import Ear1 from "../Images/Earrings/Ear1.jpeg";
import Ear2 from "../Images/Earrings/Ear2.png";
import Ear3 from "../Images/Earrings/Ear3.jpeg";
import Ear4 from "../Images/Earrings/Ear4.jpeg";
import ring1 from "../Images/Rings/ring1.png"
import ring2 from "../Images/Rings/ring2.png"
import ring3 from "../Images/Rings/ring3.jpeg"
import ring4 from "../Images/Rings/ring4.jpeg"
import pendent1 from "../Images/Pendents/pendent1.png";
import pendent2 from "../Images/Pendents/pendent2.jpeg";
import pendent3 from "../Images/Pendents/pendent3.png";
import pendent4 from "../Images/Pendents/pendent4.png";
import bangle1 from "../Images/Bangles/bangle1.jpeg"
import bangle2 from "../Images/Bangles/bangle2.jpeg"
import bangle3 from "../Images/Bangles/bangle3.png"
import bangle4 from "../Images/Bangles/bangle4.jpeg"
import necklace1 from "../Images/Necklace/necklace1.png"
import necklace2 from "../Images/Necklace/necklace2.png"
import necklace3 from "../Images/Necklace/necklace3.jpeg"
import necklace4 from "../Images/Necklace/necklace4.png"
import payal1 from "../Images/Payals/payal1.png"
import payal2 from "../Images/Payals/payal2.png"
import payal3 from "../Images/Payals/payal3.png"
import payal4 from "../Images/Payals/payal4.jpg"



export default function Products() {
  return (
    <div className="product-bg">
      <Hero />
      <div className="df col">
        <span className="heads">OUR PRODUCTS</span>
        <span className="product-contents contents">Our Prime Products</span>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">EARRINGS</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={Ear1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={Ear2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={Ear3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={Ear4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">FINGER RINGS</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={ring1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={ring2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={ring3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={ring4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">PENDENTS</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={pendent1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={pendent2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={pendent3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={pendent4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">BANGLES</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={bangle1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={bangle2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={bangle3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={bangle4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">NECKLACE</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={necklace1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={necklace2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={necklace3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={necklace4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="heads">SILVER PAYALS</span>
        <div className="df row card-m">
          <div className="card nohover product-card">
            <img src={payal1} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={payal2} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={payal3} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
          <div className="card nohover product-card">
            <img src={payal4} className="card-img-top" alt="..." />
            <div className="card-body df col">
            </div>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      <div className="df col">
        <span className="product-contents contents">For more Products and Services visit us or contact us </span>
        <br />
      </div>

      <Footertail />
    </div>
  );
}
