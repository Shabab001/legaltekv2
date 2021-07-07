import React, { useState, useEffect } from "react";
import "./blogNav.css";

const BlogNav = props => {
  const [activeBtn, setActiveBtn] = useState(props.navbtn);
  const [click, setClick] = useState(false);
  console.log(props.navbtn);

  const handleChange = btn => {
    setClick(true);
    setActiveBtn(btn);
    props.setNavBtn(btn);
  };

  let handleTime = null;
  const handleTimeout = () => {
    handleTime = setTimeout(() => {
      console.log("run");
      if (activeBtn === "btn1") {
        setActiveBtn("btn2");
        props.setNavBtn("btn2");
      }
      if (activeBtn === "btn2") {
        setActiveBtn("btn3");
        props.setNavBtn("btn3");
      }
      if (activeBtn === "btn3") {
        setActiveBtn("btn1");
        props.setNavBtn("btn1");
      }
    }, 4000);
  };
  const handleClickOut = () => {
    handleTime = setTimeout(() => {
      if (activeBtn === "btn1") {
        setActiveBtn("btn2");
        props.setNavBtn("btn2");
      }
      if (activeBtn === "btn2") {
        setActiveBtn("btn3");
        props.setNavBtn("btn3");
      }
      if (activeBtn === "btn3") {
        setActiveBtn("btn1");
        props.setNavBtn("btn1");
      }
    }, 4000);
  };

  useEffect(() => {
    if (click) {
      console.log("here");
      clearTimeout(handleTime);
    } else {
      handleTimeout();
    }
  }, [activeBtn]);

  return (
    <div className="header-blogs-nav">
      <div
        className={
          activeBtn === "btn1"
            ? "header-blog-nav-btn-full"
            : "header-blog-nav-btn"
        }
        onClick={() => handleChange("btn1")}
      >
        <p>01</p>
      </div>
      <div
        className={
          activeBtn === "btn2"
            ? "header-blog-nav-btn-full"
            : "header-blog-nav-btn"
        }
        onClick={() => handleChange("btn2")}
      >
        <p>02</p>
      </div>
      <div
        className={
          activeBtn === "btn3"
            ? "header-blog-nav-btn-full"
            : "header-blog-nav-btn"
        }
        onClick={() => handleChange("btn3")}
      >
        <p>03</p>
      </div>
    </div>
  );
};

export default BlogNav;
