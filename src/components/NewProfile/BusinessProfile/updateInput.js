import React from 'react'
import "./updateinput.css"
import { Select } from 'antd';

const { Option } = Select;
const UpdateInput = (props) => {
  
    
     function onChange(value) {
      console.log(`selected ${value}`);
    }
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val) {
      console.log('search:', val);
    }


    return (
        <div className="list-s-input2">
        {props.icon? <props.icon style={{fontSize:"1.1rem"}}/>:null}
       {props.type==="dropdown"? 
           <Select
           showSearch
           style={{ width: "100%" }}
      
           optionFilterProp="children"
           onChange={onChange}
           onFocus={onFocus}
           onBlur={onBlur}
           onSearch={onSearch}
           filterOption={(input, option) =>
             option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
           }
         >
           <Option value="Active">Active</Option>
           <Option value="Inactive">Inactive</Option>
       
         </Select>
       
       :<input className="s-input2" type={props.type} placeholder={props.placeholder}/>}
    </div>
    )
}

export default UpdateInput
