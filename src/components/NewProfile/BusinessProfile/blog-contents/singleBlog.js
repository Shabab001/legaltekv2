import React from 'react'
import "./singleBlog.css"
import Civil from "./images/civil.jpeg"
import Criminal from "./images/criminal.jpeg"
import moment from "moment";
import { FacebookButton } from "react-social";
const SingleBlog = () => {
    return (
        <div className="singleBlog">
        <div className="blog-main-content">
          <div className="singleBlog-tags">
             Criminal
          </div>
          <h2>On The Shore</h2>

          <div className="shareSocial">
            <span>Share post on </span>
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
          </div>

        <div className="featured-image">
            <div className="shortInfo">
              <p>
                Shabab{" "}
                Hossain
              </p>
              <span>{moment(Date.now()).format("DD MMMM, YYYY")}</span>
            </div>
            <div className="profilePicture">
              <img src={Civil} alt="pretty_girl" />
            </div>
            <img
             
              src={Criminal}
              alt="building.jpg"
            />
          </div>
       
          <div className="blog-and-categories">
            <div className="blog-body-and-comments">
              <div
                className="blog-body ck-content"
                
              />

              <hr />

              <div className="shareSocial">
                <span>Share post on </span>
                <i className="fa fa-facebook" />
                <i className="fa fa-twitter" />
                <i className="fa fa-linkedin" />
              </div>

              <div className="blogComments">
                <div className="commentTabs">
                  <p className="commentTab">Comments</p>
            
                </div>

                <div className="shareAndFilter">
                  <div className="commentSecShare">
                    <div>
                      <i className="fa fa-heart-o" /> Share
                    </div>
                    <div>
                      <i className="fa fa-twitter" /> Tweet
                    </div>
                    <div>
                      <FacebookButton
                       
                        appId={645576173040339}
                      >
                       
                        <i className="fa fa-facebook" /> Share
                      </FacebookButton>
                    </div>
                    <div>
                   
                      <i className="fa fa-instagram" /> Share
                 
                    </div>
                  </div>

                  <div className="filterDrop">
                    <p>
                      Sort By Oldest <i className="fa fa-caret-down" />
                    </p>

                 
                  </div>
                </div>

                <ul className="commentsList">
          
                </ul>
                <div className="inputContainer">
                  <img src={Civil} alt="user_image" />
                  <input
                    
                   
                    placeholder="Join the discussion"
                   
                  />
                </div>
                <button className="postComment" >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navigateBlog">
          <div className="navigateBlogBtns">
         
            <button data-tip="Previous Post">
              <i className="fa fa-arrow-left" />
            </button>
            <button data-tip="Next Post">
              <i className="fa fa-arrow-right" />
            </button>
          </div>
          <div className="heightLessContainer">
            <div className="nextBlogImageContainer">
              <img src={Criminal} alt="building.jpg" />
            </div>
            <div className="nextBlogTitleContainer">
              <p>
                NanaPrincess Hotel - The New Jewel in the Crown of Charismatic
                Crete
              </p>
            </div>
          </div>
        </div>
       
      </div> 
     
    )
}

export default SingleBlog
