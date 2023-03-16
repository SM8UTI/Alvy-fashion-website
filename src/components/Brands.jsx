import React from "react";
import { SecondaryBtn } from "./Btn";
import "./Brands.scss";

const data = [
  {
    text: "fashion",
    tag: "branding",
    img: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    text: "Noise",
    tag: "branding",
    img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    text: "Lawyers",
    tag: "identity",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    text: "flowers",
    tag: "identity",
    img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="main-text">
        <h2>Selected brands</h2>
        <SecondaryBtn text={"see all"} classText="btn-s-45" />
      </div>
      <div className="container">
        {data.map((elem, index) => (
          <div
            className="item"
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.714)),url(${elem.img})`,
            }}
          >
            <div className="lower-text">
              <h1>{elem.text}</h1>
              <div className="lower-text-btns">
                <SecondaryBtn text="Discover project" classText={"btn-s-45"} />
                <span className="brandTag">{elem.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
