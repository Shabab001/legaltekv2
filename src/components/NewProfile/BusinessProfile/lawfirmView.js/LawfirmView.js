import React, { useState, useEffect, memo, Linking } from "react";
import "./lawfirmView.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsBookmarksFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import Lower from "./lower";
import { GoVerified } from "react-icons/go";
import { useParams } from "react-router-dom";
import * as lawfirmActions from "../../../../actions/lawfirmActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaRegHeart } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;

const LawfirmView = props => {
  const [lawFirm, setLawFirm] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  let { id } = useParams();
  const getlawfirm = async () => {
    await props.actions.getLawfirmById(id);
  };

  useEffect(() => {
    getlawfirm();
  }, []);
  useEffect(() => {
    if (props.lawfirmAgencies.singleLawfirm) {
      setSelectedAddress(props.lawfirmAgencies.singleLawfirm.branches[0].id);
      setSelectedAddressIndex(0);
    }
  }, [props.lawfirmAgencies.singleLawfirm]);
  console.log(selectedAddressIndex);

  return (
    <div className="lawfirm-view-background">
      {props.lawfirmAgencies.singleLawfirm && (
        <div className="lawfirm-view-main">
          <div className="lawfirm-view-header">
            <div className="lawfirm-view-header-container">
              <div className="lawfirm-view-name">
                <p style={{ color: "yellow" }}>
                  {props.lawfirmAgencies.singleLawfirm.lawfirmName}
                </p>
              </div>
              <div className="lawfirm-view-heder-right">
                <div className="lawfirm-view-sectios">
                  <div className="lawfirm-view-sec">
                    <p>13,10posts</p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>13,10posts</p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>13,10posts</p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>13,10posts</p>
                  </div>
                </div>

                <div className="lawfirm-view-social">
                  <RiInstagramFill
                    className={
                      props.lawfirmAgencies.singleLawfirm.instagram
                        ? `lawfirm-social-insta insta`
                        : "lawfirm-social-insta"
                    }
                  />
                  <FaTwitter
                    className={
                      props.lawfirmAgencies.singleLawfirm.twitter
                        ? "lawfirm-social-twit twit"
                        : "lawfirm-social-twit"
                    }
                  />
                  <FaLinkedinIn
                    className={
                      props.lawfirmAgencies.singleLawfirm.linkedin
                        ? "lawfirm-social-linked link"
                        : "lawfirm-social-linked"
                    }
                  />
                  <FaFacebookF
                    className={
                      props.lawfirmAgencies.singleLawfirm.facebook
                        ? "lawfirm-social-fb fb"
                        : "lawfirm-social-fb"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lawfirm-upper">
            <div className="lawfirm-view-img">
              <img
                src={
                  props.lawfirmAgencies.singleLawfirm.coverImage
                    ? props.lawfirmAgencies.singleLawfirm.coverImage.url
                    : "#"
                }
              />
            </div>
            <div className="lawfirm-upper-left">
              <div className="lawfirm-image-container">
                <div className="lawfirm-veiw-image">
                  <img
                    src={
                      props.lawfirmAgencies.singleLawfirm.profileImage
                        ? props.lawfirmAgencies.singleLawfirm.profileImage.url
                        : "#"
                    }
                    alt="proPic"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Lower
            lawfirm={props.lawfirmAgencies.singleLawfirm}
            index={selectedAddressIndex}
          />
        </div>
      )}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(LawfirmView));
