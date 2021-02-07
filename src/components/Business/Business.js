import React from "react";
import "./../../assets/css/business.css";
import Footer from '../IndexShared/Footer'
import businesschef from "./../../assets/img/businesschef.webp";
import airbnbPerson from "./../../assets/img/airbnbPerson.jpg";
import airbnbPerson2 from "./../../assets/img/airbnbPerson2.jpg";
import airbnbPerson3 from "./../../assets/img/airbnbPerson3.jpg";
import Header from '../IndexShared/Header'
import BottomNav from "../IndexShared/BottomNav";


function Business(props) {
  return (
    <>
      
    <div className="business">
      <div className="form-container">
        <div
          className="coverImage"
          style={{ backgroundImage: `url(${businesschef})` , backgroundPositionY:'70%'}}
        ></div>

        <div className="form-modalB">
          <div class="form-section1">
            <div>Earn up to</div>
            <div>
              <span>$197</span> a month
            </div>
            <div>hosting in</div>
            <div>Dhaka</div>

            <a>How we estimate your earnings potential</a>
          </div>
          <div class="form-section2">
            <div>
              Sign up as a <strong>Business Subscriber</strong>
            </div>

            <div className="inputBoxGroup">
              <div className="inputBox">
                <input placeholder="Email Address" />
              </div>

              <div className="inputBox">
                <input placeholder="Password" />
              </div>
            </div>

            <p style={{ marginTop: 15 }}>
              Already a Subscriber?
              <span
                style={{
                  color: "#e50077",
                  fontFamily: "open sans !important",
                  fontFamily: 16,
                  marginLeft: 5,
                }}
              >
                Sign in
              </span>{" "}
            </p>

            <button className="business-signUp">Sign up as a Subscriber</button>
          </div>
        </div>
      </div>
      <div className="bus-content1">
        <div className="content-div">
          <div className="c-div1">
            <h2>Why host on Airbnb?</h2>
            <p>
              No matter what kind of home or room you have to share, Airbnb
              makes it simple and secure to host travelers. You’re in full
              control of your availability, prices, house rules, and how you
              interact with guests.
            </p>
          </div>
          <div className="c-div2">
            <h2>We have your back</h2>
            <p>
              To keep you, your home, and your belongings safe, we cover every
              booking with $1M USD in property damage protection and another $1M
              USD in insurance against accidents.
            </p>
          </div>
        </div>
      </div>
      <div className="div-border"></div>
      <div className="bus-content2">
        <h1>Hosting in 3 steps</h1>
        <div className="content-div">
          <div className="c-div1">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
                borderBottom :20,
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>Why host on Airbnb?</h2>
            <p>
              Share any space without sign-up charges, from a shared living room
              to a second home and everything in-between.
            </p>
          </div>
          <div className="c-div2">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
                borderBottom :20,
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>We have your back</h2>
            <p>
              Choose your own schedule, prices, and requirements for guests.
              We’re there to help along the way.
            </p>
          </div>
          <div className="c-div2">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
                borderBottom :20,
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>We have your back</h2>
            <p>
              Once your listing is live, qualified guests can reach out. You can
              message them with any questions before their stay. Learn how to
              start hosting
            </p>
          </div>
        </div>
      </div>

      <div className="bus-content3">
        <div className="content-div">
          <div className="c-div1">
            <h1>
              The Host Guarantee helped me decide to join Airbnb because I have
              it to fall back on if there's damage or problems.
            </h1>
            <p>Dennis hosts in London for the flexibility it provides</p>
            <button>Learn how they host</button>
          </div>
          <div className="c-div2">
            <img src={airbnbPerson} />
          </div>
        </div>
      </div>

      <div className="div-border"></div>

      <div className="bus-content1 second">
        <h1>We've got you covered</h1>
        <div className="content-div">
          <div className="c-div1">
            <h2>Why host on Airbnb?</h2>
            <p>
              We know it’s a priority to trust the people staying in your home.
              Airbnb allows you to set strict requirements for who can book and
              to get to know guests before their stay.
            </p>
            <p>
              If something does come up, though, we have your back. With our
              Host Guarantee covering property damage and our Host Protection
              Insurance for liability, you’re supported as a host throughout.
            </p>
            <a>Learn how Airbnb protects hosts</a>
          </div>
          <div className="c-div2">
            <div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    borderBottom :20,
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Ability to require government ID before booking
              </div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    borderBottom :20,
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                House Rules guests must agree to
              </div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    borderBottom :20,
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Chance to read reviews from past trips
              </div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    marginBottom:20
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Free $1M protection for property damage
              </div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    marginBottom:20
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Free $1M liability insurance
              </div>
              <div className="checkDiv">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 18,
                    width: 18,
                    display: "block",
                    fill: "#008489",
                    marginBottom:20
                  }}
                >
                  <path
                    d="m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                24/7 global customer support
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="bus-content3 second">
        <div className="content-div">
          <div className="c-div2">

        <img src={airbnbPerson2} />
          </div>
        </div>
      </div>
      <div className="div-border"></div>
    



      <div className="bus-content2">
        <h1>Payments made simple</h1>
        <div className="content-div">
          <div className="c-div1">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>Charge what you want</h2>
            <p>
            You always get to pick your price. Need help? We have tools to help you match demand in your area.
            </p>
          </div>
          <div className="c-div2">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>Pay low fees</h2>
            <p>
            There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the lowest fees in the industry.
            </p>
          </div>
          <div className="c-div2">
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 48,
                width: 48,
                display: "block",
                fill: "currentColor",
              }}
            >
              <path d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0"></path>
            </svg>
            <h2>Get paid quickly</h2>
            <p>
            Once a guest checks in, we can send your money by Paypal, direct deposit, or other available methods.
            </p>
          </div>
        </div>
      </div>



      <div className="bus-content3">
        <div className="content-div">
        <div className="c-div2">
            <img src={airbnbPerson3} />
          </div>
          <div className="c-div1">
            <h1>
            Hosting has helped me pay for a new kitchen and other upgrades.
            </h1>
            <p>Dennis hosts in London for the flexibility it provides</p>
            <button>Learn how they host</button>
          </div>
         
        </div>
      </div>

    </div>
</>
  );
}

export default Business;
