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
import {GoGlobe} from "react-icons/go"
import Lawyer from "./images/lawyer.jpg"

function Card(props) {
  
  let {lawyer}=props;
  console.log(JSON.parse(lawyer.expertiseCategory).length)
  return (
    <div className="lawyers-card">
    <div className="card-image">
     <img className="lawyer-image" src={lawyer.profileImage?lawyer.profileImage.url:Lawyer} alt="lawyer"/>
    </div>

    <div className="card-description">
      <p>{lawyer.firstname} {lawyer.lastname}</p>
      <p>{lawyer.lawfirm_user.lawfirmName}</p>
      <div className="lawyer-contact-grid">
            <div className={lawyer.qrCode?"lawyer-contact-icons": "lawyer-contact-icons none"}>
                 <IoQrCodeSharp/>
            </div>
            <div className={lawyer.qrCode?"lawyer-contact-icons": "lawyer-contact-icons none"}>
                
                <FaUserAlt/>
            </div>
            <div className={lawyer.qrCode?"lawyer-contact-icons": "lawyer-contact-icons none"}>
                 <ImMobile2/>
            </div>
            <div className={lawyer.qrCode?"lawyer-contact-icons": "lawyer-contact-icons none"}>
                 <GoGlobe/>
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
        <p>Message</p>
      </div>
    </div>
    <div className="lawyer-area">
      <p>Area Of Practise</p>
      <div className="lawyer-expertise">
     { JSON.parse(lawyer.expertiseCategory).map((item,index)=>{

            return(
             
              <div key={index} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                {index+1 ===JSON.parse(lawyer.expertiseCategory).length?
                     <p >{item}</p>:
                       
                      <>
                       <p >{item}</p>
                       <BsDot style={{fontSize:"1rem"}}/>
                      
                       </>

              
              }
            
              </div>
          
            )

     })}
   
      </div>
      
   

    </div>
    <div className="card-icons">
                     <RiInstagramFill className={lawyer.instagram? `lawfirm-social-insta insta`:"lawfirm-social-insta"}/>
                       <FaTwitter className={lawyer.twitter? "lawfirm-social-twit twit":"lawfirm-social-twit"}/>
                       <FaLinkedinIn className={lawyer.linkedin? "lawfirm-social-linked link":"lawfirm-social-linked"}/>
                       <FaFacebookF className={lawyer.facebook? "lawfirm-social-fb fb" :"lawfirm-social-fb"}/>
    </div>

    </div>
  );
}

export default Card;
