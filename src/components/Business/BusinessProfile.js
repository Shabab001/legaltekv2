import React, { useState, useEffect } from "react";
import Header from "../IndexShared/Header";
import Footer from "../IndexShared/Footer";
import { Link } from "react-router-dom";
import "./../../assets/css/profile.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import Profile from './BusinessProfile/Profile'
import Favourites from "./BusinessProfile/Favourites";
import Orders from "./BusinessProfile/Orders";
import Reviews from "./BusinessProfile/Reviews";
import Subscriptions from "./BusinessProfile/Subscriptions";
import Chats from "./BusinessProfile/Chats";
import Notifications from "./BusinessProfile/Notifications"
import BottomNav from "../IndexShared/BottomNav";
import Menu from "./BusinessProfile/Menu";
import Blogs from "./BusinessProfile/Blogs";
import Portfolio from "./BusinessProfile/Portfolio";

function BusinessProfile(props) {
  const [activeMenu, setActiveMenu] = useState(1);
  const [infoFactive, setInfoFactive] = useState(false);
  const [profCompDiv, setProfCompDiv] = useState(true);

  const [locality, setLocality] = useState(localStorage.getItem("locality"));
  const [localityCountry, setLocalityCountry] = useState(
    localStorage.getItem("localityCountry")
  );
  useEffect(() => {
    window.scrollTo(0,0)
    if (props.match.path == "/business/profile") {
      setActiveMenu(1);
    }
    if (props.match.path == "/business/orders") {
      console.log('hi')
      setActiveMenu(2);
    }
    if (props.match.path == "/business/favourites") {
      setActiveMenu(3);
    }
    if (props.match.path == "/business/reviews") {
      setActiveMenu(4);
    }
    if (props.match.path == "/business/subscriptions") {
      setActiveMenu(5);
    }
  
    if (props.match.path == "/business/chats") {
      setActiveMenu(6);
    }
    if (props.match.path == "/business/notifications") {
      setActiveMenu(7);
    }
    if (props.match.path == "/business/menu") {
      setActiveMenu(8);
    }
    if (props.match.path == "/business/blogs") {
      setActiveMenu(9);
    }
    if (props.match.path == "/business/portfolio") {
      setActiveMenu(10);
    }
  }, [props.match.path]);

  return (
    <>
    
      <div className={`${props.match.path=="/user/chats"? "profile-mini" : "" }     profile`}>
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
                      reviews, automatically have Xukini post an except of your
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

        <div className="main-content first">
          <ul className="menu-items">
            <Link to="/business/profile">
              <li
                className={activeMenu == 1 ? "active" : ""}
                // onClick={() => setActiveMenu(1)}
              >
                Profile
              </li>
            </Link>
            <Link to="/business/orders">
              <li
                className={activeMenu == 2 ? "active" : ""}
                // onClick={() => setActiveMenu(2)}
              >
                Orders
              </li>
            </Link>
            <Link to="/business/favourites">
              <li
                className={activeMenu == 3 ? "active" : ""}
                // onClick={() => setActiveMenu(3)}
              >
                Favourites
              </li>
            </Link>
            <Link to="/business/reviews">
              <li
                className={activeMenu == 4 ? "active" : ""}
                // onClick={() => setActiveMenu(4)}
              >
                Reviews
              </li>
            </Link>
            <Link to="/business/subscriptions">
            <li
              className={activeMenu == 5 ? "active" : ""}
              // onClick={() => setActiveMenu(5)}
            >
              Subscription
            </li>
              </Link>
           
            <Link to="/business/chats">
              <li
                className={activeMenu == 6 ? "active" : ""}
                // onClick={() => setActiveMenu(6)}
              >
                Chats
              </li>
            </Link>

            <Link to="/business/notifications">
              <li
                className={activeMenu == 7 ? "active" : ""}
                // onClick={() => setActiveMenu(7)}
              >
                Notifications
              </li>
            </Link>

            <Link to="/business/menu">
            <li
              className={activeMenu == 8 ? "active" : ""}
              // onClick={() => setActiveMenu(8)}
            >
              Menu
            </li>
              </Link>
           
            <Link to="/business/blogs">
              <li
                className={activeMenu == 9 ? "active" : ""}
                // onClick={() => setActiveMenu(9)}
              >
                Blogs
              </li>
            </Link>

            <Link to="/business/portfolio">
              <li
                className={activeMenu == 10 ? "active" : ""}
                // onClick={() => setActiveMenu(10)}
              >
                Portfolio
              </li>
            </Link>
          </ul>

        
        </div>
        {activeMenu == 1 && <div className="main-content">
           <Profile /> </div>}
          {activeMenu == 2 && <div className="main-content"><Orders /></div>}
          {activeMenu == 3 && <div className="main-content"><Favourites /></div>}
          {activeMenu == 4 && <div className="main-content"><Reviews /></div>}
          {activeMenu == 5 && <div className="main-content"><Subscriptions /></div>}
          {activeMenu == 6 && <div className="main-content"><Chats /></div>}
          {activeMenu == 7 && <div className="main-content"><Notifications /></div>}
          {activeMenu == 8 && <div className="main-content"><Menu/></div>}
          {activeMenu == 9 && <Blogs/>}
          {activeMenu == 10 && <Portfolio/>}
      </div>
    
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);
