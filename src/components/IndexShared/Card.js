import React from "react";
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./card.css"
import Lawyer from "./images/lawyer.jpg"
function Card(props) {
  return (
    <div className="lawyers-card">
    <div className="card-image">
     <img className="lawyer-image" src={Lawyer} alt="lawyer"/>
    </div>
    <div className="card-rating">
      <p>Pro</p>
    </div>
    <div className="card-description">
      <p>Hasan Masud</p>
      <p>Criminology</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    <div className="card-icons">
     <RiInstagramFill  style={{color:"#c32aa3"}}/>
     <FaTwitter style={{color:"#1da1f2"}}/>
     <FaLinkedinIn style={{color:"#0a66c2"}}/>
     <FaFacebookF style={{color:"#3b5998"}}/>
    </div>
    <div className="card-btns">
      <div className="messege-btn">
        <p>Book Appointment</p>
      </div>
      <div className="messege-btn2">
        <p>View</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
