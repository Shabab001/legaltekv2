import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../../assets/css/auth.css";
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
// import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { message } from "antd";
import Logo from "./images/legaltek.webp"

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const {REACT_APP_API}= process.env


function Register(props) {
  const { userTypeProp } = props;
  const [loading, setLoading] = useState(false);
  const[hideMsg,setHideMsg]=useState(true)

  const [checkMessage,setCheckMessage]=useState(false)
  const[checkBox,setCheckbox]=useState(false)

  const [email, setEmail] = useState({ value: "", message: "", isValid: true });
  const [username, setUserName] = useState({ value: ""});
  const [password, setPassword] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [showPass, setShowPass] = useState(false);
  const [dob, setDob] = useState({ value: "", message: "", isValid: true });
  const [phoneNo, setPhoneNo] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [firstName, setFirstName] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [lastName, setLastName] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [userType, setUserType] = useState(
    userTypeProp ? userTypeProp === "LAWYER"?  "LAWFIRM": userTypeProp: "CUSTOMER")
    props.setUserTypeProp(userType);


  const handleCheckbox=(e)=>{
    setCheckbox(e.target.checked)
    setCheckMessage(false)
  }

  const changeUserType = (e) => {
    console.log(e.target.value);
    setUserType(e.target.value);
    props.setUserTypeProp(e.target.value);
  };
 
  console.log("email:", email.value, "password:",password.value)
  useEffect(() => {
    disableBodyScroll(document.querySelector("body"));
    return () => {
      enableBodyScroll(document.querySelector("body"));
    }
  }, [])

  const submitForm = async (e) => {
    e.preventDefault();
    if(checkBox){
    setLoading(true);
    console.log(
      email.value,
      password.value,
      dob.value,
      phoneNo.value,
      firstName.value,
      lastName.value
    );
    let emailValidity = false;
    let passwordValidity = false;
    let dobValidity = true;
    let firstNameValidity = true;
    let lastNameValidity = true;
    let role=""

    if (!email.value) {
      setEmail({
        ...email,
        message: "* Please provide your email.",
        isValid: false,
      });
    } else if (email.value && !validator.isEmail(email.value)) {
      setEmail({
        ...email,
        message: "* Please provide a valid email address.",
        isValid: false,
      });
    } else {
      setEmail({ ...email, message: "", isValid: true });
      emailValidity = true;
    }

    if (!password.value) {
      setPassword({
        ...password,
        message: "* Please provide your password.",
        isValid: false,
      });
    } else if (password.value && password.value.length < 6) {
      setPassword({
        ...password,
        message: "* Please provide a strong password.",
        isValid: false,
      });
    } else {
      setPassword({ ...password, message: "", isValid: true });
      passwordValidity = true;
    }

        if(userType==="CUSTOMER"){
                role="authenticated"
        }
        else{
          role="lawfirm"
        }

    if (emailValidity && passwordValidity) {
      let user = {
        username:username.value,
        email: email.value,
        password: password.value,
        role
   
      };
  try{

    let response = await Axios.post(`${REACT_APP_API}/auth/send-confirmation-email`, user);
    if (response) {
      console.log(response);
      message.success("verify your email!");
      props.history.push(`/auth/verify-email/${email.value}`)
      setLoading(false);
      props.closeRegister();
     
    }
  }
  catch(err){
    console.log(err.response.data)
    setLoading(false);
    message.error(err.response.data.data[0].messages[0].message);
  }
      
   
    }
  }
  else{
    setCheckMessage(true)
    setHideMsg(false)
    console.log("here 3")
  }
  };

  const responseFacebook = async (response) => {
    // setEmail({ ...email, value: data.email });
    if(checkBox){
      setLoading(true);
    console.log(response);
    let role=""
    if(userType==="CUSTOMER"){
      role="authenticated"
      }
      else{
      role="lawfirm"
      }
    const user ={
      username:response.name,
      email:response.email,
      role,
      socialLogin:true
    
    }
    let newUser=await props.actions.register(user)
    if(newUser){
      setLoading(false);
      props.history.push(`/auth/activated/${newUser.username}`)

      props.closeRegister();
    }else{
      setLoading(false);
    }
  }
  else{
    setCheckMessage(true)
    setHideMsg(false)
    setLoading(false);
    console.log("here 2")
  }
  };
  const responseGoogleFailure=(response)=>{
    console.log(response)
  }
  const responseGoogle = async (response) => {
    if(checkBox){
      setLoading(true);
    console.log(response);
    const data = { idToken: response.tokenId, userType };
    let role=""
    if(userType==="CUSTOMER"){
      role="authenticated"
      }
      else{
      role="lawfirm"
      }
    const user ={
      username:response.profileObj.name,
      email:response.profileObj.email,
      role,
      socialLogin:true
    
    }
    console.log(data)
    let newUser=await props.actions.register(user)
    if(newUser){
      setLoading(false);
      props.history.push(`/auth/activated/${newUser.username}`)
      props.closeRegister();
    
    }else{
      setLoading(false);
    }
    // setEmail({ ...email, value: data.profileObj.email });
  }
  else{
    setCheckMessage(true)
    setHideMsg(false)
    setLoading(false);
    console.log("here 1")

  }
  };
console.log(hideMsg);
  return (
    <div className="form-modal">
      <div className="form">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="brand">
         
          <Link to="/"><img src={Logo} alt="logo" style={{height:"2rem", width:"12rem"}}/></Link>
          </div>
          <a
            onClick={props.closeRegister}
            style={{ color: "var(--primary)", fontSize: 20 }}
          >
            <i className="fa fa-close"></i>
          </a>
        </div>

        <div className="userType">
          <button
            value="CUSTOMER"
            onClick={changeUserType}
            className={`${userType == "CUSTOMER" && "active"}`}
          >
            Customer
          </button>
          <button
            value="LAWFIRM"
            onClick={changeUserType}
            className={`${userType == "LAWFIRM" && "active"}`}
          >
           Law Firm
          </button>
        </div>

        {/* {showSecondPart && */}
        <div className="second-part-reg">
          <h3 style={{ textAlign: "left", marginTop: 15 }}>Sign Up</h3>
          <div className="form">
            {/* <Form.Field>
              <Input
                placeholder="First Name"
                value={firstName.value}
                onChange={(e) =>
                  setFirstName({ ...firstName, value: e.target.value })
                }
              />
              <Input
                placeholder="Last Name"
                value={lastName.value}
                style={{ marginTop: 5 }}
                onChange={(e) =>
                  setLastName({ ...lastName, value: e.target.value })
                }
              />
              {firstName.message || lastName.message ? (
                <p style={{ fontSize: 11, fontWeight: 100, color: "red" }}>
                  {firstName.message && firstName.message} <br />{" "}
                  {lastName.message && lastName.message}
                </p>
              ) : (
                <p style={{ fontSize: 11, fontWeight: 100, color: "gray" }}>
                  Make sure it matches the name on your government ID.
                </p>
              )}
            </Form.Field>
            <Form.Field className="SemDatePicker">
              <SemanticDatepicker
                onChange={(event, data) =>
                  setDob({
                    ...dob,
                    value: moment(data.value).format("DD/MM/YYYY"),
                  })
                }
                style={{ width: "100% !important",marginBottom: 0 }}
                format="DD-MMM-YYYY"
              />
              <p style={{ fontSize: 11, fontWeight: 100, color: "gray" }}>
                You will need to be atleast 18.Your date of birth won't be
                shared with other people who use the app.
              </p>
            </Form.Field> */}
            <div className="field">
            <div className="input-container" style={{paddingBottom:"1.2rem"}}>
                <input
                  placeholder="Username"
                  value={username.value}
                  onChange={(e) =>
                    setUserName({ ...username, value: e.target.value })
                  }
                  icon="user"
                  iconPosition="left"
                />
                <i className="fa fa-user left" />
              </div>
              <div className="input-container">
                <input
                  placeholder="Email Address"
                  value={email.value}
                  onChange={(e) =>
                    setEmail({ ...email, value: e.target.value })
                  }
                  icon="mail"
                  iconPosition="left"
                />
                <i className="fa fa-envelope left" />
              </div>

          
            </div>

            <div className="field" style={{ position: "relative" }}>
              <div className="input-container">
                <input
                  name="password"
                  value={password.value}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      value: e.target.value,
                      message: "",
                    })
                  }
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                />
                <i className="fa fa-lock left" />
              </div>
              <i
                onClick={() => setShowPass(!showPass)}
                className={`${showPass ? "fe-eye" : "fe-eye-off"} fe showPass`}
              />

              <p
                className="error-text"
                style={{
                  margin: "5px 0px",
                  color: "firebrick",
                  textAlign: "left",
                }}
              >
                {password.message}
              </p>
            </div>
         
            <div
              className="btm-links-login"
              style={{ flexDirection: "column" }}
            >
              <h4
                style={{
                  textAlign: "left",
                  marginTop: 4,
                  marginBottom: "0px !important",
                }}
              >
                Or Sign up using
              </h4>

              <div className="social_btns">
                <div>
                  <div
                    className="social_btn"
                    onClick={() => {
                      props.setRegProp(true);
                      props.closeRegister();
                      props.phoneSignInModal();
                    }}
                  >
                    <Link
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="20"
                        width="20"
                        viewBox="0 0 384 384"
                        fill="#feb300"
                        enable-background="new 0 0 384 384"
                      >
                        <g>
                          <g>
                            <path
                              d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
			c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
			c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
			C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                            />
                          </g>
                        </g>
                      </svg>
                      {""}
                      <span>Phone</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <FacebookLogin
                    // appId="1453893171475138"
                    appId="1454499971558219"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    redirectUri="https://legaltekv2.herokuapp.com/"
                    render={(renderProps) => (
                      <div className="social_btn" onClick={renderProps.onClick}>
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          height="20"
                          width="20"
                          fill="dodgerblue"
                          viewBox="0 0 155.139 155.139"
                          enable-background="new 0 0 155.139 155.139"
                        >
                          <g>
                            <path
                              id="f_1_"
                              d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
      c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
      v20.341H37.29v27.585h23.814v70.761H89.584z"
                            />
                          </g>
                        </svg>{" "}
                        <span>Facebook</span>
                      </div>
                    )}
                  />
                </div>
                <div>
                  <GoogleLogin
                    clientId="8899855246-bn8gtk59a7q3omglal2pf6cv5rqqsu52.apps.googleusercontent.com"
                  
                    autoLoad={false}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFailure}
                    className="googleBtn"
                    
                    render={(renderProps) => (
                      <div className="social_btn" onClick={renderProps.onClick}>
                        <svg
                          id="Capa_1"
                          enable-background="new 0 0 512 512"
                          height="20"
                          viewBox="0 0 512 512"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="m420.7 450.7c-44.4 37.5-101.999 61.3-164.7 61.3-93.3 0-175.201-51.4-219.6-126.4l16.622-76.622 73.678-13.678c17.1 55.199 68.699 95.7 129.3 95.7 29.399 0 56.7-9.3 79.2-25.8l70.8 10.8z"
                              fill="#59c36a"
                            />
                            <path
                              d="m420.7 450.7-14.7-74.7-70.8-10.8c-22.5 16.5-49.801 25.8-79.2 25.8v121c62.701 0 120.3-23.8 164.7-61.3z"
                              fill="#00a66c"
                            />
                            <g id="Connected_Home_1_">
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="m121 256c0 13.799 2.1 26.999 5.7 39.3l-90.3 90.3c-22.5-37.8-36.4-82.201-36.4-129.6 0-47.401 13.9-91.8 36.4-129.6l72.473 12.473 17.827 77.827c-3.6 12.299-5.7 25.499-5.7 39.3z"
                                      fill="#ffda2d"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <path
                              d="m512 256c0 77.999-36.099 147.9-91.3 194.7l-85.5-85.5c17.399-12.601 32.1-29.401 41.7-49.2h-120.9c-8.401 0-15-6.601-15-15v-90c0-8.401 6.599-15 15-15h236.8c7.2 0 13.5 5.099 14.7 12.299 3 15.601 4.5 31.8 4.5 47.701z"
                              fill="#4086f4"
                            />
                            <path
                              d="m376.901 316c-9.6 19.799-24.302 36.599-41.7 49.2l85.499 85.5c55.201-46.8 91.3-116.7 91.3-194.7 0-15.901-1.5-32.1-4.501-47.701-1.199-7.2-7.5-12.299-14.7-12.299h-236.799v120z"
                              fill="#4175df"
                            />
                            <path
                              d="m424.9 71.499c.3 4.2-1.5 8.101-4.2 11.1l-64.2 63.9c-5.099 5.4-13.499 6-19.499 1.5-23.702-17.699-51.602-26.999-81.001-26.999-60.601 0-112.2 40.499-129.3 95.7l-90.3-90.3c44.399-75 126.3-126.4 219.6-126.4 59.7 0 117.9 22 163.5 60.399 3.3 2.701 5.1 6.9 5.4 11.1z"
                              fill="#ff641a"
                            />
                            <path
                              d="m337 147.999c6 4.501 14.399 3.9 19.499-1.5l64.2-63.9c2.701-2.999 4.501-6.899 4.2-11.1s-2.1-8.399-5.4-11.1c-45.599-38.399-103.799-60.399-163.499-60.399v121c29.399 0 57.299 9.3 81 26.999z"
                              fill="#f03800"
                            />
                          </g>
                        </svg>
                        {""}
                        <span>Google</span>
                      </div>
                    )}
                  />
                </div>
                <div>
                  <div className="social_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      enable-background="new 0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <g>
                        <path d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734   c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z" />
                        <path d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z" />
                      </g>
                    </svg>
                    {""}
                    <span>Apple</span>
                  </div>
                </div>
              </div>
              <div
              className="field checkBoxRow"
              style={{ textAlign: "left", display: "flex" }}
            >
              <label
                htmlFor="agree"
                style={{
                  fontSize: 11,
                  color: "gray",
                  fontFamily: "lato",
                  marginBottom: 0,
                }}
              >
                <input type="checkbox" id="agree" checked={checkBox} onChange={handleCheckbox} />
                <span className="checkBox">
                  <i className="fa fa-check" />
                </span>
                <p>
                  By selecting Sign up and continue below, i agree to{" "}
                  <span
                    style={{
                      color: "black",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    LegalTek's{" "}
                  </span>
                  Terms of Services, Payment Terms of Services, Privacy Policy
                  and Nondiscrimination Policy.
                </p>
              </label>
            </div>

            <button className="signInBtn" onClick={submitForm}>
              {loading ? <div className="spinner-border"></div>: "Sign Up"}
            </button>
            {checkMessage && !hideMsg?<div style={{color:"red",fontSize:"6.rem",textAlign:"center",paddingTop:"1rem"}}>
              Click the agrrement for authentication
            </div>:null
            }

              <p
                style={{
                  fontSize: 12,
                  fontFamily: "'Rubik'",
                  textAlign: "left",
                  paddingTop:"1rem"
                }}
              >
                Already have an account?
                <Link
                  to="#"
                  onClick={() => {
                    props.closeRegister();
                    props.signInModal();
                  }}
                  style={{ fontSize: 12, color: "var(--primary)" }}
                >
                  &nbsp;Sign In
                </Link>
              </p>
            
              {/* <p
                style={{ fontSize: 11, fontFamily: "lato", textAlign: "left" }}
              >
                <Link
                  to="#"
                  onClick={() => {
                    props.closeRegister();
                    props.otherSignUp();
                  }}
                  style={{ fontSize: 11, color: "#f1433f" }}
                >
                  Other Sign up options
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* <SliderScreen /> */}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
