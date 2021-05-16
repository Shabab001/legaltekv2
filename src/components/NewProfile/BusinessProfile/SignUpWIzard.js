import React, { useState, useRef,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { message, Modal, Select } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import "../../../assets/css/wizard.css";
import person from "../../../assets/img/Product Feedback.svg";
import StripeComp from "./StripeComp";
import Geolocate from "./../../MiniComponents/Geolocate";
import { geocodeByAddress } from "react-places-autocomplete";
import Search from "../../MiniComponents/CanadaPost/Search";
import Wizard1 from "../../../assets/img/wizard1.png";
import Wizard2 from "../../../assets/img/wizard2.png";
import Wizard3 from "../../../assets/img/wizard3.png";
import {CgArrowLongRight} from "react-icons/cg"
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

let settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  swipe: false,
  adaptiveHeight: true,
  //slickGoTo: 4,
};

// const businessTypes = [
//   { key: "1", text: "Food Service", value: 1 },
//   { key: "2", text: "Chef for hire", value: 2 },
//   { key: "3", text: "Cooking Lesson", value: 3 },
//   { key: "4", text: "Meal Plan", value: 4 },
//   { key: "5", text: "Catering Services", value: 5 },
// ];

function SignUpWIzard(props) {
  let { wizard, setWizard, businessTypes } = props;
  const [slide, setSlide] = useState(1);
  const [chosenPackage, setChosenPackage] = useState("Connect");
  const [billingCycle, setBillingCycle] = useState("month");
  const stripe = useStripe();
  const elements = useElements();
  const [bProducts, setBProducts] = useState([]);
  const [monthlyBill, setMonthlyBill] = useState(0);
  const [yearlyBill, setYearlyBill] = useState(0);
  const [cardElementError, setCardElementError] = useState("");
  const [cardElementValid, setCardElementValid] = useState(false);
  const[activeBtn,setActiveBtn]=useState(false)
  const [billingCity, setBillingCity] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [billingCountry, setBillingCountry] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [billingAddress, setBillingAddress] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [billingState, setBillingState] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [billingZip, setBillingZip] = useState({
    value: "",
    message: "",
    isValid: true,
  });
  const [billingCoordinates, setBillingCoordinates] = useState({
    lat: "",
    lng: "",
  });

  const [firstName, setFirstName] = useState({
    value: "",
    isValid: true,
    message: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    isValid: true,
    message: "",
  });
  const [businessName, setBusinessName] = useState({
    value: "",
    isValid: true,
    message: "",
  });
  const [businessType, setBusinessType] = useState({
    value: [],
    isValid: true,
    message: "",
  });

  const proceed = async () => {
    if (!firstName.value) {
      setFirstName({
        ...firstName,
        message: "First name cannot be empty",
        isValid: false,
      });
    } else {
      setFirstName({
        ...firstName,
        message: "",
        isValid: true,
      });
    }

    if (!lastName.value) {
      setLastName({
        ...lastName,
        message: "First name cannot be empty",
        isValid: false,
      });
    } else {
      setLastName({
        ...lastName,
        message: "",
        isValid: true,
      });
    }

    if (!businessName.value) {
      setBusinessName({
        ...businessName,
        message: "First name cannot be empty",
        isValid: false,
      });
    } else {
      setBusinessName({
        ...businessName,
        message: "",
        isValid: true,
      });
    }

    if (!businessType.value.length) {
      setBusinessType({
        ...businessType,
        message: "Business type cannot be empty",
        isValid: false,
      });
    } else {
      setBusinessType({
        ...businessType,
        message: "",
        isValid: true,
      });
    }

    if (
      firstName.value &&
      lastName.value &&
      businessName.value &&
      businessType.value
    ) {
      

      setSlide(2);
      sliderRef.current.slickNext();
    }
  };
  let country = localStorage.getItem("country_short");
  let countryCondition =
  country != "US" &&
  country != "CAN" &&
  country != "CN" &&
  country != "CA" &&
  country != "USA";
  const sliderRef = useRef(null);
  const handleSelectionCanadaPost = async (item) => {
    console.log(item);

    console.log("item", item);
    setBillingAddress({
      ...billingAddress,
      value: item.Line1 ? item.Line1 : "",
      isValid: true,
      message: "",
    });

    setBillingCity({
      ...billingCity,
      value: item.City ? item.City : "",
      isValid: true,
      message: "",
    });

    setBillingCountry({
      ...billingCountry,
      value: item.CountryName ? item.CountryName : "",
      isValid: true,
      message: "",
    });

    setBillingState({
      ...billingState,
      value: item.Province ? item.Province : "",
      isValid: true,
      message: "",
    });

    setBillingCoordinates({
      ...billingCoordinates,
      value: item.coordinates ? item.coordinates : {},
      isValid: true,
      message: "",
    });

    setBillingZip({
      ...billingZip,
      value: item.PostalCode ? item.PostalCode : "",
      isValid: true,
      message: "",
    });
  };

  const updateBillingAddress = async (addr) => {
    console.log(addr);

    var placeSearch, autocomplete;
    var componentForm = {
      street_number: "",
      route: "",
      postal_town: "",
      locality: "",
      administrative_area_level_1: "",
      country: "",
      postal_code: "",
      formattedAddress: "",
      neighbourhood: "",
    };
    let address = await geocodeByAddress(addr);
    if (address) console.log(address[0].geometry.location.lat());

    address = address[0];
    componentForm.formattedAddress = address.formatted_address;
    for (var i = 0; i < address.address_components.length; i++) {
      var addressType = address.address_components[i].types[0];
      console.log(addressType);
      if (componentForm[addressType] == "") {
        let val = address.address_components[i][componentForm[addressType]];
        componentForm[addressType] = address.address_components[i].long_name;
      }
    }
    console.log(componentForm);
    if (address && address.geometry) {
      setBillingCoordinates({
        lat: address.geometry.location.lat(),
        lng: address.geometry.location.lng(),
      });
    }

    if (componentForm.country !== "")
      setBillingCountry({
        ...billingCountry,
        value: componentForm.country,
        isValid: true,
        message: "",
      });
    // debugger
    if (componentForm.postal_code !== "")
      setBillingZip({
        ...billingZip,
        value: componentForm.postal_code,
        isValid: true,
        message: "",
      });

    setBillingCity({
      ...billingCity,
      value:
        componentForm.postal_town != "Town" && componentForm.postal_town
          ? componentForm.postal_town
          : componentForm.locality != "locality"
          ? componentForm.locality
          : "",
      isValid: true,
      message: "",
    });

    setBillingState({
      ...billingState,
      value:
        componentForm.administrative_area_level_1 != "State "
          ? componentForm.administrative_area_level_1
          : "",
      isValid: true,
      message: "",
    });

    if (componentForm.street_number && componentForm.route) {
      setBillingAddress({
        ...billingAddress,
        value: componentForm.street_number + " " + componentForm.route,
        isValid: true,
        message: "",
      });
    } else if (componentForm.route) {
      setBillingAddress({
        ...billingAddress,
        value: componentForm.route,
        isValid: true,
        message: "",
      });
    } else if (componentForm.formattedAddress) {
      setBillingAddress({
        ...billingAddress,
        value: componentForm.formattedAddress,
        isValid: true,
        message: "",
      });
    }
  };

  const iframeStyles = {
    base: {
      color: "#000",
      fontSize: "16px",
      iconColor: "#000",
      "::placeholder": {
        color: "gray",
      },
    },
    invalid: {
      iconColor: "#f14c48",
      color: "#f14c48",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  const handleCardDetailsChange = (cardElement) => {
    console.log(cardElement);
    if (cardElement.error && cardElement.error.message) {
      setCardElementError(cardElement.error.message);
      setCardElementValid(false);
    } else {
      setCardElementError("");
      setCardElementValid(true);
    }
    if (cardElement.empty) {
      setCardElementValid(false);
      setCardElementError(cardElement.error.message);
    }

    // ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

   useEffect(()=>{
    if (
      !billingAddress.isValid ||
      !billingAddress.value ||
      !billingCity.isValid ||
      !billingCity.value ||
      !billingCountry.isValid ||
      !billingCountry.value ||
      !billingState.isValid ||
      !billingState.value ||
      !billingZip.isValid ||
      !billingZip.value ||
      !cardElementValid
    ){
              setActiveBtn(false)
    }
    else{
          setActiveBtn(true)    
    }

   },[billingAddress.value,billingAddress.isValid,billingCity.value,billingCity.isValid,billingCountry.isValid,billingCountry.value,billingState.isValid,billingState.value,billingZip.isValid,billingZip.value,cardElementValid])

  const submitForm = async () => {
    const cardElement = elements.getElement("card");
    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: firstName + " " + lastName,
        email:
          props.auth && props.auth.user && props.auth.user.email
            ? props.auth.user.email
            : "",
      },
    });

    let billingAddressFlag = true;
    if (
      !billingAddress.isValid ||
      !billingAddress.value ||
      !billingCity.isValid ||
      !billingCity.value ||
      !billingCountry.isValid ||
      !billingCountry.value ||
      !billingState.isValid ||
      !billingState.value ||
      !billingZip.isValid ||
      !billingZip.value
    ) {
      billingAddressFlag = false;

      if (!billingAddress.value) {
        setBillingAddress({
          ...billingAddress,
          isValid: false,
          message: "Billing address cannot be empty",
        });
      }
      if (!billingCity.value) {
        setBillingCity({
          ...billingCity,
          isValid: false,
          message: "Billing city cannot be empty",
        });
      }
      if (!billingCountry.value) {
        setBillingCountry({
          ...billingCountry,
          isValid: false,
          message: "Billing country cannot be empty",
        });
      }
      if (!billingState.value) {
        setBillingState({
          ...billingState,
          isValid: false,
          message: "Billing state cannot be empty",
        });
      }
      if (!billingZip.value) {
        setBillingZip({
          ...billingZip,
          isValid: false,
          message: "Billing zip cannot be empty",
        });
      }
    }

    if (
      paymentMethodReq &&
      paymentMethodReq.paymentMethod &&
      billingAddressFlag
    ) {
      console.log(paymentMethodReq);
      let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        businessName: businessName.value,
        businessType: businessType.value,
        stripeToken: paymentMethodReq.paymentMethod.id,
        stripePaymentMethod: paymentMethodReq.paymentMethod,
        subscribedPackage: chosenPackage,
        billingCycle: billingCycle,
        chosenProducts: businessTypes.filter((item) =>
          bProducts
            .map((item, index) => item.productStripeId)
            .includes(item.productStripeId)
        ),
        billing: {
          billingState: billingState.value,
          billingAddress: billingAddress.value,
          billingCity: billingCity.value,
          billingCountry: billingCountry.value,
          billingCoordinates: billingCoordinates,
          billingZip: billingZip.value,
        },
      };

      let saveWizard = await props.actions.saveBusinessUserWizard(
        { ...props, obj },
        props.history
      );
      console.log(saveWizard);
      if (saveWizard) {
        setWizard(false);
        let profileShort = {
          userId: props.auth.user._id,
          userType: props.auth.user.userType,
        };
        await props.actions.getProfile(profileShort, props);
        // setWizard(false);
      }
    } else {
      message.error("Not a valid card number");
    }
  };
  return (
    <Modal
      className="wizardModal"
      title="Legaltek Sign Up Wizard"
      width={1500}
      visible={wizard}
      onOk={() => setWizard(false)}
      onCancel={() => setWizard(false)}
      footer={null}
    >
      <div className="pageIndicator">
        {/* <h1>Page {slide}</h1> */}
        <div className="indicator1">
        <div className="incdicator-icons">

        <div
          className={`iconContainer ${slide == 1 ? "active" : ""} ${
            slide > 1 ? "completed" : ""
          }`}
        >
          {
            slide > 1? 
       
                <i className= "fa fa-check"  />:
                <div className="indicator-number"> 
                <p>1</p>
      
                </div>
          }
        
        </div>
        <div>
          <p>Info</p>
        </div>
          </div>
          <div className="indicator-arrow">
               <CgArrowLongRight/>
          </div>
          </div>

          <div className="indicator1">
        <div className="incdicator-icons">

        <div
          className={`iconContainer ${slide == 2 ? "active" : ""} ${
            slide > 2 ? "completed" : ""
          }`}
        >
          {
            slide > 2? 
       
                <i className= "fa fa-check"  />:
                <div className="indicator-number"> 
                <p>2</p>
      
                </div>
          }
          
        </div>
        <div>
          <p>Plan</p>
        </div>
          </div>
          <div className="indicator-arrow">
               <CgArrowLongRight/>
          </div>
          </div>

          <div className="indicator1">
        <div className="incdicator-icons">

        <div
          className={`iconContainer ${slide == 3 ? "active" : ""} ${
            slide > 3 ? "completed" : ""
          }`}
        >
    {
            slide > 3? 
       
                <i className= "fa fa-check"  />:
                <div className="indicator-number"> 
                <p>3</p>
      
                </div>
          }
          
        </div>
        <div>
          <p>Billings</p>
        </div>
          </div>
          
          </div>
        

      </div>
      <button
                  className={activeBtn? "redBtn2 orange" :"redBtn2"}
                  onClick={(e) => {
                    submitForm();
                  }}
                >
                  Finish Setup
                </button>
      <Slider {...settings} ref={sliderRef}>
        {console.log("bProducts", bProducts)}
        <div className="page pageOne">
          <div className="sides">
            <div className="side leftSide">
              <img src={person} />
            </div>
            <div className="side rightSide">
              <h3>Just a few more steps to complete Registration</h3>
              <h4>
                Please complete all required fields to finish setting up your
                account and get full access to Legaltek!
              </h4>
              <div className="innerDiv">
                <div className="inputRow">
                  <label
                    className={`${!firstName.isValid ? "error" : ""}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    First name *
                    <input
                      name="firstName"
                      placeholder="First name"
                      value={firstName.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value != "") {
                          setFirstName({
                            ...firstName,
                            value: e.target.value,
                            message: "",
                            isValid: true,
                          });
                        } else {
                          setFirstName({
                            ...firstName,
                            value: e.target.value,
                            message: "First name is required",
                            isValid: false,
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {firstName.message
                        ? firstName.message
                        : "First name is required"}
                    </p>
                    {/* )} */}
                  </label>

                  <label
                    className={`${!lastName.isValid ? "error" : ""}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Last name *
                    <input
                      name="lastName"
                      placeholder="Last name"
                      value={lastName.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value != "") {
                          setLastName({
                            ...lastName,
                            value: e.target.value,
                            message: "",
                            isValid: true,
                          });
                        } else {
                          setLastName({
                            ...lastName,
                            value: e.target.value,
                            message: "Last name is required",
                            isValid: false,
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {lastName.message
                        ? lastName.message
                        : "Last name is required"}
                    </p>
                    {/* )} */}
                  </label>
                  <label
                    className={`${
                      !businessName.isValid ? "error" : ""
                    } fullLabel`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Lawfirm name *
                    <input
                      name="businessName"
                      placeholder="Business name"
                      autocomplete="new-password"
                      autoCorrect="off"
                      value={businessName.value}
                      onChange={(e) => {
                        if (e.target.value != "") {
                          setBusinessName({
                            ...businessName,
                            value: e.target.value,
                            message: "",
                            isValid: true,
                          });
                        } else {
                          setBusinessName({
                            ...businessName,
                            value: e.target.value,
                            message: "Business name is required",
                            isValid: false,
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {businessName.message
                        ? businessName.message
                        : "Business name is required"}
                    </p>
                    </label>
                    <label
                    className={`${
                      !businessType.isValid ? "error" : ""
                    } fullLabel`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Lawfirm registration number*
                    <input
                      name="registrationNumber"
                      placeholder="Lawfirm registration number"
                      autocomplete="new-password"
                      autoCorrect="off"
                      value={businessType.value}
                      onChange={(e) => {
                        if (e.target.value != "") {
                          setBusinessType({
                            ...businessType,
                            value: e.target.value,
                            message: "",
                            isValid: true,
                          });
                        } else {
                          setBusinessType({
                            ...businessType,
                            value: e.target.value,
                            message: "Lawfirm registration number is required",
                            isValid: false,
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {businessType.message
                        ? businessType.message
                        : "Lawfirm registration number is required"}
                    </p>
                    {/* )} */}
                  </label>
                  
                </div>
                <button
                  className="redBtn"
                  onClick={(e) => {
                    proceed();
                  }}
                >
                  Continue <i className="fe fe-chevron-right" />
                </button>
              
              </div>
            </div>
          </div>

          <hr />
          <div className="infoDiv">
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Prospecting Safeguards</p>
                <p>
                  Automatically safeguard against do-not-contact prospects and
                  duduplicate on existing records.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Seamless Sync</p>
                <p>
                  Instantly push and pull records to and from your existing
                  tools.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>AI Recommendations</p>
                <p>
                  Get intelligent recommendations based on lookalikes to your
                  best CRM customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page pageTwo">
          <div className="sides">
            <div className="side leftSide">
              <h3>Get packed for new experiences!</h3>
              <h4>Choose Subscription Package</h4>
              <div className="cardRow">
                <div
                  className={`${
                    chosenPackage == "Connect" ? "active" : ""
                  }   card`}
                  onClick={(e) => setChosenPackage("Connect")}
                >
                  <h3>
                    Connect <span className="checkBox"></span>
                  </h3>
                  <small>Flat monthly fee</small>
                  <ul>
                    <li>
                      <i className="fe fe-check" />
                      No commision
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      Your listing on legaltek
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      Lowest industry plan
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      Access to one or more services
                    </li>
                  </ul>
                </div>
                <div
                  className={`${
                    chosenPackage == "Grow" ? "active" : ""
                  }   card`}
                  onClick={(e) => setChosenPackage("Grow")}
                >
                  <h3>
                    Grow <span className="checkBox"></span>
                  </h3>
                  <small>Free(no monthly fee).</small>
                  <ul>
                    <li>
                      <i className="fe fe-check" />
                      Grow your business
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      Your listing on legaltek
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      5% lowest industry commision
                    </li>
                    <li>
                      <i className="fe fe-check" />
                      Access to all services
                    </li>
                  </ul>
                </div>
              </div>
              {chosenPackage == "Connect" && (
                <>
                  <h4>Choose Billing cycle</h4>
                  <div className="cardRow">
                    <div
                      className={`${
                        billingCycle == "month" ? "active" : ""
                      }   card`}
                      onClick={(e) => setBillingCycle("month")}
                    >
                      {/* <img src={food} /> */}
                      <h3>
                        {"$" + monthlyBill}/Monthly{" "}
                        <span className="checkBox"></span>
                      </h3>
                      <small>Billed monthly</small>
                    </div>
                    <div
                      className={`${
                        billingCycle == "year" ? "active" : ""
                      }   card`}
                      onClick={(e) => setBillingCycle("year")}
                    >
                      <h3>
                        {"$" + yearlyBill}/Yearly{" "}
                        <span className="checkBox"></span>
                      </h3>
                      <small>Billed annually</small>
                    </div>
                  </div>
                </>
              )}
              <p>
                Chosen Package:{" "}
                <strong>
                  {chosenPackage == "Connect" ? "Connect" : "Grow"}
                </strong>{" "}
              </p>
              <div className="buttonGrp">
                <button
                  className="redBtn"
                  onClick={(e) => {
                    setSlide(1);
                    sliderRef.current.slickPrev();
                  }}
                >
                  Go Back <i className="fe fe-chevron-left" />
                </button>
                <button
                  className="redBtn"
                  onClick={(e) => {
                    setSlide(3);
                    sliderRef.current.slickNext();
                  }}
                >
                  Go Next <i className="fe fe-chevron-right" />
                </button>
              </div>
            </div>
            <div className="side rightSide">
              <img src={person} />
            </div>
          </div>
          <hr />
          <div className="infoDiv">
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Prospecting Safeguards</p>
                <p>
                  Automatically safeguard against do-not-contact prospects and
                  duduplicate on existing records.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Seamless Sync</p>
                <p>
                  Instantly push and pull records to and from your existing
                  tools.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>AI Recommendations</p>
                <p>
                  Get intelligent recommendations based on lookalikes to your
                  best CRM customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page pageThree">
          <div className="sides">
            <div className="side leftSide">
              <img src={person} />
            </div>
            <div className="side rightSide">
              <h3>Just a few more steps to complete Registration</h3>
              <h4>
                Please complete all required fields to finish setting up your
                account and get full access to legaltek!
              </h4>
              <div className="innerDiv">
                <div className="inputRow">
                  {countryCondition ? (
                    <label className="fullLabel gM">
                      Choose Location:
                      <i className="fa fa-map-marker" />
                      <Geolocate
                        chooseAddress={(address) =>
                          updateBillingAddress(address)
                        }
                      />
                      <p>
                        {" "}
                        <i className="fe fe-alert-triangle" />{" "}
                        {/* {this.state.contactPhone.message} */}
                        Location Finder
                      </p>
                    </label>
                  ) : (
                    <label className="fullLabel cp">
                      Choose Location:
                      <i className="fa fa-map-marker" />
                      <Search
                        handleSelectionCanadaPost={handleSelectionCanadaPost}
                      />
                      <p>
                        {" "}
                        <i className="fe fe-alert-triangle" />{" "}
                        {/* {this.state.contactPhone.message} */}
                        Location Finder
                      </p>
                    </label>
                  )}
                  <label
                    className={`${!billingCity.isValid ? "error" : ""}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Billing city *
                    <input
                      placeholder="Billing city"
                      value={billingCity.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setBillingCity({
                            ...billingCity,
                            value: e.target.value,
                            isValid: true,
                            message: "",
                          });
                        } else {
                          setBillingCity({
                            ...billingCity,
                            value: e.target.value,
                            isValid: false,
                            message: "Billing city cannot be empty",
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {/* {this.state.contactPhone.message} */}
                      {billingCity.message
                        ? billingCity.message
                        : "Billing city is required"}
                    </p>
                    {/* )} */}
                  </label>

                  <label
                    className={`${!billingState.isValid ? "error" : ""}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Billing state *
                    <input
                      placeholder="Billing state"
                      value={billingState.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setBillingState({
                            ...billingState,
                            value: e.target.value,
                            isValid: true,
                            message: "",
                          });
                        } else {
                          setBillingState({
                            ...billingState,
                            value: e.target.value,
                            isValid: false,
                            message: "Billing state cannot be empty",
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {/* {this.state.contactPhone.message} */}
                      {billingState.message
                        ? billingState.message
                        : "Billing state is required"}
                    </p>
                    {/* )} */}
                  </label>
                  <label
                    className={`${
                      !billingAddress.isValid ? "error" : ""
                    } fullLabel`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Billing address(line1) *
                    <input
                      placeholder="Billing address"
                      value={billingAddress.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setBillingAddress({
                            ...billingAddress,
                            value: e.target.value,
                            isValid: true,
                            message: "",
                          });
                        } else {
                          setBillingAddress({
                            ...billingAddress,
                            value: e.target.value,
                            isValid: false,
                            message: "Billing address cannot be empty",
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {/* {this.state.contactPhone.message} */}
                      {billingAddress.message
                        ? billingAddress.message
                        : "Billing address is required"}
                    </p>
                    {/* )} */}
                  </label>
                  <label
                    className={`${
                      !billingZip.isValid ? "error" : ""
                    } fullLabel`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Billing zip *
                    <input
                      placeholder="Billing zip"
                      value={billingZip.value}
                      autocomplete="new-password"
                      autoCorrect="off"
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setBillingZip({
                            ...billingZip,
                            value: e.target.value,
                            isValid: true,
                            message: "",
                          });
                        } else {
                          setBillingZip({
                            ...billingZip,
                            value: e.target.value,
                            isValid: false,
                            message: "Billing zip cannot be empty",
                          });
                        }
                      }}
                    />
                    {/* {this.state.contactPhone.message && ( */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {/* {this.state.contactPhone.message} */}
                      {billingZip.message
                        ? billingZip.message
                        : "Billing zip is required"}
                    </p>
                    {/* )} */}
                  </label>
                  <label
                    className={`${!cardElementValid ? "error" : ""} fullLabel`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {console.log(cardElementValid)}
                    Billing card
                    <div className="stripeCont">
                      <CardElement
                        options={cardElementOpts}
                        onChange={handleCardDetailsChange}
                      />
                    </div>
                    {/* <StripeComp /> */}
                    <p>
                      {" "}
                      <i className="fe fe-alert-triangle" />{" "}
                      {/* {this.state.contactPhone.message} */}
                      {cardElementError
                        ? cardElementError
                        : "Billing card is required"}
                    </p>
                  </label>
                </div>
                <div className="buttonGrp">
                  <button
                    className="redBtn"
                    onClick={async (e) => {
                      setSlide(2);
                      sliderRef.current.slickPrev();
                      // const cardElement = elements.getElement("card");
                      // const paymentMethodReq = await stripe.createPaymentMethod({
                      //   type: "card",
                      //   card: cardElement
                      // });
                      // console.log(paymentMethodReq);
                    }}
                  >
                    Go Back <i className="fe fe-chevron-left" />
                  </button>
       
                </div>
                {/* <button
                  className="redBtn"
                  onClick={(e) => {
                    setWizard(false);
                  }}
                >
                  Finish <i className="fe fe-check" />
                </button> */}
              </div>
            </div>
          </div>

          <hr />
          <div className="infoDiv">
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Prospecting Safeguards</p>
                <p>
                  Automatically safeguard against do-not-contact prospects and
                  duduplicate on existing records.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>Seamless Sync</p>
                <p>
                  Instantly push and pull records to and from your existing
                  tools.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fe fe-user" />
              </div>
              <div className="textContent">
                <p>AI Recommendations</p>
                <p>
                  Get intelligent recommendations based on lookalikes to your
                  best CRM customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpWIzard);
