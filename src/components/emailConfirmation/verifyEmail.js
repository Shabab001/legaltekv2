import React from 'react'
import "./verifyEmail.css"
import {useParams} from "react-router-dom"
import {HiOutlineMail} from "react-icons/hi"
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const VerifyEmail = () => {
    const{token}= useParams();
    return (
        <div className="verify-main">
            <p>Welcome to Legaltek</p>

            <div className="verify-mail-icon">
                <HiOutlineMail/>
            </div>

            <div className="verify-body">
                <p>An email has been sent to </p>
                <p><span style={{color:"black"}}>{token}</span></p>

                <p>check the link on your email within 20 minutes to</p>
                <p>validate your addres and complete</p>
                <p>the signup process</p>
            </div>
            <div className="verify-boxes">
                <div className="verify-boxe1">
                    <p>Didnt recieve an email</p>
                    <div className="verify-box-btn">CONTINUE</div>
                </div>
                <div className="verify-boxe2">
                    <p>Wrong email? change it</p>
                    <div className="verify-box-btn">CONTINUE</div>
                </div>
            </div>
            <div className="verify-footer">
                <p>@ 2021 legaltek.inc.All rights reserved.</p>
                <p>151,Lalmatia, block-C, OR +880 1721238629</p>
                <div className="verify-social-butttons">
                    <div  className="verify-icons">

                <RiInstagramFill  />
                    </div>
                    <div  className="verify-icons">

                    <FaTwitter />
                    </div>
                    <div  className="verify-icons">

                    <FaLinkedinIn />
                    </div>
                    <div  className="verify-icons">

                    <FaFacebookF />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
