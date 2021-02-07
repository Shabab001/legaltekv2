import React from "react";
import FoodCard from "../IndexShared/Card";
import food from "../../assets/img/food.jpg";
import macarons from "../../assets/img/foodr2.jpg";
import steak from "../../assets/img/steak.jpg";
import ScrollContainer from 'react-indiana-drag-scroll'

function NextArrow(props) {
  const { className, style, onClick, color } = props;
  return (
    <div
      className="fe fe-chevron-right"
      style={{
        ...style,
        position: "absolute",
        right: 10,
        top: "-40px",
        transform: "translateY(-50%)",
        display: "block",
        color: color ? color : "#fff",
        background: "transparent",
        cursor: "pointer",
        padding: "10px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
        borderRadius: 30,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick, color } = props;
  return (
    <div
      className={`fe fe-chevron-left`}
      style={{
        ...style,
        position: "absolute",
        right: 50,
        top: "-40px",
        transform: "translateY(-50%)",
        display: "block",
        color: color ? color : "#fff",
        cursor: "pointer",
        background: "transparent",
        padding: "10px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
        borderRadius: 30,
      }}
      onClick={onClick}
    />
  );
}
function PopularDishes() {

  return (
    <div className="popularDishes">
      <div className="clearfix" style={{ margin: "auto" }}>
        <h4 style={{ textAlign: "left" }}>Popular dishes</h4>
      </div>
      <div className="cardRow">
      {/* <Slider
          {...settings2}
          style={{  margin: "auto", marginTop: 20 }}
          className="cardRow"
        > */}
          <ScrollContainer className="scroll-container" style={{display:'flex'}}>
          <div>
            <FoodCard image={food} name="California Burger" />
          </div>
          <div
          >
            <FoodCard image={macarons} name="Fish & Chips"/>
          </div>
          <div>
            <FoodCard image={steak} name="Steak"/>
          </div>

          <div>
            <FoodCard image={macarons} name="Fish & Chips"/>
          </div>
          <div
          >
            <FoodCard image={food} name="California Burger"/>
          </div>
          <div
          >
            <FoodCard image={steak} name="Steak"/>
          </div>
          <div
          >
            <FoodCard image={food} name="California Burger"/>
          </div>
          <div
          >
            <FoodCard image={macarons} name="Fish & Chips"/>
          </div>
          </ScrollContainer>
        {/* </Slider> */}



      </div>
    </div>
  );
}

export default PopularDishes;
