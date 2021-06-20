import React,{useState,useEffect,memo,Linking} from 'react'
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
                           <img style={{width:"100%",objectFit:"cover",height:"100%",borderRadius:"8px"}} src={props.lawfirmAgencies.singleLawfirm.profileImage.url}/>
                       </div>
                       
                   <div className="lawfirm-view-social">
                       <RiInstagramFill/>
                       <FaTwitter/>
                       <FaLinkedinIn/>
                       <FaFacebookF/>
                      
                   </div>
               </div>
                     
               <div className="lawfirm-view-paras">
                   <p>{props.lawfirmAgencies.singleLawfirm.lawfirmName}</p>
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
                   <p style={{paddingTop:".8rem"}}>{props.lawfirmAgencies.singleLawfirm.firmProfile}</p>
               </div>
               </div>
               <div className="lawfirm-upper-right">
                   <div className="lawfirm-view-btns">

                    <div className="lawfirm-views-click" onClick ={()=>Linking.openURL(`mailto:${props.auth.user.email}`)} >
                        <BsEnvelope fontSize="1.5rem"/>
                     
                    </div>
                    <div className="lawfirm-views-click">
                         <IoQrCodeSharp fontSize="1.5rem"/>
                    </div>
                    <div className="lawfirm-views-click">
                        <BiLike fontSize="1.5rem"/>
                    </div>
                    <div className="lawfirm-views-click">
                        <BiLike fontSize="1.5rem"/>
                    </div>
               
                   </div>
                    <div className="lawfirm-view-book">
                        <BsBookmarksFill/>
                        <p>book Appointment</p>
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
