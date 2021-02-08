import React, { useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import "../../../assets/css/favourites.css";
import ReactStars from "react-rating-stars-component";
import placeholderImage from '../../../assets/img/placeholder-16-9.png'


function Favourites(props) {
  const { auth } = props;
  const [previewIndex, setPreviewIndex] = useState(0);

 
  return (
    <div className="user-profile favourites tab">
      <h1>Favourites</h1>

      <div className="fav-container">
        <h5>Meal plan</h5>
     
        <div className="scr-cont">
          <div className="fav-row">
            <div className="fav-item">
              <div className="img-container">
                <img src={placeholderImage} />
                <img
                  
                  src="https://placeimg.com/200/300/food"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                  alt="meal plan"
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://placeimg.com/200/300/food"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://placeimg.com/250/140/food"
                  
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://placeimg.com/300/200/food"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/130"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/110"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/120"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                MEAL PLAN{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>
          </div>
        </div>
        {/* </ScrollContainer> */}
      </div>

      <div className="fav-container">
        <h5>A La Carte</h5>
        <div
          className="scr-cont"
        >
          <div className="fav-row">
            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>

              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>

            <div className="fav-item">
              <div className="img-container">
              <img src={placeholderImage} />
                <img
                  src="https://source.unsplash.com/random/100"
                  alt="meal plan"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="postedBy">
                <div className="avatar"></div>{" "}
                <div className="commenterInfo">
                  <p>Peak's Dining</p>
                </div>
              </div>

              <span className="rating">
                A La Carte{" "}
                <ReactStars
                  style={{ justifyContent: "center !important" }}
                  value={4.403}
                  edit={false}
                  count={5}
                  size={15}
                  activeColor="#e50077"
                />
              </span>
              <p className="price">$20</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
