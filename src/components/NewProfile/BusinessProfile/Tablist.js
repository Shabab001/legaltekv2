import React,{useState} from 'react'
import {BsCheck} from 'react-icons/bs';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import "./tablist.css";
import "./lawyerlist.css";
import UpdateInput from './updateInput';
const Tablist = ({data,activeTab}) => {
   
        const[dropdown,setDrop]=useState(false)
        const[check,setCheck]=useState(false)
        const [state,setState]=useState("")
        
       const handleDropdown=()=>{
           setDrop(!dropdown);
       }
      const HandleCheck=()=>{
          setCheck(!check)
      }
    return (
       <>
            {!dropdown?
            <>
            <div className={dropdown?"tablist-main background"   :"tablist-main"}>
            <div className="tblist-search-minimize" onClick={HandleCheck} >
                 <BsCheck className={check?"tblist-minimize2":"tblist-minimize1"}/>
                 </div>
           {
               data.rateName?
               <div className="tablist column">
                 <p>{data.rateName}</p>
                 </div>  :
                 null}
                 {
                 data.Description?
                 <div className="tablist column">
                   <p>{data.Description}</p>
                   </div>  :null}

                  { data.Rates?
                   <div className="tablist column">
                     <p>{data.Rates}</p>
                     </div>  :null}
                     {
                     data.Area?
                     <div className="tablist column">
                       <p>{data.Area}</p>
                       </div>  :null}
                       {
                       data.NickName?
                       <div className="tablist column">
                         <p>{data.NickName}</p>
                         </div>  :null}
                         {
                         data.TaskName?
                         <div className="tablist column">
                           <p>{data.TaskName}</p>
                           </div>  :null}
                           {
                           data.Category?
                           <div className="tablist column">
                             <p>{data.Category}</p>
                             </div>  :null}
                             {
                             data.Explanantion?
                             <div className="tablist column">
                               <p>{data.Explanantion}</p>
                               </div>  :null}
                               {
                               data.Name?
                               <div className="tablist column">
                                 <p>{data.Name}</p>
                                 </div>  :null
                                }
                                {
                                data.Type?
                                <div className="tablist column">
                                    <p>{data.Type}</p>
                                    </div>  :null
                                }
                                <div className="tblist-edit" onClick={handleDropdown}>
                    <FiChevronDown/>
                 </div>
                 </div>
            </>:
            < div className={dropdown?"background":""}>
            <div className="tablist-main">
<div className="tblist-search-minimize" onClick={HandleCheck} >
                 <BsCheck className={check?"tblist-minimize2":"tblist-minimize1"}/>
                 </div>
           {
               data.rateName?
               <div className="tablist column">
                 <p>{data.rateName}</p>
                 </div>  :
                 null}
                 {
                 data.Description?
                 <div className="tablist column">
                   <p>{data.Description}</p>
                   </div>  :null}

                  { data.Rates?
                   <div className="tablist column">
                     <p>{data.Rates}</p>
                     </div>  :null}
                     {
                     data.Area?
                     <div className="tablist column">
                       <p>{data.Area}</p>
                       </div>  :null}
                       {
                       data.NickName?
                       <div className="tablist column">
                         <p>{data.NickName}</p>
                         </div>  :null}
                         {
                         data.TaskName?
                         <div className="tablist column">
                           <p>{data.TaskName}</p>
                           </div>  :null}
                           {
                           data.Category?
                           <div className="tablist column">
                             <p>{data.Category}</p>
                             </div>  :null}
                             {
                             data.Explanantion?
                             <div className="tablist column">
                               <p>{data.Explanantion}</p>
                               </div>  :null}
                               {
                               data.Name?
                               <div className="tablist column">
                                 <p>{data.Name}</p>
                                 </div>  :null
                                }
                                {
                                data.Type?
                                <div className="tablist column">
                                    <p>{data.Type}</p>
                                    </div>  :null
                                }
                                <div className="tblist-edit" onClick={handleDropdown}>
                    <FiChevronUp/>
                 </div>
                 </div>
                    <div className="tablist-update-grid">
                        <div className="list-search-minimize" style={{opacity:0}}>
                            <BsCheck className="list-minimize" style={{opacity:0}}/>
                            </div>
                            {activeTab==="Rates"?
                            <>
                                <div className="tblist-update-rate">
                                    <p>Rate Name</p>
                                       <div className="tblist-update-inputs">
                                           <UpdateInput label={data.rateName} placeholder={data.rateName} />
                                       </div>    
                                    </div>
                                     <div className="tblist-update-rate">
                                     <p>Description</p>
                                        <div className="tblist-update-inputs">
                                            <UpdateInput label={data.Description} placeholder={data.Description} />
                                        </div>    
                                     </div>
                                      <div className="tblist-update-rate">
                                      <p>Rates</p>
                                         <div className="tblist-update-inputs">
                                             <UpdateInput label={data.Rates} placeholder={data.Rates} />
                                         </div>    
                                      </div>
                                      </>
                                    :activeTab=="Task Codes"?
                                    <>
                                          <div className="tblist-update-rate">
                                    <p>Area</p>
                                       <div className="tblist-update-inputs">
                                           <UpdateInput label={data.Area} placeholder={data.Area} />
                                       </div>    
                                    </div>
                                     <div className="tblist-update-rate">
                                     <p>Nick Name</p>
                                        <div className="tblist-update-inputs">
                                            <UpdateInput label={data.NickName} placeholder={data.NickName} />
                                        </div>    
                                     </div>
                                      <div className="tblist-update-rate">
                                      <p>Task Name</p>
                                         <div className="tblist-update-inputs">
                                             <UpdateInput label={data.TaskName} placeholder={data.TaskName} />
                                         </div>    
                                      </div>
                                      <div className="tblist-update-rate">
                                      <p>Category</p>
                                         <div className="tblist-update-inputs">
                                             <UpdateInput label={data.Category} placeholder={data.Category} />
                                         </div>    
                                      </div>
                                    </>:activeTab==="Explanation Codes"?
                                    <>
                                              <div className="tblist-update-rate">
                                     <p>Nick Name</p>
                                        <div className="tblist-update-inputs">
                                            <UpdateInput label={data.NickName} placeholder={data.NickName} />
                                        </div>    
                                     </div>
                                    <div className="tblist-update-rate">
                                    <p>Explanantion</p>
                                       <div className="tblist-update-inputs">
                                           <UpdateInput label={data.Explanantion} placeholder={data.Explanantion} />
                                       </div>    
                                    </div>
                           
                                    </>:activeTab==="Types of Law"?
                                    <>
                                         <div className="tblist-update-rate">
                                     <p>Nick Name</p>
                                        <div className="tblist-update-inputs">
                                            <UpdateInput label={data.NickName} placeholder={data.NickName} />
                                        </div>    
                                     </div>
                                    <div className="tblist-update-rate">
                                    <p>Type of Law</p>
                                       <div className="tblist-update-inputs">
                                           <UpdateInput label={data.Type} placeholder={data.Type} />
                                       </div>    
                                    </div>
                                    </>:activeTab ==="Referal Sources"?
                                    <>
                                            <div className="tblist-update-rate">
                                     <p>Nick Name</p>
                                        <div className="tblist-update-inputs">
                                            <UpdateInput label={data.NickName} placeholder={data.NickName} />
                                        </div>    
                                     </div>
                                    <div className="tblist-update-rate">
                                    <p>Name</p>
                                       <div className="tblist-update-inputs">
                                           <UpdateInput label={data.Name} placeholder={data.Name} />
                                       </div>    
                                    </div>
                                    </>:null
                                    
                            }
                            <div className="tbupdate-btn">
                                <p>Save</p>
                            </div>

                        </div>
            </div>
        
        }
            
        </>
    )
}

export default Tablist
