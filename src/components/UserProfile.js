import React, { useState, useEffect, lazy } from "react";
// import Header from "./IndexShared/Header";
// import "../assets/css/index.css";
import "../assets/css/profile.css";
import Footer from "./IndexShared/Footer";
import { Link } from "react-router-dom";
import "./../assets/css/profile.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";
import Profile from "./UserProfile/Profile";
import Favourites from "./UserProfile/Favourites";
import Orders from "./UserProfile/Orders";
import BottomNav from "./IndexShared/BottomNav";
import Reviews from "./UserProfile/Reviews";
import Subscriptions from "./UserProfile/Subscriptions";
import MarketPlace from "./UserProfile/Marketplace";
import Chats from "./UserProfile/Chats";
import Notifications from "./UserProfile/Notifications";
import { Suspense } from "react";
const Header = lazy(()=>import("./IndexShared/Header"))

function UserProfile(props) {
  const [activeMenu, setActiveMenu] = useState(1);
  const [infoFactive, setInfoFactive] = useState(false);
  const [profCompDiv, setProfCompDiv] = useState(true);

  const [locality, setLocality] = useState(localStorage.getItem("locality"));
  const [localityCountry, setLocalityCountry] = useState(
    localStorage.getItem("localityCountry")
  );
  useEffect(() => {
    window.scrollTo(0,0)
    if (props.match.path === "/user/profile" || props.match.path === "/user/") {
      setActiveMenu(1);
    }
    if (props.match.path === "/user/orders") {
      setActiveMenu(2);
    }
    if (props.match.path === "/user/favourites") {
      setActiveMenu(3);
    }
    if (props.match.path === "/user/reviews") {
      setActiveMenu(4);
    }
    if (props.match.path === "/user/subscriptions") {
      setActiveMenu(5);
    }
 
    if (props.match.path === "/user/chats") {
      setActiveMenu(6);
    }
    if (props.match.path === "/user/notifications") {
      setActiveMenu(7);
    }
  }, [props.match.path]);

  

  return (
    <>
  
      <div className={`${props.match.path==="/user/chats"? "profile-mini" : "" }     profile`}>
        <div className={`banner`} style={{ backgroundColor: "#e50077",}}>
          <div className="bannerInfo">
            <i className="fe fe-arrow-down-circle" style={{ fontSize: 44 }}></i>
            <h2>Add a Banner Image</h2>
            <p>Optimal dimensions 3200 x 410px</p>
          </div>
        </div>

        <div className="avatarInfo">
          <div className="avatar"></div>
          <div className="avatarProfile">
            <h3>
              {props.auth.isAuthenticated && (props.auth.user.firstName && props.auth.user.lastName) ?
                props.auth.user.firstName + " " + props.auth.user.lastName  : "Username"}
            </h3>
            <span>
              <i className="fe fe-map-pin mr-1" style={{ color: "black" }}></i>{" "}
              {locality && localityCountry && locality + ", " + localityCountry}
            </span>

            <button className="avatarSocial vp">
              View your profile
              <i className="fe fe-info info-icon" />
            </button>
            <button className="avatarSocial f">
              Connect with facebook
              <i
                className="fe fe-info info-icon"
                onClick={() => setInfoFactive(!infoFactive)}
              >
                {infoFactive && (
                  <div className={infoFactive && "infoFactive"}>
                    <p>
                      Share your reviews on Facebook. When you write new
                      reviews, automatically have GRMND post an except of your
                      reviews to Facebook. You will always have an option not
                      otp post a review to Facebook.
                    </p>
                  </div>
                )}
              </i>
            </button>
            <p className="memberSince">Member since september 24, 2020</p>
          </div>
        </div>

        <div className="main-content">
          <ul className="menu-items">
            <Link to="/user/profile">
              <li
                className={activeMenu === 1 ? "active" : ""}
                // onClick={() => setActiveMenu(1)}
              >
                Profile
              </li>
            </Link>
            <Link to="/user/orders">
              <li
                className={activeMenu === 2 ? "active" : ""}
                // onClick={() => setActiveMenu(2)}
              >
                Orders
              </li>
            </Link>
            <Link to="/user/favourites">
              <li
                className={activeMenu === 3 ? "active" : ""}
                // onClick={() => setActiveMenu(3)}
              >
                Favourites
              </li>
            </Link>
            <Link to="/user/reviews">
              <li
                className={activeMenu === 4 ? "active" : ""}
                // onClick={() => setActiveMenu(4)}
              >
                Reviews
              </li>
            </Link>
            <Link to="/user/subscriptions">
            <li
              className={activeMenu === 5 ? "active" : ""}
              // onClick={() => setActiveMenu(5)}
            >
              Subscription
            </li>
              </Link>

            <Link to="/user/chats">
              <li
                className={activeMenu === 6 ? "active" : ""}
                // onClick={() => setActiveMenu(6)}
              >
                Chats
              </li>
            </Link>
            <Link to="/user/notifications">
              <li
                className={activeMenu === 7 ? "active" : ""}
                // onClick={() => setActiveMenu(7)}
              >
                Notifications
              </li>
            </Link>
          </ul>

          {activeMenu == 1 && <Profile {...props} />}
          {activeMenu == 2 && <Orders {...props}/>}
          {activeMenu == 3 && <Favourites {...props}/>}
          {activeMenu == 4 && <Reviews {...props}/>}
          {activeMenu == 5 && <Subscriptions {...props}/>}
          {/* {activeMenu == 6 && <MarketPlace />} */}
          {activeMenu == 6 && <Chats {...props}/>}
          {activeMenu == 7 && <Notifications {...props}/>}
        </div>
       
      </div>
 {console.log(props.match)}
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
