import React, { useEffect } from "react";
import "./Subscribe.css";
import Leftimage from "./images/Subscribeleft.webp";
import Rightimage from "./images/Subcriberight.webp";
import Aos from "aos";

const Subscribe = props => {
  console.log(props.type);
  Aos.init({ duration: 1500 });

  return (
    <div className="start-section ">
      <div
        className={
          props.type && props.type === "blog"
            ? "subscribe-box-blog"
            : "subscribe-box"
        }
      >
        <div className="subscribe-left-section">
          <div className="Subscribe-image-sec">
            <img src={Leftimage} className="left-image" alt="left" />
            <img src={Rightimage} className="left-image" alt="right" />
          </div>
          <p> We promise not to send you spam and never publish your email</p>
        </div>
        <div className="subscribe-right-section">
          <div data-aos="fade-down" className="right-first-text">
            <p>{props.type == "blog" ? "SUBSCRIBE BLOGS" : "GET INSIDE"}</p>
          </div>
          <div data-aos="fade-down" className="right-second-text">
            <p>
              {props.type == "blog"
                ? "Subscribe and get the latest blogs delivered right to your notification"
                : "   Subscribe and get the latest insides delivered right to your box"}
            </p>
          </div>
          <form className="subscribe-form">
            <div className="subscribw-form-grid">
              <input
                data-aos="fade-right"
                type="text"
                className="subscribe-form-input"
                placeholder="Enter your name"
                name="name"
              />
              <input
                data-aos="fade-right"
                type="text"
                className="subscribe-form-input"
                placeholder="Enter your email"
                name="name"
              />
            </div>
            <button
              data-aos="fade-left"
              type="submit"
              className="subscribe-button"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
