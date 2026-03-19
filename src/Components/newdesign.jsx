import React from "react";
import couch3 from "../assets/img/couch3.jpg";
import Button from "./Button";

const Newdesign = () => {
  return (
    <div className="new-design-section">
      <div className="image-text">
        <h1>Designed For Modern Living</h1>
        <p>
          Great spaces don’t happen by accident — they’re thoughtfully built.
          Our furniture blends clean architecture, balanced proportions, and
          refined materials to complement the rhythm of contemporary life.
          Whether you’re working, hosting, or unwinding, every piece is designed
          to support how you truly live.
        </p>
        <Button />
      </div>
      <div className="img-container">
        <img src={couch3} alt="modern couch" />
      </div>
    </div>
  );
};

export default Newdesign;
