import React from "react";
import BlogSearch from "./blogSearch";
import "./blogSearchPage.css";
const BlogSearchPage = () => {
  return (
    <div className="blogSearch-main">
      <div className="blogSearch-heading"></div>
      <BlogSearch type="blog" />
    </div>
  );
};

export default BlogSearchPage;
