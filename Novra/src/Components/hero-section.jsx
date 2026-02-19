import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Nevora</h2>
      </div>

      <div className="navbar">
        <ul className="navlinks">
          <li>
            <a className="active" href="#hero-section">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="cta">
        <button>Let's Talk</button>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container-hero">
        <h1 className="h1">
          Built for real life,
          <br /> Styled for real homes.
        </h1>
        <p className="para">
          Durable materials, thoughtful details, and designs that fit <br />
          seamlessly into modern living — made to last, made for you.
        </p>
        <a href="#hero-section">
          <button className="btn1">Shop now</button>
        </a>
      </div>
    </section>
  );
};

const Herosection = () => {
  return (
    <div id="hero-section">
      <Header />
      <Hero />
    </div>
  );
};

export default Herosection;
