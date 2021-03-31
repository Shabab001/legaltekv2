import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {BsPlusSquareFill,BsDot} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import "./blogGallery.css"
import BlogCard from './blogCard'
import Civil  from "./images/civil.jpeg"
import Criminal  from "./images/criminal.jpeg"
import CreateBlog from "./createBlog"
import { fromString } from 'uuidv4'
const BlogGallery = () => {
    const[create,setCreate]=useState(false)
    return (<>

        
  
        <div className="bgallery-main">
            <div className="bgallery-header">
                <div className="bgallery-header-title">
                    <p>Blogs</p>
                   
                    < BsPlusSquareFill color="red" style={{fontSize:"1.5rem"}} onClick={()=>setCreate(true)}   />
                  
                </div>
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
                <Link to ="/business/:postId">
              
                <BlogCard image={Civil}/>
                
             </Link>
             <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
           <Link to ="/business/:postId">
              
              <BlogCard image={Civil}/>
              
           </Link>
            </div>
           
        </div>
        
        </>
    )
}

export default BlogGallery
