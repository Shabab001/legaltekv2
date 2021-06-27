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
               <p>Stay Informed!<br/>The latest in Legal<br/>Developments</p>
               <p>We are here to give you few reasons to make an effort and try to be aware of what's going on with the Legal Industry.</p>
               <p>Since society and laws are constantly evolving, get involved in making all the needed positive changes</p>
           </div>
           <div className="stats-numbers-sec"> 
             <div className="stats-number">
               <p>500</p>
               <p>Total Users</p>
             </div>
             <div className="stats-number">
               <p>345</p>
               <p>Total Lawyers</p>
             </div>
             <div className="stats-number">
               <p>155</p>
               <p>Total LawFirms</p>
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
