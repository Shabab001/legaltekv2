import React from 'react'
import "./welcome.css"

const Welcome = ({title}) => {
    return (
        <div className="welcome-main">
            <div className="welcome-title">
            <p>{title}</p>

            </div>
            <div className="welcome-para">
                <p>Legaltek's products and services are provided by Legaltek, Inc. These terms and conditions of use ("Terms") govern your use of Legaltek's websites, mobile applications, products, and services (collectively, the "Services"), so please read them carefully.</p>
      <p>By accessing this website or using the Services, you are agreeing to the Terms, Legaltek's Privacy Policy and Legaltek's Community Guidelines. If you have any questions, please contact us.</p>
            </div>
        </div>
    )
}

export default Welcome
