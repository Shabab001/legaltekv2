import React,{memo} from 'react'

const RegNoDocs = (props) => {
    return (
        <div className={`Order-sections-first ${props.css}`}>
        <div>

        <p>Registration Number For Lawfirm Named {props.lawfirmName}</p>
        <p>Lawfirm Registration Number: {props.regNo}</p>
        </div>
        <div>
             <p>{props.type}</p>
        
        </div>
      </div>
    )
}

export default memo(RegNoDocs)
