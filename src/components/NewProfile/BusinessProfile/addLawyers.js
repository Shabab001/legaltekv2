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
    return (
        <div className="list-main" onClick={handleFocus}>
          <div className="list-heading-grid">

                  <div className="list-first" >
                    

                     <p>List of Lawyers</p>
              
                     </div>
                    
                  <GoPlus onClick={handleModal}/>
          </div>
            <p style={{color:"var(--primary)"}}>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
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
                                 <ListSearchLabel label={"Name"}/>
                                 </div>
                        <div className="list-search-pos">
                                 <ListSearchLabel label={"Role"}/>
                                 </div>
                         <div className="list-search-email">
                                 <ListSearchLabel label={"Email"}/>
                                 </div>
                         <div className="list-search-address">
                                 <ListSearchLabel label={"Phone"}/>
                                 </div>
                                 <div className="list-search-address">
                                 <ListSearchLabel label={"Category"}/>
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
                                 <ListSearchLabel label={"Name"}/>
                                 <div className={focus1?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus1(true)
                                 }} >
                                 <ListSearchInput label={"Name"} icon={AiOutlineSearch} type={"text"}/>
                                  </div>                               
                               </div>
                               <div className="list-search-pos">
                                 <ListSearchLabel label={"Role"} />
                                 <div className={focus2?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus2(true)
                                 }}>
                                 <ListSearchInput label={"Position"}  type={"dropdown"}/>
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
                               <div className="list-search-address">
                                 <ListSearchLabel label={"Phone"}/>
                                 <div  className={focus4?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus4(true)
                                 }}>
                                 <ListSearchInput label={"Phone"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-address">
                                 <ListSearchLabel label={"Category"}/>
                                 <div className={focus5?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus5(true)
                                 }}>
                                 <ListSearchInput label={"Password"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-status">
                                 <ListSearchLabel label={"Status"}/>
                                 <div className={focus6?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
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
