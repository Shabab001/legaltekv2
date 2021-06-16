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

const AddLawyers = (props) => {
  const[minimize,setMinimize]=useState(false);
  const [modal,setModal]=useState(false);
  const[addLawyersLimit,setAddLawyersLimit]=useState(0)


  const{profile}=props;
  useEffect(()=>{
    if(profile.numbersOfLawyers && profile){
      console.log(profile.numbersOfLawyers)
      setAddLawyersLimit(profile.numbersOfLawyers)
    }
  },[addLawyersLimit,profile])
  console.log(profile.id)
  let id =profile? profile.id:""
 
  
  const handleModal =()=>{
    console.log("hi")
    setModal(true)
  }

  const handleMinimize =()=>{
    
    setMinimize(!minimize);
  }

    return (
        <div className="list-main">
          <div className="list-heading-grid">

                  <div className="list-first" >
                    

                     <p>List of Lawyers</p>
              
                     </div>
                     <div>
                       <p>Add Lawyers Limit:{addLawyersLimit}</p>
                     </div>
                     <div className="add-lawyer" onClick={handleModal}><p> 
                     Add Lawyer
                       </p>
                     <FiPlus/>
                  </div>
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
                                 <ListSearchLabel label={"Title"}/>
                                 </div>
                         <div className="list-search-email">
                                 <ListSearchLabel label={"Email"}/>
                                 </div>
                         <div className="list-search-address">
                                 <ListSearchLabel label={"Phone"}/>
                                 </div>
                                 <div className="list-search-address">
                                 <ListSearchLabel label={"Password"}/>
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
                                 <div className="list-input-container input1">
                                 <ListSearchInput label={"Name"} icon={AiOutlineSearch} type={"text"}/>
                                  </div>                               
                               </div>
                               <div className="list-search-pos">
                                 <ListSearchLabel label={"Title"}/>
                                 <div className="list-input-container input2">
                                 <ListSearchInput label={"Position"} icon={AiOutlineSearch} type={"dropdown"}/>
                                 </div>
                               </div>
                               <div className="list-search-email">
                                 <ListSearchLabel label={"Email"}/>
                                 <div className="list-input-container input3">
                                 <ListSearchInput  label={"Email"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-address">
                                 <ListSearchLabel label={"Phone"}/>
                                 <div className="list-input-container input4">
                                 <ListSearchInput label={"Phone"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-address">
                                 <ListSearchLabel label={"Password"}/>
                                 <div className="list-input-container input4">
                                 <ListSearchInput label={"Password"} icon={AiOutlineSearch} type={"text"}/>
                                 </div>
                               </div>
                               <div className="list-search-status">
                                 <ListSearchLabel label={"Status"}/>
                                 <div className="list-input-container input5">
                                 <ListSearchInput label={"Status"} icon={AiOutlineSearch} type={"dropdown"}/>
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
