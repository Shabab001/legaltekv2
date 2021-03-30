import React from 'react'
import "./order.css"
const Documents = () => {
  return (
    <div style={{backgroundColor:"white"}}>
      <div className="order-headings">
        <p>Upload Your Supporting Documents</p>
        <p>Please Upload images of documents below. Some more info about required files</p>
      </div>
      <div className="order-percentage">
        <p>0%</p>
        <div className="order-percentage-box">
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
          <div className="percentage-box"></div>
        </div>
      </div>
      <div className="order-required">
         <div className="order-required-first">
           <p>Required Documents</p>
           <p>Please see the list of items below that we need in order to lodge yoour application.</p>
         </div>
         <div className="order-required-second">
           <p>0 out of 4 files uploaded</p>
         </div>
      </div>
      <div className="order-sections">
        <div className="Order-sections-first">
          <div>

          <p>Registration or insurance card for collateral 2018 Toyota Hilux</p>
          <p>2 files uploaded</p>
          </div>
          <div>
           <p>Submitted</p>
          </div>
        </div>
        <div className="order-section-second">
          <div>

          <p>Proof of $1000 income from monthly rent</p>
          </div>
          <div>
            <p>Failed</p>
          </div>
        </div>
        <div className="order-section-second">
          <div>

          <p>Proof of $1000 income from monthly rent</p>
          </div>
          <div>
            <p>Failed</p>
          </div>
        </div>
        <div className="order-section-second">
          <div>

          <p>Proof of $1000 income from monthly rent</p>
          </div>
          <div>
            <p>Failed</p>
          </div>
        </div>
        <div className="order-section-approve">
          <div>

          <p>Proof of address: Avenue street indian plis</p>
          <p>2 files uploaded</p>
          </div>
          <div>
            <p>Approved</p>
          </div>
        </div>
         <div className="order-caution">
           <p>Your information is protected by bank-level security and covered by an industry first insurance policy</p>
         </div>
      </div>
    </div>
  )
}

export default Documents
