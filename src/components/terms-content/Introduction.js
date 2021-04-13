import React from 'react'

const Introduction = ({title}) => {
    return (
        <div className="welcome-main">
        <div className="welcome-title">
        <p>{title}</p>

        </div>
        <div className="welcome-para">
            <p>Thanks for using Legaltek. This privacy policy ("Policy") applies to your use of Legaltek 's website, products, apps, and services (together, the "Services"). The Policy is intended to inform you about how Legaltek and its affiliates (collectively, "we") and/or third parties collect and use information so you can make an informed decision about using the Services. Please read it carefully before using the Services or submitting any information to us. If you do not agree to any part of this Policy, then you should stop accessing the Services.</p>
  <p>If you have any questions, please <a style={{textDecoration:"underline", color:"blue"}}>contact us</a></p>
        </div>
    </div>
    )
}

export default Introduction
