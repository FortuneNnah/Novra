import React from "react";
// import the image from the project root so that Vite can bundle it correctly
import couch3 from "../../img/couch3.jpg";

const Newdesign = () => {
  return (
    <div className="new-design-section">
      <div className="image-text">
        <h3>
          Crafted for the contemporary family—our designers thoughtfully
          considered every detail.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          dolore, alias laborum veniam eaque nisi aliquam. Placeat dolores,
          nesciunt, corrupti provident cumque ad consequuntur corporis omnis,
          minima distinctio minus odit?
        </p>
      </div>
      <div className="img-container">
        {/* use the imported image */}
        <img src={couch3} alt="modern couch" />
      </div>
    </div>
  );
};

export default Newdesign;
