import React, { useState } from "react";
import Footer from "./IndexShared/Footer";
import Header from "./IndexShared/Header";
import BottomNav from "./IndexShared/BottomNav";
import contactUsImage from "../assets/img/contact.webp";
import { Switch } from "antd";
import "../assets/css/contactUs.css";
function ContactUs(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

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

  return (
    <>

      <div className="contactUs">
        <div className="banner">
          <img src={contactUsImage} alt="contact-us-banner" />
          <div className="bannerInfo">
            <div className="hero-title">
              <h1>Get in Touch</h1>
              <p style={{ width: 400, maxWidth: "100%" }}>
                If there is anything we can help you with, just let us know.
                We'll be glad to help you.
              </p>
            </div>

            <div className="hero-title-2">
              <h4>Follow us</h4>
              <div>
              <label>Facebook <span>/facebook.com</span></label>
              <label>Twitter <span>/twitter.com</span></label>
              <label>Instagram <span>/instagram.com</span></label>
              <label>LinkedIn <span>/LinkedIn.com</span></label>
              </div>
          
            </div>
          </div>
        </div>

        <div className="contactUs-first-section">
          <div className="contactUs-box">
            <div className="partSection">
              <h3>Sales Support</h3>
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
              <h3>Sales Support</h3>
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
          </div>
        </div>

        <div className="contactUs-second-section">
          <div className="contactUs-box">
            <div className="partSection">
              <h3>Sales Support</h3>
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

        <div className="contactUs-third-section">
          <div className="contactUs-box">
            <div className="contactUs-box-innerDiv">
              <h3>Chat with our sales team</h3>
              <p>
                Nullam risus blandit ac aliquam justo ipsum, Quam mauris
                volutpat massa dictusmat amet. Sapien tortor taco bell.
              </p>

              <div className="twoPartLabel">
                <label className="inputContainer">
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                  ></input>
                  <span className={`${firstName ? "active" : ""}`}>
                    First name
                  </span>
                </label>
                <label className="inputContainer">
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

              <label className="inputContainer">
                <input name="email" value={email} onChange={onChange}></input>
                <span className={`${email ? "active" : ""}`}>Email</span>
              </label>

              <label className="inputContainer">
                <input
                  name="company"
                  value={company}
                  onChange={onChange}
                ></input>
                <span className={`${company ? "active" : ""}`}>Company</span>
              </label>
              <label className="textAreaLabel inputContainer">
                <textarea
                  name="message"
                  value={message}
                  onChange={onChange}
                ></textarea>
                <span className={`${message ? "active" : ""}`}>Message</span>
              </label>
              <div className="switchLabel">
                <Switch
                  style={{ width: "20px" }}
                  defaultChecked
                  onChange={onChangeSwitch}
                />
                By selecting this, you agree to the <span>Privacy policy</span>{" "}
                and <span>Cookie policy</span>
              </div>
              <button className="pink-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default ContactUs;
