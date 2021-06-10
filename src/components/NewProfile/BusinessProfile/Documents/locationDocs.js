import React,{memo} from 'react'

const LocationDocs = (props) => {
    return (
        <div  className={`order-section-second ${props.css}`}>
        <div>
        
        <p>Proof of location of {props.lawfirmName} Lawfirm at {props.businessAddress}</p>
        </div>
        <div>
      
          <p>{props.type}</p>
         
        </div>
      </div>
    )
}

export default memo(LocationDocs)
