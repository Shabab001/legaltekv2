import React,{useEffect,useState,memo} from 'react'
import "./order.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import DocumentsType from "./Documents/documentsType"
import RegNoDocs from "./Documents/regNoDocs"
import LocationDocs from './Documents/locationDocs';
import DocCaution from './Documents/docCaution';
import Progress from './Documents/progress';


const Orders = (props) => {
const [approvedBranch,setApprovedBranch]=useState(false);
const [rejectedBranch,setRejectedBranch]=useState(false);
const [pendingBranch,setPendingBranch]=useState(false);
const [requiredBranch,setRequiredBranch]=useState(false);
let [rejectedFiles,setRejectedFiles]=useState(0);
let [requiredFiles,setRequiredFiles]=useState(0);
let [pendingFiles,setPendingFiles]=useState(0);
let [approvedFiles,setApprovedFiles]=useState(0);
let [totalFiles,setTotalFiles]=useState(0);
let [percentage, setPercentage]=useState(0)









useEffect(()=>{
  if(props.profile && props.profile.branches){
    setTotalFiles(props.profile.branches.length+1)
   props.profile.branches.forEach(item => {

          if(item.locationVerified==="REQUIRED"){
                   setRequiredFiles(++requiredFiles);
            setRequiredBranch(true)
          }
          if(item.locationVerified==="APPROVED"){
            setApprovedFiles(++approvedFiles);
            setApprovedBranch(true)
          }
          if(item.locationVerified==="REJECTED"){
            setRejectedFiles(++rejectedFiles);
            setRejectedBranch(true)
          }
          if(item.locationVerified==="PENDING"){
            setPendingFiles(++pendingFiles);
            setPendingBranch(true)
          }
     
   });
   if(props.profile.firmRegNoVerified=="REQUIRED"){
    setRequiredFiles(++requiredFiles)
  }
  if(props.profile.firmRegNoVerified=="REJECTED"){
    setRejectedFiles(++rejectedFiles)
  }
  if(props.profile.firmRegNoVerified=="PENDING"){
    setPendingFiles(++pendingFiles)
  }
  if(props.profile.firmRegNoVerified=="APPROVED"){
    setApprovedFiles(++approvedFiles)
  }

  }
},[props.profile.lawFirmRegistrationNumber, props.profile.branches])
console.log(percentage)
useEffect(()=>{

  if(totalFiles > 0 && approvedFiles > 0){
    
    setPercentage((100*approvedFiles)/totalFiles)
  }
},[totalFiles,approvedFiles])

  return (
    <div style={{color:"var(--primary)"}}>
      <div className="order-headings">
        <p>Upload Required Documents to get Verified</p>
        <p>We are commited to help Law Firms setting-up and maintaing their Legal Practise online. Our digital software equips you to communicate and practise on a globe scale. When searching for the right Legal Professionals to address client's needs, they will verified Badge on your public listing. Verified Badges indicate the Law Firm has undergone and approved by our vetting agency.</p>
      </div>
       <Progress done={percentage?`${percentage}`:"0"}/>
      {props.profile.firmRegNoVerified=="REQUIRED" || requiredBranch? 
      <div className="order-segments">
         <DocumentsType document={"Required"} remainingFiles={requiredFiles} totalFiles={totalFiles} />
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
         <DocumentsType document={"Rejected"} remainingFiles={rejectedFiles} totalFiles={totalFiles}/>
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
         <DocumentsType document={"Pending"} remainingFiles={pendingFiles} totalFiles={totalFiles}/>
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
         <DocumentsType document={"Approved"} remainingFiles={approvedFiles} totalFiles={totalFiles}/>
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
