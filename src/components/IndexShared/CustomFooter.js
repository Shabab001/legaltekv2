import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="section-body footer-main">
        <footer className="footer">
          <div className="secondlayer">
            <div>
              <h4>ABOUT</h4>
              <ul>
                <li>About us</li>
                <li>How Xukini works</li>
                <li>Caterers</li>
         
              </ul>
            </div>
            <div>
              <h4>MARKETPLACE</h4>
              <ul>
                <li>Shop</li>
                <li>List an item</li>
              </ul>
            </div>
            <div>
              <h4>SERVICES</h4>
              <ul>
                <li>A la Carte</li>
                <li>Catering</li>
                <li>Meal Plans</li>
                <li>Hire Chef</li>
                <li>Cooking Lessons</li>
              </ul>
            </div>
            <div>
              <h4>BUSINESSES</h4>
              <ul>
                <li>For Businesses</li>
                <li>Sign up</li>
                <li>Schedule a Callback</li>
                <li>Plans</li>
              </ul>
            </div>
            <div>
              <h4>SUPPORT</h4>
              <ul>
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
       
        </footer>
      </div>
    );
  }
}
