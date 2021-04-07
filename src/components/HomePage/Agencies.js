import React from 'react'
import "./Agencies.css"
import AgencyBox from './AgencyBox'
const Agencies = () => {
    return (
        <div className="agency-main">
                    <div className="lawyers-heading" >
        <h4 >Featured Law Firms</h4>
      </div>
            <div className="agency-container">
    
                <div className="agency-grid">
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>
                  <AgencyBox/>

                </div>

            </div>
        
        </div>
    )
}

export default Agencies
