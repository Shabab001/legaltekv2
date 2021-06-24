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
import * as lawyerActions from "../../../../actions/lawyerActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {FaRegHeart} from "react-icons/fa"
import {BsFillCalendarFill} from "react-icons/bs"
import {GoGlobe} from "react-icons/go"
import {Link} from "react-router-dom"
import {  Select } from "antd";

const { Option } = Select;






const LawyerView = (props) => {
    const[lawFirm, setLawFirm]=useState(null)
    const [selectedAddress, setSelectedAddress] = useState("")
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null)
    let {id} =useParams()
    const getlawyers=async()=>{
        await props.actions.getLawyerById(id)
    }

    useEffect(()=>{
       getlawyers()
    
   

    },[])
    // useEffect(()=>{
    //     if(props.lawyer.singleLawyer){
    //         setSelectedAddress(props.lawfirmAgencies.singleLawfirm.branches[0].id)
    //         setSelectedAddressIndex(0)
    //     }
    // },[props.lawyer.singleLawyer])
    // console.log(selectedAddressIndex)

    return (
        <>
        {props.lawyer.singleLawyer &&
        <div className="lawfirm-view-main">
           <div className="lawfirm-upper">
               <div className="lawfirm-upper-left">
               <div className="lawfirm-image-container">
                   <div className="lawfirm-veiw-image">
                       <div className="lawfirm-veiw-image-verified">
                           <GoVerified/>
                       </div>
                     <img src={props.lawyer.singleLawyer.profileImage ?props.lawyer.singleLawyer.profileImage.url:"#"} alt="proPic" style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"8px"}}/>
                       </div>
                       
                   <div className="lawfirm-view-social">
                       <RiInstagramFill className={props.lawyer.singleLawyer.instagram? `lawfirm-social-insta insta`:"lawfirm-social-insta"}/>
                       <FaTwitter className={props.lawyer.singleLawyer.twitter? "lawfirm-social-twit twit":"lawfirm-social-twit"}/>
                       <FaLinkedinIn className={props.lawyer.singleLawyer.linkedin? "lawfirm-social-linked link":"lawfirm-social-linked"}/>
                       <FaFacebookF className={props.lawyer.singleLawyer.facebook? "lawfirm-social-fb fb" :"lawfirm-social-fb"}/>
                      
                   </div>
               </div>
                     
               <div className="lawfirm-view-paras">
                   <p style={{color:"yellow"}}>{props.lawyer.singleLawyer.firstname} {props.lawyer.singleLawyer.lastname}</p>
            
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
                   <p style={{paddingTop:".8rem" ,color:"yellow"}}>ksdfjkdsjf</p>
               </div>
               </div>
               <div className="lawfirm-upper-right">
                   <div className="lawfirm-view-btns">
                     <Link to={{pathname:`https://`}} target="_blank" >
                    <div className="lawfirm-views-click"  >
                    
                            
                        <GoGlobe fontSize="1.5rem" className={props.lawyer.singleLawyer.websiteName? "email" :""}/>
                        
                     
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
            <Lower />
        </div>
}
</>
    )
}

const mapStateToProps = (state) => ({
   auth: state.auth,
    lawyer:state.lawyers
 });
 const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(lawyerActions, dispatch),
  });

 export default connect(mapStateToProps,mapDispatchToProps)(memo(LawyerView));
