import React,{useState,useEffect,memo,useCallback} from 'react'
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
  const [allLawyers, setAllLawyers]=useState([])
  const[minimize,setMinimize]=useState(false);
  const [modal,setModal]=useState(false);
  const[addLawyersLimit,setAddLawyersLimit]=useState(0)
  const[focus1,setFocus1]=useState(false)
  const[focus2,setFocus2]=useState(false)
  const[focus3,setFocus3]=useState(false)
  const[focus4,setFocus4]=useState(false)
  const[focus5,setFocus5]=useState(false)
  const[focus6,setFocus6]=useState(false)
  const [trigger,setTrigger]=useState(false)
  const[searchTerm, setSearchTerm]=useState("")
  const[criteria,setCriteria]=useState("")
  const[disable,setDisable]=useState({
    firstname:false,
    lastname:false,
    username:false,
    email:false,
    phone:false,
    status:false

  })
  const[sort,setSort]=useState("")
  const [des,setDes]=useState({
    firstname:false,
    lastname:false,
    username:false,
    email:false,
    phone:false,
    status:false
  })

  const{profile}=props;

    useEffect(( )=>{
        if(profile.lawyer_users){
          
          let lUser=[...profile.lawyer_users]
               
                  if(sort && sort === "Firstname"){
                       if(!des.firstname){
                         console.log("asc")
                         setAllLawyers(lUser.sort((a,b)=>a.firstname.localeCompare(b.firstname)));
                         setDes({...des, firstname:true})
                       
                         return
                       }
                       if(des.firstname){
                        console.log("dsc")
                        setAllLawyers(lUser.sort((a,b)=>b.firstname.localeCompare(a.firstname)));
                        setDes({...des, firstname:false})
                        
                        return
                       }
                    
                }
             if(sort && sort === "Lastname"){
                       if(!des.lastname){
                         console.log("asc")
                         setAllLawyers(lUser.sort((a,b)=>a.lastname.localeCompare(b.lastname)));
                         setDes({...des, lastname:true})
                       
                         return
                       }
                       if(des.lastname){
                        console.log("dsc")
                        setAllLawyers(lUser.sort((a,b)=>b.lastname.localeCompare(a.lastname)));
                        setDes({...des, lastname:false})
                        
                        return
                       }
                    
                }
                if(sort && sort === "Username"){
                  if(!des.username){
                    console.log("asc")
                    setAllLawyers(lUser.sort((a,b)=>a.username.localeCompare(b.username)));
                    setDes({...des, username:true})
                  
                    return
                  }
                  if(des.username){
                   console.log("dsc")
                   setAllLawyers(lUser.sort((a,b)=>b.username.localeCompare(a.username)));
                   setDes({...des, username:false})
                   
                   return
                  }
               
           }
           if(sort && sort === "Email"){
            if(!des.email){
              console.log("asc")
              setAllLawyers(lUser.sort((a,b)=>a.email.localeCompare(b.email)));
              setDes({...des, email:true})
            
              return
            }
            if(des.email){
             console.log("dsc")
             setAllLawyers(lUser.sort((a,b)=>b.email.localeCompare(a.email)));
             setDes({...des, email:false})
             
             return
            }
         
     }
     if(sort && sort === "Phone"){
      if(!des.phone){
        console.log("asc")
        setAllLawyers(lUser.sort((a,b)=>a.phone.localeCompare(b.phone)));
        setDes({...des, phone:true})
      
        return
      }
      if(des.phone){
       console.log("dsc")
       setAllLawyers(lUser.sort((a,b)=>b.phone.localeCompare(a.phone)));
       setDes({...des, phone:false})
       
       return
      }
   
}   
if(sort && sort === "Status"){
  if(!des.status){
    console.log("asc")
    setAllLawyers(lUser.sort((a,b)=>a.status.localeCompare(b.status)));
    setDes({...des, status:true})
  
    return
  }
  if(des.status){
   console.log("dsc")
   setAllLawyers(lUser.sort((a,b)=>b.status.localeCompare(a.status)));
   setDes({...des, status:false})
   
   return
  }

}


  
        
        



                setAllLawyers(lUser)
                return;
        }

        
   



          },[sort,profile,trigger])

          console.log(des)


  useEffect(()=>{
    if(profile.numbersOfLawyers){
      console.log(profile.numbersOfLawyers)
      setAddLawyersLimit(profile.numbersOfLawyers)
    }
  },[profile.numbersOfLawyers])
  
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
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Firstname"}/>
                                 </div>
                        <div className="list-search-name">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Lastname"}/>
                                 </div>
                         <div className="list-search-email">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Username"}/>
                                 </div>
                         <div className="list-search-name">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Email"}/>
                                 </div>
                                 <div className="list-search-name">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Phone"}/>
                                 </div>
                          <div className="list-search-status">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Status"}/>
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
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Firstname"}/>
                                 <div className={focus1?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus1(true)
                                 }} >
                                 <ListSearchInput label={"Firstname"} icon={AiOutlineSearch} type={"text"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.firstname} setDisable={setDisable}/>
                                  </div>                               
                               </div>
                               <div className="list-search-role">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Lastname"} />
                                 <div className={focus2?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus2(true)
                                 }}>
                                 <ListSearchInput label={"Lastname"}  type={"text"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.lastname} setDisable={setDisable}/>
                                 </div>
                               </div>
                               <div className="list-search-category">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Username"}/>
                                 <div className={focus5?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus5(true)
                                 }}>
                                 <ListSearchInput label={"Username"} icon={AiOutlineSearch} type={"text"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.username} setDisable={setDisable}/>
                                 </div>
                               </div>
                               <div className="list-search-email">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Email"}/>
                                 <div  className={focus3?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus3(true)
                                 }}>
                                 <ListSearchInput  label={"Email"} icon={AiOutlineSearch} type={"text"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.email} setDisable={setDisable}/>
                                 </div>
                               </div>
                               <div className="list-search-email">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Phone"}/>
                                 <div  className={focus4?"list-input-container input1 focusOn":"list-input-container input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus4(true)
                                 }}>
                                 <ListSearchInput label={"Phone"} icon={AiOutlineSearch} type={"text"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.phone} setDisable={setDisable}/>
                                 </div>
                               </div>
                          
                               <div className="list-search-status">
                                 <ListSearchLabel trigger={trigger} setTrigger={setTrigger} setSort={setSort} label={"Status"}/>
                                 <div className={focus6?"list-input-container-drop input1":"list-input-container-drop input1"} onClick={(e)=>{
                                   e.stopPropagation()
                                   handleFocus();
                                   setFocus6(true)
                                 }}>
                                 <ListSearchInput label={"Status"} type={"dropdown"} setSearchTerm={setSearchTerm} setCriteria={setCriteria} disable={disable.status} setDisable={setDisable}/>
                                 </div>
                               </div>
                               <div style={{position:"relative",flexBasis:"3%",opacity:0}}>
                    <FiChevronDown/>
                 </div>
                             </div>
                       
                       } 
          
                        {allLawyers&&  allLawyers.sort().map((lawyer,index)=>{


                        if(searchTerm){
                          console.log(searchTerm,criteria)
                          if (criteria==="Firstname" && lawyer.firstname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                          if (criteria==="Lastname" && lawyer.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                          if (criteria==="Email" &&lawyer.email && lawyer.email.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                          if (criteria==="Phone" &&lawyer.phone && lawyer.phone.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                          if (criteria==="Username" && lawyer.username.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                          if (criteria==="Status" &&lawyer.status && lawyer.status.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                              
                              <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
                        }else{

                          return(
                            
                            <LawyerList key={index} lawyer={lawyer} />
                            )
                          }
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
