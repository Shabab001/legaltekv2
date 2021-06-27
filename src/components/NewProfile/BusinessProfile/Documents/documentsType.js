import React,{memo} from 'react'


const DocumentsType = (props) => {
    return (
        <div className="order-required">
        <div className="order-required-first">
          <p>{props.document} Documents</p>
          <p>Please see the list of items below that we need in order to lodge yoour application.</p>
        </div>
        <div className="order-required-second">
          <p>0 out of 4 files uploaded</p>
        </div>
     </div>
    )
}

export default memo(DocumentsType)
