import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import "./pBlogCard.css";
const PBlogCard = props => {
  return (
    <div
      className={
        props.type === "normal"
          ? "header-blogs-upper-normal"
          : "header-blogs-upper"
      }
      style={{
        backgroundColor: props.background,
      }}
    >
      <div
        className={
          props.type === "normal"
            ? "header-blogs-cat-normal"
            : "header-blogs-cat"
        }
      >
        <IoPricetagOutline />
        <p>Civil</p>
      </div>
      <div
        className={
          props.type === "normal"
            ? "header-blog-title-normal"
            : "header-blog-title"
        }
      >
        <p>Titleasd asdadad asdasdasds</p>
      </div>
      {props.body ? null : (
        <div
          className={
            props.type === "normal"
              ? "header-blog-body-normal"
              : "header-blog-body"
          }
        >
          <p>
            content asdasdasdsadsadasd asdsadasdasdsadsadas asdasdasdsadsad
            asdasdsadsadasdasd asdasdasdasdsa asdasdsadsadsad
          </p>
        </div>
      )}
      <div
        className={
          props.type === "normal"
            ? "header-blog-lower-normal"
            : "header-blog-lower"
        }
      >
        <div className="header-blog-img-grid">
          <div className="header-blog-img"></div>
          <div
            className={
              props.type === "normal"
                ? "header-blog-date-normal"
                : "header-blog-date"
            }
          >
            <p>Leonard Michel</p>
            <p>21st jully 2021</p>
          </div>
        </div>
        <div className="header-blogs-option-grid">
          <div>
            <p>like</p>
          </div>
          <div>
            <p>share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PBlogCard;
