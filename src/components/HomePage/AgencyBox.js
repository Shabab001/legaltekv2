import React from 'react'
import "./agencybox.css"
import Building from "./images/buildings.jpg"
const AgencyBox = () => {
    return (
        <div className="agency-box">
            <div className="agency-box-image">
                 <img className="agency-building-image" src={Building} alt="building"/>
            </div>
            <div className="agency-box-card">
        <div className="agency-box-title">
           <p>$320.000</p>
           <p>Casa Alda</p>
           <p>San Francisco, CA 93102, USA</p>
        </div>
        <div className="agency-property">
             <div>
                 <p>2 Beda</p>
             </div>
             <div>
                 <p>1 Bath</p>
             </div>
             <div>
                 <p>1201 Sqft</p>
             </div>
        </div>

            </div>
    </div>
    )
}

export default AgencyBox
