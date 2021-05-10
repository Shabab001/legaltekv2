import React, { useState, useEffect, useRef, lazy } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import "../../assets/css/header.css";
import "../../assets/css/index.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import ReactDOM from 'react-dom'
import GoogleMapReact from "google-map-react";
import Geolocate from "../MiniComponents/Geolocate";
import { Radio } from "antd";
import Axios from "axios";
import Logo from "./images/legaltek.jpeg"
import {
  IdcardFilled,
  CreditCardFilled,
  MessageFilled,
  ShoppingFilled,
  BookFilled,
  BellFilled,
  HeartFilled,
  GiftFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

import SignIn from "../modals/SignInModal";
import Register from "../modals/SignUpModal";
import ForgotPass from "../modals/ForgotPassModal";
import SignInWithPhoneModal from "../modals/SignInWithPhoneModal";

const SearchBox = lazy(() => import("./SearchBar"));
const UserIcon = lazy(() => import("../../assets/img/svgs/UserIcon"));
const HamMenuIcon = lazy(() => import("../../assets/img/svgs/HamMenuIcon"));
const SignInIcon = lazy(() => import("../../assets/img/svgs/SignInIcon"));
const SignUpIcon = lazy(() => import("../../assets/img/svgs/SignUpIcon"));
const BriefcaseIcon = lazy(() => import("../../assets/img/svgs/BriefcaseIcon"));
const ReviewIcon = lazy(() => import("../../assets/img/svgs/ReviewIcon"));
const LogoutIcon = lazy(() => import("../../assets/img/svgs/LogoutIcon"));
const modalRoot = document.getElementById("modal-root")
var countries = require("country-data").countries;

const Marker = ({ text }) => (
  <div
    className="marker"
    style={{
      color: "white",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <i
      className="fe fe-map-pin"
      style={{ fontSize: "30px", color: "#e50077", position: "relative" }}
    ></i>
  </div>
);

function Header(props) {
  const [regProp, setRegProp] = useState(false);
  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const language = useRef(null);
  const userBtn = useRef(null);
  const [mapDropdown, setMapDropdown] = useState(false);
  const mapDrop = useRef(null);
  const [chosenLocation, setChosenLocation] = useState();
  const [center, setCenter] = useState({
    lat: parseFloat(localStorage.getItem("lat")),
    lng: parseFloat(localStorage.getItem("lng")),
  });
  const [markerCenter, setMarkerCenter] = useState();

  const [zoom, setZoom] = useState(15);
  const geo = useRef(false);
  const [chosenLatlng, setChosenLatlng] = useState();
  const [locationTray, setLocationTray] = useState(2);
  const [tempChosenLocation, setTempChosenLocation] = useState();

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [phoneSignIn, setPhoneSignIn] = useState(false);
  // const [otherSignUp, setOtherSignUp] = useState(false);

  const [locality, setLocality] = useState("");
  const [localityCountry, setLocalityCountry] = useState("");
  const [adjustPin, setAdjustPin] = useState(false);
  const [userType, setUserType] = useState("CUSTOMER");
  let body = null;

  const [loading, setLoading] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const geoLocate = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      localStorage.setItem("lat", lat);
      localStorage.setItem("lng", lng);
      Axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          lat +
          "," +
          lng +
          "&key=AIzaSyB6CeCRWx766zPt6EeOpxeBgjJXDqcCwpA"
      ).then(function (response) {
        if (response) {
          for (var i = 0; i < response.data.results.length; i++) {
            if (response.data.results[i].types[0] == "country") {
              var countryshort =
                response.data.results[i].address_components[0].short_name;
              var countrylong =
                response.data.results[i].address_components[0].long_name;

              localStorage.setItem("country_short", countryshort);
              localStorage.setItem("country_long", countrylong);
              localStorage.setItem("Currentcountry", countrylong);
              localStorage.setItem(
                "currency",
                countries[countryshort].currencies[0]
              );
              localStorage.setItem(
                "calling_code",
                countries[countryshort].countryCallingCodes[0]
              );
              localStorage.removeItem("mileDistance", 0);
            }
            if (response.data.results[i].types[0] == "locality") {
              var locality =
                response.data.results[i].address_components[0].short_name;
              var localityState =
                response.data.results[i].address_components[2].long_name;
              var localityCountry =
                response.data.results[i].address_components[3].long_name;

              localStorage.setItem("locality", locality);
              localStorage.setItem("localityState", localityState);
              localStorage.setItem("localityCountry", localityCountry);
              setLocality(locality);
              setLocalityCountry(localityCountry);
              // alert(locality + "," + localityCountry);
            }
          }
        } else {
        }
      });
    });

    setLoading(false);
  };

  useEffect(() => {
    if (login || register || forgotPass || phoneSignIn) {
      console.log("something is up", login, register, forgotPass, phoneSignIn);
      // disableBodyScroll(document.querySelector("body"));
    } else {
      enableBodyScroll(document.querySelector("body"));
    }
  }, [login, register, forgotPass, phoneSignIn]);

  useEffect(() => {
    if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
      setCenter({
        lat: parseFloat(localStorage.getItem("lat")),
        lng: parseFloat(localStorage.getItem("lng")),
      });
    }
    let localityInfo = localStorage.getItem("locality");
    let localityCountryInfo = localStorage.getItem("localityCountry");
    if (localityInfo) {
      setLocality(localityInfo);
    }
    if (localityCountryInfo) {
      setLocalityCountry(localityCountryInfo);
    }
  }, [localStorage.getItem("locality")]);

  const logout = (e) => {
    e.preventDefault();
    setRegProp(false);
    setUserType("");
    setLogin(false);

    props.actions.logout(props.history);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };
  const fixedHeader = (e) => {
    const header = document.querySelector(".indexHeader");
    const index = document.querySelector(".index");
    if (header) {
      if (window.pageYOffset > 80) {
        header.classList.add("fixedHeader");
        if (index && document.body.clientWidth > 1024) {
          index.style.paddingTop = 80 + "px";
        }
      } else {
        const temp = document.querySelector(
          ".inputBoxes.minimizedAnimate.expanded"
        );
        if (!temp) {
          header.classList.remove("fixedHeader");
          if (index) {
            index.style.paddingTop = "";
          }
        }
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      geoLocate();
    }, 3000);
  }, []);

  useEffect(() => {
    let body = document.querySelector("body");
    window.addEventListener("scroll", fixedHeader);
    window.addEventListener("click", function (e) {
      if (
        language &&
        language.current &&
        !language.current.contains(e.target)
      ) {
        setOpen(false);
      }

      if (mapDrop && mapDrop.current && !mapDrop.current.contains(e.target)) {
        // setMapDropdown(false);
      }

      if (userBtn && userBtn.current && !userBtn.current.contains(e.target)) {
        setUserOpen(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, []);

  const chooseAddress = (address) => {
    console.log(address);

    setTempChosenLocation({
      tempChosenAddress: address,
      tempChosenLocality: address.split(/,(.+)/)[0],
      tempChosenCountry: address.split(/,(.+)/)[1],
    });

    setChosenLocation(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setCenter(latLng);
        setMarkerCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
    // setMapDropdown(false)
    setLocationTray(2);
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    map.panTo(markerCenter);
  };

  const saveLocation = () => {
    localStorage.setItem("chosenLocation", chosenLocation);
    localStorage.setItem("lat", markerCenter.lat);
    localStorage.setItem("lat", markerCenter.lng);
    setLocationTray(1);
    setMapDropdown(false);

    localStorage.setItem(
      "chosenLocation",
      tempChosenLocation.tempChosenAddress
    );
    localStorage.setItem(
      "chosenLocality",
      tempChosenLocation.tempChosenLocality
    );
    localStorage.setItem("chosenCountry", tempChosenLocation.tempChosenCountry);
  };

  useEffect(() => {
    if (props.match && props.match.path !== "/") {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [props.match && props.match.path]);

  let linkPrefix = props.auth.isAuthenticated
    ? props.auth.user.userType == "CUSTOMER"
      ? "/user/"
      : props.auth.user.userType == "BUSINESS"
      ? "/business/"
      : ""
    : "";
  return (
    <>
      <div className="indexHeader inVisibleSearchBar">
        <div className="header-items">
          <div style={{ display: "flex" }}>
            <div className="brand">
          
            <Link to="/"><img src={Logo} alt="logo" style={{height:"2rem", width:"12rem"}}/></Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                color: "#e50077",
              }}
              ref={mapDrop}
              tabIndex={0}
              // onClick={()=>setMapDropdown(!mapDropdown)}
            >
              <i className="fe fe-map-pin mr-3" style={{ color: "black" }}></i>
              <span
                className="mr-1 locSpan"
                style={{ fontFamily: "Avenir_light" }}
              >
                Location:{" "}
              </span>{" "}
              {locality && localityCountry && !loading ? (
                <span
                  onClick={() => {
                    setMapDropdown(!mapDropdown);
                    setLocationTray(1);
                  }}
                  style={{
                    fontFamily: "Avenir_heavy !important",
                    cursor: "pointer",
                    width: 200,
                    textOverflow: "ellipsis",
                    height: 18,
                    overflow: "hidden",
                    height: 22,
                    fontFamily: "Avenir_heavy",
                  }}
                >
                  {localStorage.getItem("chosenLocation")
                    ? localStorage.getItem("chosenLocation")
                    : locality + "," + localityCountry}
                </span>
              ) : (
                <span style={{color:"#BA181B"}}>Enter your location</span>
              )}
              {mapDropdown && (
                <div
                  className="mapDropdown"
                  tabIndex={0}
                  // onBlur={() => {
                  //   setMapDropdown(false);
                  // }}
                >
                  {locationTray == 1 && (
                    <>
                      <Geolocate
                        ref={geo}
                        Autocomplete={false}
                        chooseAddress={(address) => chooseAddress(address)}
                        icon={
                          <i
                            className="fe fe-map-pin input-marker"
                            style={{ fontSize: "20px", color: "#BA181B" }}
                          ></i>
                        }
                        placeholder="Address"
                      />
                      <div className="grayDivider"></div>
                      <div className="default-location">
                        <Radio
                          checked={true}
                          name="default-location-radio"
                          inputProps={{ "aria-label": "A" }}
                        />
                        <div>
                          <span>
                            {localStorage.getItem("chosenLocality")
                              ? localStorage.getItem("chosenLocality")
                              : locality}
                          </span>
                          <span>
                            {localStorage.getItem("chosenCountry")
                              ? localStorage.getItem("chosenCountry")
                              : localityCountry}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  {locationTray == 2 && (
                    <>
                      <div className="locationTray2">
                        <GoogleMapReact
                          style={{
                            display: "flex",
                            height: adjustPin == true ? 360 : 160,
                            width: "100%",
                            position: "relative",
                            left: 0,
                            right: 0,
                            margin: "0px 0px 10px 0px",
                          }}
                          bootstrapURLKeys={{
                            key: "AIzaSyB6CeCRWx766zPt6EeOpxeBgjJXDqcCwpA",
                          }}
                          // defaultCenter={center}
                          defaultZoom={zoom}
                          center={center}
                          defaultZoom={zoom}
                          onDrag={(e) => {
                            if (adjustPin) {
                              setMarkerCenter({
                                lat: e.center.lat(),
                                lng: e.center.lng(),
                              });
                            }
                          }}
                          onClick={(e) => {
                            // setMarkerCenter({
                            //   lat: e.lat,
                            //   lng: e.lng
                            // })
                          }}
                          yesIWantToUseGoogleMapApiInternals
                          onGoogleApiLoaded={({ map, maps }) =>
                            handleApiLoaded(map, maps)
                          }
                        >
                          <Marker
                            lat={
                              markerCenter && markerCenter.lat
                                ? markerCenter.lat
                                : localStorage.getItem("lat")
                            }
                            lng={
                              markerCenter && markerCenter.lng
                                ? markerCenter.lng
                                : localStorage.getItem("lng")
                            }
                            text="My Marker"
                          />
                        </GoogleMapReact>

                        <div className="adjustPinBtn-container">
                          <p>
                            {tempChosenLocation.tempChosenAddress &&
                              tempChosenLocation.tempChosenAddress}
                          </p>
                          <button
                            className="grayBtn"
                            onClick={() => setAdjustPin(true)}
                          >
                            Adjust Pin
                          </button>
                        </div>
                        <div className="graydivider"></div>
                        <div className="apartmentNo">
                          <h5>Apartment number or suite</h5>
                          <input placeholder="Apartment number or suite" />
                        </div>
                        <div className="dropOffOptions">
                          <h5>Drop-off Options</h5>
                          {/* <RadioGroup
                            defaultValue="drop"
                            aria-label="gender"
                            name="customized-radios"
                          >
                            <FormControlLabel
                              value="handOver"
                              control={<Radio />}
                              label="Hand it to me"
                            />
                            <FormControlLabel
                              value="drop"
                              control={<Radio />}
                              label="Leave it at my door"
                            />
                          </RadioGroup> */}

                          <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Hand it to me</Radio>
                            <Radio value={2}>Leave it at my door</Radio>
                          </Radio.Group>
                        </div>
                        <textarea placeholder="e.g. ring the bell after dropoff, leave next to the porch, call upon arrival, etc." />
                        <div className="mapDropActionBtns">
                          <button
                            className="grayBtn"
                            onClick={() => {
                              setLocationTray(1);
                              setAdjustPin(false);
                              setMapDropdown(false);
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            className="pinkBtn"
                            onClick={(e) => saveLocation(e)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="menu-items">
            <ul>
              <li className="nav-links" id="language">
                <button className="nav-side-btn">
                  {/* <i
                    className="fa fa-home"
                    style={{ color: "#e50077", fontSize: 28 }}
                  ></i> */}
                Join Now
                </button>
              </li>
              

              <li className="nav-links" id="userBtn">
                <button ref={userBtn} onClick={() => setUserOpen(!userOpen)}>
                  <div style={{
                    
                   }}>
                    <HamMenuIcon />
                  </div>
                  <UserIcon />
                </button>

                <div className={`userDropdown ${userOpen && "open"}`}>
                  {!props.auth.isAuthenticated && (
                    <>
                      <h5 style={{ paddingLeft: 10 }}>Hi, </h5>
                      <div className="divider"></div>

                      <a
                        onClick={() => {
                          setRegProp(false);
                          setUserType("");
                          setLogin(true);
                        }}
                      >
                        <SignInIcon />
                        Sign In
                      </a>
                      <a onClick={() => setRegister(true)}>
                        <SignUpIcon />
                        Sign Up
                      </a>
                      <div className="divider"></div>
                      <Link to="/business">
                        <BriefcaseIcon />
                        For Businesses
                      </Link>
                      {/* <Link to="/how-it-works">
                        <BookFilled
                          style={{ color: "lightslategray", fontSize: 32 }}
                        />
                        How Xukini Works
                      </Link>
                      <Link to="/faqs">
                        <InfoCircleFilled
                          style={{ color: "lightslategray", fontSize: 32 }}
                        />
                        FAQs
                      </Link> */}
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
                          state: {
                            tab: "orders",
                          },
                        }}
                      >
                        <GiftFilled
                          style={{ color: "lightslategray", fontSize: 18 }}
                        />
                        Order History
                      </Link>
                      <Link
                        to={{
                          pathname: "#",
                        }}
                      >
                        <CreditCardFilled
                          style={{ color: "lightslategray", fontSize: 18 }}
                        />
                        Payment History
                      </Link>
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
                      <a>
                        <BellFilled
                          style={{ color: "lightslategray", fontSize: 18 }}
                        />
                        Notifications
                      </a>
                      {/* <div className="divider"></div> */}
                      <Link
                        to={{
                          pathname: linkPrefix + "reviews",
                          state: {
                            tab: "reviews",
                          },
                        }}
                      >
                        <ReviewIcon />
                        Ratings & Reviews
                      </Link>
                      <Link to={linkPrefix + "chats"}>
                        <MessageFilled
                          style={{ color: "lightslategray", fontSize: 18 }}
                        />
                        Chats
                      </Link>
                      <div className="divider"></div>
                      <a>
                        <i
                          style={{ fontSize: "22px !important" }}
                          className="fa fa-home"
                        ></i>
                        Marketplace
                      </a>
                      {/* <div className="divider"></div> */}
                      {/* <Link to="/business">
                        <BriefcaseIcon />
                        For Businesses
                      </Link> */}
                      {/* <Link to="/how-it-works">
                        <BookFilled
                          style={{ color: "lightslategray", fontSize: 32 }}
                        />
                        How Xukini works
                      </Link> */}
                      <div className="divider"></div>
                      {/* <Link to="/faqs">
                        <InfoCircleFilled
                          style={{ color: "lightslategray", fontSize: 32 }}
                        />
                        FAQs
                      </Link> */}
                      <a onClick={(e) => logout(e)}>
                        <LogoutIcon />
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
              </li>
            </ul>
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
        </div>
      </div>

      {/* {props.location && props.location.pathname !== "/" && (
        <SearchBox {...props} />
      )} */}
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
