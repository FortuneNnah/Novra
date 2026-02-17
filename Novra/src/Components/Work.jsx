import React from "react";

const Work = () => {
  return (
    <section className="Section-work">
      <div className="container">
        <p className="hiddentxt">
          High Quality
        </p>
        <h1 className="heading">Our Trending Product</h1>
        <p className="text">
          From thoughtfully sourced materials to carefully crafted finishes, our
          furniture blends timeless design with everyday practicality. Whether
          you’re furnishing a cozy apartment or a spacious home, our collections
          are made to adapt to your lifestyle and elevate your environment.
        </p>
        <a href="#hero">
          <button className="product-cta">View All {">"} </button>
        </a>
      </div>
      <div className="chairs">
        <div className="chair">
          <img src="img/chair1.jpg" alt="chair1" />
          <h2 className="h2">Minimal LCW Chair</h2>
          <p className="desc">Timeless designs built to bring comfort and style into your home.</p>
          <p className="price">$120.00</p>
        </div>
        <div className="chair">
          <img src="img\chair2.jpg" alt="chair2" />
          <h2 className="h2">Minimal LCW Chair</h2>
          <p className="desc">Modern furniture made with quality materials to elevate your space</p>
          <p className="price">$120.00</p>
        </div>
        <div className="chair">
          <img src="img\chair3.jpg" alt="chair3" />
          <h2 className="h2">Wooden Padded Chair</h2>
          <p className="desc">Furniture designed to fit your lifestyle and last beyond trends.</p>
          <p className="price">$120.00</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
