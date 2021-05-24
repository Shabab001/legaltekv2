import React ,{useState,useEffect}from 'react'
import "./lawyerlist.css"
import {BsCheck} from 'react-icons/bs';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import UpdateInput from './updateInput';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import Axios from "axios";


const {REACT_APP_API}= process.env


const LawyersList = ({lawyer,actions}) => {
    const[dropdown,setDrop]=useState(false)
    const[check,setCheck]=useState(false)
    const[lawyerProfile,setLawyerProfile]=useState(null)
    console.log(lawyer)
   const handleDropdown=()=>{
       setDrop(!dropdown);
   }
  const HandleCheck=()=>{
      setCheck(!check)
  }
  let lawyerUser={}
  useEffect(()=>{
      if(lawyer){

          async function call(){
            const token =localStorage.getItem('auth_token')
            if(token){
             lawyerUser=await Axios.get(`${REACT_APP_API}/users/${lawyer.user}`,{
              headers: {
                Authorization:
                  `Bearer ${token}`,
              }
              },)
              if(lawyerUser){
                  console.log(lawyerUser.data);
                  setLawyerProfile(lawyerUser.data);
              }
            }
            } 
            call();
        }
  },[])

console.log(lawyerProfile)
    return (
        <div className={dropdown?"lawyerlist-main background"   :"lawyerlist-main"}>
            {dropdown &&lawyerProfile? <>
                <div className="lawyer-description">
                 <div className="list-search-minimize" onClick={HandleCheck} >
                 <BsCheck className={check?"list-minimize2":"list-minimize1"}/>
                 </div>
                 <div className="lawyer-name">
                     <p>{lawyerProfile.username}</p>
                 </div>
                 <div className="lawyer-pos">
                     <p>{lawyer.title}</p>
                     <p>{lawyer.experience}</p>
                 </div>
                 <div className="lawyer-email">
                     <p>{lawyerProfile.email}</p>
                      <p>{lawyer.mobile}</p>
                 </div>
                 <div className="lawyer-status">
                     <p>{lawyer.address}</p>
                     <p>{lawyer.category}</p>
                    
                 </div>
                 <div className="lawyer-password">
                     <p>{lawyerProfile.password}</p>
                    
                   
                 </div>
                 <div className="lawyer-cat">
                     <p>{lawyer.status}</p>
                    
                     <p>{lawyer.caseHandled}</p>
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

                     <UpdateInput label={"FirstName"} placeholder={lawyer.firstname}/>
                     </div>
                     <p>Last Name</p>
                     <div className="update-inputs">

                     <UpdateInput label={"LastName"} placeholder={lawyer.lastname}/>
                     </div>
                 </div>

                 <div className="update-pos">
                     <p>Position</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Position"} placeholder={lawyer.position} type="dropdown"/>
                     </div>
                     <p>Experience</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Experiece"} placeholder={lawyer.experience}/>
                     </div>
                 </div>
                 <div className="update-email">
                     <p>Email</p>
                     <div className="update-inputs">

                     <UpdateInput label={"email"} placeholder={lawyer.email}/>
                     </div>
                     <p>Mobile</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Mobile"} placeholder={lawyer.mobile}/>
                     </div>
                 </div>
                 <div className="update-address">
                     <p>Address</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Address"} placeholder={lawyer.address}/>
                     </div>
                     <p>Category</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Category"} placeholder={lawyer.category}/>
                     </div>
                 </div>
                 <div className="update-status">
                     <p>Status</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Status"} placeholder={lawyer.status} type="dropdown"/>
                     </div>
                     <p>Case Handled</p>
                     <div className="update-inputs">

                     <UpdateInput label={"Case"} placeholder={lawyer.caseHandled}/>
                     </div>
                 </div>
                 <div className="update-btn">
                     <p>Save</p>
                 </div>
            </div>
            </>:
               <div className="lawyer-description">
               <div className="list-search-minimize" onClick={HandleCheck}>
               <BsCheck className={check?"list-minimize2":"list-minimize1"}/>
               </div>
               <div className="lawyer-name">
                   <p>{lawyerProfile?lawyerProfile.username:""}</p>
               </div>
               <div className="lawyer-pos">
                   <p>{lawyer.title}</p>
                   <p>{lawyer.experience}</p>
               </div>
               <div className="lawyer-email">
                   <p>{lawyerProfile?lawyerProfile.email:""}</p>
                    <p>{lawyer.mobile}</p>
               </div>
               <div className="lawyer-status">
                   <p>{lawyer.address}</p>
                   <p>{lawyer.category}</p>
                  
               </div>
               <div className="lawyer-password">
                     <p>{lawyer.password}</p>
                    
                   
                 </div>
               <div className="lawyer-cat">
                   <p>{lawyer.status}</p>
                  
                   <p>{lawyer.caseHandled}</p>
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
  export default connect(mapStateToProps, mapDispatchToProps)(LawyersList);
  
