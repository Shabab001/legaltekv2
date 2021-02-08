import React, { useState } from "react";

import "../assets/css/contactUs.css";
import "./term.css"
function ContactUs(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [active, setActive]=useState("Support");

 const handleClick=(item)=>{
   console.log(item)
  setActive(item)
 }

  const onChange = (e) => {
    if (e.target.name == "firstName") {
      setFirstName(e.target.value);
    }
    if (e.target.name == "lastName") {
      setLastName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };
  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }
  
const catList=["Support","Sales","General","Feedback","Complaints"]

  return (
    <>

      <div className="contactUs">
      <div className="terms-heading">
          <div className="terms-heading-grid">
          <div>
            <p>Contact <span>
              Us
              </span>
              </p>
            <p>{Date.now( )}</p>
          </div>
          </div>
          <div className="terms-cat-grid">
           {catList.map((item,index)=>{
             return(
              <div onClick={()=>handleClick(item)} className={active===item ? `terms-cat ${item}`:"terms-cat"} key={index}>
                <p>{item}</p>
                </div>
             )
           })}
          </div>
        </div>

        <div className="contactUs-second-section">
          <div className="contactUs-box">
            <div className="partSection">
              <h3>{active}</h3>
              <p>
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>

              <p className="infoWithIcon">
                <i className="fa fa-phone mr-3" /> +1 (555) 123-4567
              </p>
              <p className="infoWithIcon">Mon-Fri 3am to 1pm EST</p>
              <br />
              <p className="infoWithIcon">
                <i className="fa fa-envelope mr-3" /> support@xukini.com
              </p>
            </div>

            <div className="partSection">
              <div className="twoPartLabel">
                <label>
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                  ></input>
                  <span className={`${firstName ? "active" : ""}`}>
                    First name
                  </span>
                </label>
                <label>
                  <input
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                  ></input>
                  <span className={`${lastName ? "active" : ""}`}>
                    Last name
                  </span>
                </label>
              </div>

              <label>
                <input name="email" value={email} onChange={onChange}></input>
                <span className={`${email ? "active" : ""}`}>Email</span>
              </label>
              <label className="textAreaLabel">
                <textarea
                  name="message"
                  value={message}
                  onChange={onChange}
                ></textarea>
                <span className={`${message ? "active" : ""}`}>Message</span>
              </label>
              <button className="pink-btn">Submit</button>
            </div>
          </div>
        </div>

      
      </div>

      
    </>
  );
}

export default ContactUs;
