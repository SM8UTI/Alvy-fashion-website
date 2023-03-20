import React from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineInstagram, AiOutlineBehance } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SecondaryBtn } from "./Btn";

const socialData = [
  {
    icon: function () {
      return <AiOutlineInstagram />;
    },
    text: "instagram",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <CiTwitter />;
    },
    text: "Twitter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <FiFacebook />;
    },
    text: "Facebook",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <AiOutlineBehance />;
    },
    text: "Behance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

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

      <div className="container-3">
        {socialData.map((elem, index) => (
          <div className="item" key={index}>
            <div className="upper">
              {elem.icon()}
              <SecondaryBtn classText={"btn-s-45"} text={""} />
            </div>
            <div className="lower">
              <h3>{elem.text}</h3>
              <p>{elem.desc.split(0, 180)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
