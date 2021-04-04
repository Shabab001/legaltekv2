import React from 'react'
import "./ratesModal.css"
import ReactDom from "react-dom"
import {VscChromeClose} from "react-icons/vsc"
const TaskModal = ({set,open}) => {
    if(!open)return null
    return ReactDom.createPortal (
        <div className="post-modal-main">
            <div   className="post-modal-container" > 
        
           
            <div className="post-modal-headings">
            <div className="post-modal-first">

             <p>Add Task Code</p>
            </div>
            <div className="post-modal-cross">

              <VscChromeClose style={{fontSize:"1.4rem"}} onClick={()=>{set(false) 
              
                }}/>
            </div>
          </div>
          <div className="post-modal-options-grid2">
     
     <div className="pmodal-name-cat-time">
       <input placeholder="Nick Name" />
     </div>

     <div className="pmodal-name-cat-time">
       <input placeholder="Area" />
     </div>
</div>
<div className="post-modal-options-grid2">
     
     <div className="pmodal-name-cat-time">
       <input placeholder="Task Name" />
     </div>

     <div className="pmodal-name-cat-time">
       <input placeholder="Category" />
     </div>
</div>

     <div className="postmodal-btn" style={{marginTop:"1rem"}}>
             <p>Add</p>
           </div>
          </div>
        </div>,
        document.getElementById("portal")
    )
}

export default TaskModal
