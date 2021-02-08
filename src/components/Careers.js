import React, { useState } from "react";
import "../assets/css/careers.css";
import contactUsImage from "../assets/img/contact.webp";
import FAQIcon from "../assets/img/svgs/FAQIcon";
import InstructionsIcon from "../assets/img/svgs/InstructionsIcon";
import CommunityIcon from "../assets/img/svgs/CommunityIcon";
import { Switch } from "antd";

function Careers() {
  const [jobDrop1, setJobDrop1] = useState(false);
  const [jobDrop2, setJobDrop2] = useState(false);
  const [jobDrop3, setJobDrop3] = useState(false);
  const [country, setCountry] = useState("India");

  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }

  const countries = ["United States", "Bangladesh", "Canada", "India"];

  return (
    <div className="careers">
      <div className="banner">
        <div>
          <img src={contactUsImage} alt="contact-us-banner" />
          <div className="bannerInfo">
            <div className="hero-title">
              <h1>Get in Touch</h1>
              <p>
                If there is anything we can help you with, just let us know.
                We'll be glad to help you.
              </p>
            </div>

            <div className="hero-title-2">
              <h4>Follow us</h4>
              <div className="web-links">
                <label>
                  Facebook <span>/facebook.com</span>
                </label>
                <label>
                  Twitter <span>/twitter.com</span>
                </label>
                <label>
                  Instagram <span>/instagram.com</span>
                </label>
                <label>
                  LinkedIn <span>/LinkedIn.com</span>
                </label>
              </div>
              <div className="mobile-links">
                <a href="https://www.facebook.com"><i className="fa fa-facebook" /></a>
                <a href="https://www.twitter.com"><i className="fa fa-twitter" /></a>
                <a href="https://www.instagram.com"><i className="fa fa-instagram" /></a>
                <a href="https://www.linkedIn.com"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="careers-first-section">
        <div className="careers-first-section-1">
          <div className="careers-card">
            <FAQIcon height="44" width="44" style={{ fill: "#ff8947" }} />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>

          <div className="careers-card">
            <InstructionsIcon
              height="44"
              width="44"
              style={{ fill: "#ff8947" }}
            />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>

          <div className="careers-card">
            <CommunityIcon height="44" width="44" style={{ fill: "#ff8947" }} />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>
          <div className="careers-card">
            <FAQIcon height="44" width="44" style={{ fill: "#ff8947" }} />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>

          <div className="careers-card">
            <InstructionsIcon
              height="44"
              width="44"
              style={{ fill: "#ff8947" }}
            />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>

          <div className="careers-card">
            <CommunityIcon height="44" width="44" style={{ fill: "#ff8947" }} />
            <h3>Large beautiful office</h3>
            <p>
              Enjoy a comfortable office environment with the most modern and
              stylish furnishing.{" "}
            </p>
          </div>
        </div>

        <div className="careers-first-section-2">
          <h3>
            Your Life at <span>Xukini</span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="pink-btn">Learn More</button>
        </div>
      </div>

      <div className="careers-second-section">
        <div className="job-openings-box">
          <h3>Job Openings</h3>
          <div className="main-search">
            <div className="input-container">
              <i className="fa fa-search" />
              <input placeholder="Search Jobs" />
            </div>
          </div>
          <div className="job-search-filters">
            <div
              className="job-search-dropdown"
              onClick={() => setJobDrop1(!jobDrop1)}
            >
              <i className="fa fa-caret-down" />
              <p>{country}</p>

              <ul className={` ${jobDrop1 ? "open" : ""} dropdown-options`}>
                {countries &&
                  countries.map((item) => (
                    <li onClick={() => setCountry(item)}>{item}</li>
                  ))}
              </ul>
            </div>
            <div
              className="job-search-dropdown"
              onClick={() => setJobDrop2(!jobDrop2)}
            >
              <i className="fa fa-caret-down" />
              <p>{country}</p>
              <ul className={` ${jobDrop2 ? "open" : ""} dropdown-options`}>
                {countries &&
                  countries.map((item) => (
                    <li onClick={() => setCountry(item)}>{item}</li>
                  ))}
              </ul>
            </div>
            <div
              className="job-search-dropdown"
              onClick={() => setJobDrop3(!jobDrop3)}
            >
              <i className="fa fa-caret-down" /> <p>{country}</p>
              <ul className={` ${jobDrop3 ? "open" : ""} dropdown-options`}>
                {countries &&
                  countries.map((item) => (
                    <li onClick={() => setCountry(item)}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="switchLabel">
              <Switch
                style={{ width: "20px" }}
                defaultChecked
                onChange={onChangeSwitch}
              />
              Remote Only
            </div>
          </div>
        </div>
      </div>

      <div className="careers-third-section">
        <div className="job-cards">
          <div className="job-card-container">
            <div className="job-card">
              {" "}
              <h3>Data Scientist</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Product Designer</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Technical Support</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              {" "}
              <h3>Data Scientist</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Product Designer</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Technical Support</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              {" "}
              <h3>Data Scientist</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Product Designer</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-card-container">
            <div className="job-card">
              <h3>Technical Support</h3>
              <p>Full time or contractual</p>
              <button className="pink-btn">Apply Now</button>
            </div>
          </div>
        </div>

        <button className="pink-btn">View All Openings</button>
      </div>

      <div className="careers-fourth-section">
        <div className="career-statistics-box">
          <div>
            <h2>45+</h2>
            <p>Team Members</p>
          </div>
          <div>
            <h2>25+</h2>
            <p>Total Products</p>
          </div>
          <div>
            <h2>800,0000+</h2>
            <p>Happy Users</p>
          </div>
          <div>
            <h2>25K</h2>
            <p>Happy Momnets</p>
          </div>
        </div>
      </div>

      <div className="careers-fifth-section">
        <h2>Learn Our Recruitment <span>Process</span></h2>
          <div className="recruitment-cards">
            <div className="recruitment-card">
              <InstructionsIcon
                height="44"
                width="44"
                style={{ fill: "#ff8947" }}
              />
              <h3>Large beautiful office</h3>
              <p>
                Enjoy a comfortable office environment with the most modern and
                stylish furnishing.{" "}
              </p>
            </div>
            <div className="recruitment-card">
              <InstructionsIcon
                height="44"
                width="44"
                style={{ fill: "#ff8947" }}
              />
              <h3>Large beautiful office</h3>
              <p>
                Enjoy a comfortable office environment with the most modern and
                stylish furnishing.{" "}
              </p>
            </div>
            <div className="recruitment-card">
              <InstructionsIcon
                height="44"
                width="44"
                style={{ fill: "#ff8947" }}
              />
              <h3>Large beautiful office</h3>
              <p>
                Enjoy a comfortable office environment with the most modern and
                stylish furnishing.{" "}
              </p>
            </div>
            <div className="recruitment-card">
              <InstructionsIcon
                height="44"
                width="44"
                style={{ fill: "#ff8947" }}
              />
              <h3>Large beautiful office</h3>
              <p>
                Enjoy a comfortable office environment with the most modern and
                stylish furnishing.{" "}
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
