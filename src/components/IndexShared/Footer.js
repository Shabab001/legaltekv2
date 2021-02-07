import React, {useState} from "react";
import "../../assets/css/footer.css";
import SignIn from "../modals/SignInModal";
import Register from "../modals/SignUpModal";
import ForgotPass from "../modals/ForgotPassModal";
import SignInWithPhoneModal from "../modals/SignInWithPhoneModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
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
                <li>About us</li>
                <li>How Xukini works</li>
                <li>Careers</li>
         
              </ul>
            </div>
            <div>
              <h4>MARKETPLACE</h4>
              <ul>
                <li>Shop</li>
                <li>List an item</li>
              </ul>
            </div>
            <div>
              <h4>SERVICES</h4>
              <ul>
                <li>A la Carte</li>
                <li>Catering</li>
                <li>Meal Plans</li>
                <li>Hire Chef</li>
                <li>Cooking Lessons</li>
              </ul>
            </div>
            <div>
              <h4>BUSINESSES</h4>
              <ul>
                <li>For Businesses</li>
                <li onClick={()=>setRegister(true)}>Sign up</li>
                <li>Schedule a Callback</li>
                <li>Plans</li>
              </ul>
            </div>
            <div>
              <h4>SUPPORT</h4>
              <ul>
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Blogs</li>
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
            <a href="#">Privacy</a>
          </div>
          <span className="dot-divider">·</span>
          <div className="footer-links">
            <a href="#">Terms and conditions</a>
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
    <div className="last-footer">
      <div className="cont">
      <p>Designed & Developed by SOFT49N</p>
      </div>
      </div>
      
      {login && !props.auth.isAuthenticated && (
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
            </div>
          )}

          {register && !props.auth.isAuthenticated && (
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
            </div>
          )}

          {phoneSignIn && !props.auth.isAuthenticated && (
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
            </div>
          )}

          {forgotPass && !props.auth.isAuthenticated && (
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
            </div>
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