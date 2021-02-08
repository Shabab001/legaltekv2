import React from "react";
import "../../assets/css/singleBlog.css";
import building from "../../assets/img/building.jpg";
import girl2 from "../../assets/img/girl2.jpg";
import ReactTooltip from "react-tooltip";
function SinglePage() {
  return (
    <div className="singleBlog">
      <div className="blog-main-content">
        <div className="singleBlog-tags">
          <span>Entertainment</span> <span>Food</span> <span>Travel</span>
        </div>
        <h2>
          NanaPrincess Hotel - The New Jewel in the Crown of Charismatic Crete
        </h2>

        <div className="shareSocial">
          <span>Share post on </span>
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-linkedin" />
        </div>

        <div className="featured-image">
          <div className="shortInfo">
            <p>Josie</p>
            <span>14th December 2018</span>
          </div>
          <div className="profilePicture">
            <img src={girl2} alt="pretty_girl" />
          </div>
          <img src={building} alt="building.jpg" />
        </div>
        <div className="blog-and-categories">
          <div className="blog-body-and-comments">
            <div className="blog-body">
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br />

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br />
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img src={building} alt="building" />
            </div>

            <hr/>


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
                    <i className="fa fa-facebook" /> Share
                  </div>
                </div>

                <div className="filterDrop">
                  <p>
                    Sort By Oldest <i className="fa fa-caret-down" />
                  </p>
                </div>
              </div>

              <ul className="commentsList">
                <li>
                  <div className="avatar"></div>{" "}
                  <div className="commenterInfo">
                    <p>Waheed Ahmed</p> <span>Wonderful Place!</span>
                  </div>
                </li>

                <li>
                  <div className="avatar"></div>{" "}
                  <div className="commenterInfo">
                    <p>Saimoon Bhuiyan</p>{" "}
                    <span>
                      I visited there last month, had an amazing time!
                    </span>
                  </div>
                </li>
              </ul>
              <div className="inputContainer">
                <img src={girl2} alt="user_image" />
                <input placeholder="Join the discussion" />
              </div>
              <button>Submit</button>
            </div>
          </div>

          <div className="blog-categories">
              <p>Categories</p>
            <ul>
              <li>
                {" "}
                <i className="fa fa-futbol-o mr-3" />
                Entertainment
              </li>
              <li>
                <i className="fa fa-futbol-o mr-3" />
                Food
              </li>
              <li>
              <i className="fa fa-futbol-o mr-3" />
                Travel
              </li>
              <li>
              <i className="fa fa-futbol-o mr-3" />
                Culture
              </li>
            </ul>


            <div className="recent-posts">

                

            </div>
          </div>
        </div>
      </div>
      <div className="navigateBlog">
        <div className="navigateBlogBtns">
          <ReactTooltip />
          <button data-tip="Previous Post">
            <i className="fa fa-arrow-left" />
          </button>
          <button data-tip="Next Post">
            <i className="fa fa-arrow-right" />
          </button>
        </div>
        <div className="heightLessContainer">
          <div className="nextBlogImageContainer">
            <img src={building} alt="building.jpg" />
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
  );
}

export default SinglePage;
