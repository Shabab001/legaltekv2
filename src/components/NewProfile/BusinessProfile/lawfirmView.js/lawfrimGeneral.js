import React, { useEffect } from "react";
import "./lawfirmGeneral.css";
import { connect } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
const LawfrimGeneral = props => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lawfirm-general-main">
      <div className="genral-section-container">
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro-header">
            <p>INTRODUCTION</p>
          </div>
          <div className="general-intro-body">
            <p>{props.lawfirmAgency ? props.lawfirmAgency.firmProfile : ""}</p>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro-header">
            <p>ASSOCIATIONS</p>
          </div>
          <div className="general-intro-body">
            <p></p>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro-header">
            <p>HONORS & AWARDS</p>
          </div>
          <div className="general-intro-body">
            <p>{props.lawfirmAgency ? props.lawfirmAgency.firmProfile : ""}</p>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1">
          <div className="general-intro-header">
            <p>VERIFIED CERTIFICATION</p>
          </div>
          <div className="general-intro-body">
            <p>{props.lawfirmAgency ? props.lawfirmAgency.firmProfile : ""}</p>
          </div>
        </div>
        <div data-aos="fade-up" className="general-sec1"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  lawfirmAgency: state.lawfirmAgencies.singleLawfirm,
  lawfirmAgencies: state.lawfirmAgencies,
});

export default connect(mapStateToProps)(LawfrimGeneral);
