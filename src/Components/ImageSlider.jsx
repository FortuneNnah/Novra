import React from "react";
import couch3 from "../assets/img/couch3.jpg";
import decor from '../assets/img/Decor.jpg';
import couch2 from '../assets/img/couch2.jpg';
import bathroom from '../assets/img/Bathroom.jpg';
import curtains from '../assets/img/curtains.jpg';

const ImageSlider = () => {
  return (
    <section className="ImageSlider-section">
      <div className="Image-container">
        {[
          couch3,
          decor,
          couch2, bathroom,
          curtains,
          couch2,
          decor,
          couch3,
          bathroom,
          curtains,
          couch3,
          decor,
          couch2,
        ].map((src, idx) => (
          <img key={idx} src={src} alt="" />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
