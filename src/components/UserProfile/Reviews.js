import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import "../../assets/css/reviews.css";
import { Select } from "antd";
// import StarRatings from "react-star-ratings";
import Foodmenu from "../../assets/img/svgs/Foodmenu";
import ReactStars from "react-rating-stars-component";

function Reviews() {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function changeRating(newRating, name) {
    setRating(newRating);
  }
  const [rating, setRating] = useState(4);

  return (
    <div className="user-profile tab b-reviews">
      <h1>Reviews</h1>

      <ul className="sort-list">
        Sort By:{" "}
        <li>
          <strong>
            <Select
              defaultValue="date"
              style={{ width: 120 }}
              onChange={handleChange}
              // dropdownMatchSelectWidth={false}
            >
              <Option value="date">Date</Option>
              <Option value="name">Name</Option>
            </Select>
          </strong>
        </li>
        <li>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="all">All Locations</Option>
            <Option value="nearest">Nearest</Option>
          </Select>
        </li>
        <li>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="all">All Categories</Option>
            <Option value="thai">Thai</Option>
            <Option value="chinese">Chinese</Option>
          </Select>
        </li>
      </ul>
      <div className="divider"></div>

      <div className="review-card">
        <div className="rev-first">
          <div className="img-container">
            <img src={require("../../assets/img/japanesefood.jpeg")} />
          </div>
          <div className="detail-container">
            <h5>Vietnoms</h5>
            <h6>$$ - Vietnamese</h6>
            <p>243 Shephard Avenue E Toronto, 0N M2N 3A8 Canada</p>
          </div>
        </div>
        <div className="main-review">
          <div>
            <div className="ratingDate">
              {/* <StarRatings
                rating={rating}
                starDimension="20"
                starSpacing="5"
                starRatedColor="#e50077"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
              /> */}
              <ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="#e50077" />{" "}
              <span>09/12/20</span>
            </div>

            <p>
              This is the best Pho restaurant within 10km to my home. This is my
              go to place whenever i have a cold and need to have some chicken
              soup. I hope they make more money and move to a bigger location
              with better seating arrangements.
            </p>
            <p className="review-menulinks">
              <Foodmenu /> <span>Menu</span>
            </p>
            <div className="usefullactions">
            <span className="usefullCount"><i className="fa fa-lightbulb-o "/>Useful (2)</span>
            <div className="actions">
              <span><i className="fas fa-external-link-alt"/></span>
              <span><i className="fa fa-refresh"/></span>
              <span><i className="fa fa-trash"/></span>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
