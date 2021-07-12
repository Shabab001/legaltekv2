import React from "react";
import "./credentials.css";
import LawyerAssociation from "./lawyerAssosication";
import LawyerEducation from "./lawyerEducation";
import LawyerExperience from "./lawyerExperience";
import LawyerHonors from "./lawyerHonors";
import LawyerAdmission from "./layerAdmission";

const Credentials = () => {
  return (
    <div className="credentials-main">
      <div className="credentials-container">
        <div className="credentials-heading">
          <p>Credentials</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their
          </p>
        </div>
        <div className="credential-sec-container">
          <LawyerExperience />
        </div>
        <div className="credential-sec-container">
          <LawyerEducation />
        </div>
        <div className="credential-sec-container">
          <LawyerAdmission />
        </div>
        <div className="credential-sec-container">
          <LawyerAssociation />
        </div>
        <div className="credential-sec-container">
          <LawyerHonors />
        </div>
      </div>
    </div>
  );
};

export default Credentials;
