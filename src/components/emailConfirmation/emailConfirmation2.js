import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import Axios from "axios";
import "./verifyEmail.css"
import {HiOutlineMail} from "react-icons/hi"
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ReactDOM from 'react-dom'
import SignIn from "../modals/SignInModal";
import Register from "../modals/SignUpModal";
import ForgotPass from "../modals/ForgotPassModal";
import SignInWithPhoneModal from "../modals/SignInWithPhoneModal";


const EmailConfirmation2 = (props) => {
    const [regProp, setRegProp] = useState(false);
    const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [phoneSignIn, setPhoneSignIn] = useState(false);
  const [userType, setUserType] = useState("CUSTOMER");
  const modalRoot = document.getElementById("modal-root")

    const{token}= useParams();

  
console.log(token)


    return (
        <>
        <div className="verify-main">
        <p>Welcome to Legaltek</p>

        <div className="verify-mail-icon">
            <HiOutlineMail/>
        </div>

        <div className="verify-body">
            <p>Account Activated </p>
          
          <p></p>
            <p>Hello {token},</p>
            <p>Your email has been verifired. Your account is now active</p>
            
        </div>
        <div className="verify-boxes">
           
            <div className="verify-boxe3">
                <p>Signin into your account</p>
                <div className="verify-box-btn2" onClick={() => {
                          setRegProp(false);
                          setUserType("");
                          setLogin(true);
                        }}>SIGNIN</div>
                <p>Thank you for choosing Legaltek</p>
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

{login && !props.auth.isAuthenticated && (
    ReactDOM.createPortal(
      <div className="modal-overlay">
      <SignIn
        signUpModal={() => setRegister(true)}
        closeLogin={() => setLogin(false)}
        forgotPassModal={() => setForgotPass(true)}
        phoneSignInModal={() => setPhoneSignIn(true)}
        userTypeProp={userType}
        setUserTypeProp={(value) => setUserType(value)}
        regProp={regProp}
        setRegProp={(value) => setRegProp(value)}
        {...props}
      />
    </div>, modalRoot
    )
   
  )}

  {register && !props.auth.isAuthenticated && (
     ReactDOM.createPortal(
    <div className="modal-overlay">
      <Register
        closeRegister={() => setRegister(false)}
        signInModal={() => setLogin(true)}
        // otherSignUp={() => setOtherSignUp(true)}
        forgotPassModal={() => setForgotPass(true)}
        phoneSignInModal={() => setPhoneSignIn(true)}
        userTypeProp={userType}
        setUserTypeProp={(value) => setUserType(value)}
        regProp={regProp}
        setRegProp={(value) => setRegProp(value)}
        {...props}
      />
    </div>, modalRoot
  ))}

  {phoneSignIn && !props.auth.isAuthenticated && (
     ReactDOM.createPortal(
    <div className="modal-overlay">
      <SignInWithPhoneModal
        closePhoneSignIn={() => setPhoneSignIn(false)}
        signInModal={() => setLogin(true)}
        forgotPassModal={() => setForgotPass(true)}
        signUpModal={() => setRegister(true)}
        userTypeProp={userType}
        setUserTypeProp={(value) => setUserType(value)}
        regProp={regProp}
        setRegProp={(value) => setRegProp(value)}
        {...props}
      />
    </div> , modalRoot)
  )}
  </>
    )

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
  export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation2);
       