import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Workshops from "./components/workshops/Workshops";
import HowToHelp from "./components/howToHelp/HowToHelp";
import Testimonials from "./components/testimonials/Testimonials";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Workshops/>
      <HowToHelp/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
