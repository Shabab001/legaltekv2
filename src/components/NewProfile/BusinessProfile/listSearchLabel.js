import React from 'react'
import { FaCaretDown,FaCaretUp } from 'react-icons/fa';
const ListSearchLabel = (props) => {
    return (
        <div style={{display:"flex",gap:".4rem"} }>
            <p>{props.label}</p>
            <div style={{display:"grid"}}>
                <FaCaretUp style={{position:"relative",top:"1px"}}/>
                <FaCaretDown style={{position:"relative",top:"-5px"}}/>
            </div>
        </div>
    )
}

export default ListSearchLabel
