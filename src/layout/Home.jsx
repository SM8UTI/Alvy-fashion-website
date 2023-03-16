import React from "react";
import CircleIcon from "../components/CircleIcon";
import CompanyLogos from "../components/CompanyLogos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <CompanyLogos />
      <About />
      <Brands />
    </div>
  );
};

export default Home;
