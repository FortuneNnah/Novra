import React from "react";

const ImageSlider = () => {
  return (
    <section className="ImageSlider-section">
      <div className="Image-container">
        <img src="img/couch.jpg" alt="" />
        <img src="img/Decor.jpg" alt="" />
        <img src="img/couch2.jpg" alt="" />
        <img src="img/Bathroom.jpg" alt="" />
        <img src="img/curtains.jpg" alt="" />

        {/* Duplicate */}
        <img src="img/couch.jpg" alt="" />
        <img src="img/Decor.jpg" alt="" />
        <img src="img/couch3.jpg" alt="" />
        <img src="img/Bathroom.jpg" alt="" />
        <img src="img/curtains.jpg" alt="" />

        <img src="img/couch.jpg" alt="" />
        <img src="img/Decor.jpg" alt="" />
        <img src="img/couch2.jpg" alt="" />

      </div>
    </section>
  );
};

export default ImageSlider;
