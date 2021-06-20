import React,{useEffect,useState,memo} from 'react'
import "./order.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import DocumentsType from "./Documents/documentsType"
import RegNoDocs from "./Documents/regNoDocs"
import LocationDocs from './Documents/locationDocs';
import DocCaution from './Documents/docCaution';
const Orders = (props) => {
const [approvedBranch,setApprovedBranch]=useState(false);
const [rejectedBranch,setRejectedBranch]=useState(false);
const [pendingBranch,setPendingBranch]=useState(false);
const [requiredBranch,setRequiredBranch]=useState(false);

useEffect(()=>{
  if(props.profile && props.profile.branches){
   props.profile.branches.forEach(item => {
          if(item.locationVerified==="REQUIRED"){
            setRequiredBranch(true)
          }
          if(item.locationVerified==="APPROVED"){
            setApprovedBranch(true)
          }
          if(item.locationVerified==="REJECTED"){
            setRejectedBranch(true)
          }
          if(item.locationVerified==="PENDING"){
            setPendingBranch(true)
          }
     
   });
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
      {props.profile.firmRegNoVerified=="REQUIRED" || requiredBranch? 
      <div className="order-segments">
         <DocumentsType document={"Required"} />
      <div className="order-sections">

      {props.profile.firmRegNoVerified=="REQUIRED"?
                 <RegNoDocs type={"Required"} lawfirmName={props.profile && props.profile.lawfirmName} regNo={props.profile.lawFirmRegistrationNumber}  css={"REQUIRED"}/>:null
                 }
        {props.profile && props.profile.branches &&
         props.profile.branches.map((item,index)=>{
           if(item.locationVerified =="REQUIRED"){
            console.log(item)
             return(
               <LocationDocs docs={item.document} id={item.id} key={index} lawfirmName={props.profile && props.profile.lawfirmName} businessAddress={item.location.businessAddress} type={"Required"} css={"REQUIRED"} />
               )
              }
              else{
                return null;
              }
         })  
      
      
      }
      </div>
      </div>:null
      }
       {props.profile.firmRegNoVerified=="REJECTED" || rejectedBranch? 
      <div className="order-segments">
         <DocumentsType document={"Rejected"}/>
      <div className="order-sections">

      {props.profile.firmRegNoVerified=="REJECTED"?
                 <RegNoDocs type={"Rejected"} lawfirmName={props.profile && props.profile.lawfirmName} regNo={props.profile.lawFirmRegistrationNumber } css={"REQUIRED"}/>:null
                 }
        {props.profile && props.profile.branches &&
         props.profile.branches.map((item,index)=>{
           if(item.locationVerified =="REJECTED"){

             return(
               <LocationDocs docs={item.document} id={item.id} key={index} lawfirmName={props.profile && props.profile.lawfirmName} businessAddress={item.location.businessAddress} type={"Rejected"} css={"REQUIRED"} />
               )
              }
              else{
                return null;
              }
         })  
      
      
      }
      </div>
      </div>:null
      }
       {props.profile.firmRegNoVerified=="PENDING" || pendingBranch? 
      <div className="order-segments">
         <DocumentsType document={"Pending"}/>
      <div className="order-sections">

      {props.profile.firmRegNoVerified=="PENDING"?
                 <RegNoDocs type={"Pending"} lawfirmName={props.profile && props.profile.lawfirmName} regNo={props.profile.lawFirmRegistrationNumber}css={"PENDING"}/>:null
                 }
        {props.profile && props.profile.branches &&
         props.profile.branches.map((item,index)=>{
           if(item.locationVerified =="PENDING"){

             return(
               <LocationDocs docs={item.document} id={item.id} key={index} lawfirmName={props.profile && props.profile.lawfirmName} businessAddress={item.location.businessAddress} type={"Pending"} css={"PENDING"} />
               )
              }
              else{
                return null;
              }
         })  
      
      
      }
      </div>
      </div>:null
      }
       {props.profile.firmRegNoVerified=="APPROVED" || approvedBranch? 
      <div className="order-segments">
         <DocumentsType document={"Approved"}/>
      <div className="order-sections">

      {props.profile.firmRegNoVerified=="APPROVED"?
                 <RegNoDocs type={"Approved"} lawfirmName={props.profile && props.profile.lawfirmName} regNo={props.profile.lawFirmRegistrationNumber} css={"APPROVED"}/>:null
                 }
        {props.profile && props.profile.branches &&
         props.profile.branches.map((item,index)=>{
           if(item.locationVerified =="APPROVED"){
                  
             return(
               <LocationDocs docs={item.document} id={item.id} key={index} lawfirmName={props.profile && props.profile.lawfirmName} businessAddress={item.location.businessAddress} type={"Approved"} css={"APPROVED"} />
               )
              }
              else{
                return null;
              }
         })  
      
      
      }
      </div>
      </div>:null
      }
      
     <DocCaution/>
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Orders));
