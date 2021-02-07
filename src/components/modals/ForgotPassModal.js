import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/auth.css";
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import { Spinner } from "react-bootstrap";
import { message } from "antd";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function ForgotPass(props) {
  const { userTypeProp } = props;
  const [email, setEmail] = useState({
    value: "",
    message: "",
    isValid: false,
  });
  const [userType, setUserType] = useState(
    userTypeProp ? userTypeProp : "CUSTOMER"
  );
  useEffect(() => {
    disableBodyScroll(document.querySelector("body"));
    return () => {
      enableBodyScroll(document.querySelector("body"));
    }
  }, [])
  const submitForm = async (e) => {
    e.preventDefault();
    let emailValidity = false;
    let passwordValidity = false;
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

    if (emailValidity) {
      let user = {
        email: email.value,
        userType: userType,
      };
      message.success("Message sent. Check your email");
    }
  };

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
            <span>G</span>
            <Link to="/">rmnd</Link>
          </div>
          <a
            onClick={props.closeForgotPass}
            style={{ color: "#e50077", fontSize: 20 }}
          >
            <i className="fe fe-x"></i>
          </a>
        </div>

        <h3 style={{ textAlign: "left", marginTop: 20 }}>Forgot Password</h3>

        <h5 style={{ marginTop: 5 }}>
          Enter your email address below and we'll send you a link to reset your
          password.
        </h5>
        <div className="form">
        <div className="field">
            <input
              name="email"
              value={email.value}
              onChange={(e) =>
                setEmail({ ...email, value: e.target.value, message: "" })
              }
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
            />
            <i className="fa fa-envelope left"/>
            <p
              className="error-text"
              style={{
                margin: "5px 0px",
                color: "firebrick",
                textAlign: "left",
              }}
            >
              {email.message}
            </p>
          </div>
          {/* <Form.Field>
              <Input
                name="password"
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                icon="lock"
                type="password"
                iconPosition="left"
                placeholder="Password"
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
            </Form.Field> */}

          <button className="signInBtn" onClick={submitForm}>
            Send Request
          </button>
        </div>

        <div
          className="btm-links-login"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "lato",
          }}
        >
          <p style={{ textAlign: "left", fontSize: 11 }}>
            <Link
              to="#"
              style={{ color: "#e50077" }}
              onClick={() => {
                props.closeForgotPass();
                props.signInModal();
              }}
            >
              Sign in&nbsp;
            </Link>
            to your account
          </p>
          <p style={{ textAlign: "left", fontSize: 11, fontFamily: "lato" }}>
            Don't have an account?
            <Link
              to="#"
              style={{ color: "#e50077" }}
              onClick={() => {
                props.closeForgotPass();
                props.signUpModal();
              }}
            >
              &nbsp;Sign Up
            </Link>
          </p>
        </div>
      </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
