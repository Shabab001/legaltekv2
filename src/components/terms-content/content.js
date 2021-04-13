import React from 'react'
import parse from 'html-react-parser';

const Content = ({title,content,hasRead, setRead ,setCount,count}) => {
    console.log( hasRead, count)
    if(hasRead ===false){
        
            console.log("here")
            setRead(true);
            setCount(count=count+1);
    
        
    }
    return (
        <div className="welcome-main">
        <div className="welcome-title">
        <p>{title}</p>

        </div>
        <div className="welcome-para">
        {content.map((para,index)=>{
            return(
                <>
                {para.title? <p style={{fontWeight:"bold"}}>{parse(para.title)}</p>:null}
            <p key={index}>{parse(para.line)}</p>
            </>
        )})}
       
        </div>
    </div>
    )
}

export default Content
