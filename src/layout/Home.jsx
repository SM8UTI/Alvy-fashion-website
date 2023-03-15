import React from "react";
import CircleIcon from "../components/CircleIcon";
import CompanyLogos from "../components/CompanyLogos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <CompanyLogos />
    </div>
  );
};

export default Home;
