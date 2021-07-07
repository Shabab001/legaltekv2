import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import parse from "html-react-parser";
import moment from "moment";
import "./recentBlogcard.css";
const RecentBlogCard = props => {
  return (
    <div
      className={
        props.type === "big" ? "recent-bcard-big" : "recent-bcard-normal"
      }
    >
      <div className="recent-bcard-cat">
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
          props.type === "big" ? "recent-blog-title-big" : "recent-blog-title"
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
            props.type === "big" ? "recent-bcard-body-big" : "recent-bcard-body"
          }
        >
          <p>
            {props.blog
              ? parse(props.blog.body.substring(0, 256))
              : "skfklsjdl lsjkdlkasjd asldjlakjds alksdjaksjd lasjdlasjds sldjfslkdfjs sdfsdfdsfdsfs sdfsdfds sds sdsd sdfsdfdsf sdsds sdsdsdsd sdsd sdfdsfdfd  sdfdsf sdfsdf sdfdsfdsf sdfsdfdsf sdfsdfd sdfdsfdf esds dfd"}
          </p>
        </div>
      )}
      <div
        className={
          props.type === "big" ? "recent-bcard-lower-big" : "recent-bcard-lower"
        }
      >
        <div className="header-blog-img-grid2">
          <div className="header-blog-img"></div>
          <div>
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

export default RecentBlogCard;
