import React ,{useState,useEffect,memo,useCallback}from 'react'
import "./lawyerlist.css"
import {BsCheck} from 'react-icons/bs';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import UpdateInput from './updateInput';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import Axios from "axios";
import {message} from "antd"
import validator from "validator"

const {REACT_APP_API}= process.env


const LawyersList = ({lawyer,actions,profile}) => {
    const[dropdown,setDrop]=useState(false)
    const[check,setCheck]=useState(false)
    const[lawyerProfile,setLawyerProfile]=useState(null)
    const[updateInputs,setUpdateInputs]=useState({
        firstname:lawyer?lawyer.firstname:"",
        lastname:lawyer?lawyer.lastname:"",
        username:lawyer?lawyer.username:"",
        email:lawyer?lawyer.email:"",
        phone:lawyer?lawyer.phone:"",
        status:lawyer?lawyer.status:""
    })
    console.log(lawyer.user)
   const handleDropdown=()=>{
       setDrop(!dropdown);
   }
  const HandleCheck=()=>{
      setCheck(!check)
  }


   const handleUpdate= async() => {
  
               if(updateInputs){
                   console.log(updateInputs)
                   if(updateInputs.firstname ==="" ||
                      updateInputs.lastname ==="" ||
                      updateInputs.username==="" ||
                        
                 
                      updateInputs.status =="" 
                    
                    ){
                         message.error("Fields can not be empty")
                        return;
                    }
                    else{
                        if(updateInputs.phone || updateInputs.email){

                            if(updateInputs.email &&!validator.isEmail(updateInputs.email)){
                                
                                
                                message.error("Not a valid email")
                                return;
                            }
                            if(updateInputs.phone ){
                                console.log(updateInputs.phone)
                                if (updateInputs.phone.length !=14){
                                    message.error("Not a valid phone number")
                                    return
                                    
                                }
                                if( !updateInputs.phone.match(/^[0-9 ()+-]+$/)){
                                    message.error("Phone number must only contain numbers")
                                    return
                                }
                            }
                        }
                        else{
                            message.error(" Email or Phone Field need value")
                        return;
                        }
                       
                          if(updateInputs.email && updateInputs.phone){
                                        if(updateInputs.email !== lawyer.email && updateInputs.phone !==lawyer.phone){
                                            let user =await actions.updateUserProfile(lawyer.user,{email:updateInputs.email,phone:updateInputs.phone,username:updateInputs.username})
                                            if(user){
                                               let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                                               if(lawyerup){
                                                   message.success("Lawyer Profile Updated")
                                                   actions.getLawfirmUserProfile(profile.id)
                                                   return;
                                               }
                                            } 
                                        }
                                        else{
                                            if(updateInputs.email !==lawyer.email){
                                                let user =await actions.updateUserProfile(lawyer.user,{email:updateInputs.email,username:updateInputs.username})
                                                if(user){
                                                   let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                                                   if(lawyerup){
                                                       message.success("Lawyer Profile Updated")
                                                       actions.getLawfirmUserProfile(profile.id)
                                                       return;
                                                   }
                                                } 
                                            }
                                            if(updateInputs.phone !== lawyer.phone){
                                                let user =await actions.updateUserProfile(lawyer.user,{phone:updateInputs.phone,username:updateInputs.username})
                                                if(user){
                                                   let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                                                   if(lawyerup){
                                                       message.success("Lawyer Profile Updated")
                                                       actions.getLawfirmUserProfile(profile.id)
                                                       return;
                                                   }
                                                } 
                                            }
                                        }    
                          }
                     

                          if(updateInputs.email && updateInputs.email !==lawyer.email){
                            let user =await actions.updateUserProfile(lawyer.user,{email:updateInputs.email,phone:updateInputs.phone,username:updateInputs.username})
                            if(user){
                               let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                               if(lawyerup){
                                   message.success("Lawyer Profile Updated")
                                   actions.getLawfirmUserProfile(profile.id)
                                   return;
                               }
                            } 
                          }

                          if(updateInputs.phone && updateInputs.phone !== lawyer.phone){
                            let user =await actions.updateUserProfile(lawyer.user,{email:updateInputs.email,phone:updateInputs.phone,username:updateInputs.username})
                            if(user){
                               let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                               if(lawyerup){
                                   message.success("Lawyer Profile Updated")
                                   actions.getLawfirmUserProfile(profile.id)
                                   return;
                               }
                            } 
                          }





                          let user =await actions.updateUserProfile(lawyer.user,{username:updateInputs.username})
                          if(user){
                             let lawyerup =await actions.updateLawyerUserProfile(lawyer.id, updateInputs)
                             if(lawyerup){
                                 message.success("Lawyer Profile Updated")
                                 actions.getLawfirmUserProfile(profile.id)
                                 return;
                             }
                          } 



















                     
                        }

               }
       }
    

console.log(updateInputs)
    return (
        <div className={dropdown?"lawyerlist-main background"   :"lawyerlist-main"}>
            {dropdown &&lawyer? <>
                <div className="lawyer-description">
                 <div className="list-search-minimize" onClick={HandleCheck} >
                 <BsCheck className={check?"list-minimize2":"list-minimize1"}/>
                 </div>
                 <div className="lawyer-name">
                   <p>{lawyer.firstname}</p>
               </div>
               <div className="lawyer-pos">
               <p>{lawyer.lastname}</p>
               </div>
               <div className="lawyer-password">
               <p>{lawyer.username}</p>
                   
                 </div>
               <div className="lawyer-email">
                   <p>{lawyer.email}</p>
                
               </div>
               <div className="lawyer-status">
               <p>{lawyer.phone}</p>
                  
                  
               </div>
            
               <div className="lawyer-cat">
                   <p>{lawyer? lawyer.status:""}</p>

               </div>
                 <div className="lawyer-edit" onClick={handleDropdown}>
                    <FiChevronUp/>
                 </div>
            </div>
            
            <div className="lawyer-dropdown">
            <div className="list-search-minimize" style={{opacity:0}}>
                 <BsCheck className="list-minimize" style={{opacity:0}}/>
                 </div>
                 <div className="update-name">
                     <p>First Name</p>
                     <div className="update-inputs">

                     <UpdateInput label={"firstname"} value={updateInputs.firstname} setUpdateInputs={setUpdateInputs} updateInputs={updateInputs}  placeholder={lawyer.firstname}/>
                     </div>
                     <p>Last Name</p>
                     <div className="update-inputs">

                     <UpdateInput label={"lastname"} value={updateInputs.lastname} setUpdateInputs={setUpdateInputs} updateInputs={updateInputs} placeholder={lawyer.lastname}/>
                     </div>
                 </div>

                 <div className="update-pos">
             
                     <p>Username</p>
                     <div className="update-inputs">

                     <UpdateInput label={"username"} value={updateInputs.username} setUpdateInputs={setUpdateInputs} updateInputs={updateInputs} placeholder={lawyer.username}/>
                     </div>

                     <p>Status</p>
                     <div className="update-inputs">

                     <UpdateInput label={"status"} value={updateInputs.status} type="dropdown" setUpdateInputs={setUpdateInputs} updateInputs={updateInputs} placeholder={lawyer.status}/>
                     </div>
                 </div>
                 <div className="update-email">
                     <p>Email</p>
                     <div className="update-inputs">

                     <UpdateInput label={"email"} value={updateInputs.email} setUpdateInputs={setUpdateInputs} updateInputs={updateInputs} placeholder={lawyer.email}/>
                     </div>
                     <p>Mobile</p>
                     <div className="update-inputs">

                     <UpdateInput label={"phone"} value={updateInputs.phone} setUpdateInputs={setUpdateInputs} updateInputs={updateInputs} placeholder={lawyer.phone}/>
                     </div>
                 </div>
            
            
                    
             
                 <div className="update-btn" onClick={handleUpdate}>
                     <p>Save</p>
                 </div>
            </div>
            </>:
               <div className="lawyer-description">
               <div className="list-search-minimize" onClick={HandleCheck}>
               <BsCheck className={check?"list-minimize2":"list-minimize1"}/>
               </div>
               <div className="lawyer-name">
                   <p>{lawyer.firstname}</p>
               </div>
               <div className="lawyer-pos">
               <p>{lawyer.lastname}</p>
               </div>
               <div className="lawyer-password">
               <p>{lawyer.username}</p>
                   
                 </div>
               <div className="lawyer-email">
                   <p>{lawyer.email}</p>
                
               </div>
               <div className="lawyer-status">
               <p>{lawyer.phone}</p>
                  
                  
               </div>
            
               <div className="lawyer-cat">
                   <p>{lawyer? lawyer.status:""}</p>

               </div>
               <div className="lawyer-edit" onClick={handleDropdown}>
                  <FiChevronDown/>
               </div>
          </div>
            }
           
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
  export default connect(mapStateToProps, mapDispatchToProps)(memo(LawyersList));
  
