import React from 'react'
import "./Agencies.css"
import AgencyBox from './AgencyBox'
const Agencies = () => {
    return (
        <div className="agency-main">
            <div className="agency-container">
                <div className="agency-grid">
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
