import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/auth.css";
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";

function ForgotPassword(props) {
  const [password, setPassword] = useState({
    value: "",
    message: "",
    isValid: false,
  });
  const [cPassword, setCPassword] = useState({
    value: "",
    message: "",
    isValid: false,
  });
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const resetKey =
    props.match &&
    props.match.params &&
    props.match.params.resetToken &&
    props.match.params.resetToken;
  const userType = "CUSTOMER";

  const submitForm = async (e) => {
    e.preventDefault();
    let emailValidity = false;
    let passwordValidity = false;

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

    if (!cPassword.value) {
      setPassword({
        ...password,
        message: "* Please provide your password.",
        isValid: false,
      });
    } else if (cPassword.value && cPassword.value.length < 6) {
      setPassword({
        ...cPassword,
        message: "* Please provide a strong password.",
        isValid: false,
      });
    } else if (password.value !== cPassword.value) {
      setCPassword({
        ...cPassword,
        message: "* Passwords do not match!",
        isValid: false,
      });
    } else {
      setPassword({ ...cPassword, message: "", isValid: true });
      passwordValidity = true;
    }

    // if(passwordValidity ){
    //   let user = {
    //     password: password.value,
    //     userType: userType
    //   }
    //   let response = await props.actions.resetPassword(user,props.history)
    //   if(response==true){

    //     message.success('Message sent. Check your email')
    //     props.history.push('/')
    //   }
    //   else{
    //     message.error('Could not sent forgot password request')
    //   }

    // }
  };

  return (
    <>
      <div id="login">
        {console.log(resetKey)}
        <div className="form-modal">
          <div className="form">
            <div className="brand">
              <span>G</span>
              <Link to="/">rmnd</Link>
            </div>

            <h3 style={{ textAlign: "left" }}>Reset Password</h3>

            <h5 style={{ marginTop: 5 }}>Enter a new password.</h5>
            <div className="form">
              <div className="field" style={{ position: "relative" }}>
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
                  // icon="lock"
                  type={showPass ? "text" : "password"}
                  // iconPosition="left"
                  placeholder="Password"
                />
                <i className="fa fa-lock left" />
                <i
                  onClick={() => setShowPass(!showPass)}
                  className={`${
                    showPass ? "fe-eye" : "fe-eye-off"
                  } fe showPass`}
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
              <div className="field" style={{ position: "relative" }}>
                <input
                  name="cpassword"
                  value={cPassword.value}
                  onChange={(e) =>
                    setCPassword({
                      ...cPassword,
                      value: e.target.value,
                      message: "",
                    })
                  }
                  // icon="lock"
                  type={showCPass ? "text" : "password"}
                  // iconPosition="left"
                  placeholder="Confirm Password"
                />
                <i className="fa fa-lock left" />
                <i
                  onClick={() => setShowCPass(!showCPass)}
                  className={`${
                    showCPass ? "fe-eye" : "fe-eye-off"
                  } fe showPass`}
                />

                <p
                  className="error-text"
                  style={{
                    margin: "5px 0px",
                    color: "firebrick",
                    textAlign: "left",
                  }}
                >
                  {cPassword.message}
                </p>
              </div>

              <button className="signInBtn" onClick={submitForm}>
                Change Password
              </button>
            </div>

            <div
              className="btm-links-login"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p style={{ textAlign: "left", fontSize: 12 }}>
                <Link to="/login">Sign in&nbsp;</Link>to your account
              </p>
              <p style={{ textAlign: "left", fontSize: 12 }}>
                Don't have an account?<Link to="/register">&nbsp;Sign Up</Link>
              </p>
            </div>
          </div>

          {/* <SliderScreen /> */}
        </div>
      </div>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
