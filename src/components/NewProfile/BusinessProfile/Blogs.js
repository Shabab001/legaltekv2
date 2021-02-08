import React from "react";
import "./../../../assets/css/blogs.css";
function Blogs() {
  return (
    <>
    <div>

    
      <div className=" blogs">
        <h1>Blogs</h1>
        <div className="album-action-container">
          <div>
            <i className="fe fe-plus" />
            <p>Add Category</p>
          </div>
          <div>
            <i className="fe fe-plus" />
            <p>Add Blog</p>
          </div>
        </div>
      </div>
      

        <div className="blog-card-row">
          <div className="blog-card">
            <div className="img-container">
              <img src={require("./../../../assets/img/f1.jpg")} alt="" />
            </div>
            <div className="blog-card-content">
              <div className="blog-cat cat-1">
                <span>Entertainment</span>
              </div>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </h5>
              <p>
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <div className="blog-card-author">
              <div className="avatar">
                <img src={require("../../../assets/images/user.png")} alt="" />
              </div>
              <div className="author-name">Waheed Ahmed</div>
              <div className="published-at">May 31, 2019</div>
            </div>
          </div>

          <div className="blog-card">
            <div className="img-container">
              <img src={require("./../../../assets/img/f2.jpg")} alt="" />
            </div>
            <div className="blog-card-content">
              <div className="blog-cat cat-2">
                <span>Marketing</span>
              </div>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </h5>
              <p>
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <div className="blog-card-author">
              <div className="avatar">
                <img src={require("../../../assets/images/user.png")} alt="" />
              </div>
              <div className="author-name">Waheed Ahmed</div>
              <div className="published-at">May 31, 2019</div>
            </div>
          </div>


            
          <div className="blog-card">
            <div className="img-container">
              <img src={require("./../../../assets/img/f3.jpg")} alt="" />
            </div>
            <div className="blog-card-content">
              <div className="blog-cat cat-3">
                <span>Food & Travels</span>
              </div>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </h5>
              <p>
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <div className="blog-card-author">
              <div className="avatar">
                <img src={require("../../../assets/images/user.png")} alt="" />
              </div>
              <div className="author-name">Waheed Ahmed</div>
              <div className="published-at">May 31, 2019</div>
            </div>
          </div>


          <div className="blog-card">
            <div className="img-container">
              <img src={require("./../../../assets/img/f3.jpg")} alt="" />
            </div>
            <div className="blog-card-content">
              <div className="blog-cat cat-2">
                <span>Food & Travels</span>
              </div>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </h5>
              <p>
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lor em Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
            </div>
            <div className="blog-card-author">
              <div className="avatar">
                <img src={require("../../../assets/images/user.png")} alt="" />
              </div>
              <div className="author-name">Waheed Ahmed</div>
              <div className="published-at">May 31, 2019</div>
            </div>
          </div>

        </div>
        </div>
    </>
  );
}

export default Blogs;
