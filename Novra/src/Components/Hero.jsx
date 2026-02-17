import React from "react";
import Button from './Button.jsx'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container-hero">
        <h1 className="h1">
          Built for real life,
          <br /> Styled for real homes.
        </h1>
        <p className="para">
          Durable materials, thoughtful details, and designs that fit <br />
          seamlessly into modern living — made to last, made for you.
        </p>
        <a href="#hero">
          <button className="btn1">Shop now</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
