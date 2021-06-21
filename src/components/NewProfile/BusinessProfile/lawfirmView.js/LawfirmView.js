import React,{useState,useEffect,memo} from 'react'
import "./lawfirmView.css"
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {IoQrCodeSharp} from "react-icons/io5";
import{BsEnvelope} from "react-icons/bs"
import {BsBookmarksFill} from "react-icons/bs"
import {BiLike} from "react-icons/bi"
import Lower from './lower'
import {GoVerified} from "react-icons/go"
import {useParams} from "react-router-dom"
import * as lawfirmActions from "../../../../actions/lawfirmActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {FaRegHeart} from "react-icons/fa"
import {BsFillCalendarFill} from "react-icons/bs"
import {GoGlobe} from "react-icons/go"
import {Link} from "react-router-dom"






const LawfirmView = (props) => {
    const[lawFirm, setLawFirm]=useState(null)
    let {id} =useParams()
    const getlawfirm=async()=>{
        await props.actions.getLawfirmById(id)
    }

    useEffect(()=>{
       getlawfirm()
   

    },[])
    console.log(lawFirm)

    return (
        <>
        {props.lawfirmAgencies.singleLawfirm &&
        <div className="lawfirm-view-main">
           <div className="lawfirm-upper">
               <div className="lawfirm-upper-left">
               <div className="lawfirm-image-container">
                   <div className="lawfirm-veiw-image">
                       <div className="lawfirm-veiw-image-verified">
                           <GoVerified/>
                       </div>
                     <img src={props.lawfirmAgencies.singleLawfirm.profileImage ?props.lawfirmAgencies.singleLawfirm.profileImage.url:"#"} alt="proPic" style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"8px"}}/>
                       </div>
                       
                   <div className="lawfirm-view-social">
                       <RiInstagramFill className={props.lawfirmAgencies.singleLawfirm.instagram? `lawfirm-social-insta insta`:"lawfirm-social-insta"}/>
                       <FaTwitter className={props.lawfirmAgencies.singleLawfirm.twitter? "lawfirm-social-twit twit":"lawfirm-social-twit"}/>
                       <FaLinkedinIn className={props.lawfirmAgencies.singleLawfirm.linkedin? "lawfirm-social-linked link":"lawfirm-social-linked"}/>
                       <FaFacebookF className={props.lawfirmAgencies.singleLawfirm.facebook? "lawfirm-social-fb fb" :"lawfirm-social-fb"}/>
                      
                   </div>
               </div>
                     
               <div className="lawfirm-view-paras">
                   <p style={{color:"yellow"}}>{props.lawfirmAgencies.singleLawfirm.lawfirmName}</p>
                   <p>lawfirm Address</p>
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
                   <p style={{paddingTop:".8rem" ,color:"yellow"}}>{props.lawfirmAgencies.singleLawfirm.firmProfile}</p>
               </div>
               </div>
               <div className="lawfirm-upper-right">
                   <div className="lawfirm-view-btns">
                     <Link to={{pathname:`https://${props.lawfirmAgencies.singleLawfirm.websiteName}`}} target="_blank" >
                    <div className="lawfirm-views-click"  >
                    
                            
                        <GoGlobe fontSize="1.5rem" className={props.lawfirmAgencies.singleLawfirm.websiteName? "email" :""}/>
                        
                     
                    </div>
                    </Link>
                    <div className="lawfirm-views-click" style={{color:"yellow"}}>
                         <IoQrCodeSharp fontSize="1.5rem"/>
                    </div>
                    <div className="lawfirm-views-click" style={{color:"yellow"}}>
                        <FaRegHeart fontSize="1.5rem"/>
                    </div>
                    <div className="lawfirm-views-click" style={{color:"yellow"}}>
                        <BiLike fontSize="1.5rem"/>
                    </div>
               
                   </div>
                    <div className="lawfirm-view-message">
                        <BsEnvelope/>
                        <p>Message</p>
                    </div>
                    <div className="lawfirm-view-book">
                        <BsFillCalendarFill/>
                        <p>Book Appointment</p>
                    </div>

               </div>
           </div>
            <Lower lawfirm={props.lawfirmAgencies.singleLawfirm}/>
        </div>
}
</>
    )
}

const mapStateToProps = (state) => ({
   auth: state.auth,
   profile: state.auth.lawfirmUserProfile,
   lawfirmAgencies:state.lawfirmAgencies
 });
 const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(lawfirmActions, dispatch),
  });

 export default connect(mapStateToProps,mapDispatchToProps)(memo(LawfirmView));
