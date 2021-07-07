import React from "react";
import "./bigCard.css";
import { IoPricetagOutline } from "react-icons/io5";
import parse from "html-react-parser";
import moment from "moment";
const BigCard = props => {
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
        {props.blog
          ? props.blog.blogCategory.map((item, index) => {
              if (index < 2) {
                return <p key={index}>{item}</p>;
              }
            })
          : "Civil"}
      </div>
      <div
        className={
          props.type === "normal"
            ? "header-blog-title-normal"
            : "header-blog-title"
        }
      >
        <p>
          {props.blog
            ? props.blog.title
            : "How Law Firms can attract customers"}
        </p>
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
            {props.blog
              ? parse(props.blog.body.substring(0, 256))
              : "skfklsjdl lsjkdlkasjd asldjlakjds alksdjaksjd lasjdlasjds sldjfslkdfjs sdfsdfdsfdsfs sdfsdfds sds sdsd sdfsdfdsf sdsds sdsdsdsd sdsd sdfdsfdfd iasdhajs askdhaksdh kashdkasdh askdhaskdh kasks sksk ksks sksks "}
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
            <p>
              {props.blog
                ? moment(props.blog.createdAt).format("MMMM D YYYY").split(",")
                : "21st july 2021"}
            </p>
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

export default BigCard;
