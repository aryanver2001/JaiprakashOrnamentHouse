import React from "react";
import Hero from "./Hero";
import Footertail from "./Footertail";
import linedesign from "../Images/line-design.png";
import earring from "../Images/ProductsImages/earring.jpg";
import ring from "../Images/ProductsImages/ring.jpg";
import pendant from "../Images/ProductsImages/pendant.jpg";
import nosering from "../Images/ProductsImages/nosering.jpg";
import mangalsutra from "../Images/ProductsImages/mangalsutra.jpeg";
import chain from "../Images/ProductsImages/chain.jpg";
import coin from "../Images/ProductsImages/coin.jpg";
import bangle from "../Images/ProductsImages/bangle.jpg";
import necklace from "../Images/ProductsImages/necklace.jpg";
import payal from "../Images/ProductsImages/payal.jpeg";
import toering from "../Images/ProductsImages/toering.jpg";
import scoin from "../Images/ProductsImages/scoin.png";
import riyadiamond from "../Images/BrandImages/riyadiamond.jpeg";
import yug from "../Images/BrandImages/yug.jpg";
import emerald from "../Images/BrandImages/emerald.png";
import tgc from "../Images/BrandImages/tgc.jpg";
import rohtak from "../Images/BrandImages/rohtak.jpg";
import amanpayal from "../Images/BrandImages/amanpayal.png";
import bis from "../Images/BrandImages/bis.png";
import banner1 from "../Images/Banners/banner1.jpg";
import banner2 from "../Images/Banners/banner2.jpg";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* ---home_contents--- */}
      <div className="df col" data-aos="zoom-in">
        <span className="heads">PURE | HONEST | ELOQUENT</span>
        <span className="contents">Jewellery as beautiful as You</span>
        <img src={linedesign} alt="" id="line" />
        <span className="heads">Shop By Category</span>
        <span className="contents">Browse through your favorite categories. We've got them all!</span>
        <img src={linedesign} alt="" id="line" />
      </div>

      {/* ---PRODUCTS_CARDS--- */}
      <div className="df row card-m" id="products" data-aos="fade-in">
        <div className="brand-card card">
          <img src={earring} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Earrings</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={ring} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Finger Rings</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={pendant} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Pendants</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={nosering} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Nose Pins</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={mangalsutra} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Mangalsutras</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={chain} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Chains</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={coin} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Gold Coins</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={bangle} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Bangles</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={necklace} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Neckwears</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={payal} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Payals</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={toering} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Toe Rings</span>

          </div>
        </div>
        <div className="brand-card card">
          <img src={scoin} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Silver Coins</span>

          </div>
        </div>
      </div>

      <div className="df col" data-aos="zoom-in">
        <span className="contents">Whatever the occasion, we've got a beautiful piece of jewellery for you.</span>
        <img src={linedesign} alt="" id="line" />
        <span className="heads">Collaboration Pratners</span>
        <span className="contents">Prestigious Brands</span>
        <img src={linedesign} alt="" id="line" />
      </div>

      {/* ---BRAND_CARDS--- */}
      <div className="df row card-m" data-aos="fade-in">
        <div className="brand-card card nohover">
          <img src={riyadiamond} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Riya Diamonds</span>
          </div>
        </div>
        <div className="brand-card card nohover">
          <img src={yug} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">YUG</span>
          </div>
        </div>
        <div className="brand-card card nohover">
          <img src={emerald} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">EMERALD</span>
          </div>
        </div>
        <div className="brand-card card nohover">
          <img src={tgc} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">TGC</span>
          </div>
        </div>
        <div className="brand-card card nohover">
          <img src={rohtak} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Rohtak Chains</span>
          </div>
        </div>
        <div className="brand-card card nohover">
          <img src={amanpayal} className="card-img-top" alt="..." />
          <div className="card-body df col">
            <span className="card-title">Aman Payals</span>
          </div>
        </div>
      </div>

      <div className="df col" data-aos="zoom-in">
        <span className="contents">Partnered with diverse brands to deliver premier, curated jewelry collections for you.</span>
        <img src={linedesign} alt="" id="line" />
      </div>

      {/* ---BIS_Section--- */}
      <div className="df col" data-aos="zoom-in">
        <div className="df row bis-card nohover bis-resp">
          <div className="bis-logo">
            <img src={bis} alt="..." />
          </div>
          <div className="bis-cont">
            <span className="heads">BIS Hallmark Approved</span>
            <span className="contents">Exquisite jewelry of various styles, crafted in purity ranging from 18k to 22k, meticulously endorsed with BIS Hallmark approval. Customizable designs await your dreamful desires.</span>
          </div>
        </div>
        <img src={linedesign} alt="" id="line" />
      </div>

      {/* ---banners--- */}
      <div className="df col" data-aos="fade-out">
        <img src={banner1} className="banner" alt="BANNER1" />
        <img src={linedesign} alt="" id="line" />
        <img src={banner2} className="banner" alt="BANNER2" />
        <img src={linedesign} alt="" id="line" />
      </div>

      <Footertail />

    </div>
  );
}
