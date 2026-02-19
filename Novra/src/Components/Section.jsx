import React from "react";
import Button from "./Button";

const Section = (props) => {
  const sections = props.section || Section.defaultProps.sections;
  return (
    <section className="sections" aria-label="featured design">
      {sections.map((Section, index) => (
        <div className={`section section${index + 1}`} key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </section>
  );
};

Section.defaultProps.section = {
  section: [
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
