import React, { useEffect } from "react";

import { connect } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import "./lawyerGeneral.css";
const LawfrimGeneral = props => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lawfirm-general-main">
      <div className="genral-section-container">
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>INTRODUCTION</p>
            </div>
            <div className="general-intro-body">
              <p>{props.lawyer ? props.lawyer.profileSummary : ""}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>EXPERIENCE</p>
            </div>
            <div className="general-intro-body-edu">
              <div className="general-intro-body-edu-col">
                <div className="genral-colums">
                  <p>Organization</p>
                </div>
                <div className="genral-colums">
                  <p>Position</p>
                </div>
                <div className="genral-colums">
                  <p>Location</p>
                </div>
                <div className="genral-colums">
                  <p>Duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>EDUCATION</p>
            </div>
            <div className="general-intro-body-edu">
              <div className="general-intro-body-edu-col">
                <div className="genral-colums">
                  <p>School</p>
                </div>
                <div className="genral-colums">
                  <p>Degree</p>
                </div>
                <div className="genral-colums">
                  <p>Major</p>
                </div>
                <div className="genral-colums">
                  <p>Graduation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>ASSOCIATIONS</p>
            </div>
            <div className="general-intro-body">
              <p></p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>HONORS & AWARDS</p>
            </div>
            <div className="general-intro-body">
              <p>{props.lawyer ? props.lawyer.profileSummary : ""}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>VERIFIED CERTIFICATION</p>
            </div>
            <div className="general-intro-body">
              <p>{props.lawyer ? props.lawyer.profileSummary : ""}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  lawyer: state.lawyers.singleLawyer,
});

export default connect(mapStateToProps)(LawfrimGeneral);
