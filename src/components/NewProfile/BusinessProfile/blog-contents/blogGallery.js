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

               <p>We are committed to helping Law Firms set-up and maintain their Legal Practise online. our digital software equips you to communicate and practise on a global scale. When searching for the right Legal Professionals to address client's needs, they will see your verified badge on profile listing. Verified bdges indicate Law Firm has undergone and been approved by our vetting agency</p>
                </div>
                    
                <div className="list-search3">
                  
                    <input className="bg-search-sec" type="text" placeholder="search" />

               
                  <div className="bg-input-grid">

                  <div className="bg-sort-inputs">
                    <p>Area of Practise</p>
                    <input/>
                  </div>
                  <div className="bg-sort-inputs">
                    <p>sort by</p>
                    <input/>
                  </div>
                  <div className="bg-sort-inputs">
                    <p>Select Date</p>
                    <input/>
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
 
