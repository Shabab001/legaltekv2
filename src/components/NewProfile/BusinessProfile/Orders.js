import React,{useEffect} from 'react'
import "./order.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
const Orders = (props) => {


useEffect(()=>{
  console.log("herrrrrrrrrrrrrrrrrrr")
  console.log(props.auth.user)
   if(props.auth.user && props.profile){
     console.log(props.profile.firmRegNoVerified);
   } 
},[props.profile.lawFirmRegistrationNumber, props.profile.branches])

  return (
    <div>
      <div className="order-headings">
        <p>Upload Your Supporting Documents</p>
        <p>Please Upload images of documents below. Some more info about required files</p>
      </div>
      <div className="order-percentage">
        <p>0%</p>
        <div className="order-percentage-box">
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
        </div>
      </div>
      <div className="order-required">
         <div className="order-required-first">
           <p>Required Documents</p>
           <p>Please see the list of items below that we need in order to lodge yoour application.</p>
         </div>
         <div className="order-required-second">
           <p>0 out of 4 files uploaded</p>
         </div>
      </div>
      <div className="order-sections">
        <div className={`Order-sections-first ${props.profile.firmRegNoVerified}`}>
          <div>

          <p>Registration Number For Lawfirm Named {props.profile.lawfirmName}</p>
          <p>2 files uploaded</p>
          </div>
          <div>
            { props.profile.firmRegNoVerified==="APPROVED"?
              <p>Approved</p>:
               props.profile.firmRegNoVerified==="REQUIRED"?
              <p>Required</p>:
               props.profile.firmRegNoVerified==="REJECTED"?
              <p>Rejected</p>:
               props.profile.firmRegNoVerified==="PENDING"?
              <p>Pending</p>:
              null
            }
          
          </div>
        </div>
        {props.profile && props.profile.branches &&
         props.profile.branches.map((item,index)=>{
           return(
            <div key={index} className={`order-section-second ${item.locationVerified}`}>
            <div>
            
            <p>Proof of location of {props.profile.lawfirmName} Lawfirm at {item.location.businessAddress}</p>
            </div>
            <div>
              {item.locationVerified ==="APPROVED"?
              <p>Approved</p>:
              item.locationVerified ==="REQUIRED"?
              <p>Required</p>:
              item.locationVerified ==="REJECTED"?
              <p>Rejected</p>:
              item.locationVerified ==="PENDING"?
              <p>Pending</p>:
              null
              
            }
             
            </div>
          </div>
           )
         })  
      
      
      }
  
      
         <div className="order-caution">
           <p>Your information is protected by bank-level security and covered by an industry first insurance policy</p>
         </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
