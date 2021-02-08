import React from 'react'
import "./listinput.css"
const UpdateInput = (props) => {
    return (
        <div className="list-s-input">
        {props.icon? <props.icon style={{fontSize:"1.1rem"}}/>:null}
       {props.type==="dropdown"? 
       <select name={props.label} >
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cat</option>
       </select>
       
       :<input className="s-input" type={props.type} placeholder={props.placeholder}/>}
    </div>
    )
}

export default UpdateInput
