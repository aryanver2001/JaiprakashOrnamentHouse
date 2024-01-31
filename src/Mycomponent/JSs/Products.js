import React from "react";
import Hero from "./Hero";
import linedesign from "../Images/line-design.png"

export default function Products() {
  return (
    <div>
      <Hero />
      <div className="df col">
        <span className="heads">OUR PRODUCTS</span>
        <span className="contents">Our Prime Products</span>
        <img src={linedesign} alt="" id="line" />
      </div>
    </div>
  );
}
