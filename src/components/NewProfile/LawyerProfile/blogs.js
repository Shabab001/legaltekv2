import React,{useEffect} from "react";
import "./blogs.css";
import {BsPlusSquareFill} from "react-icons/bs"
import BlogGallery from "./blog-contents/blogGallery";
import * as blogActions from "../../../actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.lawfirmUserProfile,
  blogs: state.blog,
});

const mapDispatchToProps = (dispatch) => ({
  blogActions: bindActionCreators(blogActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
