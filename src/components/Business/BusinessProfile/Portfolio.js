import React from "react";
import "./../../../assets/css/portfolio.css";

function Portfolio() {
  return (
    <>
    <div className="main-content portfolio">
    <h1>Portfolio</h1>
    <div className="album-action-container">
      <div><i className="fa fa-plus-circle" /><p>Add an album</p></div>
      <div><i className="fa fa-plus-circle" /><p>Add an image or video</p></div>
    </div>

    </div>
    <div className="user-profile tab b-portfolio">
     

      <div className="portfolio-container">
        <div class="item1">
          <div className="img-container">
            <img src={require("./../../../assets/img/f1.jpg")} alt="" />
          </div>
          <p>Image 1</p>
        </div>
        <div class="item2">
          <div className="img-container">
            <img src={require("./../../../assets/img/f2.jpg")} alt=""/>
          </div>
          <p>Image 2</p>
        </div>
        <div class="item3">
          <div className="img-container">
            <img src={require("./../../../assets/img/f3.jpg")} alt=""/>
          </div>
          <p>Image 3</p>
        </div>
        <div class="item4">
          <div className="img-container">
            <img src={require("./../../../assets/img/f4.jpg")} alt=""/>
          </div>
          <p>Image 4</p>
        </div>
        <div class="item5">
          <div className="img-container">
            <img src={require("./../../../assets/img/f5.jpg")} alt=""/>
          </div>
          <p>Image 5</p>
        </div>
        <div class="item6">
          <div className="img-container">
            <img src={require("./../../../assets/img/f6.jpg")} alt=""/>
          </div>
          <p>Image 6</p>
        </div>
        <div class="item7">
          <div className="img-container">
            <img src={require("./../../../assets/img/food.jpg")} alt=""/>
          </div>
          <p>Image 7</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Portfolio;
