import React from 'react'
import { FaCaretDown,FaCaretUp } from 'react-icons/fa';
const ListSearchLabel = (props) => {
    
            const handleSorting=()=>{
                props.setSort(props.label)
                props.setTrigger(!props.trigger)
            }



    return (
        <div style={{display:"flex",gap:".4rem"} }>
            <p>{props.label}</p>
            <div style={{display:"grid", cursor:"pointer"}} onClick={handleSorting} >
                <FaCaretUp style={{position:"relative",top:"1px"}}/>
                <FaCaretDown style={{position:"relative",top:"-5px"}}/>
            </div>
        </div>
    )
}

export default ListSearchLabel
