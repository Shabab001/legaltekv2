import React from "react";
import "./blogs.css";
import {BsPlusSquareFill} from "react-icons/bs"
import BlogGallery from "./blog-contents/blogGallery";
function Blogs(props) {
  console.log(props.history)
  return (
    <>
     <div className="blog-main">
       <div className="blog-container">
          {/* <div className="blog-heading-grid">
            <div>
              <p>Blogs</p>
            </div>
            <div>
              
            < BsPlusSquareFill color="red" style={{fontSize:"1.5rem"}}   />
             
            </div>
          </div> */}
          <BlogGallery history={props.history}/>

       </div>

     </div>
    </>
  );
}

export default Blogs;
