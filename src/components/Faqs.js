import React from "react";
import { useEffect, useState } from "react";
import BottomNav from "./IndexShared/BottomNav";
import Footer from "./IndexShared/Footer";
import Header from "./IndexShared/Header";
import faqs from "../assets/img/faqs.webp";
import "../assets/css/privacy.css";
import "../assets/css/faqs.css";
import InstructionsIcon from "../assets/img/svgs/InstructionsIcon";
import FAQIcon from "../assets/img/svgs/FAQIcon";
import CommunityIcon from "../assets/img/svgs/CommunityIcon";

function Faqs(props) {
  useEffect(() => {
    document.title = "FAQs";
  }, []);
  const [userType, setUserType] = useState("CUSTOMER");

  function toggleAccordion(e, i) {
    let accordions = document.querySelectorAll(".accordion-item");
    if (accordions[i].classList.contains("open")) {
      accordions[i].classList.remove("open");
    } else {
      for (let index = 0; index < accordions.length; index++) {
        accordions[index].classList.remove("open");
      }
      setTimeout(() => {
        accordions[i].classList.add("open");
      }, [100]);
    }
  }

  return (
    <>
      <div className="faqs">
        <div className="banner" style={{ background: `url(${faqs})` }}>
          <div className="bannerInfo">
            <div className="hero-title">
              <h1>Frequently Asked Questions</h1>
              <p style={{ width: 400, maxWidth: "100%" }}>
                Learn more about how Xukini Collects and uses your data and your
                rights as a Xukini user.
              </p>
            </div>
          </div>
        </div>

        <div className="faqs-userTypes">
          <div>
            <button
              onClick={() => setUserType("GENERAL")}
              className={`${userType == "GENERAL" ? "active" : ""}`}
            >
              General
            </button>
          </div>
          <div>
            <button
              onClick={() => setUserType("CUSTOMER")}
              className={`${userType == "CUSTOMER" ? "active" : ""}`}
            >
              Customer
            </button>
          </div>
          <div>
            <button
              onClick={() => setUserType("BUSINESS")}
              className={`${userType == "BUSINESS" ? "active" : ""}`}
            >
              Business
            </button>
          </div>
        </div>

        <div className="faq-first-section-outer-container">
          <div className="faq-first-section-container">
            <div className="faq-first-section">
              <div className="faq-first-section-item">
                {/* <i className="fa fa-desktop" /> */}
                <div className="svg-container">
                  <InstructionsIcon />
                </div>
                <h4 style={{ textAlign: "center" }}>Guides</h4>
                <p style={{ textAlign: "center" }}>
                  lorem ipsum lorem ipsum credit is here to help ipsum{" "}
                </p>
              </div>

              <div className="faq-first-section-item">
                {/* <i className="fa fa-area-chart" /> */}
                <div className="svg-container">
                  <FAQIcon />
                </div>
                <h4>FAQ</h4>
                <p>lorem ipsum lorem credit is here to help lorem ipsum </p>
              </div>
              <div className="faq-first-section-item">
                {/* <i className="fa fa-bar-chart" /> */}
                <div className="svg-container">
                  <CommunityIcon />
                </div>
                <h4>Community</h4>
                <p>lorem ipsum lorem credit is here to help ipsum lorem </p>
              </div>

              <div className="faq-first-section-item">
                {/* <i className="fa fa-desktop" /> */}
                <div className="svg-container">
                  <InstructionsIcon />
                </div>
                <h4 style={{ textAlign: "center" }}>Guides</h4>
                <p style={{ textAlign: "center" }}>
                  lorem ipsum lorem ipsum credit is here to help ipsum lorem{" "}
                </p>
              </div>

              <div className="faq-first-section-item">
                {/* <i className="fa fa-area-chart" /> */}
                <div className="svg-container">
                  <FAQIcon />
                </div>
                <h4>FAQ</h4>
                <p>lorem ipsum lorem credit is here to help lorem ipsum </p>
              </div>
              <div className="faq-first-section-item">
                {/* <i className="fa fa-bar-chart" /> */}
                <div className="svg-container">
                  <CommunityIcon />
                </div>
                <h4>Community</h4>
                <p>lorem ipsum lorem credit is here to help ipsum lorem </p>
              </div>
            </div>
          </div>

          <button className="pink-btn">Explore more</button>
        </div>

        <div className="faq-second-container">
          <div
            className="accordion-item"
            onClick={(e) => toggleAccordion(e, 0)}
          >
            <a className="accordion-link">
              Where can i find more information on Xukini?
              <i className="fa fa-minus"></i>
              <i className="fa fa-plus"></i>
            </a>
            <div className="answer">
              <p>
                Veniam cillum do quis laboris duis nostrud adipisicing occaecat
                adipisicing occaecat ipsum consequat elit sit. ipsum consequat
                consequat elit sit. ipsum consequat elit sit. Do elit quis eu
                sit nisi veniam ex sit.
              </p>
            </div>
          </div>

          <div
            className="accordion-item"
            onClick={(e) => toggleAccordion(e, 1)}
          >
            <a className="accordion-link">
              Where can i find more information on Xukini?
              <i className="fa fa-minus"></i>
              <i className="fa fa-plus"></i>
            </a>
            <div className="answer">
              <p>
                Veniam cillum do quis laboris duis nostrud adipisicing occaecat
                adipisicing occaecat ipsum consequat elit sit. ipsum consequat
                consequat elit sit. ipsum consequat elit sit. Do elit quis eu
                sit nisi veniam ex sit.
              </p>
            </div>
          </div>

          <div
            className="accordion-item"
            onClick={(e) => toggleAccordion(e, 2)}
          >
            <a className="accordion-link">
              Where can i find more information on Xukini?
              <i className="fa fa-minus"></i>
              <i className="fa fa-plus"></i>
            </a>
            <div className="answer">
              <p>
                Veniam cillum do quis laboris duis nostrud adipisicing occaecat
                adipisicing occaecat ipsum consequat elit sit. ipsum consequat
                consequat elit sit. ipsum consequat elit sit. Do elit quis eu
                sit nisi veniam ex sit.
              </p>
            </div>
          </div>

          <div
            className="accordion-item"
            onClick={(e) => toggleAccordion(e, 3)}
          >
            <a className="accordion-link">
              Where can i find more information on Xukini?
              <i className="fa fa-minus"></i>
              <i className="fa fa-plus"></i>
            </a>
            <div className="answer">
              <p>
                Veniam cillum do quis laboris duis nostrud adipisicing occaecat
                adipisicing occaecat ipsum consequat elit sit. ipsum consequat
                consequat elit sit. ipsum consequat elit sit. Do elit quis eu
                sit nisi veniam ex sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
