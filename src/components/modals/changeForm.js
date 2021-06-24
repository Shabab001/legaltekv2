import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import "../../assets/css/confirmModal.css";
import "./changeform.css"
import Axios from "axios";
import {message} from "antd"
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import PhoneInput from "react-phone-input-2";
import { AiOutlineConsoleSql } from "react-icons/ai";

const {REACT_APP_API}= process.env

function ChangeForm(props) {
  const[password,setPassword]=useState("")
  const[oldPass,setOldPass]=useState("")
  const[confPassword,setConfPassword]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const [countryCode, setCountryCode] = useState({
    value: localStorage.getItem('calling_code')?localStorage.getItem('calling_code'): "",
    message: "",
    isValid: true,
  });

  const modalRoot = document.getElementById("modal-root");

  const handleChange=(e)=>{
        if(e.target.name==="email"){
          if(e.target.value !==""){
            setEmail(e.target.value)
          }
          else{
            setEmail("")
          }
        }
        if(e.target.name==="oldPass"){
          if(e.target.value !==""){
            setOldPass(e.target.value)
          }
          else{
            setOldPass("")
          }
        }
        if(e.target.name==="password"){
          if(e.target.value !==""){
            setPassword(e.target.value)
          }
          else{
            setPassword("")
          }
        }
        if(e.target.name==="Confirm Password"){
          if(e.target.value !==""){
            setConfPassword(e.target.value)
          }
          else{
            setConfPassword("")
          }
        }
        if(e.target.name==="phone"){
          console.log("here")
          if (
            (e.target.value.length <= 10 &&
              e.target.value.match(/^[0-9]+$/)) ||
            e.target.value.length == 0
          ) {
          
          
          
            setPhone(e.target.value)
        
          
          }
        }
  }
  
const handleButton = async(e)=>{
  e.preventDefault();
  if(props.auth.user && (props.auth.user.email || props.auth.user.phone)){

    if(!password ||!confPassword){
      message.error("Empty input field");
      return;
    }
    if(password !== confPassword){
      message.error("password did not matched");
      return;
    }
    if(password.length <6 || confPassword.length <6){
      message.error("password need to be atleast 6 letters");
      return;
    }
  if(email){
    if (!validator.isEmail(email)){
      message.error("not a valid Email");
      return;
    }

    message.success("yes")
    let data ={
      identifier:props.auth.user.email?props.auth.user.email:props.auth.user.phone,
      password
    }
      let call=  await apiCall(data)
      if(call){
        const updateUser= await props.actions.updateUserProfile(props.auth.user.id, {email})
        if(updateUser){
          console.log(updateUser)
         await props.actions.getProfile(props.auth.user.id);
       
          props.onClose()
       
        }
      }
  }
  if(phone && countryCode.value){
    
     let newPhone =`${countryCode.value}${phone}`
     
     if (newPhone.length !== 14) {
    
      message.error("not a valid Number");
      return;
    }
    else{
      let data ={
        identifier:props.auth.user.email?props.auth.user.email:props.auth.user.phone,
        password
      }
        let call=  await apiCall(data)
        if(call){
          const updateUser= await props.actions.updateUserProfile(props.auth.user.id, {phone:newPhone})
          if(updateUser){
            console.log(updateUser)
           await props.actions.getProfile(props.auth.user.id);
         
             console.log("here")
            props.onClose()
           return;
          }
        }
    }

  }
  if(oldPass){
    if(oldPass==""){
      message.error("Give ur password")
      return ;
    }
    let data ={
      identifier:props.auth.user.email?props.auth.user.email:props.auth.user.phone,
      password:oldPass
    }
      let call=  await apiCall(data)  
      if(call){
        let obj={
          password:password,
          passwordConfirmation:confPassword,
          id:props.auth.user.id
        }
        let reset =await resetCall(obj)
        if(reset){
          await props.actions.getProfile(props.auth.user.id);
          props.onClose()
         
    
           return;
        }
      }
  }
 

}
  
  
}

  
 const apiCall= async(data)=>{
  try{

    const matched=  await Axios.post(`${REACT_APP_API}/auth/validate-password`,data, {
  
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
    if(matched){
      console.log(matched)
      return true;
    }
  }
  catch(error){
    console.log(error.response)
    message.error(error.response.data.message[0].messages[0].message);
    return false;
  }
 }

 const resetCall= async(data)=>{
  try{

    const matched=  await Axios.post(`${REACT_APP_API}/auth/reset-password`,data, {
  
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
    if(matched){
      console.log(matched)
      return true;
    }
  }
  catch(error){
    console.log(error.response)
    message.error(error.response.data.message[0].messages[0].message);
    return false;
  }
 }


  return ReactDOM.createPortal(
    <div className="confirmModalOverlay">
      <div className="confirmModal">
        <div className="confirmModalHeader">
          {props.headerText && props.headerText}{" "}
          <div className="confirmModalCloseBtn" onClick={() => props.onClose()}>
            <i className="fa fa-close" />
          </div>
        </div>
        <div className="confirmModalBody2">
       
             {props.type==="email"? 
            <label className="one-half" style={{display:"flex",flexDirection:"column",width:"100%"}}>
              {props.input1}
              <input
                autoComplete="off"
                name= "email"
                placeholder=   {props.input1}
                onChange={handleChange}
                value={email}
              />
            </label>:props.type==="phone"?
                              <label className="one-half" style={{display:"flex",flexDirection:"column",width:"100%"}}>
                                {props.type}:
                          <div className="pmodal-name-cat-time3" style={{display:"flex",gap:".5rem"}}>
    
                          <PhoneInput inputStyle={{width:"100% !important",  padding:"0px 0px !important"}} style={{width:"8rem"}}
                                 // country={"us"}
                                 onChange={(phone) =>
                                  setCountryCode({ ...countryCode, value:`+${phone}`})
                                }
                                 placeholder="Code"
                              
                               />
                               <input className="lawyer-phone-input" placeholder="Phone" name="phone" onChange={handleChange} style={{width:"100%"}} />
                          </div>
                                  </label>
                          :
                                  <label className="one-half" style={{display:"flex",flexDirection:"column",width:"100%"}}>
                                  Old Password
                                  <input
                                    autoComplete="off"
                                    name= "oldPass"
                                    placeholder="Old Password"
                                    onChange={handleChange}
                                    value={oldPass}
                                  />
                                </label>

                  }
            <label className="one-half" style={{display:"flex",flexDirection:"column",width:"100%"}}>
               {props.input2?props.input2:"New Password"}:
              <input
                autoComplete="off"
                name="password"
                value={password}
                placeholder=   {props.input2?props.input2:"New Password"}
               onChange={handleChange}
              />
            </label>
        
            <label className="one-half" style={{display:"flex",flexDirection:"column",width:"100%"}}>
               Confirm Password:
              <input
                autoComplete="off"
                name="Confirm Password"
                value={confPassword}
                placeholder="Confirm Password"
               onChange={handleChange}
              />
            </label>
        </div>
        <div className="confirmModalFooter">
          <button
            className=""
            onClick={handleButton}
          >
           <p>Chnage</p>
          </button>
         
        </div>
      </div>
    </div>,
    modalRoot
  );
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangeForm);
