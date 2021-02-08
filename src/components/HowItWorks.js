import React, { useState } from "react";
import Header from "./IndexShared/Header";
import Footer from "./IndexShared/Footer";
import BottomNav from "./IndexShared/BottomNav";
import "../assets/css/howitworks.css";
import hireChef from "../assets/img/buss5.webp";
import HIWCustomer from "./HowItWorks/HIWCustomer";
import HIWBusiness from "./HowItWorks/HIWBusiness";
import Particles from "react-particles-js";
import { Suspense } from "react";
import {useLocation} from "react-router-dom"

function HowItWorks(props) {
  console.log(props.user);
  const {user}=useLocation();
  console.log(user)
  const [userType, setUserType] = useState(user);
  return (
    <>
      <div className="howitworks">
        <div className="banner">
          <img
            src={hireChef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.6s all ease-in-out",
              objectFit: "scale-down",
            }}
          />

          <div className="bannerCall">
            <h2>How we work?</h2>
            <h5>Publishing the boundaries of whats possible</h5>

            <p>
              Whether you want to design or test a prototype, rapidly bring your
              product to life or optimize the performance of your current
              product.
            </p>

            <button className="pink-btn__outlined">Learn more</button>
          </div>
        </div>

        <div className="howitworks-userTypes">
          <div>
            <button
              onClick={() => setUserType("CUSTOMER")}
              className={`${userType == "CUSTOMER" ? "active" : ""}`}
            >
             Lawyers
            </button>
          </div>
          <div>
            <button
              onClick={() => setUserType("BUSINESS")}
              className={`${userType == "BUSINESS" ? "active" : ""}`}
            >
              Law Firms
            </button>
          </div>
        </div>
        {userType == "CUSTOMER" ? <HIWCustomer /> : <HIWBusiness />}

        <div className="hiw-newsletter">
          <Suspense fallback={<div>Loading...</div>}>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 160,
                    density: {
                      enable: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3,
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    random: true,
                    speed: 1,
                    direction: "top",
                    out_mode: "out",
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 250,
                      duration: 2,
                      size: 0,
                      opacity: 0,
                    },
                    repulse: {
                      distance: 400,
                      duration: 4,
                    },
                  },
                },
              }}
              style={{
                width: "100%",
                // maxHeight: 600,
                height: "100%",
                backgroundColor: "#000",
                position: "absolute",
                zIndex: 1,
              }}
            />
          </Suspense>
          <div className="newsletter-content">
            <h2>Xukini helps satisfies your cravings</h2>
            <p>
              Help a self service analytics culture that supports everyone in
              making data-driven decisions with Avo.
            </p>

            <button className="pink-btn">Get Started</button>
          </div>
          <div className="newsletter-content">
            <h3>Subscribe to our newsletter</h3>
            <div className="newsletter-content2">
              <div className="newsInputCont">
                <input placeholder="Email Address" />
                <button>
                  <i className="fe fe-send" />
                </button>
              </div>
              <img src={require("../assets/img/design.png")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
