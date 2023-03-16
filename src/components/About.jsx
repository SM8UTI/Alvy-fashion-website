import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="about image"
          />
        </div>
        <div className="text">
          <span>ABout</span>
          <div className="text-details">
            <h1>BRINGING FASHION BRANDS TO LIFE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros
              in cursus turpis massa. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, dicta? Labore aspernatur harum
              cupiditate! Facilis quae nesciunt cum vel, laborum mollitia
              nostrum at amet ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
