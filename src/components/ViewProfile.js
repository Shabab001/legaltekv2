import React from "react";
import "../assets/css/viewProfile.css";
import girl from "../assets/img/girl2.jpg";

function ViewProfile() {
  return (
    <div className="viewProfile">
      <div className="container">
          <div className="sideProfile">
        <div className="sideProfileInfo">
          <img src={girl} alt="sideUserImage" />
          <div className="sideProfileDesc">
            <div className="three-dot-menu">
              <span></span>
            </div>
            <p className="userName">Virginia Han</p>
            <span>Female, 22, Montreal, QC</span>
            <hr />
            <div className="likesFriends">
              <div>54 Likes</div>
              <div>715 Friends</div>
            </div>
            <hr />
            <div className="userDesc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>



        <div className="favouriteDishes recent">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Social</h5>
              </div>
              <hr />
              <div className="favDishListItems social">
                {/* <div className="favDishListItem">
                    
              
                </div> */}
                <i className="fa fa-facebook" />
                  <i className="fa fa-twitter" />
                  <i className="fa fa-instagram" />
                  <i className="fa fa-linkedin" />
              
              </div>
            </div>



        <div className="favouriteDishes recent">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Recent Reviews</h5>
              </div>
              <hr />
              <div className="favDishListItems">
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>


</div>


        <div className="mainViewProfile">
          <div className="mainCoverInfo">
            <div className="coverImgContainer">
              <img src="https://source.unsplash.com/random/300" />
              <div className="overlay"></div>
              <div className="coverImgContainerInfo">
                <h3>Game of Thrones Concert</h3>
                <p>Oct 18,2019@8:00 pm</p>
                <h3>Bell Center, Montreal</h3>
              </div>
            </div>
            <div className="coverDesc">
              <div className="coverDesc-1">
                {" "}
                <span>+91k</span>
                <span>
                  781 Comments <i className="fa fa-caret-down" />
                </span>
              </div>
              <div className="coverDesc-2">
                <span>598k Views</span>
                <span>Joined January 1st, 2020</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="profileFavourites">
            <div className="favouriteDishes">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Favourite Dishes</h5>
              </div>
              <hr />
              <div className="favDishListItems">
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>

            <div className="favouriteDishes">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Favourite Caterers</h5>
              </div>
              <hr />
              <div className="favDishListItems">
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>


            <div className="favouriteDishes">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Favourite Meal Plans</h5>
              </div>
              <hr />
              <div className="favDishListItems">
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>


            <div className="favouriteDishes">
              <div className="favDishTitle">
                <div className="three-dot-menu">
                  <span></span>
                </div>
                <h5>Favourite Chefs</h5>
              </div>
              <hr />
              <div className="favDishListItems">
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
                <div className="favDishListItem">
                  <div className="img-container">
                    <img src="https://source.unsplash.com/random/100" />
                  </div>
                  <div className="favItemInfo">
                    <span className="favItemDate">Dec 03, 2019</span>
                    <p className="favItemTitle">Cupcake madness</p>
                    <span className="favItemMembers">589K members</span>
                  </div>
                  <div className="moreItemInfo">
                    <i className="fa fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
