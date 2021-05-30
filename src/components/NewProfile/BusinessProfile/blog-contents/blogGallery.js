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
            <div className="bgallery-header">
                    <Link to="/lawfirm/blogs/createblog">
                <div  className="bgallery-header-title">
                    <p>Blogs</p>
                    
                    < BsPlusSquareFill color="red" style={{fontSize:"1.5rem"}}/>
                </div>
                   </Link>
                <div className="bgallery-header-cat">
                    <p>All</p>
                    <BsDot style={{color:"red",fontSize:"1.2rem"}}/>
                    <p>Common</p>
                    <BsDot style={{color:"red",fontSize:"1.2rem"}}/>
                    <p>Administrative</p>
                    <BsDot style={{color:"red",fontSize:"1.2rem"}}/>
                    <p>Criminal</p>
                    <BsDot style={{color:"red",fontSize:"1.2rem"}}/>
                    <p>Civil</p>
                </div>
                <div className="bgallery-header-Search">
                    <BiSearch/>
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
 
