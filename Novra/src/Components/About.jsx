import React from "react";
import Button from './Button';

const About = () => {
  return (
    <section className="Section-about">
      <div className="container">
        <div className="image-content">
          <img src="img/About1.jpg" alt="" />
          <img src="img/About2.jpg" alt="" />
          <img src="img/About3.jpg" alt="" />
          <img src="img/chair1.jpg" alt="" />
          <img src="img/Masonry1.jpg" alt="" />
          <img src="img/chair2.jpg" alt="" />
        </div>
        <div className="h1text">
          <h1>we provide you the best experience </h1>
          <p>
            At Revo, we redefine modern living through refined craftsmanship and
            timeless design. Each piece is meticulously curated to embody
            elegance, comfort, and enduring quality. From sculpted sofas to
            statement lighting and curated décor, our collections are designed
            to transform ordinary spaces into sophisticated sanctuaries.
            Experience furniture that doesn’t just fill a room — it defines it.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};


export default About;
