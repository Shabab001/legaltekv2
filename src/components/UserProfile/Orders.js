import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ScrollContainer from "react-indiana-drag-scroll";
import banana from "../../assets/img/banana.jpg";
import cauli from "../../assets/img/cauli.jpg";
import apple from "../../assets/img/apple.png";

function Orders() {
  return (
    <div>
      <div className="user-profile tab">
        <h1>Orders</h1>

        <div className="orderCard">
          <div className="cardHeaders">
            {/* <ScrollContainer className=" cardHeaders" style={{display:'flex'}}> */}
            <div>
              <h4 className="invisibleM">Orders placed</h4>
              <p data-item="Orders placed">Nov 26, 2020, 12:18 PM</p>
            </div>
            <div className="minHeader">
              <h4 className="invisibleM">Items</h4>
              <p data-item="Items">26</p>
            </div>

            <div className="minHeader">
              <h4 className="invisibleM">Total</h4>
              <p data-item="Total">$289.61</p>
            </div>

            <div>
              <h4 className="invisibleM">Invoice</h4>
              <p className="invisibleM">201121 - 00000001</p>
            </div>

            <div className="minHeader invisibleM">
              <h4 className="invisibleM">Ratings</h4>
              <p data-item="Ratings" style={{ height: "fit-content" }}>
                {" "}
                <ReactStars count={5} size={14} activeColor="#ffd700" />
              </p>
            </div>

            <div className="invisibleM reportAProblem">
              <h4 style={{ cursor: "pointer", color: "red" }}>
                Report a problem
              </h4>
            </div>

            <div className="viewOrderDetail">
              <h4
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#e50077",
                }}
              >
                View order detail
              </h4>
            </div>
            {/* </ScrollContainer> */}
          </div>
          <div className="dividerL"></div>
          <div className="cardBody">
            <div>
              <h4 className="cardBodyHeader">
                Loblaws{" "}
                <span>51 Times Avenue, Thronhill, Ontario, L3T 7X7</span>
                <span> +14165008416</span>
              </h4>
              <ScrollContainer
                className="scroll-container"
                style={{ display: "flex" }}
              >
                <img src={banana} />
                <img src={cauli} />
                <img src={apple} />
                <img src={banana} />
                <img src={cauli} />
                <img src={apple} />
                <img src={banana} />
                <img src={cauli} />
                <img src={apple} />
                <img src={banana} />
                <img src={cauli} />
                <img src={apple} />
                <img src={banana} />
                <img src={cauli} />
                <img src={apple} />
                <img src={banana} />
                <img src={apple} />
                <img src={banana} />
              </ScrollContainer>
            </div>

            <div className="orderStatus">
              <h4>Accepted</h4>
              <p>Nov 26, 2020, 12:18 PM</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Orders;
