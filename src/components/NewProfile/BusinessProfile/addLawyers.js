import React,{useState,useEffect,memo} from 'react'
import "./addlawyers.css"
import ListSearchInput from './listSearchInput'
import ListSearchLabel from './listSearchLabel'
import { AiOutlineSearch} from 'react-icons/ai';
import {VscChromeMinimize} from 'react-icons/vsc';
import {FiChevronDown} from 'react-icons/fi';
import {BsPlus} from 'react-icons/bs';
import LawyerList from "./LawyersList"
import {FiPlus} from "react-icons/fi"
import LawyerModal from './lawyer modal/lawyerModal';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import {GoPlus} from "react-icons/go"
import { Select } from 'antd';

const { Option } = Select;


const AddLawyers = (props) => {
  const[minimize,setMinimize]=useState(false);
  const [modal,setModal]=useState(false);
  const[addLawyersLimit,setAddLawyersLimit]=useState(0)
  const[focus1,setFocus1]=useState(false)
  const[focus2,setFocus2]=useState(false)
  const[focus3,setFocus3]=useState(false)
  const[focus4,setFocus4]=useState(false)
  const[focus5,setFocus5]=useState(false)
  const[focus6,setFocus6]=useState(false)



  const{profile}=props;
  useEffect(()=>{
    if(profile.numbersOfLawyers && profile){
      console.log(profile.numbersOfLawyers)
      setAddLawyersLimit(profile.numbersOfLawyers)
    }
  },[addLawyersLimit,profile.numbersOfLawyers])
  console.log(profile.id)
  let id =profile? profile.id:""
 
  
  const handleModal =()=>{
    console.log("hi")
    setModal(true)
  }

  const handleMinimize =()=>{
    
    setMinimize(!minimize);
  }

 const handleFocus=()=>{
    setFocus1(false)
    setFocus2(false)
    setFocus3(false)
    setFocus4(false)
    setFocus5(false)
    setFocus6(false)
  }
  const searchHandler =()=>{

  }
    return (
        <div className="list-main" onClick={handleFocus}>
          <div className="list-heading-grid">

                  <div className="list-first" >
                    

                     <p>List of Lawyers</p>
              
                     </div>
                    
                  <GoPlus onClick={handleModal}/>
          </div>
            <p style={{color:"var(--primary)"}}>Please add the lawyers in your firm here. Your license with us determines how many lawyers you can add here. Removing a lawyer deactivates the lawyer in the system and frees up a license that can be used to add another lawyer. You can also change/ rename a lawyer or edit lawyer information from here. When you add a New Lawyer they will need to verify their email address and/or phone number to activate their account.</p>
          <div className="lawyer-limit">
                       <p>Add Lawyers Limit:{addLawyersLimit}</p>
                     </div>
          <LawyerModal open={modal} set={setModal} id={id}/>
                  {minimize ? 
                  
                  <div className="list-search2">
                               <div className="list-maximize" onClick={handleMinimize}>
                    
                    <BsPlus style={{fontSize:"1.5rem"}}/>
                   
                    </div>
                     <div className="list-search-name">
                                 <ListSearchLabel label={"Firstname"}/>
                                 </div>
                        <div className="list-search-name">
                                 <ListSearchLabel label={"Lastname"}/>
                                 </div>
                         <div className="list-search-email">
                                 <ListSearchLabel label={"Username"}/>
                                 </div>
                         <div className="list-search-name">
                                 <ListSearchLabel label={"Email"}/>
                                 </div>
                                 <div className="list-search-name">
                                 <ListSearchLabel label={"Phone"}/>
                                 </div>
                          <div className="list-search-status">
                                 <ListSearchLabel label={"Status"}/>
                                 </div>  
                                 <div style={{position:"relative",flexBasis:"3%",opacity:0}}>
                    <FiChevronDown/>
                 </div>                        

                       </div>
                       
                       :
                               <div className="list-search">
                               <div className="list-search-minimize" onClick={handleMinimize}>
                                  <VscChromeMinimize className="list-minimize"/>
                                  
                               </div>
                               <div className="list-search-name">
                                 <ListSearchLabel label={"Firstname"}/>
                                 <div className={focus1?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus1(true)
                                 }} >
                                 <ListSearchInput label={"Fristname"} icon={AiOutlineSearch} type={"text"}/>
                                  </div>                               
                               </div>
                               <div className="list-search-role">
                                 <ListSearchLabel label={"Lastname"} />
                                 <div className={focus2?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus2(true)
                                 }}>
                                 <ListSearchInput label={"Lastname"}  type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-category">
                                 <ListSearchLabel label={"Username"}/>
                                 <div className={focus5?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus5(true)
                                 }}>
                                 <ListSearchInput label={"Password"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-email">
                                 <ListSearchLabel label={"Email"}/>
                                 <div  className={focus3?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus3(true)
                                 }}>
                                 <ListSearchInput  label={"Email"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-email">
                                 <ListSearchLabel label={"Phone"}/>
                                 <div  className={focus4?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus4(true)
                                 }}>
                                 <ListSearchInput label={"Phone"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                          
                               <div className="list-search-status">
                                 <ListSearchLabel label={"Status"}/>
                                 <div className={focus6?"list-input-container-drop input1":"list-input-container-drop input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus6(true)
                                 }}>
                                 <ListSearchInput label={"Status"} type={"dropdown"}/>
                                 </div>
                               </div>
                               <div style={{position:"relative",flexBasis:"3%",opacity:0}}>
                    <FiChevronDown/>
                 </div>
                             </div>
                       
                       } 
          
                        {profile.lawyer_users&&profile.lawyer_users.map((lawyer,index)=>{
                          return(

                            <LawyerList key={index} lawyer={lawyer} />
                          )
                        })}



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
export default connect(mapStateToProps, mapDispatchToProps)(memo(AddLawyers));
