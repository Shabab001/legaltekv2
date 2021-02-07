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
  const [userType, setUserType] = useState("CUSTOMER")
  async function openAccordion(e, index) {
    e.preventDefault();
    let accordions = document.querySelectorAll(".accordion");
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove("open");
      console.log(index, i);
      if (index == i) {
        accordions[i].classList.add("open");
      }
    }

    //  e.target.parentElement.classList.add("open");
  }

  function closeAccordion(e, i) {
    let accordions = document.querySelectorAll(".accordion");
    accordions[i].classList.remove("open");
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
            <button onClick={()=>setUserType("GENERAL")} className={`${userType=='GENERAL'? 'active' : ""}`}>General</button>
          </div>
          <div>
            <button onClick={()=>setUserType("CUSTOMER")} className={`${userType=='CUSTOMER'? 'active' : ""}`}>Customer</button>
          </div>
          <div>
            <button onClick={()=>setUserType("BUSINESS")} className={`${userType=='BUSINESS'? 'active' : ""}`}>Business</button>
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
          <div className="accordion">
            <div className="acc-cover" onClick={(e) => openAccordion(e, 0)}>
              <div>
                <p>Where can i find more information on Xukini?</p>
                <i className="fa fa-caret-down" />
              </div>
            </div>

            <div className="acc-panel">
              <div className="close-acc">
                <i
                  className="fa fa-close"
                  onClick={(e) => closeAccordion(e, 0)}
                />
              </div>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="acc-cover" onClick={(e) => openAccordion(e, 1)}>
              <div>
                <p>Where can i find more information on Xukini?</p>
                <i className="fa fa-caret-down" />
              </div>
            </div>

            <div className="acc-panel">
              <div className="close-acc">
                <i
                  className="fa fa-close"
                  onClick={(e) => closeAccordion(e, 1)}
                />
              </div>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
            </div>
          </div>

          <div className="accordion">
            <div className="acc-cover" onClick={(e) => openAccordion(e, 2)}>
              <div>
                <p>Where can i find more information on Xukini?</p>
                <i className="fa fa-caret-down" />
              </div>
            </div>

            <div className="acc-panel">
              <div className="close-acc">
                <i
                  className="fa fa-close"
                  onClick={(e) => closeAccordion(e, 2)}
                />
              </div>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
            </div>
          </div>



          <div className="accordion">
            <div className="acc-cover" onClick={(e) => openAccordion(e, 3)}>
              <div>
                <p>Where can i find more information on Xukini?</p>
                <i className="fa fa-caret-down" />
              </div>
            </div>

            <div className="acc-panel">
              <div className="close-acc">
                <i
                  className="fa fa-close"
                  onClick={(e) => closeAccordion(e, 3)}
                />
              </div>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </p>
            </div>
          </div>


        </div>
      </div>

    
    </>
  );
}

export default Faqs;
