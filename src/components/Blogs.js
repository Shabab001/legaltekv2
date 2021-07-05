import React,{useState} from "react";
import "./blogs.css";
import { IoPricetagOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";
import Law from "./law.webp"
import { DatePicker,Select } from 'antd'
import {lawCats} from "./NewProfile/BusinessProfile/lawyer modal/lawCats"
const { Option } = Select;
function Blogs() {

   const [posts,setPosts]=useState([])
   const [title,setTitle]=useState(null)
   const [searchTerm,setSearchTerm]=useState("")
   const [cats,setCats]=useState(null)
   const [sort,setSort]=useState(null)
   const [date,setDate]=useState(null)
   const [criteria,setCriteria]=useState("")
     const [disableInput,setDisableInput]=useState({
     title:false,
     category:false,
     date:false,
     sortby:false
   })

const sortby=[{name:"Newest",value:"Posted: Newest First"},{name:"Oldest",value:"Posted: Oldest First"}, {name:"Like",value:"Likes: Most Liked"},{name:"Comments",value:"Commnets: Most Commented"}]

   const handleSearchInput = (e,date,name)=>{
     if(e && name &&date){
            if(name==="search"){
              if(e.target.value){
                setSearchTerm(e.target.value)
                setTitle(e.target.value)
                setCats(null);
                setDate(null)
                setSort(null)
                setCriteria("title")
                   setDisableInput({
                     ...disableInput,
                     title:false,
                     category:true,
                     date:true,
                     sortby:true
                   })
              }
              else{
                setSearchTerm("")
                setCriteria(null)
                setTitle(null)
                setDisableInput({
                  ...disableInput,
                  title:false,
                  category:false,
                  date:false,
                  sortby:false
                })
              }

            }
            if(name === "cats"){
              setCats(e);
              setSearchTerm(e)
              setCriteria("cats")
              setDate(null)
              setSort(null)
       
            }
            if(name === "sort"){
              setCats(null);
             setSearchTerm("")
               setCriteria(e)
              setDate('')
              setSort(e)
          
            }
            if(name === "date"){
              setCriteria("date")
              setCats(null);
              setSearchTerm(e)
         
              setDate(e)
              setSort(null)
       
            }
             
   }
  }


  const handleReset=()=>{
    setSearchTerm("")
    setCriteria("")
    setTitle("")
    setDisableInput({
      ...disableInput,
        title:false,
        category:false,
        date:false,
        sortby:false
      })
    setDate(null)
    setCats(null)
    setSort(null)
 
   
  }
















   
  const headerBlog = ["first", "second", "third"];
  return (
    <div className="main-blog-container">
      <div className="header-blogs">
         
        <div className="header-blogs-content">
        <div className="header-blogs-nav"> 
           <div>
           <p>01</p>
           </div>
                 <div>
           <p>02</p>
           </div>
             <div>
           <p>03</p>
           </div>
        
        </div>
          <div className="header-blogs-upper">
            <div className="header-blogs-cat">
              <IoPricetagOutline />
              <p>Civil</p>
            </div>
            <div className="header-blog-title">
              <p>Titleasd asdadasdsad asdasdasds</p>
            </div>
            <div className="header-blog-body">
              <p>content asdasdasdsadsadasd asdsadasdasdsadsadas asdasdasdsadsad asdasdsadsadasdasd asdasdasdasdsa asdasdsadsadsad</p>
            </div>
            <div className="header-blog-lower">
              <div className="header-blog-img-grid">
                <div className="header-blog-img"></div>
                <div className="header-blog-date">
                  <p>Leonard Michel</p>
                  <p>21st jully 2021</p>
                </div>
              </div>
              <div className="header-blogs-option-grid">
                <div>
                  <p>like</p>
                </div>
                <div>
                  <p>share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list-search3">
                  
                    <input className="bg-search-sec"  disabled={disableInput.title}  name="title" type="text" placeholder="Search" onChange={(e)=>handleSearchInput(e,"something","search")} />

               
                  <div className="bg-input-grid">
                  
                  <div className="bg-sort-inputs">
                  <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Area of practise"
                      onChange={(e,value)=>handleSearchInput(e,value,"cats")}
                      value={cats}
                      disabled={disableInput.category}
                   
                    >
                      {lawCats.map((item,index)=>
                          <Option  key={index} value={item}>{item}</Option>
                      )}
                     
                  
                    </Select>
                 </div>
                        



                 <div className="bg-sort-inputs">
                  <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Sort by"
                      disabled={disableInput.sortby}
                        onChange={(e,value)=>handleSearchInput(e,value,"sort")}
                        value={sort}
                    >
                      {sortby.map((item,index)=>
                          <Option  key={index} value={item.name}>{item.value}</Option>
                      )}
                     
                  
                    </Select>
                 </div>
                  <div className="bg-sort-inputs">
                  <DatePicker
                      name="dob"
                      value={date}
                      placeholder="Search by date"
                      onChange={(e,value)=>handleSearchInput(e,value,"date")}
                     style={{width:"100%",height:"2.5rem",borderRadius:"4px"}}
                     disabled={disableInput.date}
                     borderd={false}
                    />
                </div>
                  </div>
                  <div className="bg-reset-btn" onClick={handleReset}>
                    <p>Reset</p>
                  </div>
                    <div className="bg-reset-btn" >
                    <p>Search</p>
                  </div>
                  
                  </div>  
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

