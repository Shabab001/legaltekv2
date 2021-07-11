import React, { useState, useEffect, memo } from "react";
import "./lawfirmView.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmarksFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import Lower from "./lower";
import { GoVerified } from "react-icons/go";
import { useParams } from "react-router-dom";
import * as lawyerActions from "../../../../actions/lawyerActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaRegHeart } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;

const LawyerView = props => {
  const [lawFirm, setLawFirm] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  let { id } = useParams();
  const getlawyers = async () => {
    await props.actions.getLawyerById(id);
  };

  useEffect(() => {
    getlawyers();
  }, []);
  // useEffect(()=>{
  //     if(props.lawyer.singleLawyer){
  //         setSelectedAddress(props.lawfirmAgencies.singleLawfirm.branches[0].id)
  //         setSelectedAddressIndex(0)
  //     }
  // },[props.lawyer.singleLawyer])
  // console.log(selectedAddressIndex)

  return (
    <div className="lawfirm-view-background">
      {props.lawyer && (
        <div className="lawfirm-view-main">
          <div className="lawfirm-view-header">
            <div className="lawfirm-view-header-container">
              <div className="lawfirm-view-name">
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    lineHeight: "1.1",
                  }}
                >
                  <span style={{ color: "white", fontSize: "1.6rem" }}>
                    {props.lawyer.firstname} {props.lawyer.lastname}{" "}
                  </span>{" "}
                  <br />{" "}
                  <span style={{ color: "white", fontSize: "1rem" }}>
                    {props.lawyer.lawfirm_user.lawfirmName}
                  </span>
                </p>
              </div>
              <div className="lawfirm-view-heder-right">
                <div className="lawfirm-view-sectios">
                  <div className="lawfirm-view-sec">
                    <p>
                      1310 <span style={{ fontSize: ".8rem" }}>Posts</span>
                    </p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>
                      12M <span style={{ fontSize: ".8rem" }}>Followers</span>
                    </p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>
                      20 <span style={{ fontSize: ".8rem" }}>Likes</span>
                    </p>
                  </div>
                  <div className="lawfirm-view-sec">
                    <p>
                      200 <span style={{ fontSize: ".8rem" }}>Reviews</span>
                    </p>
                  </div>
                </div>

                <div className="lawfirm-view-social">
                  <RiInstagramFill
                    className={
                      props.lawyer.instagram
                        ? `lawfirm-social-insta insta`
                        : "lawfirm-social-insta"
                    }
                  />
                  <FaTwitter
                    className={
                      props.lawyer.twitter
                        ? "lawfirm-social-twit twit"
                        : "lawfirm-social-twit"
                    }
                  />
                  <FaLinkedinIn
                    className={
                      props.lawyer.linkedin
                        ? "lawfirm-social-linked link"
                        : "lawfirm-social-linked"
                    }
                  />
                  <FaFacebookF
                    className={
                      props.lawyer.facebook
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
                  props.lawyer.coverImage ? props.lawyer.coverImage.url : "#"
                }
              />
            </div>
            <div className="lawfirm-upper-left">
              <div className="lawfirm-image-container">
                <div className="lawfirm-veiw-image">
                  <img
                    src={
                      props.lawyer.profileImage
                        ? props.lawyer.profileImage.url
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
          <Lower lawfirm={props.lawyer} index={selectedAddressIndex} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  lawyer: state.lawyers.singleLawyer,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(lawyerActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(LawyerView));
