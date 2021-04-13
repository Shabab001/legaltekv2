import React from 'react'
import "./Agencies.css"
import AgencyBox from './AgencyBox'
import AgencyBox2 from './AgencyBox2'
const Agencies = () => {
    return (
        <div className="agency-main">
                    <div className="lawyers-heading" >
        <h4 >Featured Law Firms</h4>
      </div>
            <div className="agency-container">
    
                <div className="agency-grid">
                  <AgencyBox2/>
                  <AgencyBox2/>
                  <AgencyBox2/> 
                  <AgencyBox2/>
                  <AgencyBox2/>
                  <AgencyBox2/>
                  <AgencyBox2/>
                  <AgencyBox2/>
                  <AgencyBox2/>

                </div>

            </div>
        
        </div>
    )
}

export default Agencies
