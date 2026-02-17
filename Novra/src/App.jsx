import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ImageSlider from "./Components/ImageSlider";
import Work from "./Components/Work";
import About from "./Components/About";
import Section from "./Components/Section";

const App = () => {
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
};

export default App;
