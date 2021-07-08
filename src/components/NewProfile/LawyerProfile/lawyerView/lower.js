import React, { useState, memo } from "react";
import "./lower.css";
import List from "./list";
import ListSidebar from "./listSidebar";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsFillCalendarFill, BsEnvelope } from "react-icons/bs";
import * as lawfirmActions from "../../../../actions/lawfirmActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Lower = props => {
  const [tab, setTab] = useState("general");
  const handleTab = string => {
    if (string === "lawyers") {
      setTab(string);
    }
    if (string === "general") {
      setTab(string);
    }
    if (string === "blogs") {
      setTab(string);
    }
    if (string === "following") {
      setTab(string);
    }
    if (string === "reviews") {
      setTab(string);
    }
  };
  return (
    <>
      <div className="lawfirm-view-lower">
        <div className="lawfirm-view-lower-top">
          <div className="lawfirm-view-lower-top-btns">
            <div
              className={
                tab === "general"
                  ? "lawfirm-view-lower-btns" + ` ${tab}`
                  : "lawfirm-view-lower-btns"
              }
              onClick={() => handleTab("general")}
            >
              <p>General</p>
            </div>
            <div
              className={
                tab === "blogs"
                  ? "lawfirm-view-lower-btns" + ` ${tab}`
                  : "lawfirm-view-lower-btns"
              }
              onClick={() => handleTab("blogs")}
            >
              <p>Posts</p>
            </div>

            <div
              className={
                tab === "following"
                  ? "lawfirm-view-lower-btns" + ` ${tab}`
                  : "lawfirm-view-lower-btns"
              }
              onClick={() => handleTab("following")}
            >
              <p>Following</p>
            </div>
          </div>
          <div className="lawfirm-view-lower-optns-wrapper">
            <div
              className={
                tab === "reviews"
                  ? "lawfirm-view-lower-optns" + ` ${tab}`
                  : "lawfirm-view-lower-optns"
              }
              onClick={() => handleTab("reviews")}
            >
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lawfirm-view-action">
        <div className="lawfirm-view-action-container">
          <div className="lawfirm-view-action-btn">
            <div className="lawfirm-view-book">
              <BsFillCalendarFill />
              <p>Book Appointment</p>
            </div>
            <div className="lawfirm-view-message">
              <BsEnvelope />
              <p>Message</p>
            </div>
          </div>
          <div className="lawfirm-view-btns">
            <div className="lawfirm-views-click" style={{ color: "yellow" }}>
              <IoQrCodeSharp fontSize="1.5rem" />
            </div>
            <Link target="_blank">
              <div className="lawfirm-views-click">
                <GoGlobe fontSize="1.5rem" className={"email"} />
              </div>
            </Link>
            <div className="lawfirm-views-click" style={{ color: "yellow" }}>
              <IoQrCodeSharp fontSize="1.5rem" />
            </div>
            <div className="lawfirm-views-click" style={{ color: "yellow" }}>
              <FaRegHeart fontSize="1.5rem" />
            </div>
            <div className="lawfirm-views-click" style={{ color: "yellow" }}>
              <BiLike fontSize="1.5rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="lawfirm-view-lower-grid">
        <List lawfirm={props.lawfirm} tab={tab} />
        <ListSidebar index={props.index} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  lawfirmAgencies: state.lawfirmAgencies,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(lawfirmActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Lower));
