import React from "react";
import couch3 from "../../img/couch3.jpg";

const Newdesign = () => {
  return (
    <div className="new-design-section">
      <div className="image-text">
        <h1>
          Crafted For The Contemporary Family
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          dolore, alias laborum veniam eaque nisi aliquam. Placeat dolores,
          nesciunt, corrupti provident cumque ad consequuntur corporis omnis,
          minima distinctio minus odit?
        </p>
      </div>
      <div className="img-container">
        <img src={couch3} alt="modern couch" />
      </div>
    </div>
  );
};

export default Newdesign;
