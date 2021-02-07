import React, { useState, useEffect } from "react";
import BottomNav from "./IndexShared/BottomNav";
import Footer from "./IndexShared/Footer";
import Header from "./IndexShared/Header";


function BusinessSingleBlog(props) {
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="index">
      <Header {...props} />
      <div className="bsingle-blog-container">


      </div>

      <Footer />
      <BottomNav {...props} />
    </div>
  );
}

export default BusinessSingleBlog;
