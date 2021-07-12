import React, { useEffect } from "react";

import { connect } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import "./lawyerGeneral.css";
import moment from "moment";
const LawfrimGeneral = props => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const dateFormat = "YYYY/MM/DD";
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
            {props.lawyer &&
              props.lawyer.experience.length !== 0 &&
              props.lawyer.experience.map((item, index) => (
                <div className="general-intro-body-edu">
                  <div className="general-intro-body-edu-col2" key={index}>
                    <div className="genral-colums">
                      <p>{item.organization}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.position}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.location}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
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
            {props.lawyer &&
              props.lawyer.education.length !== 0 &&
              props.lawyer.education.map((item, index) => (
                <div className="general-intro-body-edu">
                  <div className="general-intro-body-edu-col2" key={index}>
                    <div className="genral-colums">
                      <p>{item.school}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.degree}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.major}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.graduation}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>ADMISSIONS</p>
            </div>
            <div className="general-intro-body-edu">
              <div className="general-intro-body-edu-col">
                <div className="genral-colums">
                  <p>State / Province / Court</p>
                </div>
                <div className="genral-colums">
                  <p>Date</p>
                </div>
              </div>
            </div>
            {props.lawyer &&
              props.lawyer.admission.length !== 0 &&
              props.lawyer.admission.map((item, index) => (
                <div className="general-intro-body-edu">
                  <div className="general-intro-body-edu-col2" key={index}>
                    <div className="genral-colums">
                      <p>{item.state}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>ASSOCIATIONS</p>
            </div>
            <div className="general-intro-body-edu">
              <div className="general-intro-body-edu-col">
                <div className="genral-colums">
                  <p>Organization</p>
                </div>
                <div className="genral-colums">
                  <p>Status</p>
                </div>
                <div className="genral-colums">
                  <p>Date</p>
                </div>
              </div>
            </div>
            {props.lawyer &&
              props.lawyer.association.length !== 0 &&
              props.lawyer.association.map((item, index) => (
                <div className="general-intro-body-edu">
                  <div className="general-intro-body-edu-col2" key={index}>
                    <div className="genral-colums">
                      <p>{item.organization}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.status}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro">
            <div className="general-intro-header">
              <p>HONORS & AWARDS</p>
            </div>
            <div className="general-intro-body-edu">
              <div className="general-intro-body-edu-col">
                <div className="genral-colums">
                  <p>Name / Organization </p>
                </div>
                <div className="genral-colums">
                  <p>Date</p>
                </div>
              </div>
            </div>
            {props.lawyer &&
              props.lawyer.honors.length !== 0 &&
              props.lawyer.honors.map((item, index) => (
                <div className="general-intro-body-edu">
                  <div className="general-intro-body-edu-col2" key={index}>
                    <div className="genral-colums">
                      <p>{item.name}</p>
                    </div>
                    <div className="genral-colums">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
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
