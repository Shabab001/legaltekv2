import React from "react";
import Law from "../law.jpg";
import RecentBlogCard from "./recentBlogCard";
import "./recentBlogs.css";
const RecentBlogs = props => {
  return (
    <div className="recent-blogs-main">
      <div
        className={
          props.type === "big" ? "recent-blog-box-big" : "recent-blog-box"
        }
      >
        <div
          className={
            props.type === "big" ? "recent-blog-pic-big" : "recent-blog-pic"
          }
        >
          <img alt="pic" src={props.blog ? props.blog.coverImage.url : Law} />
        </div>
        <RecentBlogCard type={props.type} blog={props.blog} />
      </div>
    </div>
  );
};

export default RecentBlogs;
