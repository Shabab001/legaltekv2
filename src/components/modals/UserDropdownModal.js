import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import ReviewIcon from "../../assets/img/svgs/ReviewIcon";
import LogoutIcon from "../../assets/img/svgs/LogoutIcon";
import {
  IdcardFilled,
  CreditCardFilled,
  MessageFilled,
  BookFilled,
  BellFilled,
  HeartFilled,
  GiftFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import SignInIcon from "../../assets/img/svgs/SignInIcon";
import SignUpIcon from "../../assets/img/svgs/SignUpIcon";
import BriefcaseIcon from "../../assets/img/svgs/BriefcaseIcon";

function UserDropdownModal(props) {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [phoneSignIn, setPhoneSignIn] = useState(false);
  // const [otherSignUp, setOtherSignUp] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const logout = (e) => {
    e.preventDefault();
    props.actions.logout(props.history);
    setLogin(false);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };

  let linkPrefix = props.auth.isAuthenticated
    ? props.auth.user.userType == "CUSTOMER"
      ? "/user/"
      : props.auth.user.userType == "BUSINESS"
      ? "/business/"
      : ""
    : "";
  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    } else {
      props.closeUserDropdown();
    }
  }, [props.location && props.location.pathname]);

  return (
    <div className="form-modal">
      {console.log(props)}
      <div className="form">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            marginTop: -10,
          }}
        >
          {/* <span>G</span>
          <Link to="/">rmnd</Link> */}
          <i style={{ fontSize: 30 }} className="fe fe-chevron-left"></i>

          <a
            onClick={props.closeSearch}
            style={{ color: "#e50077", fontSize: 30 }}
            onClick={() => props.closeUserDropdown()}
          >
            <i className="fa fa-close"></i>
          </a>
        </div>

        <div className="userMenuItems">
          {!props.auth.isAuthenticated && (
            <>
              <h5 style={{ paddingLeft: 10 }}>Hi, </h5>
              <div className="divider"></div>

              <Link to="/login">
                <SignInIcon />
                Sign In
              </Link>
              <Link to="/register">
                <SignUpIcon />
                Sign Up
              </Link>
              <div className="divider"></div>
              <Link to="/business">
                <BriefcaseIcon />
                For Businesses
              </Link>
              <Link to="/howItWorks">
                <BookFilled style={{ color: "lightslategray", fontSize: 18 }} />
                How Xukini Works
              </Link>
              <div className="divider"></div>
              <div
                className="userDropdownFooter"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/about-us">About</Link>
                <span>&#8226;</span>
                <Link to="/help-center">Help</Link>
                <span>&#8226;</span>
                <Link to="/terms-and-conditions">Terms</Link>
                <span>&#8226;</span>
                <Link to="/privacy-policy">Privacy</Link>
              </div>
            </>
          )}

          {props.auth.isAuthenticated && (
            <>
              <h5
                style={{
                  paddingLeft: 10,
                  fontFamily: "Avenir_book !important",
                }}
              >
                Hi, {props.auth.user.firstName}
              </h5>
              <div className="divider"></div>
              <Link
                to={{
                  pathname: linkPrefix + "profile",
                  state: {
                    tab: "profile",
                  },
                }}
              >
                <IdcardFilled
                  style={{ color: "lightslategray", fontSize: 18 }}
                />
                My Account
              </Link>
              <Link
                to={{
                  pathname: linkPrefix + "orders",
                }}
              >
                <GiftFilled style={{ color: "lightslategray", fontSize: 18 }} />
                Order History
              </Link>
              <a>
                <CreditCardFilled
                  style={{ color: "lightslategray", fontSize: 18 }}
                />
                Payment History
              </a>
              <Link
                to={{
                  pathname: linkPrefix + "favourites",
                }}
              >
                <HeartFilled
                  style={{ color: "lightslategray", fontSize: 18 }}
                />
                Favorites
              </Link>
              <Link
                to={{
                  pathname: linkPrefix + "notifications",
                }}
              >
                <BellFilled style={{ color: "lightslategray", fontSize: 18 }} />
                Notifications
              </Link>
              <div className="divider"></div>
              <Link
                to={{
                  pathname: linkPrefix + "reviews",
                }}
              >
                <ReviewIcon />
                Ratings & Reviews
              </Link>
              <Link
                to={{
                  pathname: linkPrefix + "chats",
                }}
              >
                <MessageFilled
                  style={{ color: "lightslategray", fontSize: 18 }}
                />
                Chats
              </Link>
              <div className="divider"></div>
              {/* <a>
                <i class="fas fa-store-alt" style={{ marginRight: 10 }}></i>
                Marketplace
              </a> */}
              <Link to="/business">
                <BriefcaseIcon />
                For Businesses
              </Link>
              <Link to="/how-it-works">
                <BookFilled style={{ color: "lightslategray", fontSize: 18 }} />
                How Xukini works
              </Link>
              <div className="divider"></div>
              <Link to="faqs">
                {/* <FaqIcon /> */}
                <InfoCircleFilled
                  style={{ color: "lightslategray", fontSize: 18 }}
                />
                FAQs
              </Link>
              <a onClick={(e) => logout(e)}>
                <LogoutIcon style={{ fontSize: 18 }} />
                Logout
              </a>
              <div className="divider"></div>
              <div
                className="userDropdownFooter"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/about-us">About</Link>
                <span>&#8226;</span>
                <Link to="/help-center">Help</Link>
                <span>&#8226;</span>
                <Link to="/terms-and-conditions">Terms</Link>
                <span>&#8226;</span>
                <Link to="/privacy-policy">Privacy</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDropdownModal);
