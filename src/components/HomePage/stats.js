import React from 'react'
import "./stats.css"

function Stats() {
    return (
      <div className="stats-container">
    <div className="stats-main">
        <div className="stats-left">
           <div className="stats-title">
               <p>We Provide Comfortable <br/>Workspace For You</p>
               <p>It is a long established fact that a reader will be<br/> distracted by the readable content of a page <br/>when looking at its layout.</p>
           </div>
           <div className="stats-numbers-sec"> 
             <div className="stats-number">
               <p>500</p>
               <p>Total Workspace</p>
             </div>
             <div className="stats-number">
               <p>345</p>
               <p>Team Workspace</p>
             </div>
             <div className="stats-number">
               <p>155</p>
               <p>Solo Workspace</p>
             </div>
           </div>
        </div>
        <div className="stats-right">
             <div className="stats-right-background">
                 <div className="stats-right-number">
                     <p>Minimalistic Look</p>
                     <p>40 Workspace</p>
                 </div>
             </div>
             <div className="stats-back2">

             <div className="stats-right-background2">
                 <div className="stats-right-number">
                     <p>Minimalistic Look</p>
                     <p>40 Workspace</p>
                 </div>
             </div>
             <div className="stats-rigth-last-sec">
               <p>01</p>
               <div className="stats-right-bars">
                 <div className="stats-right-bar" style={{backgroundColor:"orangered"}}></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>
                 <div className="stats-right-bar"></div>

               </div>
               <p>08</p>
             </div>
             </div>
        </div>
    </div>
    </div>
    )
}

export default Stats
