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

const BlogGallery = (props) => {
   const [posts,setPosts]=useState([])



  useEffect(()=>{
      props.blogActions.getBlogs("hi")
  },[])
  useEffect(() => {
    if (props.blogs.posts) {
      console.log(props.blogs.posts);
      setPosts(props.blogs.posts);
    } else {
      setPosts([]);
    }
   
  }, [props.blogs]);

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
                  
                    <input className="bg-search-sec" type="text" placeholder="Search" />

               
                  <div className="bg-input-grid">

                  <div className="bg-sort-inputs">
              
                    <input placeholder="Area of practise"/>
                  </div>
                  <div className="bg-sort-inputs">
                
                    <input placeholder="Sort by"/>
                  </div>
                  <div className="bg-sort-inputs">
                  
                    <input placeholder="Select Date"/>
                  </div>
                  </div>
                  </div>   
            <div className="bgallery-body-container">
               {(posts && posts.length!==0)?
                 props.blogs.posts.map((item,index)=>{
                    return(
                  
              
                     <BlogCard blog={item} key={index} history={props.history} index={index}/>
                     

                    )
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
 
