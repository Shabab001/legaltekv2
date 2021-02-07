import React, { useState, useEffect } from "react";
import "../assets/css/helpCenter.css";
import Footer from "./IndexShared/Footer";
import Header from "./IndexShared/Header";
import helpcenter from "../assets/img/helpcenter.webp";

function HelpCenter(props) {
  return (
    <>

      <div className="helpCenter">
        <div className="banner" style={{ background: `url(${helpcenter})` }}>
          <div className="bannerInfo">
            <div className="hero-title">
              <h1>Help Center</h1>
              <p>
                Learn more about how Xukini collects and uses data and your
                rights as a Xukini user.
              </p>
            </div>
          </div>
        </div>
        <div className="helpCenter-body">
          <h1>Popular Articles</h1>

          <div className="card-row">
            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>
            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>
            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>
                  Extenuating Circumstances Policy and the coronavirus
                  (COVID-19)
                </h3>
                <p>
                  On March 11, the world health Organization(WHO) declared the
                  bla bla bla
                </p>

                <a>
                  Read more <i className="fe fe-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="divider"></div>

          <div className="third-section">
            <h1>Xukini basics</h1>
            <p>Browse topics for users and business users.</p>
            <div className="topics-row">
              <div>
              <div className="topics-col">
                <span>
                  <i class="fa fa-info-circle"></i>
                </span>
                <h3>About Xukini</h3>
                <a>Getting Started</a>
                <a>How Xukini works</a>
                <a>Messaging</a>
                <a>Community Standards</a>
                <a>Partnerships</a>
              </div>
              </div>
              
              <div>
              <div className="topics-col">
                <span>
                  <i class="fa fa-user"></i>
                </span>
                <h3>Your Account</h3>
                <a>Getting Started</a>
                <a>How Xukini works</a>
                <a>Messaging</a>
                <a>Community Standards</a>
                <a>Partnerships</a>
              </div>
              </div>
        
              <div>
              <div className="topics-col">
                <span>
                  <i class="fa fa-medkit"></i>
                </span>
                <h3>Safety and Accessibility</h3>
                <a>Safety concerns</a>
                <a>How Xukini works</a>
                <a>Messaging</a>
                <a>Community Standards</a>
                <a>Partnerships</a>
              </div>
              </div>
           
              <div>
              <div className="topics-col">
                <span>
                  <i class="fa fa-book"></i>
                </span>
                <h3>Terms and Policies</h3>
                <a>Terms of services</a>
                <a>How Xukini works</a>
                <a>Messaging</a>
                <a>Community Standards</a>
                <a>Partnerships</a>
                <a style={{ textDecoration: "underline" }}>Show all</a>
              </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
