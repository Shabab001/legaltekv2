import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import UserDropdownModal from "../modals/UserDropdownModal";
import userDropdownModal from "../modals/UserDropdownModal";
import LocationChooseModal from "../modals/LocationChoose"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

function BottomNav(props) {
  const [userDropdown, setUserDropdown] = useState(false);
  const [location,setLocationModal] = useState(false)
  const logout = (e) => {
    e.preventDefault();
    props.actions.logout(props.history);
    message.success(<p> Logged out Successfully!!" &nbsp; &#9749;</p>);
  };

  let linkPrefix = props.auth.isAuthenticated ? props.auth.user.userType == "CUSTOMER"? "/user/" : props.auth.user.userType == "BUSINESS"? "/business/" : "" : ""

  return (
    <div className="bottomNav">
      <ul>
        <li>
          {" "}
         
          <a ><i className="fa fa-search" style={{fontSize:22}}/>
          Explore</a>
        </li>
        <li>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: 'black'
            }}
          >
            <i className="fa fa-home" style={{ fontSize: 22, color:'darkslategray' }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="#" style={{justifyContent:'center',color:'#000'}} onClick={()=>setUserDropdown(true)}>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              height="22px"
              width="22px"
              style={{
                display: "block",
                fill: "darkslategray",
                color: "#000",
              }}
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
            User
          </Link>
        </li>
        {/* {props.auth.isAuthenticated && (
          <li>
            <Link to="#" style={{color:'black'}} onClick={(e) => logout(e)}>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "22",
                  width: "22",
                  fill: "#e50077",
                  color: "#000",
                }}
              >
                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
              </svg>
              Logout
            </Link>
          </li>
        )} */}
      </ul>

      {userDropdown && (
        <div className="modal-overlay">
          <UserDropdownModal 
          {...props}
          closeUserDropdown = {()=>setUserDropdown(false)}
          />
        </div>
      )}

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
