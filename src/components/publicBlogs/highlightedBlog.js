import React from "react";
import Law from "../law.jpg";
import PBlogCard from "./pBlogCard";
import "./highlightedBlog.css";
const HighlightedBlog = () => {
  return (
    <div className="high-blog-main">
      <div className="high-blog-box">
        <div className="high-blog-img">
          <img src={Law} alt="pic" />
        </div>
        <PBlogCard background={"white"} />
      </div>
    </div>
  );
};

export default HighlightedBlog;
