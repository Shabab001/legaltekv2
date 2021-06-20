import React from 'react'
import {RiComputerLine} from "react-icons/ri"
import {AiOutlineFilePdf} from "react-icons/ai"
import {FaRegLightbulb} from "react-icons/fa"
import {ImCheckboxChecked} from "react-icons/im"


const DocCaution = () => {
    return (
        <div className="order-caution">
  
        <div className="order-tips">
            <p>Tips for Uploading Documents</p>
            <p>Please ensure the following document tips are followed for successful verification procedures</p>
            <div className="order-tips-grid">
                <div className="order-tips-box">
                     <RiComputerLine style={{fontSize:"2rem", color:"var(--primary)"}}/>
                    <p>High Resolution</p>
                    <p>Clear and legible scans or images</p>
                </div>
                <div className="order-tips-box">
                     <AiOutlineFilePdf style={{fontSize:"2rem", color:"var(--primary)"}}/>
                    <p>High Resolution</p>
                    <p>Clear and legible scans or images</p>
                </div>
                <div className="order-tips-box">
                     <FaRegLightbulb style={{fontSize:"2rem", color:"var(--primary)"}}/>
                    <p>High Resolution</p>
                    <p>Clear and legible scans or images</p>
                </div>
                <div className="order-tips-box">
                     <ImCheckboxChecked style={{fontSize:"2rem", color:"var(--primary)"}}/>
                    <p>High Resolution</p>
                    <p>Clear and legible scans or images</p>
                </div>
            </div>
        </div>
        <p>Your information is protected by bank-level security and covered by an industry first insurance policy</p>
   </div>
    )
}

export default DocCaution
