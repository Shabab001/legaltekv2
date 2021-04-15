import React from 'react'
import "./agencybox2.css"
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {IoQrCodeSharp} from "react-icons/io5";
import {ImMobile2} from "react-icons/im";
import {FaUserAlt} from "react-icons/fa";
import {RiUserAddFill} from "react-icons/ri"
import {GrMail} from "react-icons/gr"
import{BsDot} from "react-icons/bs"
import Building from "./images/buildings.jpg"
import WWW from "../IndexShared/images/website.svg"
const AgencyBox2 = () => {
    return (
        <div className="agency-box">
            <div className="agency-box2-image">
                 <img className="agency-building-image" src={Building} alt="building"/>
                 <div className="agency-box2-overlay"></div>
            <div className="agency-box2-details">


                <p>The Law Firm</p>
                <div className="agency-box2-address">

                <p>Address Line 1</p>
                <BsDot style={{fontSize:"1rem"}}/>
                <p>Address Line 2</p>
                </div>
                <p>Toronto,Ontario,1220-M,Canda</p>
 </div>
            </div>
            <div className="agency-box-body">
           
                <div className="agency-box-left" >
        
                    <div className="agency-box-icons">
                    <IoQrCodeSharp/>
                    <FaUserAlt/>
                    <ImMobile2/>
                    <img src={WWW} style={{height:"1rem",width:"1rem"}} placeholder="www"/>
                    </div>
                    <div className="agency-box-btn">
                        <div className="agency-box-btn1" >
                            <p>Message</p>
                        </div>
                        <div className="agency-box-btn2">
                            <p>Appointment</p>
                        </div>
                    </div>
                    <div className="agency-right--box-icons">
                    <RiInstagramFill  style={{color:"#c32aa3"}}/>
                    <FaTwitter style={{color:"#1da1f2"}}/>
                    <FaLinkedinIn style={{color:"#0a66c2"}}/>
                    <FaFacebookF style={{color:"#3b5998"}}/>
                    </div>
                </div>
                <div className="agency-box-right" >
                    <div className="agency-right-box">
                        <div className="agency-right-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  </p>
                        </div>
                        <div className="agency-area">
                            <p>Area Of Practise</p>
                            <div className="agency-expertise">
                            <p>Qatar Stock Exchange</p>
                            <BsDot className="agency-dot" style={{fontSize:"1rem"}}/>
                            <p>Dubai Stock Exchange</p>
                            </div>
                            <div className="agency-last">

                            <p>Riyad Stock Exchange</p>
                            </div>

                            </div>
                    </div>
   
                </div>
            </div>
    </div>
    )
}

export default AgencyBox2

