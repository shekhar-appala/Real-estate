import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Banner from "./Home/Banner";
import About from "./Home/About";
import FeaturedProject from "./Home/FeaturedProject";
import Whychose from "./Home/Whychose";
import Testimonials from "./Home/Testimonials";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <About />
      <Whychose />
      <FeaturedProject />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
