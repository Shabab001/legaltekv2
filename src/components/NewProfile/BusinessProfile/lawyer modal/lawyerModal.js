import React,{useState,useRef,useEffect} from 'react'
import ReactDom from "react-dom"
import "./LawyerModal.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../../actions/userActions";
import {VscChromeClose} from "react-icons/vsc"
import OtpCard from './otpCard'
import { message , Select} from "antd";
import validator from "validator";
import PhoneInput from "react-phone-input-2";
import { Multiselect } from 'multiselect-react-dropdown';


const LawyerModal = (props) => {
  const [otp,setOtp]=useState(false)
  const[valid, setValid]=useState(false);
  const[nameMessage,setNameMessage]=useState(null)
  const[titleMessage,setTitleMessage]=useState(null)
  const[emailMessage,setEmailMessage]=useState(null)
  const[passwordMessage,setPassMessage]=useState(null)
  const[confPassMessage,setConfPassMessage]=useState(null)
  const[phoneMessage,setPhoneMessage]=useState(null)
  const[numOflawyers, setNumOfLawyers]=useState(props.profile?props.profile.numOflawyers:0)
  const[catMessage,setCatMessage]=useState(null);
  const[roleMessage,setRoleMessage]=useState(null);
  const[fnameMessage,setfnameMessage]=useState(null);
  const[lnameMessage,setlnameMessage]=useState(null);
  
  
    const [countryCode, setCountryCode] = useState({
    value: localStorage.getItem('calling_code')?localStorage.getItem('calling_code'): "",
    message: "",
    isValid: true,
  });
  
const[lawyerInputs,setLawyerInput]=useState({
  username:"",
  firstname:"",
  lastname:"",
  title:"",
  email:"",
  phone:"",
  password:"",
  confirmPass:"",
  role:"lawyer",
  lawfirmId:"",
  specializedRole:[],
  category:[]

})
const options= [{value: 'Senior-Partner', id: 1},{value: 'Partner', id: 2},{value: 'Assosiate', id: 3},{value: 'Legal-Assistant', id: 4},{value: 'Law-Clerk', id: 5}]
const categories =[{value:"criminology" ,id:1},{value:"civil", id:3} ]
const onSelect=(selectedList, selectedItem) =>{
  console.log(selectedItem.value)
  let arr =lawyerInputs.specializedRole;
  setLawyerInput({...lawyerInputs, specializedRole:[...arr,selectedItem.value]})
 
}

const onRemove =(selectedList, removedItem)=> {
  var newArray = lawyerInputs.specializedRole.filter(e => e !==removedItem.value);
  console.log(newArray);
  setLawyerInput({...lawyerInputs,specializedRole:[...newArray]})
}
const onCategoryChange=(selectedList,selectedItem)=>{
  let arr =lawyerInputs.category;
  setLawyerInput({...lawyerInputs, category:[...arr,selectedItem.value]})
 

}
const onCategoryRemove =(selectedList,selectedItem)=>{
  var newArray = lawyerInputs.category.filter(e => e !== selectedItem.value);
console.log(newArray);
setLawyerInput({...lawyerInputs,category:[...newArray]})
}

useEffect(()=>{
  if(props.profile){
    setLawyerInput({...lawyerInputs,lawfirmId:props.profile.id})
    setNumOfLawyers(props.profile.numbersOfLawyers)
  }
},[props.profile])
const handleInputChange=(e)=>{  
  if(e.target.name ==="phone"){
    if (
      (e.target.value.length <= 10 &&
        e.target.value.match(/^[0-9]+$/)) ||
      e.target.value.length == 0
    ) {
    if(countryCode.value){
      setLawyerInput({   ...lawyerInputs,
        phone:`${countryCode.value}${e.target.value}` });
    
      }  }
  }
  else{
  console.log(e.target.name);
  setLawyerInput({
    ...lawyerInputs,
    [e.target.name]:e.target.value
  })
}
}
console.log(lawyerInputs)

const onSumbitInputs =async()=>{
  if(props.profile && props.profile.numbersOfLawyers &&  props.profile.numOflawyers!==0 ){

  if(!lawyerInputs.username){
    setNameMessage("name field empty")
  }
  else{
    setNameMessage(null)
  }
  if(!lawyerInputs.firstname){
    setfnameMessage("First Nmae is empty")
  }
  else{
    setfnameMessage(null)
  }
  if(!lawyerInputs.lastname){
    setlnameMessage("Last Name is empty")
  }
  else{
    setlnameMessage(null);
  }
  if(lawyerInputs.category.length ===0){
    setCatMessage("Area of Expertise is empty")
  }
  else{
    setCatMessage(null)
  }
  if(lawyerInputs.specializedRole.length ===0){
    setRoleMessage("Specialized role is empty")
  }
  else{
    setRoleMessage(null)
  }

  if(!lawyerInputs.password){
    setPassMessage("passwod field empty")
  }
  else{
    setPassMessage(null)
  }
  if(!lawyerInputs.confirmPass){
    setConfPassMessage("confirm Password field empty")
  }
  else{
    setConfPassMessage(null)
  }
  if(!lawyerInputs.email){
    if(!lawyerInputs.phone){
    setEmailMessage("email field empty")
    }
  }
  else if(lawyerInputs.email && !validator.isEmail(lawyerInputs.email)){
    setEmailMessage("email is not valid")
  }
  else{
    setEmailMessage(null)
    setPhoneMessage(null)
  }
  if(!lawyerInputs.phone){
    if(!lawyerInputs.email){
    setPhoneMessage("phone field empty")
    }
  }
  else{
    setEmailMessage(null)
    setPhoneMessage(null)
  }



  if(lawyerInputs.password !== lawyerInputs.confirmPass){ 
    message.error("password and confirm password did not match")
    return;
  }

if(  
  lawyerInputs.username &&
  lawyerInputs.confirmPass &&
  lawyerInputs.password && 
  lawyerInputs.category.length!==0 &&
  lawyerInputs.specializedRole.length!==0 &&
  (lawyerInputs.phone || lawyerInputs.email) &&
  lawyerInputs.firstname && 
  lawyerInputs.lastname
){
  
    if (lawyerInputs.phone.length !== 14) {
    
      setPhoneMessage("not a valid phone number")
      return;
    }
    else{
      setPhoneMessage(null)
    }

  let inputs ={
    username:lawyerInputs.username,
    password:lawyerInputs.password,
     email:lawyerInputs.email,
    phone:lawyerInputs.phone,
    role:lawyerInputs.role,
    lawfirmId:lawyerInputs.lawfirmId,
    firstname:lawyerInputs.firstname,
    lastname:lawyerInputs.lastname,
    specializedRole:lawyerInputs.specializedRole,
    expertiseCategory:lawyerInputs.category
    
  }
  let newUser=await props.actions.register(inputs)
  if(newUser){
    message.success("lawyer added")
    props.set(false)
    console.log(newUser.lawyer_user.id);
    let lawfirmUser =await props.actions.updateLawfirmUserProfile(lawyerInputs.lawfirmId,{numbersOfLawyers:numOflawyers-1})
    if(lawfirmUser){
      console.log(lawfirmUser)
      props.actions.getLawfirmUserProfile(lawyerInputs.lawfirmId)
    }
  }
  
  }


  }else{
    message.error("you have reached the limit of adding lawyers")
  }

}
      
      if(!props.open)return null
   
    return ReactDom.createPortal    
    (
      <div className="post-modal-main">
            <div   className="post-modal-container2" > 
            {otp? <OtpCard setOtp={setOtp}/>:
            <>
            <div className="post-modal-headings">
            <div className="post-modal-first">

             <p>Add Lawyer</p>
            </div>
            <div className="post-modal-cross">

              <VscChromeClose style={{fontSize:"1.4rem"}} onClick={()=>{props.set(false) 
                      setEmailMessage(null)
                      setPhoneMessage(null)
                      setNameMessage(null)
                      setCatMessage(null)
                      setfnameMessage(null)
                      setlnameMessage(null)
                      setPassMessage(null)
                      setRoleMessage(null)
                      setConfPassMessage(null)
                      
                }}/>
            </div>
          </div>
  
           <div className="post-modal-options-grid2">
             <div className="inputHolder">
           <p>Name:</p>
     
     <div className="pmodal-name-cat-time">
       
      
       <input placeholder="Name"  name="username" onChange={handleInputChange} />
     </div>
     {nameMessage? <p style={{marginTop:".5rem",color:"red"}}>{nameMessage}</p>:null}
     </div>
     <div className="inputHolder">
       
     <p>Specialized Role:</p>
     <div className="pmodal-name-cat-time">
       
     <Multiselect
        options={options} // Options to display in the dropdown
       
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="value" // Property name to display in the dropdown options
        placeholder="Specialized Role"
      />
     </div>
     {roleMessage? <p style={{marginTop:".5rem",color:"red"}}>{roleMessage}</p>:null}
     </div>
</div>
<div className="post-modal-options-grid2">
<div className="inputHolder">
       
       <p>Area of Expertise:</p>
       <div className="pmodal-name-cat-time2">
         
       <Multiselect
          options={categories} // Options to display in the dropdown

          onSelect={onCategoryChange} // Function will trigger on select event
          onRemove={onCategoryRemove} // Function will trigger on remove event
          displayValue="value" // Property name to display in the dropdown options
          placeholder="Expertise Category"
        />
       </div>
       {catMessage? <p style={{marginTop:".5rem",color:"red"}}>{catMessage}</p>:null}
       </div>
       </div>     
<div className="post-modal-options-grid2">
             <div className="inputHolder">
           <p>First Name:</p>
     
     <div className="pmodal-name-cat-time">
       
      
       <input placeholder="Firstname"  name="firstname" onChange={handleInputChange} />
     </div>
     {fnameMessage? <p style={{marginTop:".5rem",color:"red"}}>{fnameMessage}</p>:null}
     </div>
     <div className="inputHolder">
       
     <p>Last Name:</p>
     <div className="pmodal-name-cat-time">
       
       <input placeholder="Lastname" name="lastname" onChange={handleInputChange} />
     </div>
     {lnameMessage? <p style={{marginTop:".5rem",color:"red"}}>{lnameMessage}</p>:null}
     </div>
</div>
<div className="post-modal-options-grid2">
  
     <div className="inputHolder">

<p>Email:</p>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
     <div className="pmodal-name-cat-time2">
  
       <input placeholder="Email" name="email" onChange={handleInputChange} style={{width:"100%",backgroundColor:"white"}}/>
     </div>
  
     </div>
     {emailMessage? <p style={{marginTop:".5rem",color:"red"}}>{emailMessage}</p>:null}
     </div>
       </div>
       <div className="post-modal-options-grid2">
     <div className="inputHolder">
     <p>Phone:</p>
     <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
     <div className="pmodal-name-cat-time3">
    
     <PhoneInput inputStyle={{width:"100% !important",  padding:"0px 0px !important"}} style={{width:"6rem"}}
            // country={"us"}
            value={countryCode.value}
            placeholder="Country Code"
            onChange={(phone) =>
              setCountryCode({ ...countryCode, value:`+${phone}`})
            }
          />
          <input className="lawyer-phone-input" placeholder="Phone" name="phone" onChange={handleInputChange} />
     </div>
     
       </div>
     {phoneMessage? <p style={{marginTop:".5rem",color:"red"}}>{phoneMessage}</p>:null}
     </div>
  </div>
<div className="post-modal-options-grid2">
     <div className="inputHolder">
<p>Password:</p>
     <div className="pmodal-name-cat-time">
      
       <input placeholder="Password" name="password" onChange={handleInputChange} />
     </div>
     {passwordMessage? <p style={{marginTop:".5rem",color:"red"}}>{passwordMessage}</p>:null}
     </div>
     <div className="inputHolder">
     <p>Confirm Password:</p>
     <div className="pmodal-name-cat-time">
      
       <input placeholder="Confirm password" name="confirmPass"  onChange={handleInputChange}/>
     </div>
     {confPassMessage? <p style={{marginTop:".5rem",color:"red"}}>{confPassMessage}</p>:null}
     </div>
</div>
<div className="postmodal-btn" onClick={onSumbitInputs}>
             <p>Add</p>
           </div>
           </>
            }

            </div>
        </div>,
        document.getElementById("portal")
    )
}
function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    profile: state.auth.lawfirmUserProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LawyerModal);
