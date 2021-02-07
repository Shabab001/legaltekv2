import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import "./../../../assets/css/notifications.css";

function Notifications() {
  return (
    <div className="user-profile tab">
      <h1>Notifications</h1>
      <div className="notif-row">
        <div className="notif-cat">
          <ul>
            <li>
              <i className="fa fa-futbol-o" />
              All <span className="notif-count">10</span>
            </li>
            <li>
              <i className="fas fa-volleyball-ball" />
              Orders
            </li>
            <li>
              <i className="fas fa-table-tennis" /> Blogs{" "}
              <span className="notif-count">2</span>
            </li>
            <li>
              <i className="fas fa-golf-ball" />
              Review
            </li>
          </ul>
        </div>

        <div className="notif-list">
          <span className="markAll">Mark all as read</span>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
          <div className="notif-item">
            <div className="avatar">
              <img src={require("../../../assets/images/user.png")} alt="" />
            </div>
            <div className="notif-detail">
              <p>Netta Rosenburg likes a post you shared.</p>
              <span>3 Min ago</span>
            </div>
            <div className="notif-actions">
              <p>Read</p>
              <p>Dismiss</p>
            </div>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
