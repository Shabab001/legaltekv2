import React, { useState, useEffect, lazy } from "react";
import "../../assets/css/newProfile.css";
import { Link, Redirect,Switch,Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import Currencies from "../../assets/json/Currencies.json";
import Countries from "../../assets/json/Countries.json";

import Favourites from "./LawyerProfile/favourites";
import Review from "./LawyerProfile/review";
import Subscriptions from "./UserProfile/Subscriptions";
import Documents from "./LawyerProfile/documents"
import Chats from "./UserProfile/Chats";
import PaymentHistory from "./UserProfile/PaymentHistory";
import { message } from "antd";
import Message from "./LawyerProfile/message"
import Notifications from "./LawyerProfile/Notifications";
import Appointments from "./LawyerProfile/Appointments";
import LawyerAccount from "./LawyerProfile/lawyerAccount";
import Management from "./LawyerProfile/management";
const Profile = lazy( ()=>import("./UserProfile/Profile")) ;
const Orders = lazy( ()=>import("./UserProfile/Orders")) ;




const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];

function LawtyerProfile(props) {
  // render() {
  const dateFormat = "YYYY/MM/DD";
  let filteredCurrencies = Currencies;
  let filteredCountryCode = Countries;
  const [activeMenu, setActiveMenu] = useState(1);
  const [sidebarCollapse, setSidebarCollapse] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.location.pathname === "/lawyer/profile" || props.location.pathname === "/lawyer/") {
      setActiveMenu(1);
    }
    if (props.location.pathname === "/lawyer/appointments") {
      setActiveMenu(2);
    }
    if (props.location.pathname === "/lawyer/documents") {
      setActiveMenu(3);
    }
    if (props.location.pathname === "/lawyer/favourites") {
      setActiveMenu(4);
    }
    if (props.location.pathname === "/lawyer/reviews") {
      setActiveMenu(5);
    }
  

    if (props.location.pathname === "/lawyer/management") {
      setActiveMenu(6);
    }
    if (props.location.pathname === "/lawyer/notifications") {
      setActiveMenu(7);
    }
    if (props.location.pathname === "/lawyer/messaging") {
      setActiveMenu(8);
    }
  }, [props.location.pathname]);

  const logout = (e) => {
    e.preventDefault();
    props.actions.logout(props.history);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };

  return (
    <div className={`newProfile ${sidebarCollapse? '' : 'sidebar-collapse' }`}>
      <div className="sidebar">
      <div className="sidebar-head">
      <button onClick={()=>setSidebarCollapse(!sidebarCollapse)}><i className={`fa  ${sidebarCollapse? "fa-chevron-left": "fa-chevron-right"} `} /></button>
        <h3>{props.auth && props.auth.user && props.auth.user.firstName? props.auth.user.firstName : ""} {" "} {props.auth && props.auth.user && props.auth.user.lastName? props.auth.user.lastName : ""} {props.auth && props.auth.user && !props.auth.user.firstName &&  "User Profile"}</h3>
    </div>
    <div className="profile-pic">
               
               
               </div>
               <p>Lawyer Name</p>
        <ul>
          <Link to="/lawyer/profile" data-tooltip="My Account">
            <li className={activeMenu === 1 ? "active" : ""}>
              <span></span>
               <i className="fa fa-user-o" />
              <span className="link-title">Account</span>
            </li>
          </Link>
          <Link to="/lawyer/documents" data-tooltip="Subscriptions">
            <li className={activeMenu === 3 ? "active" : ""}>
            <span></span>
               <i className="fa fa-cog stroke-transparent" />{" "}
               <span className="link-title">Documents</span>
            </li>
          </Link>
          <Link to="/lawyer/appointments" data-tooltip="Order History">
            <li className={activeMenu === 2 ? "active" : ""}>
            <span></span>
              <i className="fa fa-gift stroke-transparent" />{" "}
               <span className="link-title">Apointments</span>
            </li>
          </Link>
       
          <Link to="/lawyer/favourites" data-tooltip="Favourites">
            <li className={activeMenu === 4 ? "active" : ""}>
            <span></span>
               <i className="fa fa-heart-o" /> <span className="link-title">Favourites</span>
            </li>
          </Link>
          <Link to="/lawyer/notifications" data-tooltip="Notifications">
            <li className={activeMenu === 7 ? "active" : ""}>
            <span></span>
              <i className="fa fa-bell-o" /><span className="link-title">Notifications</span> 
            </li>
          </Link>
          <Link to="/lawyer/reviews" data-tooltip="Reviews">
            <li className={activeMenu === 5 ? "active" : ""}>
            <span></span>
              <i className="fa fa-star-o" /> <span className="link-title">Reviews</span> 
            </li>
          </Link>
   
          <Link to="/lawyer/management" data-tooltip="Subscriptions">
            <li className={activeMenu === 6 ? "active" : ""}>
            <span></span>
               <i className="fa fa-cog stroke-transparent" />{" "}
               <span className="link-title">Managements</span>
            </li>
          </Link>
          <Link to="/lawyer/messaging" data-tooltip="Subscriptions">
            <li className={activeMenu === 8 ? "active" : ""}>
            <span></span>
               <i className="fa fa-envelope" />{" "}
               <span className="link-title">Messages</span>
            </li>
          </Link>
          <Link to="#" data-tooltip="Logout" onClick={(e)=>logout(e)}>
            <li >
            <span></span>
               <i className="fa fa-sign-out stroke-transparent" />{" "}
              
              <span className="link-title">Logout</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="main">
        {/* {activeMenu == 1 && <LawyerAccount {...props} />}

        {activeMenu == 2 && <Appointments {...props} />}
        {activeMenu == 3 && <Documents {...props} />}
        {activeMenu == 4 && <Favourites {...props} />}
        {activeMenu == 5 && <Review {...props} />}
        {activeMenu == 6 && <Management {...props} />}
        {activeMenu == 7 && <Notifications {...props} />}
        {activeMenu == 8 && <PaymentHistory {...props} />} */}
      
        <Route
              exact
              path="/lawyer/documents"
              component={Documents}
            />
              <Route
              exact
              path="/lawyer/profile"
              component={LawyerAccount}
            />
             <Route
              exact
              path="/lawyer/management"
              component={Management}
            />
             <Route
              exact
              path="/lawyer/reviews"
              component={Review}
            />
             <Route
              exact
              path="/lawyer/notifications"
              component={Notifications}
            />
             <Route
              exact
              path="/lawyer/messaging"
              component={Message}
            />
              <Route
              exact
              path="/lawyer/appointments"
              component={Appointments}
            />
             <Route
              exact
              path="/lawyer/favourites"
              component={Favourites}
            />
      
      
      
      
      
      </div>
    </div>
  );
  // }
}

// export default UserProfile;
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default LawtyerProfile
