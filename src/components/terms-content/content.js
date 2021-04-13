import React from 'react'

const Content = ({title,content}) => {
    return (
        <div className="welcome-main">
        <div className="welcome-title">
        <p>{title}</p>

        </div>
        <div className="welcome-para">
        {content.map((para,index)=>{
            return(
            <p key={index}>{para.line}</p>
        )})}
       
        </div>
    </div>
    )
}

export default Content
