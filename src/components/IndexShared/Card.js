import React from "react";
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {IoQrCodeSharp} from "react-icons/io5";
import {ImMobile2} from "react-icons/im";
import {FaUserAlt} from "react-icons/fa";
import {RiUserAddFill} from "react-icons/ri"
import {GrMail} from "react-icons/gr"
import{BsDot} from "react-icons/bs"
import "./card.css"
import Lawyer from "./images/lawyer.jpg"
import WWW from "./images/website.svg"
function Card(props) {
  return (
    <div className="lawyers-card">
    <div className="card-image">
     <img className="lawyer-image" src={Lawyer} alt="lawyer"/>
    </div>

    <div className="card-description">
      <p>Hasan Masud</p>
      <p>The Law Firm of Dorsey</p>
      <div className="lawyer-contact-grid">
            <div className="lawyer-contact-icons">
                 <IoQrCodeSharp/>
            </div>
            <div className="lawyer-contact-icons">
                
                <FaUserAlt/>
            </div>
            <div className="lawyer-contact-icons">
                 <ImMobile2/>
            </div>
            <div className="lawyer-contact-icons4">
                    <img src={WWW} style={{height:"2rem",width:"2rem"}} placeholder="www"/>
            </div>
            
      </div>
      <div className="lawyer-card-des">

      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
    <div className="card-btns">
      <div className="messege-btn">
        <RiUserAddFill/>
        <p>Book Appointment</p>
      </div>
      <div className="messege-btn2">
        <GrMail/>
        <p>View</p>
      </div>
    </div>
    <div className="lawyer-area">
      <p>Area Of Practise</p>
      <div className="lawyer-expertise">
      <p>Qatar Stock Exchange</p>
       <BsDot style={{fontSize:"1rem"}}/>
       <p>Dubai Stock Exchange</p>
      </div>
      
      <p>Riyad Stock Exchange</p>

    </div>
    <div className="card-icons">
     <RiInstagramFill  style={{color:"#c32aa3"}}/>
     <FaTwitter style={{color:"#1da1f2"}}/>
     <FaLinkedinIn style={{color:"#0a66c2"}}/>
     <FaFacebookF style={{color:"#3b5998"}}/>
    </div>

    </div>
  );
}

export default Card;
