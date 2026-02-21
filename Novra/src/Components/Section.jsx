import React from "react";
import Button from "./Button";

const Section = (props) => {
  // Use sections from props or defaultProps
  const sections = props.sections || Section.defaultProps.sections;
  return (
    <section className="sections" aria-label="featured design">
      {sections.map((section, index) => (
        <div className={`section section${index + 1}`} key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          {section.buttonText && <Button>{section.buttonText}</Button>}
        </div>
      ))}
    </section>
  );
};

Section.defaultProps = {
  sections: [
    {
      title: "Timeless Elegance",
      description:
        "Discover interiors that blend classic sophistication with modern comfort. Our curated spaces are designed to inspire and elevate your everyday living.",
      buttonText: "Explore Collection",
      background: "img/About1.jpg",
    },
    {
      title: "Inspired Living",
      description:
        "Experience the art of refined design. From bespoke furnishings to thoughtful accents, we create environments that reflect your unique style.",
      buttonText: "View Projects",
      background: "img/About2.jpg",
    },
  ],
};

export default Section;
