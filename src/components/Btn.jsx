import React from "react";
import CircleIcon from "./CircleIcon";

const SecondaryBtn = ({ text, classText }) => {
  return (
    <button className={`btn-s ${classText}`}>
      {text}
      <CircleIcon />
    </button>
  );
};

const PrimaryBtn = ({ text }) => {
  return <button className="btn-p">{text}</button>;
};

export { PrimaryBtn, SecondaryBtn };
