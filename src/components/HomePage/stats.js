import React from 'react'
import Card from '../IndexShared/Card'
import AgencyBox from './AgencyBox'
import SingleBlogs from './single blogs/singleBlogs'
import SingleReview from './single blogs/singleReview'
import "./stats.css"
import StatSlider from './statSlider'

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
          <div>

      
             <div className="stats-right-background">
                <SingleBlogs/>
             </div>
                 <StatSlider/>
          </div>
             <div className="stats-back2">

           <SingleReview/>
              <StatSlider/>
             </div>
        </div>
    </div>
    </div>
    )
}

export default Stats
