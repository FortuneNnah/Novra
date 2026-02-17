import React from "react";
import Header  from "./Header";
import Hero  from "./Hero";
import Work from "./Work";
import ImageSlider from "./ImageSlider"
import About from "./About";
import "../App.css";
import Section from "./Section";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <ImageSlider />
      <Work />
      <About />
      <Section />
    </>
  );
}

export default App;
