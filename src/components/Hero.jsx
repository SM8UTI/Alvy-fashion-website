import React from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Fashion <br />& Branding
          </h1>
          <div className="text-desc">
            <p>
              Bringing Your Fashion Brand's Unique Identity to Life Through
              Strategic Marketing and Advertising.
            </p>
            <SecondaryBtn text={"Learn more"} classText="btn-s-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
