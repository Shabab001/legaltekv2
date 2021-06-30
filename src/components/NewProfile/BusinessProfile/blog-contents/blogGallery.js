import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {BsPlusSquareFill,BsDot} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import "./blogGallery.css"
import BlogCard from './blogCard'
import Civil  from "./images/civil.jpeg"
import Criminal  from "./images/criminal.jpeg"
import CreateBlog from "./createBlog"
import { fromString } from 'uuidv4'
import * as blogActions from "../../../../actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {GoPlus} from "react-icons/go"
import { DatePicker,Select } from 'antd'
import {lawCats} from "../lawyer modal/lawCats"
import moment from 'moment'


const sortby=[{name:"Newest",value:"Posted: Newest First"},{name:"Oldest",value:"Posted: Oldest First"}, {name:"Like",value:"Likes: Most Liked"},{name:"Comments",value:"Commnets: Most Commented"}]

const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
const BlogGallery = (props) => {
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

  console.log(searchTerm , criteria)

  useEffect(()=>{
      props.blogActions.getBlogs("hi")
  },[])
  useEffect(() => {
    if (props.blogs.posts) {
      
      let bPosts=[];
      console.log(props.blogs.posts);
      bPosts=[...props.blogs.posts]
    if(criteria && criteria==="Newest"){

      setPosts(bPosts.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt)));
      return;
    }
    if(criteria === "Like"){
      setPosts(bPosts.sort((a,b)=> b.likes - a.likes));
      return;
    }
    if(criteria === "Comments"){
      setPosts(bPosts.sort((a,b)=> b.comments.length - a.comments.length));
      return;
    }
    setPosts(bPosts)
      
    } else {
      setPosts([]);
    }
   
  }, [props.blogs,criteria]);

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

    return (<>

        
  
        <div className="bgallery-main">
        
                <div  className="bgallery-header-title">
                    <p>Blogs</p>
                    
                    <Link to="/lawfirm/blogs/createblog" style={{display:'flex',alignItems:"center"}}>
                  <GoPlus/>
                   </Link>
                </div>
                <div className="bg-text">

               <p> Blogging enables you to reach millions of people that use the Internet. Blogging can help you promote your business by writing about important topics that are relevant to your audience establishes yourself as an authority in the space. It works as a method for attracting an audience because it provides something of value to them before asking for anything in return. Blogging can lead to other business/traffic generating opportunities.
Here you can see a list of Blogs written by the people in your Firm.</p>
                </div>
                    
                <div className="list-search3">
                  
                    <input className="bg-search-sec" value={title} disabled={disableInput.title}  name="title" type="text" placeholder="Search" onChange={(e)=>handleSearchInput(e,"something","search")} />

               
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
                    />
                </div>
                  </div>
                  <div className="bg-reset-btn" onClick={handleReset}>
                    <p>Reset</p>
                  </div>
                  </div>   
            <div className="bgallery-body-container">
               {(posts && posts.length!==0)?
                  
                posts.map((item,index)=>{
           
                   if(searchTerm ){
                    
                        if(criteria==="title" && item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        
                          return   <BlogCard blog={item} key={index} history={props.history} index={index}/>
                        }
                        if(criteria==="cats" && item.blogCategory.find((item)=>item.toLowerCase().includes(searchTerm.toLowerCase()))){
                        
                          return   <BlogCard blog={item} key={index} history={props.history} index={index}/>
                        }
                        if(criteria==="date" && moment(item.createdAt,dateFormat).isSame(searchTerm,'day')){
                        
                          return   <BlogCard blog={item} key={index} history={props.history} index={index}/>
                        }
                       
                        
                   }
                   else{

                     return(
                       
                       
                       <BlogCard blog={item} key={index} history={props.history} index={index}/>
                       
                       
                       )
                      }
                 })
                      :null
                  }
            
            </div>
           
        </div>
        
        </>
    )
}

const mapStateToProps = (state) => ({
   auth: state.auth,
   profile: state.auth.lawfirmUserProfile,
   blogs: state.blog,
 });
 
 const mapDispatchToProps = (dispatch) => ({
   blogActions: bindActionCreators(blogActions, dispatch),
 });
 export default connect(mapStateToProps, mapDispatchToProps)(BlogGallery);
 
