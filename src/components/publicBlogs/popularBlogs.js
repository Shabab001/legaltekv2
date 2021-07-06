import React from "react";
import PBlogCard from "./pBlogCard";
import "./popularBlogs.css";
import Law from "../law.jpg";
const PopularBlogs = props => {
  const blogs = [1, 2, 3];
  return (
    <div className="pop-blogs-box">
      <div className="po-box-img">
        <img src={Law} />
      </div>
      <PBlogCard
        type={props.type ? props.type : "normal"}
        body={props.body}
        background={props.background}
      />
    </div>
  );
};

export default PopularBlogs;
