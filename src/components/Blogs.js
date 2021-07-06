import React, { useState } from "react";
import "./blogs.css";
import BlogSearch from "./publicBlogs/blogSearch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";

import PBlogCard from "./publicBlogs/pBlogCard";
import BlogNav from "./publicBlogs/blogNav";
import PopularBlogs from "./publicBlogs/popularBlogs";
import HighlightedBlog from "./publicBlogs/highlightedBlog";

function Blogs() {
  const headerBlog = ["first", "second", "third", "forth", "fifth"];
  const blogs = [1, 2, 3];
  return (
    <div className="main-blog-container">
      <div className="header-blogs">
        <div className="header-blogs-content">
          <BlogNav />
          <PBlogCard type={"header"} />
        </div>
      </div>
      <BlogSearch />
      <div className="popularBlogs-main">
        <div className="pop-blogs-grid">
          {blogs.map((item, index) => {
            return <PopularBlogs key={index} background={"#f7f7f7"} />;
          })}
        </div>
      </div>
      <HighlightedBlog />
      <div className="pBlogs-normal-grid">
        {headerBlog.map((item, index) => (
          <div key={index} className={`pblogs-normal-box${index + 1}`}>
            {index === 1 ? (
              <PopularBlogs type={"big"} />
            ) : (
              <PopularBlogs body={"none"} background={"#f7f7f7"} />
            )}
          </div>
        ))}
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
