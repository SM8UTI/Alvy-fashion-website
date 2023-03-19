import React from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";

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
      
      </div>
    </div>
  );
};

export default Contact;
