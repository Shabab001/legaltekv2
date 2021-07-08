import React from "react";
import LawfirmBlogs from "./lawfirmBlogs";
import LawfirmFollowing from "./lawfirmFollowing";
import LawfirmLawyes from "./lawfirmLawyes";
import LawfirmListReviews from "./lawfirmListReviews";
import LawfrimGeneral from "./lawfrimGeneral";
import "./list.css";
const List = props => {
  console.log(props);
  return (
    <div className="lawfirm-view-list">
      {props.tab && props.tab === "lawyers" ? (
        <LawfirmLawyes lawyers={props.lawfirm.lawyer_users} />
      ) : props.tab === "reviews" ? (
        <LawfirmListReviews />
      ) : props.tab === "blogs" ? (
        <LawfirmBlogs />
      ) : props.tab === "following" ? (
        <LawfirmFollowing />
      ) : props.tab === "general" ? (
        <LawfrimGeneral />
      ) : null}
    </div>
  );
};

export default List;
