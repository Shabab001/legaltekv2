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

    const handleInputs =(e)=>{
      console.log(props.label)
      if(props.label!== "status"){

        if(e.target.value){
          
          props.setUpdateInputs({
            ...props.updateInputs,
            [props.label]:e.target.value,
          })
        }
        else{
          props.setUpdateInputs({
            ...props.updateInputs,
            [props.label]:e.target.value
          })
        }
      }
      else{
        if(e){
          
          props.setUpdateInputs({
            ...props.updateInputs,
            [props.label]:e,
          })
        }
        else{
          props.setUpdateInputs({
            ...props.updateInputs,
            [props.label]:e
          })
        }
      }
    }

    return (
        <div className="list-s-input2">
        {props.icon? <props.icon style={{fontSize:"1.1rem"}}/>:null}
       {props.type==="dropdown"? 
           <Select
           showSearch
           style={{ width: "100%" }}
            value={props.value}
            placeholder={`${props.placeholder}`}
           optionFilterProp="children"
           onChange={handleInputs}
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
       
       :<input value={props.value} placeholder={props.placeholder} className="s-input2" type={props.type} onChange={handleInputs} />}
    </div>
    )
}

export default UpdateInput
