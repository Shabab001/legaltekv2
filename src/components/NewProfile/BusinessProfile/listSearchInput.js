import React from 'react'
import "./listinput.css"
import { Select } from 'antd';

const { Option } = Select;
const ListSearchInput = (props) => {

 function onChange(value) {

  props.setSearchTerm(value);
  props.setCriteria(props.label)
 
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

const handleSearchInput=(e)=>{
  props.setSearchTerm(e.target.value);
  props.setCriteria(props.label)
if(e.target.value  && props.label){
  if(props.label==="Firstname"){
    
   
    props.setDisable({firstname:false,lastname:true,username:true,email:true,status:true,phone:true})

  }
  if(props.label==="Lastname"){
    props.setDisable({firstname:true,lastname:false,username:true,email:true,status:true,phone:true})
  }
  if(props.label==="Username"){
    props.setDisable({firstname:true,lastname:true,username:false,email:true,status:true,phone:true})
  }
  if(props.label==="Email"){
    props.setDisable({firstname:true,lastname:true,username:true,email:false,status:true,phone:true})
  }
  if(props.label==="Phone"){
    props.setDisable({firstname:true,lastname:true,username:true,email:true,status:true,phone:false})
  }

}
else{
 
  props.setDisable({firstname:false,lastname:false,username:false,email:false,status:false})
}

}


    return (
        <div className="list-s-input">
          
           {props.type==="dropdown"? 
           <Select
           showSearch
           style={{ width: "100%" }}
          disabled={props.disable}
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
           
           :<input autoComplete="sjdhfj" className="s-input" name={props.label} disabled={props.disable} type={props.type} onChange={handleSearchInput} />}
        </div>
    )
}

export default ListSearchInput
