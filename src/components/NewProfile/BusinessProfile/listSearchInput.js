import React from 'react'
import "./listinput.css"
import { Select } from 'antd';

const { Option } = Select;
const ListSearchInput = (props) => {

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
        <div className="list-s-input">
          
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
           
           :<input className="s-input" type={props.type} />}
        </div>
    )
}

export default ListSearchInput
