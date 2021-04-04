import React from 'react'
import "./ratesModal.css"
import ReactDom from "react-dom"
import {VscChromeClose} from "react-icons/vsc"
const ExplanantionModal = ({set,open}) => {
    if(!open)return null
    return ReactDom.createPortal (
        <div className="post-modal-main">
            <div   className="post-modal-container" > 
        
           
            <div className="post-modal-headings">
            <div className="post-modal-first">

             <p>Add Explanation Code</p>
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
       <input placeholder="Explanation" />
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

export default ExplanantionModal
