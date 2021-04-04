import React from 'react'
import "./otpcard.css"
import {HiOutlineArrowLeft} from "react-icons/hi"
const OtpCard = ({setOtp}) => {
    return (
        <div>
            <div className="vol-modal-headings">
        
        <div className="post-modal-cross" onClick={()=>setOtp(false)}>

          <HiOutlineArrowLeft style={{fontSize:"1.4rem"}} />
        </div>
        <div className="loc-modal-first">

          <p>OTP</p>
          </div>
      </div>
      <div className="modal-opt-body">
         

      <div className="modal-otp-inputs">
               <input placeholder=""/>
           </div>
           <div className="modal-otp-inputs">
               <input placeholder=""/>
           </div>
           <div className="modal-otp-inputs">
               <input placeholder=""/>
           </div>
           <div className="modal-otp-inputs">
               <input placeholder=""/>
           </div>
           <div className="modal-otp-inputs">
               <input placeholder=""/>
           </div>
      </div>
      <div className="postmodal-btn">
             <p>Confirm OTP</p>
           </div>
 
          
           
 
        </div>
    )
}

export default OtpCard
