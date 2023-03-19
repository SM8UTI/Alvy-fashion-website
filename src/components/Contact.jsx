import React from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container-1">
        <span>Contact</span>
        <div className="text">
          <h1>Let's make your fashion brand shine</h1>
          <button className="btn-s">
            Get in touch
            <CircleIcon />
          </button>
        </div>
      </div>

      <div className="container-2">
        <Marquee pauseOnHover gradient={false}>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
        </Marquee>
      </div>
      
    </div>
  );
};

export default Contact;
