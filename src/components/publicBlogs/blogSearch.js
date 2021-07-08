import React, { useState } from "react";
import "./blogSearch.css";
import { DatePicker, Select } from "antd";
import { lawCats } from ".././NewProfile/BusinessProfile/lawyer modal/lawCats";
import { Link } from "react-router-dom";
const { Option } = Select;

const BlogSearch = props => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cats, setCats] = useState(null);
  const [sort, setSort] = useState(null);
  const [date, setDate] = useState(null);
  const [criteria, setCriteria] = useState("");
  const [disableInput, setDisableInput] = useState({
    title: false,
    category: false,
    date: false,
    sortby: false,
  });

  const sortby = [
    { name: "Newest", value: "Posted: Newest First" },
    { name: "Oldest", value: "Posted: Oldest First" },
    { name: "Like", value: "Likes: Most Liked" },
    { name: "Comments", value: "Commnets: Most Commented" },
  ];

  const handleSearchInput = (e, date, name) => {
    if (e && name && date) {
      if (name === "search") {
        if (e.target.value) {
          setSearchTerm(e.target.value);
          setTitle(e.target.value);
          setCats(null);
          setDate(null);
          setSort(null);
          setCriteria("title");
          setDisableInput({
            ...disableInput,
            title: false,
            category: true,
            date: true,
            sortby: true,
          });
        } else {
          setSearchTerm("");
          setCriteria(null);
          setTitle(null);
          setDisableInput({
            ...disableInput,
            title: false,
            category: false,
            date: false,
            sortby: false,
          });
        }
      }
      if (name === "cats") {
        setCats(e);
        setSearchTerm(e);
        setCriteria("cats");
        setDate(null);
        setSort(null);
      }
      if (name === "sort") {
        setCats(null);
        setSearchTerm("");
        setCriteria(e);
        setDate("");
        setSort(e);
      }
      if (name === "date") {
        setCriteria("date");
        setCats(null);
        setSearchTerm(e);

        setDate(e);
        setSort(null);
      }
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setCriteria("");
    setTitle("");
    setDisableInput({
      ...disableInput,
      title: false,
      category: false,
      date: false,
      sortby: false,
    });
    setDate(null);
    setCats(null);
    setSort(null);
  };

  return (
    <div className={props.type !== "blog" ? "list-search3" : "list-search4"}>
      <input
        className="bg-search-sec"
        disabled={disableInput.title}
        name="title"
        type="text"
        placeholder="Search"
        onChange={e => handleSearchInput(e, "something", "search")}
      />

      <div className="bg-input-grid">
        <div className="bg-sort-inputs">
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Area of practise"
            onChange={(e, value) => handleSearchInput(e, value, "cats")}
            value={cats}
            disabled={disableInput.category}
          >
            {lawCats.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>

        <div className="bg-sort-inputs">
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Sort by"
            disabled={disableInput.sortby}
            onChange={(e, value) => handleSearchInput(e, value, "sort")}
            value={sort}
          >
            {sortby.map((item, index) => (
              <Option key={index} value={item.name}>
                {item.value}
              </Option>
            ))}
          </Select>
        </div>
        <div className="bg-sort-inputs">
          <DatePicker
            name="dob"
            value={date}
            placeholder="Search by date"
            onChange={(e, value) => handleSearchInput(e, value, "date")}
            style={{ width: "100%", height: "3rem", borderRadius: "4px" }}
            disabled={disableInput.date}
            borderd={false}
          />
        </div>
      </div>
      <div className="bg-reset-btn" onClick={handleReset}>
        <p>Reset</p>
      </div>
      <Link to="/blogs/search/sdfjskldfjls">
        <div className="bg-reset-btn">
          <p>Search</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogSearch;
