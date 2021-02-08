import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ScrollContainer from "react-indiana-drag-scroll";
import banana from "../../../assets/img/banana.jpg";
import cauli from "../../../assets/img/cauli.jpg";
import apple from "../../../assets/img/apple.png";
import "./../../../assets/css/profile.css";
import "./../../../assets/css/orders.css";

function Orders() {
  const expandCollapse = (e, i) => {
    console.log(e, i);
  };

  useEffect(() => {
    let breakRow = document.querySelectorAll(".breakrow");
    console.log(breakRow);
    for (let i = 0; i < breakRow.length; i++) {

      if(breakRow[i].querySelector('.collapseBtn')){
        breakRow[i].querySelector('.collapseBtn').addEventListener("click", () => {
          let siblings = [];
          let elem = breakRow[i].nextElementSibling;
          while (elem) {
            if (!elem.classList.contains("datarow")) break;
            if (!elem.classList.contains("breakrow")) {
              siblings.push(elem);
            }
            elem = elem.nextElementSibling;
          }
          siblings[siblings.length - 1].classList.toggle("lastRow");
          siblings[siblings.length - 1].style.boxShadow =
            "0px 5px 12px rgba(0,0,0,0.1)";
          siblings.forEach((item) => {
            item.classList.toggle("show");
          });
          breakRow[i].classList.toggle("expand");
        });
      }

    }
  }, []);

  const data = [
    { invoiceNumber: "#0123", multiple: [{ shop: "Loblaw 1" }, {}] },

    { invoiceNumber: "#0223", items: 5, total: 100, ratings: 5 },
    { invoiceNumber: "#0223", items: 5, total: 100, ratings: 5 },
  ];

  return (
    <div className=" orders tab">
      <h1>Orders</h1>

      <div className="table">
        <table>
          <thead>
            <tr className="tableHeader">
              <th>SHOPS</th>
              <th>ITEMS</th>
              <th>TOTAL</th>
              <th>RATINGS</th>
              <th>STATUS</th>
              <th>ACTION</th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="breakrow">
              <td >
                <div>
                {" "}
                <span className="collapseBtn">
                  <i className="fa fa-plus" />
                  <i className="fa fa-minus" />
                </span>
                Multiple
                </div>
              
              </td>
              <td>5</td>
              <td>$100</td>
              <td>5</td>
              <td>Multiple</td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
              <div>
                <span></span>Loblaws
                </div>
              </td>
              <td>5</td>
              <td>$40.00</td>
              <td>5</td>
              <td><span className="status status-approved">Approved</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
              <div>
                <span></span>Loblaws 1
                </div>
              </td>
              <td>5</td>
              <td>$50.00</td>
              <td>5</td>
              <td><span className="status status-approved">Approved</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
              <div>
                <span></span>Loblaws 2
                </div>
              </td>
              <td>5</td>
              <td>$10.00</td>
              <td>5</td>
              <td><span className="status status-approved">Approved</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="breakrow">
              <td>
                {" "}
                <span className="collapseBtn">
                  <i className="fa fa-plus" />
                  <i className="fa fa-minus" />
                </span>
                Multiple
              </td>
              <td>5</td>
              <td>$40.00</td>
              <td>5</td>
              <td>Multiple</td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws 3
              </td>
              <td>2</td>
              <td>$10.00</td>
              <td>5</td>
              <td><span className="status status-pending">Pending</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws 4
              </td>
              <td>2</td>
              <td>$20.00</td>
              <td>5</td>
              <td><span className="status status-pending">Pending</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws 5
              </td>
              <td>1</td>
              <td>$10.00</td>
              <td>5</td>
              <td><span className="status status-pending">Pending</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>

            <tr className="breakrow">
              <td>
                {" "}
                <span className="collapseBtn">
                  <i className="fa fa-plus" />
                  <i className="fa fa-minus" />
                </span>
                Multiple
              </td>
              <td>5</td>
              <td>$100</td>
              <td>5</td>
              <td>Multiple</td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws
              </td>
              <td>5</td>
              <td>$40.00</td>
              <td>5</td>
              <td><span className="status status-failed">Failed</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws 1
              </td>
              <td>5</td>
              <td>$50.00</td>
              <td>5</td>
              <td><span className="status status-failed">Failed</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
            <tr className="datarow">
              <td>
                <span></span>Loblaws 2
              </td>
              <td>5</td>
              <td>$10.00</td>
              <td>5</td>
              <td><span className="status status-failed">Failed</span></td>
              <td><div className="three-dots"><span></span></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
