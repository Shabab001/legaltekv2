import React from "react";
import "../assets/css/blogsn.css";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="blogs">
      <h1>Blog page</h1>
      <h3>
        Go to <Link to="blogs/1">Single blog page</Link>
      </h3>

      <div class="masonry">
        <div class="mItem">
          <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
          <div className="img-container">
            <img src="https://source.unsplash.com/random/300" />
          </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>The Highly Comtemporary UI/UX design from a Silicon Valley</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
          <div className="img-container" >
          <img src="https://source.unsplash.com/random/100" />
              </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>The Highly Comtemporary UI/UX design</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/250" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Silicon Valley</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/350" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Silicon Valley</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/150" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Silicon Valley</h3>
          </div>
        </div>
        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/50" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Random Post</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/400" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Silicon Valley</h3>
          </div>
        </div>

        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/600" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Unsplash Magic</h3>
          </div>
        </div>
        <div class="mItem">
        <div className="postedBy">
            <div className="avatar"></div>{" "}
            <div className="commenterInfo">
              <p>
                Posted By <span>Saimoon Bhuiyan</span>
              </p>{" "}
              <span>July 5, 2019</span>
            </div>
          </div>
            <div className="img-container">
          <img src="https://source.unsplash.com/random/250" />
            </div>
          <div className="mItemInfo">
            <span>Entertainment, Travel &#8226; 4 min read</span>
            <h3>Silicon Valley</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
