import React from "react";
import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import Work from "./Components/Work";
import About from "./Components/About";
import Section from "./Components/Section";
import Herosection from "./Components/hero-section";
import Feedback from "./Components/Feedback";
import newdesign from "./Components/newdesign";
const App = () => {
  return (
    <>
      <Herosection />
      <ImageSlider />
      <Work />
      <About />
      <Section />
      <Feedback />
      <newdesign />
    </>
  );
};

export default App;
