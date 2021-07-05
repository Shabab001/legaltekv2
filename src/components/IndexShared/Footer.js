import React, {useState} from "react";
import "../../assets/css/footer.css";
import SignIn from "../modals/SignInModal";
import Register from "../modals/SignUpModal";
import ForgotPass from "../modals/ForgotPassModal";
import SignInWithPhoneModal from "../modals/SignInWithPhoneModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
function Footer(props) {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [phoneSignIn, setPhoneSignIn] = useState(false);
  const [regProp, setRegProp] = useState(false);
 const [userType, setUserType] = useState("CUSTOMER");
 const modalRoot = document.getElementById("modal-root")
  return (
    <>
    <div className="footerN" >
      <div className="cont2" style={{display:'flex',flexDirection:'column',maxWidth:'1550px',width:'1550px',margin:'auto'}}>
      <div className="section-body footer-main">
        <footer className="footer">
          <div className="secondlayer">
            <div>
              <h4>ABOUT</h4>
              <ul>
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/faqs">FAQ</Link></li>
                
         
              </ul>
            </div>
            <div>
              <h4>USERS</h4>
              <ul>
                <li>How LegalTek Works</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h4>LAWYERS</h4>
              <ul>
                <li>Practice with LegalTek</li>
                <li> <Link to={{pathname:"/how-it-works", user:"CUSTOMER"}}>Requirements </Link></li>
                
              </ul>
            </div>
            <div>
              <h4>LAW FIRMS</h4>
              <ul>
                <li><Link to="/business">Practice with LegalTek</Link></li>
                <li> <Link to={{pathname:"/how-it-works", user:"BUSINESS"}}>Requirements </Link></li>
              </ul>
            </div>
            <div>
              <h4>CONNECT</h4>
              <ul>
          
                <li><Link to="/contact-us">Contact</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
              </ul>
            </div>
            <div>
              <h4>ACCOUNT</h4>
              <ul>
          
                <li style={{cursor:"pointer"}}     onClick={() => {
                          setRegProp(false);
                          setUserType("");
                          setLogin(true);
                        }}>Signin</li>
                <li style={{cursor:"pointer"}}    onClick={() => setRegister(true)}>Signup</li>
              </ul>
            </div>
          </div>
       
        </footer>
      </div>
      <div className="footerN-divider"></div>
      <div className="cont">
        <div className="left">
          <div className="footer-links">
            <a href="#">© 2020 Xukini.Inc. All rights Reserved </a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <Link to="Privacy-Policy">Privacy</Link>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <Link to="/terms-and-conditions">Terms and conditions</Link>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <Link to="/Community-Guidelines">Community Guidelines</Link>
          </div>
        
        </div>
        <div className="right">
          <div className="footer-links">
            <a href="#">English </a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="#">($USD)</a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="#" className="social"style={{fontSize: 16}}>
              <FacebookOutlined />
            </a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="#"className="social" style={{fontSize: 16}}>
              <YoutubeOutlined />
            </a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="https://twitter.com/Xukiniinc"className="social" style={{fontSize: 16}}>
            <TwitterOutlined />
            </a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="https://www.instagram.com/xukiniinc/" className="social" style={{fontSize: 16}}>
            <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>

      </div>
      

     
      
    </div>
    <div className="last-footer" style={{backgroundColor:"var(--primary)"}}>
      <div className="cont">
      <p>Designed & Developed by SOFT49N</p>
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

          {forgotPass && !props.auth.isAuthenticated && (
            ReactDOM.createPortal(
            <div className="modal-overlay">
              <ForgotPass
                closeForgotPass={() => setForgotPass(false)}
                signInModal={() => setLogin(true)}
                signUpModal={() => setRegister(true)}
                userTypeProp={userType}
                setUserTypeProp={(value) => setUserType(value)}
                regProp={regProp}
                setRegProp={(value) => setRegProp(value)}
                {...props}
              />
            </div>, modalRoot)
          )}
      </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);