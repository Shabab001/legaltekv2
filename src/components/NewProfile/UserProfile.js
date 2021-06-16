import React, { useState, useEffect, lazy,memo } from "react";
import "../../assets/css/newProfile.css";
// import "../../assets/css/profile.css";
import girl2 from "../../assets/img/girl2.jpg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import Currencies from "../../assets/json/Currencies.json";
import Countries from "../../assets/json/Countries.json";
import { Link } from "react-router-dom";
import Favourites from "./UserProfile/Favourites";
import Reviews from "./UserProfile/Reviews";
import Subscriptions from "./UserProfile/Subscriptions";
// import Chats from "./UserProfile/Chats";
import Chats from "./UserProfile/Chats";
import PaymentHistory from "./UserProfile/PaymentHistory";
import { message } from "antd";
import Notifications from "./UserProfile/Notifications";
import Appointments from "./UserProfile/Appointments";
import UserMessage from "./UserProfile/UserMessage";
import { startOfWeek } from "date-fns";
const Profile = lazy( ()=>import("./UserProfile/Profile")) ;
const Orders = lazy( ()=>import("./UserProfile/Orders")) ;




const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];

function UserProfile(props) {
  // render() {
  const dateFormat = "YYYY/MM/DD";
  let filteredCurrencies = Currencies;
  let filteredCountryCode = Countries;
  const [activeMenu, setActiveMenu] = useState(1);
  const [sidebarCollapse, setSidebarCollapse] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.match.path === "/user/profile" || props.match.path === "/user/") {
      setActiveMenu(1);
    }
    if (props.match.path === "/user/appointments") {
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
    if (props.match.path === "/user/paymenthistory") {
      setActiveMenu(8);
    }
  }, [props.match.path]);
useEffect(()=>{
  if(props.auth && props.auth.user && props.auth.user.customer){

    const fetchdata=async()=>{
      
      await props.actions.getProfile();
      await props.actions.getCustomerUserProfile(props.auth.user.customer.id?props.auth.user.customer.id:props.auth.user.customer)
    }
    fetchdata()
  }
},[])
 

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
        <h3>{props.customer && props.customer.firstname? props.customer.firstname : ""} {" "} {props.customer&& props.customer.lastname? props.customer.lastname : ""} {!props.customer.firstname &&  "User Profile"}</h3>
        <p>User</p>
    </div>
        
        <ul>
          <Link to="/user/profile" data-tooltip="My Account">
            <li className={activeMenu === 1 ? "active" : ""}>
              <span></span>
               <i className="fa fa-user-o" />
              <span className="link-title">My Account</span>
            </li>
          </Link>
          <Link to="/user/appointments" data-tooltip="Order History">
            <li className={activeMenu === 2 ? "active" : ""}>
            <span></span>
              <i className="fa fa-gift stroke-transparent" />{" "}
               <span className="link-title"> Appointments</span>
            </li>
          </Link>
      
          <Link to="/user/favourites" data-tooltip="Favourites">
            <li className={activeMenu === 3 ? "active" : ""}>
            <span></span>
               <i className="fa fa-heart-o" /> <span className="link-title">Favourites</span>
            </li>
          </Link>
          <Link to="/user/notifications" data-tooltip="Notifications">
            <li className={activeMenu === 7 ? "active" : ""}>
            <span></span>
              <i className="fa fa-bell-o" /><span className="link-title">Notifications</span> 
            </li>
          </Link>
          <Link to="/user/reviews" data-tooltip="Reviews">
            <li className={activeMenu === 4 ? "active" : ""}>
            <span></span>
              <i className="fa fa-star-o" /> <span className="link-title">Reviews</span> 
            </li>
          </Link>
          <Link to="/user/chats" data-tooltip="Messaging">
            <li className={activeMenu === 6 ? "active" : ""}>
            <span></span>
              <i className="fa fa-gift stroke-transparent" />{" "}
              <span className="link-title">Messaging</span> 
            </li>
          </Link>
          <Link to="/user/paymenthistory" data-tooltip="PaymentHistory">
            <li className={activeMenu === 8 ? "active" : ""}>
            <span></span>
               <i className="fa fa-cog stroke-transparent" />{" "}
               <span className="link-title">Payment History</span>
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
        {activeMenu == 1 && <Profile {...props} />}

        {activeMenu == 2 && <Appointments {...props} />}
        {activeMenu == 3 && <Favourites {...props} />}
        {activeMenu == 4 && <Reviews {...props} />}
        {activeMenu == 5 && <Subscriptions {...props} />}
        {activeMenu == 6 &&  <UserMessage {...props} />}
        {activeMenu == 7 && <Notifications {...props} />}
        {activeMenu == 8 && <PaymentHistory {...props} />}
      </div>
    </div>
  );
  // }
}

// export default UserProfile;
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
  customer:state.auth.customerUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(UserProfile));