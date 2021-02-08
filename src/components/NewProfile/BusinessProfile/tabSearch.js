import React,{useState} from 'react'
import { AiOutlineSearch} from 'react-icons/ai';
import {VscChromeMinimize} from 'react-icons/vsc';
import {FiChevronDown} from 'react-icons/fi';
import {BsPlus} from 'react-icons/bs';
import ListSearchLabel from "./listSearchLabel"
import ListSearchInput from "./listSearchInput"
import "./tbsearch.css"
import { FaCalculator } from 'react-icons/fa';
import Tablist from './Tablist';
const TabSearch = ({activeTab,columns,data}) => {
    const[minimize,setMinimize]=useState(false);
    const [state,setState]=useState("");
    
    
    
    const handleMinimize =()=>{
        setState(activeTab)
        if (activeTab===state){

            setMinimize(!minimize);
        }
        else{
            setMinimize(false)
        }

      }
    return (
        <>
        { minimize && state===activeTab? 
        <>
                  <div className="list-headings">
                  <p>{activeTab}</p>
               </div>
            <div className="tbsearch-grid">
                         <div className="list-maximize" onClick={handleMinimize}>
              
              <BsPlus style={{fontSize:"1.5rem"}}/>
             
              </div>
                    {columns && columns.map((label,index)=>{
                        return(
                            <div key={index} className="tbsearch-name">
                            <ListSearchLabel label={label}/>
                            </div>
                        )
                    })}

                           <div style={{position:"relative",flexBasis:"3%",opacity:0}}>
              <FiChevronDown/>
           </div>                        

                 </div>
                 </>
                 :
                 <>
                 <div className="list-headings">
                     <p>{activeTab}</p>
                  </div>
                         <div className="tbsearch-grid">
                         <div className="tbsearch-minimize" onClick={handleMinimize}>
                            <VscChromeMinimize className="list-minimize"/>
                            
                         </div>
                         
                         {columns&&columns.map((label,index)=>{
                        return(
                            <div key={index} className={`tbsearch-name`}>
                            <ListSearchLabel label={label}/>
                            <div className="tbsearch-input-container input1">
                           <ListSearchInput label={label} icon={AiOutlineSearch} type={"text"}/>
                            </div> 
                                                           
                            </div>
                        )
                    })}

                
                         <div style={{position:"relative",flexBasis:"3%",opacity:0}}>
              <FiChevronDown/>
           </div>
                       </div>
                       </>
}
          {
              data.map((data,index)=>{
                  return(

                      <Tablist data={data} key={index} activeTab={activeTab} />
                  )
              })
          }           


</>
    )
}

export default TabSearch
