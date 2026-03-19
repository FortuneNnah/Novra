import React from "react";
import Button from "./Button";
import About1 from "../assets/img/About1.jpg";
import About2 from "../assets/img/About2.jpg";
import chair1 from "../assets/img/chair1.jpg";
import chair2 from "../assets/img/chair2.jpg";
import couch3 from "../assets/img/couch3.jpg";
import About4 from "../assets/img/About4.jpg";

const About = () => {
  return (
    <section id="About" className="Section-about">
      <div className="container">
        <div className="image-content">
          <img loading="lazy" src={About2} alt="" />
          <img loading="lazy" src={couch3} alt="" />
          <img loading="lazy" src={chair1} alt="" />
          <img loading="lazy" src={chair2} alt="" />
          <img loading="lazy" src={About4} alt="" />
          <img loading="lazy" src={About1} alt="" />
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
