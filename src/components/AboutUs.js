import React from "react";
import Header from "./IndexShared/Header";
import Footer from "./IndexShared/Footer";
import BottomNav from "./IndexShared/BottomNav";
import aboutUs from "../assets/img/aboutus.jpg";
import "../assets/css/aboutUs.css";
import Slider from "react-slick";
import boy from "../assets/img/boy.jpg";
import girl from "../assets/img/girl.jpg";

function AboutUs(props) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{}}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "25px",
          height: "3px",
          backgroundColor: "lavender",
          opacity: 0.5,
        }}
      ></div>
    ),
  };
  return (
    <>
      <div className="aboutUs ">
        <div className="banner">
          <img
            src={aboutUs}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.6s all ease-in-out",
              objectFit: "cover",
            }}
          />
          <div className="overlay"></div>

          <div className="bannerCall">
            <h2>How we work?</h2>
            <h5>Publishing the boundaries of whats possible</h5>

            <p>
              Whether you want to design or test a prototype, rapidly bring your
              product to life or optimize the performance of your current
              product.
            </p>

            <button className="pink-btn">Learn more</button>
          </div>
        </div>

        <div className="aboutUs-second-section">
          <h3>Reinventing credit score fixing, in an easy and fast manner.</h3>
          <p>
            Scout credit is here to help your bad credit and take you through
            the necessary steps of fixing a bad score. We got the skillset and
            expertise.
          </p>
        </div>
        <div className="aboutUs-third-section-container">
          <div className="aboutUs-third-section">
            <div>
              <i className="fa fa-desktop" />
              <h4>Pay on Success</h4>
              <p>
                lorem ipsum lorem ipsum credit is here to help ipsum lorem ipsum
                lorem credit is here to help{" "}
              </p>
            </div>

            <div>
              <i className="fa fa-area-chart" />
              <h4>FTC-Compliant service</h4>
              <p>
                lorem ipsum lorem credit is here to help lorem ipsum lorem ipsum
                lorem ipsum lorem credit is here to help{" "}
              </p>
            </div>
            <div>
              <i className="fa fa-bar-chart" />
              <h4>Available in 48 states</h4>
              <p>
                lorem ipsum lorem credit is here to help ipsum lorem ipsum lorem
                ipsum lorem ipsum{" "}
              </p>
            </div>

            <div>
              <i className="fa fa-birthday-cake" />
              <h4>FTC-Compliant service</h4>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem credit is here to help credit is here to help{" "}
              </p>
            </div>

            <div>
              <i className="fa fa-bullhorn" />
              <h4>FTC-Compliant service</h4>
              <p>
                lorem ipsum lorem ipsum credit is here to help ipsum lorem ipsum
                lorem credit is here to help{" "}
              </p>
            </div>

            <div>
              <i className="fa fa-calendar" />
              <h4>FTC-Compliant service</h4>
              <p>
                lorem ipsum lorem ipsum credit is here to help ipsum lorem ipsum
                lorem credit is here to help{" "}
              </p>
            </div>
          </div>

          <button className="pink-btn">Explore all of our features</button>
        </div>
        <div className="aboutUs-fourth-section">
          <div className="overlay"></div>
          <h3>Reinventing credit score fixing, in an easy and fast manner.</h3>
          <p>
            Scout credit is here to help your bad credit and take you through
            the necessary steps of fixing a bad score. We got the skillset and
            expertise.
          </p>
          <button className="pink-btn">
            See the product{" "}
            <i className="fa fa-arrow-right ml-1" style={{ fontSize: 12 }} />
          </button>
        </div>

        <div className="aboutUs-second-section">
          <h3>Reinventing credit score fixing, in an easy and fast manner.</h3>
          <p>
            Scout credit is here to help your bad credit and take you through
            the necessary steps of fixing a bad score. We got the skillset and
            expertise.
          </p>
        </div>
        <div className="aboutUs-sixth-section-outer-container">
          <div className="aboutUs-sixth-section-container">
            <div className="aboutUs-sixth-section">
              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-desktop" />
                <h4>Pay on Success</h4>
                <p>
                  lorem ipsum lorem ipsum credit is here to help ipsum lorem
                  ipsum lorem credit is here to help{" "}
                </p>
              </div>

              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-area-chart" />
                <h4>FTC-Compliant service</h4>
                <p>
                  lorem ipsum lorem credit is here to help lorem ipsum lorem
                  ipsum lorem ipsum lorem credit is here to help{" "}
                </p>
              </div>
              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-bar-chart" />
                <h4>Available in 48 states</h4>
                <p>
                  lorem ipsum lorem credit is here to help ipsum lorem ipsum
                  lorem ipsum lorem ipsum{" "}
                </p>
              </div>

              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-birthday-cake" />
                <h4>FTC-Compliant service</h4>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem credit is here to help credit is here to help{" "}
                </p>
              </div>
            </div>
          </div>

          <button className="pink-btn">Explore more</button>
        </div>

        <div className="stories">
          <div className="aboutUs-second-section ">
            <h3>
              Don't take our word for it - Success stories speak for themselves.
            </h3>
            <p>
              Scout credit is here to help your bad credit and take you through
              the necessary steps of fixing a bad score. We got the skillset and
              expertise.
            </p>
          </div>

          <div className="aboutUs-stories">
            <Slider {...settings}>
              <div className="card">
                {/* <i className="fa fa-bar-chart" /> */}

                <img src={girl} />

                <h4>Paul Rudd</h4>
                <p>Amazing Experience </p>
              </div>

              <div className="card">
                {/* <i className="fa fa-birthday-cake" /> */}

                <img src={boy} />
                <h4>Jude Law</h4>
                <p>Great Service </p>
              </div>
              <div className="card">
                {/* <i className="fa fa-bar-chart" /> */}
                <img src={girl} />
                {/* <div className="img-container">
                </div> */}
                <h4>Paul Rudd</h4>
                <p>Amazing Experience </p>
              </div>

              <div className="card">
                {/* <i className="fa fa-birthday-cake" /> */}

                <img src={boy} />

                <h4>Jude Law</h4>
                <p>Great Service </p>
              </div>
            </Slider>
          </div>
          <button className="pink-btn__outlined">View case studies</button>
        </div>
        <div className="aboutUs-second-section">
          <h3>Reinventing credit score fixing, in an easy and fast manner.</h3>
          <p>
            Scout credit is here to help your bad credit and take you through
            the necessary steps of fixing a bad score. We got the skillset and
            expertise.
          </p>
        </div>
        <div className="aboutUs-sixth-section-outer-container">
          <div className="aboutUs-sixth-section-container">
            <div className="aboutUs-sixth-section">
              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-desktop" />
                <h4>Pay on Success</h4>
                <p>
                  lorem ipsum lorem ipsum credit is here to help ipsum lorem
                  ipsum lorem credit is here to help{" "}
                </p>
              </div>

              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-area-chart" />
                <h4>FTC-Compliant service</h4>
                <p>
                  lorem ipsum lorem credit is here to help lorem ipsum lorem
                  ipsum lorem ipsum lorem credit is here to help{" "}
                </p>
              </div>
              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-bar-chart" />
                <h4>Available in 48 states</h4>
                <p>
                  lorem ipsum lorem credit is here to help ipsum lorem ipsum
                  lorem ipsum lorem ipsum{" "}
                </p>
              </div>

              <div className="aboutUs-sixth-section-item">
                <i className="fa fa-birthday-cake" />
                <h4>FTC-Compliant service</h4>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem credit is here to help credit is here to help{" "}
                </p>
              </div>
            </div>
          </div>

          <button className="pink-btn">Explore more</button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
