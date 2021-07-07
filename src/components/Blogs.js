import React, { useState, useEffect } from "react";
import "./blogs.css";
import BlogSearch from "./publicBlogs/blogSearch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";
import * as blogActions from "../actions/blogActions";
import PBlogCard from "./publicBlogs/pBlogCard";
import BlogNav from "./publicBlogs/blogNav";
import PopularBlogs from "./publicBlogs/popularBlogs";
import HighlightedBlog from "./publicBlogs/highlightedBlog";
import BlogSlider from "./publicBlogs/blogSlider";
import Subscribe from "./Subscribe/Subscribe";
import RecentBlogs from "./publicBlogs/recentBlogs";

function Blogs(props) {
  const headerBlog = ["first", "second", "third", "forth", "fifth"];
  const blogs = [1, 2, 3];
  const [navbtn, setNavBtn] = useState("btn1");
  const [popBlogs, setPopBlogs] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState(null);

  useEffect(() => {
    const call = async () => {
      let popular = await props.blogActions.getPopularBlogs();
      let recent = await props.blogActions.getRecentBlogs();
      if (popular) {
        console.log("succrs");
      }
    };
    call();
  }, []);
  useEffect(() => {
    if (props.popularBlogs && props.popularBlogs.length !== 0) {
      console.log("hi");
      setPopBlogs(props.popularBlogs);
    }
    if (props.recentBlogs && props.recentBlogs.length !== 0) {
      setRecentBlogs(props.recentBlogs);
    }
  }, [props.popularBlogs, props.recentBlogs]);
  console.log(popBlogs);

  return (
    <div className="main-blog-container">
      <div className="header-blogs">
        <div className="header-blogs-content">
          <BlogNav setNavBtn={setNavBtn} navbtn={navbtn} />
          <BlogSlider navbtn={navbtn} />
        </div>
      </div>
      <BlogSearch />
      <div className="pBlog-title">
        <p>Poplular Blogs</p>
      </div>
      <div className="popularBlogs-main">
        <div className="pop-blogs-grid">
          {popBlogs &&
            popBlogs.map((item, index) => {
              return (
                <PopularBlogs blog={item} key={index} background={"#f7f7f7"} />
              );
            })}
        </div>
      </div>
      <HighlightedBlog />
      <div className="pBlog-title">
        <p>Recent Blogs</p>
      </div>
      <div className="pBlogs-normal-grid">
        {recentBlogs &&
          recentBlogs.map((item, index) => (
            <div key={index} className={`pblogs-normal-box${index + 1}`}>
              {index == 1 ? (
                <RecentBlogs type="big" blog={item} />
              ) : (
                <RecentBlogs blog={item} />
              )}
            </div>
          ))}
      </div>
      <Subscribe background={"#f7f7f7"} margin={"2rem"} type={"blog"} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    popularBlogs: state.blog.popularPosts,
    recentBlogs: state.blog.recentPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    blogActions: bindActionCreators(blogActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
