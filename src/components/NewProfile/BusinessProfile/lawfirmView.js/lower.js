import React,{useState} from 'react'
import "./lower.css"
import List from "./list"
import ListSidebar from './listSidebar'
const Lower = (props) => {
    const[tab,setTab]=useState("lawyers")
    const handleTab=(string)=>{
        if(string==="lawyers"){
            setTab(string)
        }
        if(string==="blogs"){
            setTab(string)
        }
        if(string==="following"){
            setTab(string)
        }
        if(string==="reviews"){
            setTab(string)
        }
        
    }
    return (
        <div className="lawfirm-view-lower">
            <div className="lawfirm-view-lower-top">
               <div className="lawfirm-view-lower-top-btns">
                    <div className={tab==="blogs"?"lawfirm-view-lower-btns"+ ` ${tab}` : "lawfirm-view-lower-btns"} onClick={()=>handleTab("blogs")}>
                        <p>Posts</p>
                    </div>
                    <div className={tab==="lawyers"?"lawfirm-view-lower-btns"+ ` ${tab}` : "lawfirm-view-lower-btns"} onClick={()=>handleTab("lawyers")}>
                        <p>Lawyers</p>
                    </div>
                    <div className={tab==="following"?"lawfirm-view-lower-btns"+ ` ${tab}` : "lawfirm-view-lower-btns"} onClick={()=>handleTab("following")}>
                        <p>Following</p>
                    </div>
               </div>
               <div className="lawfirm-view-lower-optns-wrapper">

               <div className={tab==="reviews"? "lawfirm-view-lower-optns" + ` ${tab}`:"lawfirm-view-lower-optns"} onClick={()=>handleTab("reviews")}> 
                  <p>Review</p>
               </div>
               </div>
            </div>
            <div className="lawfirm-view-lower-grid">
             <List lawfirm={props.lawfirm}tab={tab}/>
               <ListSidebar index={props.index}/>
            </div>
        </div>
    )
}

export default Lower
