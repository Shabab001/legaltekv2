import React, { useState, useEffect } from "react";
import PBlogCard from "./pBlogCard";
import "./blogslider.css";

const BlogSlider = props => {
  const [slide, setSLide] = useState("blog1");

  useEffect(() => {
    handleTime();
  }, [props.navbtn]);

  const handleTime = () => {
    if (props.navbtn === "btn1") {
      setSLide("blog1");
    }
    if (props.navbtn === "btn2") {
      setSLide("blog2");
    }
    if (props.navbtn === "btn3") {
      setSLide("blog3");
    }
  };

  return (
    <div className="header-blog-slider-main">
      <div
        className={
          slide === "blog1"
            ? "header-blog-slider slide-blog"
            : "header-blog-slider"
        }
      >
        <PBlogCard type={"header"} />
      </div>
      <div
        className={
          slide === "blog2"
            ? "header-blog-slider slide-blog"
            : "header-blog-slider"
        }
      >
        <PBlogCard type={"header"} />
      </div>
      <div
        className={
          slide === "blog3"
            ? "header-blog-slider slide-blog"
            : "header-blog-slider"
        }
      >
        <PBlogCard type={"header"} />
      </div>
    </div>
  );
};

export default BlogSlider;
