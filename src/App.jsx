import React from "react";
import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import Work from "./Components/Work";
import About from "./Components/About";
import Section from "./Components/Section";
import Herosection from "./Components/hero-section";
import Feedback from "./Components/Feedback";
import Newdesign from "./Components/newdesign";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Herosection />
      <ImageSlider />
      <Work />
      <About />
      <Newdesign />
      <Section />
      <Feedback />
      <Footer />
    </>
  );
};

export default App;
