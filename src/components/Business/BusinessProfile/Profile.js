import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import Currencies from "../../../assets/json/Currencies.json";
import languageOptions from "../../../assets/json/Languages.json";
import Countries from "../../../assets/json/Countries.json";
import { DatePicker } from "antd";
import { Select } from "antd";
import validator from "validator";
import moment from "moment";
import NavigationPrompt from "react-router-navigation-prompt";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import Geolocate from "./../../MiniComponents/Geolocate";
import { geocodeByAddress } from "react-places-autocomplete";
const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formDirty: false,
      firstName: { value: "", message: "", isValid: true },
      lastName: { value: "", message: "", isValid: true },
      phoneNo: { value: "", message: "", isValid: true },
      countryCode: { value: "", message: "", isValid: true },
      email: { value: "", message: "", isValid: true },
      password: { value: "", message: "", isValid: true },
      gender: { value: "", message: "", isValid: true },
      language: { value: "", message: "", isValid: true },
      currency: { value: "", message: "", isValid: true },
      dob: { value: "", message: "", isValid: true },
      kitchenTypes: [],
      deliveryOpts: [],
      social: "",
      currencyDrop: false,
      countryDrop: false,
      countryDrop1: false,
      countryDrop2: false,
      filteredCurrencies: Currencies,
      filteredCountryCode: Countries,
      toolTip: "",
      profCompDiv: true,
      formContactDirty: false,
      formProfileDirty: false,
      formAccountDirty: false,
      address: { value: "", isValid: true, message: "" },
      addressLineOne: { value: "", isValid: true, message: "" },
      billingAddress: { value: "", isValid: true, message: "" },
      billingCity: { value: "", isValid: true, message: "" },
      billingState: { value: "", isValid: true, message: "" },
      billingZip: { value: "", isValid: true, message: "" },
      billingCountry: { value: "", isValid: true, message: "" },
      businessCountry: { value: "", isValid: true, message: "" },
      businessName: { value: "", isValid: true, message: "" },
      businessAddress: { value: "", isValid: true, message: "" },
      businessCity: { value: "", isValid: true, message: "" },
      businessState: { value: "", isValid: true, message: "" },
      businessZip: { value: "", isValid: true, message: "" },
      businessPhoneNo: { value: "", isValid: true, message: "" },
      businessCountryCode: { value: "", isValid: true, message: "" },
      businessEmail: { value: "", isValid: true, message: "" },
      contactEmail: { value: "", message: "", isValid: true },
      contactPhone: { value: "", message: "", isValid: true },
      contactCountryCode: { value: "", message: "", isValid: true },
      businessProfile: { value: "", isValid: true, message: "" },
      profileSummary: { value: "", isValid: true, message: "" },
      profileCompletion: {},
    };
    this.curr = React.createRef();
    this.deleteAddressInfo = this.deleteAddressInfo.bind(this);
    this.changeAddressInfo = this.changeAddressInfo.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateBillingAddress = this.updateBillingAddress.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // if (props.profile && props.profile.token) {
    //   localStorage.setItem("auth_token", props.profile.token);
    // }

    const { profile } = props;
    if (state.formDirty == false) {
      if (props.auth.isAuthenticated && profile) {
        if (profile.firstName) {
          state.firstName.value = profile.firstName;
        }
        if (profile.lastName) {
          state.lastName.value = profile.lastName;
        }
        if (profile.dob) {
          state.dob.value = profile.dob;
        }
        if (profile.phoneNo) {
          state.phoneNo.value = profile.phoneNo;
        }
        if (profile.countryCode) {
          state.countryCode.value = profile.countryCode;
        }
        if (profile.email) {
          state.email.value = profile.email;
        }
        if (localStorage.getItem("currency")) {
          state.currency.value = localStorage.getItem("currency");
        }
        if (profile.social) {
          state.social = profile.social;
        }
        if (profile.gender) {
          state.gender.value = profile.gender;
        }

        if (profile.dob) {
          state.dob.value = profile.dob;
        }
        if (profile.language) {
          state.language.value = profile.language;
        }

        if (profile.deliveryOpts) {
          state.deliveryOpts = profile.deliveryOpts;
        }

        if (profile.kitchenTypes) {
          state.kitchenTypes = profile.kitchenTypes;
        }

        if (profile.profileSummary) {
          state.profileSummary.value = profile.profileSummary;
        }

        if (profile.contact) {
          if (profile.contact.email) {
            state.contactEmail.value = profile.contact.email;
          }
          if (profile.contact.phoneNo) {
            state.contactPhone.value = profile.contact.phoneNo;
          }
          if (profile.contact.countryCode) {
            state.contactCountryCode.value = profile.contact.countryCode;
          }
          if (profile.contact.billing) {
            if (profile.contact.billing.billingAddress) {
              state.billingAddress.value =
                profile.contact.billing.billingAddress;
            }
            if (profile.contact.billing.billingCity) {
              state.billingCity.value = profile.contact.billing.billingCity;
            }
            if (profile.contact.billing.billingState) {
              state.billingState.value = profile.contact.billing.billingState;
            }
            if (profile.contact.billing.billingZip) {
              state.billingZip.value = profile.contact.billing.billingZip;
            }
            if (profile.contact.billing.billingCountry) {
              state.billingCountry.value =
                profile.contact.billing.billingCountry;
            }
          }
        }

        if (profile.business) {
          if (profile.business.name) {
            state.businessName.value = profile.business.name;
          }
          if (profile.business.email) {
            state.businessEmail.value = profile.business.email;
          }
          if (profile.business.phoneNo) {
            state.businessPhoneNo.value = profile.business.phoneNo;
          }
          if (profile.business.countryCode) {
            state.businessCountryCode.value = profile.business.countryCode;
          }
          if (profile.business.businessProfile) {
            state.businessProfile.value = profile.business.businessProfile;
          }
          if (profile.business.location) {
            if (profile.business.location.businessAddress) {
              state.businessAddress.value =
                profile.business.location.businessAddress;
            }
            if (profile.business.location.businessCity) {
              state.businessCity.value = profile.business.location.businessCity;
            }
            if (profile.business.location.businessState) {
              state.businessState.value =
                profile.business.location.businessState;
            }
            if (profile.business.location.businessZip) {
              state.businessZip.value = profile.business.location.businessZip;
            }
            if (profile.business.location.businessCountry) {
              state.businessCountry.value =
                profile.business.location.businessCountry;
            }

            if (profile.profileCompletion) {
              state.profileCompletion = profile.profileCompletion;
            }
          }
        }
      }
    }
    return state;
  }

  componentDidMount() {
    let profileDate = {
      userId: this.props.auth.user._id,
      userType: this.props.auth.user.userType,
    };
    this.props.actions.getProfile(profileDate, this.props.history);

    window.addEventListener("click", (e) => {
      let curLabel = document.querySelector(".cur-label");
      let ccLabel = document.querySelector(".cc-label");
      let ccLabel1 = document.getElementById("countryCode1")
      let ccLabel2 = document.getElementById("countryCode2")
      if (curLabel && !curLabel.contains(e.target)) {
        this.setState({ currencyDrop: false });
      }
      console.log(ccLabel1, ccLabel)
      if (ccLabel && !ccLabel.contains(e.target)) {
        this.setState({ countryDrop: false});
      }
      if (ccLabel1 && !ccLabel1.contains(e.target)) {
        this.setState({ countryDrop1: false});
      }

      if (ccLabel2 && !ccLabel2.contains(e.target)) {
        this.setState({ countryDrop2: false});
      }
    });

    window.addEventListener("click", (e) => {
      let curLabel = document.querySelector(".cur-label");
      if (curLabel && !curLabel.contains(e.target)) {
        this.setState({ currencyDrop: false });
      }
    });
  }

  onChange(e) {
    var state = this.state;
    if (e.target.name !== "kitchenTypes" && e.target.name !== "deliveryOpts") {
      state[e.target.name].value = e.target.value;
    }
    state.formDirty = true;

    if (e.target.name == "firstName") {
      if (e.target.value == "") {
        state["firstName"].isValid = false;
        state["firstName"].message = "First name cannot be left empty";
      } else {
        state["firstName"].isValid = true;
        state["firstName"].message = "";
      }
    }

    if (e.target.name == "lastName") {
      if (e.target.value == "") {
        state["lastName"].isValid = false;
        state["lastName"].message = "First name cannot be left empty";
      } else {
        state["lastName"].isValid = true;
        state["lastName"].message = "";
      }
    }

    if (e.target.name == "email") {
      if (e.target.value == "") {
        state["email"].isValid = false;
        state["email"].message = "Email cannot be left empty";
      } else if (!validator.isEmail(e.target.value)) {
        state["email"].isValid = false;
        state["email"].message = "Not a valid email address";
      } else {
        state["email"].isValid = true;
        state["email"].message = "";
      }
    }

    if (e.target.name == "phoneNo") {
      if (e.target.value == "") {
        state["phoneNo"].isValid = false;
        state["phoneNo"].message = "Phone number cannot be left empty";
      } else if (e.target.value.length !== 10) {
        state["phoneNo"].isValid = false;
        state["phoneNo"].message = "Phone number must be 10 digits";
      } else if (!e.target.value.match(/^\d+$/)) {
        state["phoneNo"].isValid = false;
        state["phoneNo"].message = "Phone number must only contain numbers";
      } else {
        state["phoneNo"].isValid = true;
        state["phoneNo"].message = "";
      }
    }

    if (e.target.name == "contactPhone") {
      if (e.target.value == "") {
        state["contactPhone"].isValid = false;
        state["contactPhone"].message = "Phone number cannot be left empty";
      } else if (e.target.value.length !== 10) {
        state["contactPhone"].isValid = false;
        state["contactPhone"].message = "Phone number must be 10 digits";
      } else if (!e.target.value.match(/^\d+$/)) {
        state["contactPhone"].isValid = false;
        state["contactPhone"].message =
          "Phone number must only contain numbers";
      } else {
        state["contactPhone"].isValid = true;
        state["contactPhone"].message = "";
      }
    }

    if (e.target.name == "contactEmail") {
      if (e.target.value == "") {
        state["contactEmail"].isValid = false;
        state["contactEmail"].message = "Email cannot be left empty";
      } else if (!validator.isEmail(e.target.value)) {
        state["contactEmail"].isValid = false;
        state["contactEmail"].message = "Not a valid email address";
      } else {
        state["contactEmail"].isValid = true;
        state["contactEmail"].message = "";
      }
    }

    if (e.target.name == "countryCode") {
      if (e.target.value == "") {
        state["countryCode"].isValid = false;
        state["countryCode"].message = "Country code cannot be left empty";
      }

      if (!e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["countryCode"].isValid = false;
        state["countryCode"].message = "Country code must only contain numbers";
      }

      if (e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["countryCode"].isValid = true;
        state["countryCode"].message = "";
      }
    }

    if (e.target.name == "contactCountryCode") {
      if (e.target.value == "") {
        state["contactCountryCode"].isValid = false;
        state["contactCountryCode"].message =
          "Country code cannot be left empty";
      }

      if (!e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["contactCountryCode"].isValid = false;
        state["contactCountryCode"].message =
          "Country code must only contain numbers";
      }
      if (e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["contactCountryCode"].isValid = true;
        state["contactCountryCode"].message = "";
      }
    }

    if (e.target.name == "businessCountryCode") {
      if (e.target.value == "") {
        state["businessCountryCode"].isValid = false;
        state["businessCountryCode"].message =
          "Country code cannot be left empty";
      }

      if (!e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["businessCountryCode"].isValid = false;
        state["businessCountryCode"].message =
          "Country code must only contain numbers";
      }
      if (e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state["businessCountryCode"].isValid = true;
        state["businessCountryCode"].message = "";
      }
    }

    if (e.target.name == "deliveryOpts") {
      console.log(state.deliveryOpts, e.target.value);
      if (e.target.checked) {
        if (!state.deliveryOpts.includes(e.target.value)) {
          let temp = state.deliveryOpts;
          temp.push(e.target.value);
          state["deliveryOpts"] = temp;
        }
      } else {
        let temp = state.deliveryOpts.filter((item) => {
          return item !== e.target.value;
        });
        console.log(temp);
        state["deliveryOpts"] = temp;
      }
    }

    if (e.target.name == "kitchenTypes") {
      console.log(state.kitchenTypes, e.target.value);
      if (e.target.checked) {
        if (!state.kitchenTypes.includes(e.target.value)) {
          let temp = state.kitchenTypes;
          temp.push(e.target.value);
          state["kitchenTypes"] = temp;
        }
      } else {
        let temp = state.kitchenTypes.filter((item) => {
          return item !== e.target.value;
        });

        state["kitchenTypes"] = temp;
      }
    }

    this.setState(state);
  }

  deleteAddressInfo(index) {
    let ind = index;
    let arr = this.state.addressInfo;
    let tempAddressInfo = this.state.addressInfo;
    if (tempAddressInfo.length > 1) {
      let newTemp = tempAddressInfo.splice(index, 1);
      console.log(tempAddressInfo);
      this.setState({ addressInfo: tempAddressInfo });
    }
  }

  changeAddressInfo(e, index) {
    let temp = this.state.addressInfo;
    console.log(temp, index);
    temp[index].city = e.target.value;
    console.log(temp);
    this.setState({ addressInfo: temp });
  }
  onChangeDate(date, dateString) {
    console.log(date, dateString);
    this.setState({
      formDirty: true,
      dob: { value: dateString, isValid: true, message: "" },
    });
  }

  saveProfile = async (e) => {
    let state = this.state;
    let data = null;
    let section = null;
    if (e.target.name == "profileBtn") {
      section = "profile";
      if (state.firstName.value == "") {
        state.firstName.isValid = false;
      } else {
        state.firstName.isValid = true;
      }
      if (state.lastName.value == "") {
        state.lastName.isValid = false;
      } else {
        state.lastName.isValid = true;
      }

      this.setState(state);

      data = {
        firstName: state.firstName.value,
        lastName: state.lastName.value,
        gender: state.gender.value,
        dob: state.dob.value,
        profileSummary: state.profileSummary.value,
      };
    }

    if (e.target.name == "accountBtn") {
      section = "account";
      data = {
        email: state.email.value,
        phoneNo: state.phoneNo.value,
        countryCode: state.countryCode.value.replace("+", ""),
        language: state.language.value,
        currency: state.currency.value,
        password: state.password.value,
      };
    }

    if (e.target.name == "contactBtn") {
      section = "contact";
      data = {
        email: state.contactEmail.value,
        phoneNo: state.contactPhone.value,
        countryCode: state.contactCountryCode.value.replace("+", ""),
        billing: {
          billingAddress: state.billingAddress.value,
          billingCity: state.billingCity.value,
          billingState: state.billingState.value,
          billingZip: state.billingZip.value,
          billingCountry: state.billingCountry.value,
        },
      };
    }

    if (e.target.name == "businessBtn") {
      section = "business";
      data = {
        name: state.businessName.value,
        email: state.businessEmail.value,
        phoneNo: state.businessPhoneNo.value,
        countryCode: state.businessCountryCode.value.replace("+", ""),
        businessProfile: state.businessProfile.value,
        location: {
          businessAddress: state.businessAddress.value,
          businessCity: state.businessCity.value,
          businessState: state.businessState.value,
          businessZip: state.businessZip.value,
          businessCountry: state.businessCountry.value,
        },
      };
    }

    if (e.target.name == "socialBtn") {
      section = "social";
      data = { ...state.social };
    }

    if (e.target.name == "kitchenTypesBtn") {
      console.log("hi");
      section = "kitchenTypes";
      data = state.kitchenTypes;
    }

    if (e.target.name == "deliveryOptsBtn") {
      section = "deliveryOpts";
      data = state.deliveryOpts;
    }

    let profileData = {
      data: data,
      userType: this.props.auth.user.userType,
      userId: this.props.auth.user._id,
      section: section,
    };
    await this.props.actions.saveProfile(profileData, this.props.history);

    let profileDate = {
      userId: this.props.auth.user._id,
      userType: this.props.auth.user.userType,
    };
    await this.props.actions.getProfile(profileDate, this.props.history);
    state.formDirty = false;
    this.setState(state);
  };

  async updateAddress(addr) {
    console.log(addr);
    this.setState({ formDirty: true });
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
    if (address) console.log(address);
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
    let state = this.state;
    // debugger
    // if (componentForm.postal_code !== "") {
    //   state.businessAddress = {
    //     value: componentForm.postal_code,
    //     isValid: true,
    //     message: "",
    //   };
    // } else if (componentForm.locality !== "") {
    //   state.businessAddress = {
    //     value: componentForm.locality,
    //     isValid: true,
    //     message: "",
    //   };
    // } else if (componentForm.country !== "" || componentForm.postal_code !== "")
    //   state.businessAddress = {
    //     value: componentForm.country,
    //     isValid: true,
    //     message: "",
    //   };
    if (componentForm.country !== "")
      state.businessCountry = {
        value: componentForm.country,
        isValid: true,
        message: "",
      };
    // debugger
    if (componentForm.postal_code !== "")
      state.businessZip = {
        value: componentForm.postal_code,
        isValid: true,
        message: "",
      };
    state.businessCity = {
      value:
        componentForm.postal_town != "Town" && componentForm.postal_town
          ? componentForm.postal_town
          : componentForm.locality != "locality"
          ? componentForm.locality
          : "",
      isValid: true,
      message: "",
    };
    state.businessState = {
      value:
        componentForm.administrative_area_level_1 != "State "
          ? componentForm.administrative_area_level_1
          : "",
      isValid: true,
      message: "",
    };

    // state.address = {
    //   value:
    //     componentForm.street_number != "Street Number"
    //       ? componentForm.street_number
    //       : "" + componentForm.route != "Route"
    //       ? componentForm.route
    //       : "",
    //   isValid: true,
    //   message: "",
    // };

    if (componentForm.street_number && componentForm.route) {
      state.businessAddress = {
        value: componentForm.street_number + " " + componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.route) {
      state.businessAddress = {
        value: componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.formattedAddress) {
      state.businessAddress = {
        value: componentForm.formattedAddress,
        isValid: true,
        message: "",
      };
    }
    // debugger
    // state.latitude = address.geometry.location.lat();
    // state.longitude = address.geometry.location.lng();
    // state.showNotificationDiv = true;
    // state.isDisabled.country = state.country.value != "" ? true : false;
    // state.isDisabled.state = state.stateName.value != "" ? true : false;
    // state.isDisabled.city = state.city.value != "" ? true : false;

    this.setState(state);
  }

  async updateBillingAddress(addr) {
    console.log(addr);
    this.setState({ formDirty: true });
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
    if (address) console.log(address);
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
    let state = this.state;
    // debugger
    // if (componentForm.postal_code !== "") {
    //   state.billingAddress = {
    //     value: componentForm.postal_code,
    //     isValid: true,
    //     message: "",
    //   };
    // } else if (componentForm.locality !== "") {
    //   state.billingAddress = {
    //     value: componentForm.locality,
    //     isValid: true,
    //     message: "",
    //   };
    // } else if (componentForm.country !== "" || componentForm.postal_code !== "")
    //   state.billingAddress = {
    //     value: componentForm.country,
    //     isValid: true,
    //     message: "",
    //   };
    if (componentForm.country !== "")
      state.billingCountry = {
        value: componentForm.country,
        isValid: true,
        message: "",
      };
    // debugger
    if (componentForm.postal_code !== "")
      state.billingZip = {
        value: componentForm.postal_code,
        isValid: true,
        message: "",
      };
    state.billingCity = {
      value:
        componentForm.postal_town != "Town" && componentForm.postal_town
          ? componentForm.postal_town
          : componentForm.locality != "locality"
          ? componentForm.locality
          : "",
      isValid: true,
      message: "",
    };
    state.billingState = {
      value:
        componentForm.administrative_area_level_1 != "State "
          ? componentForm.administrative_area_level_1
          : "",
      isValid: true,
      message: "",
    };

    if (componentForm.street_number && componentForm.route) {
      state.billingAddress = {
        value: componentForm.street_number + " " + componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.route) {
      state.billingAddress = {
        value: componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.formattedAddress) {
      state.billingAddress = {
        value: componentForm.formattedAddress,
        isValid: true,
        message: "",
      };
    }

    // state.latitude = address.geometry.location.lat();
    // state.longitude = address.geometry.location.lng();
    // state.showNotificationDiv = true;
    // state.isDisabled.country = state.country.value != "" ? true : false;
    // state.isDisabled.state = state.stateName.value != "" ? true : false;
    // state.isDisabled.city = state.city.value != "" ? true : false;

    this.setState(state);
  }

  render() {
    const dateFormat = "YYYY/MM/DD";
    let filteredCurrencies = Currencies;
    let filteredCountryCode = Countries;
    return (
      <div className="user-profile tab">
        <h1>Profile</h1>
        <div className="input-fields">
          <div className="input-row">
            <label
              className={`${!this.state.firstName.isValid ? "error" : ""}`}
            >
              First name:
              <input
                name="firstName"
                placeholder="Firstname"
                value={this.state.firstName.value}
                onChange={(e) => this.onChange(e)}
              />
            </label>

            <label className={`${!this.state.lastName.isValid ? "error" : ""}`}>
              Last name:
              <input
                name="lastName"
                placeholder="Firstname"
                value={this.state.lastName.value}
                onChange={(e) => this.onChange(e)}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              Date of Birth:
              <DatePicker
                name="dob"
                placeholder="Date of Birth"
                value={
                  this.state.dob.value
                    ? moment(this.state.dob.value, dateFormat)
                    : ""
                }
                onChange={this.onChangeDate.bind(this)}
              />
              {/* <input placeholder="Date of Birth" /> */}
            </label>
            <label>
              Gender:
              {/* <select placeholder="Firstname">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select> */}
              <Select
                name="gender"
                showSearch={true}
                placeholder="Gender"
                value={this.state.gender.value}
                onChange={(e, { value }) =>
                  this.setState({
                    gender: { ...this.state.gender, value: value },
                  })
                }
                options={gender}
              />
            </label>
          </div>

          <div className="input-row ">
            <label
              className={`${
                !this.state.email.isValid ? "error" : ""
              } textareaLabel`}
            >
              Profile Summary:
              <textarea
                name="profileSummary"
                placeholder=""
                value={this.state.profileSummary.value}
                onChange={this.onChange}
              />
            </label>
          </div>
          <button
            name="profileBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>
        <div className="dividerL"></div>

        <h1>Billing Contact</h1>
        <div className="input-fields">
          <div className="input-row">
         


            <label
              className={`${
                !this.state.contactCountryCode.isValid ? "error" : ""
              } cc-label ${this.state.countryDrop && "focused"}`}
              tabIndex={0}
            >
              Country Code:
              <input
                type="text"
                name="countryCode"
                placeholder="Country code"
                value={this.state.contactCountryCode.value}
                autoComplete="off"
                style={
                  this.state.countryCode.value.match(/^\d+$/) && {
                    paddingLeft: 20,
                  }
                }
                className="cc-input"
                onFocus={() => this.setState({ countryDrop: true })}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    filteredCountryCode = Countries.filter((item, index) => {
                      const regex = new RegExp(e.target.value, "gi");
                      return (
                        item.name.match(e.target.value) ||
                        item.dialCode.match(e.target.value) ||
                        item.isoCode.match(e.target.value)
                      );
                    });
                    this.setState({ filteredCountryCode: filteredCountryCode });
                  } else {
                    this.setState({ filteredCountryCode: Countries });
                  }
                  this.setState({
                    formAccountDirty: true,
                    formDirty: true,
                    contactCountryCode: {
                      ...this.state.contactCountryCode,
                      value: e.target.value,
                    },
                  });
                }}
              />
              <i className="dropdown icon"></i>
              {this.state.contactCountryCode.value.length &&
              this.state.contactCountryCode.value.match(/^\d+$/) ? (
                <i className="plus-icon">&#43;</i>
              ) : null}
              {this.state.countryDrop && (
                <div
                  className="countryDrop"
                  onBlur={() => this.setState({ countryDrop: false })}
                >
                  <ul>
                    {this.state.filteredCountryCode &&
                      this.state.filteredCountryCode.map((item, index) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            if (item && item.flag && item.dialCode) {
                              this.setState({
                                contactCountryCode: {
                                  ...this.state.contactCountryCode,
                                  value: item.dialCode.split("+")[1],
                                },
                                formDirty: true,
                                countryDrop: false,
                              });
                            }
                          }}
                        >
                          <img src={item.flag} height="16px" width="24px" />
                          {item.name +
                            " (" +
                            item.isoCode +
                            ") " +
                            item.dialCode}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              {this.state.contactCountryCode.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.contactCountryCode.message}
                </p>
              )}
            </label>
            <label
              className={`${!this.state.contactPhone.isValid ? "error" : ""}`}
            >
              Phone No:
              <input
                autoComplete="off"
                name="contactPhone"
                placeholder="Phone No."
                value={this.state.contactPhone.value}
                onChange={this.onChange}
              />
            </label>
          </div>

          {/* <div className="input-row">
            <label
              className={`${
                !this.state.contactCountryCode.isValid ? "error" : ""
              }`}
            >
              Country Code:
              <input
                autoComplete="off"
                name="contactCountryCode"
                placeholder="Country code"
                value={this.state.contactCountryCode.value}
                onChange={this.onChange}
              />
            </label>
       
          </div> */}

          <div className="input-row two-part">
          <label
              className={`${!this.state.contactEmail.isValid ? "error" : ""}`}
            >
              Email Address:
              <input
                name="contactEmail"
                placeholder="Email address"
                value={this.state.contactEmail.value}
                onChange={this.onChange}
              />
            </label>
            <label className="one-half">
              Billing Location:
              <Geolocate
                chooseAddress={(address) => this.updateBillingAddress(address)}
              />
            </label>
          </div>
          <div className="input-row two-part">
            <label className="one-half">
              Billing Address:
              <input
                autoComplete="off"
                name="billingAddress"
                value={this.state.billingAddress.value}
                placeholder="Billing Address"
                onChange={this.onChange}
              />
            </label>
            <label className="one-half">
              Billing Country:
              <input
                autoComplete="off"
                name="billingCountry"
                value={this.state.billingCountry.value}
                placeholder="Billing Country"
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="input-row three-part">
            <label className="one-third">
              City:
              <input
                autoComplete="off"
                name="billingCity"
                value={this.state.billingCity.value}
                placeholder="City"
                onChange={this.onChange}
              />
            </label>
            <label className="one-third">
              Province/State:
              <input
                autoComplete="off"
                name="billingState"
                value={this.state.billingState.value}
                placeholder="Province/State"
                onChange={this.onChange}
              />
            </label>
            <label className="one-third">
              Postal/Zip Code:
              <input
                autoComplete="off"
                name="billingZip"
                value={this.state.billingZip.value}
                placeholder="Postal/Zip Code"
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="input-row-btns">
            <button
              name="contactBtn"
              className="save-btn"
              onClick={this.saveProfile}
            >
              Save
            </button>
          </div>
        </div>
        <div className="dividerL"></div>

        <h1>
          Business Information
          <sup
            style={{
              fontStyle: "italic",
              fontSize: 11,
              fontFamily: "Avenir_light",
            }}
          >
            (This information will be displayed on your profile)
          </sup>
        </h1>
        <div className="input-fields">
          <div className="input-row">
            <label className="fullLabel">
              Business Name:
              <input
                name="businessName"
                placeholder="Business Name"
                value={this.state.businessName.value}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="input-row">
            <label className="fullLabel">
              Business Location:
              {/*             
                <Autocomplete
                    id="autocomplete"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Country, State and City will be automatically filled"
                    id="inputAddress2"
                    placeholder="Search Address"
                    name="Address"
                    onPlaceSelected={this.updateAddress}
                    types={["(regions)"]}
                  /> */}
              <Geolocate
                chooseAddress={(address) => this.updateAddress(address)}
              />
            </label>
          </div>
          {/* <div className="input-row">
            <label className="fullLabel">
              Business Address:
              <input
                autoComplete="off"
                placeholder="Business Address"
                name="businessAddress"
                value={this.state.businessAddress.value}
                onChange={this.onChange}
              />
            </label>
          </div> */}
          <div className="input-row two-part">
            <label className="one-half">
              Business Address:
              <input
                autoComplete="off"
                name="businessAddress"
                value={this.state.businessAddress.value}
                placeholder="Business Address"
                onChange={this.onChange}
              />
            </label>
            <label className="one-half">
              Business Country:
              <input
                autoComplete="off"
                name="businessCountry"
                value={this.state.businessCountry.value}
                placeholder="Business Country"
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="input-row three-part">
            <label className="one-third">
              City:
              <input
                autoComplete="off"
                placeholder="City"
                name="businessCity"
                value={this.state.businessCity.value}
                onChange={this.onChange}
              />
            </label>
            <label className="one-third">
              Province/State:
              <input
                autoComplete="off"
                placeholder="Province/State"
                name="businessState"
                value={this.state.businessState.value}
                onChange={this.onChange}
              />
            </label>
            <label className="one-third">
              Postal/Zip Code:
              <input
                autoComplete="off"
                placeholder="Postal/Zip Code"
                name="businessZip"
                value={this.state.businessZip.value}
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="input-row">
          <label
          id="countryCode2"
              className={`${
                !this.state.businessCountryCode.isValid ? "error" : ""
              } cc-label ${this.state.countryDrop2 && "focused"}`}
              tabIndex={0}
            >
              Country Code:
              <input
                type="text"
                name="countryCode"
                placeholder="Country code"
                value={this.state.businessCountryCode.value}
                autoComplete="off"
                style={
                  this.state.businessCountryCode.value.match(/^\d+$/) && {
                    paddingLeft: 20,
                  }
                }
                className="cc-input"
                onFocus={() => this.setState({ countryDrop2: true })}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    filteredCountryCode = Countries.filter((item, index) => {
                      const regex = new RegExp(e.target.value, "gi");
                      return (
                        item.name.match(e.target.value) ||
                        item.dialCode.match(e.target.value) ||
                        item.isoCode.match(e.target.value)
                      );
                    });
                    this.setState({ filteredCountryCode: filteredCountryCode });
                  } else {
                    this.setState({ filteredCountryCode: Countries });
                  }
                  this.setState({
                    formAccountDirty: true,
                    formDirty: true,
                    businessCountryCode: {
                      ...this.state.businessCountryCode,
                      value: e.target.value,
                    },
                  });
                }}
              />
              <i className="dropdown icon"></i>
              {this.state.businessCountryCode.value.length &&
              this.state.businessCountryCode.value.match(/^\d+$/) ? (
                <i className="plus-icon">&#43;</i>
              ) : null}
              {this.state.countryDrop2 && (
                <div
                  className="countryDrop"
                  onBlur={() => this.setState({ countryDrop2: false })}
                >
                  <ul>
                    {this.state.filteredCountryCode &&
                      this.state.filteredCountryCode.map((item, index) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            if (item && item.flag && item.dialCode) {
                              this.setState({
                                businessCountryCode: {
                                  ...this.state.businessCountryCode,
                                  value: item.dialCode.split("+")[1],
                                },
                                formDirty: true,
                                countryDrop2: false,
                              });
                            }
                          }}
                        >
                          <img src={item.flag} height="16px" width="24px" />
                          {item.name +
                            " (" +
                            item.isoCode +
                            ") " +
                            item.dialCode}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              {this.state.businessCountryCode.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.businessCountryCode.message}
                </p>
              )}
            </label>
            <label>
              Business Phone No:
              <input
                autoComplete="off"
                name="businessPhoneNo"
                placeholder="Phone No."
                value={this.state.businessPhoneNo.value}
                onChange={this.onChange}
              />
            </label>
            <label>
              Business Email:
              <input
                autoComplete="off"
                name="businessEmail"
                placeholder="Email address"
                value={this.state.businessEmail.value}
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="input-row ">
            <label className="textareaLabel">
              Business Profile:
              <textarea
                value={this.state.businessProfile.value}
                onChange={this.onChange}
                name="businessProfile"
                placeholder=""
                rows="4"
              />
            </label>
          </div>

          <div className="input-row-btns">
            <button
              name="businessBtn"
              className="save-btn"
              onClick={this.saveProfile}
            >
              Save
            </button>
          </div>
        </div>

        <div className="dividerL"></div>

        <h1>Social Account Settings</h1>
        <div className="input-fields">
          <div className="input-row social">
            <label>
              Facebook:
              <i className="fa fa-facebook" />
              <input
                name="social"
                placeholder="Facebook"
                onChange={(e) =>
                  this.setState({
                    formDirty: true,
                    social: { ...this.state.social, facebook: e.target.value },
                  })
                }
                value={this.state.social && this.state.social.facebook}
              />
            </label>

            <label>
              Instagram:
              <i className="fa fa-instagram" />
              <input
                name="social"
                placeholder="Instagram"
                onChange={(e) =>
                  this.setState({
                    formDirty: true,
                    social: { ...this.state.social, instagram: e.target.value },
                  })
                }
                value={this.state.social && this.state.social.instagram}
              />
            </label>
          </div>
          <div className="input-row social">
            <label>
              Twitter:
              <i className="fa fa-twitter" />
              <input
                name="social"
                placeholder="Twitter"
                onChange={(e) =>
                  this.setState({
                    formDirty: true,
                    social: { ...this.state.social, twitter: e.target.value },
                  })
                }
                value={this.state.social && this.state.social.twitter}
              />
            </label>
            <label>
              LinkedIn
              <i className="fa fa-linkedin" />
              <input
                name="social"
                placeholder="LinkedIn"
                onChange={(e) =>
                  this.setState({
                    formDirty: true,
                    social: { ...this.state.social, linkedin: e.target.value },
                  })
                }
                value={this.state.social && this.state.social.linkedin}
              />
            </label>
          </div>

          <button
            name="socialBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>

        <div className="dividerL"></div>
        <h1>Kitchen Types</h1>
        <div className="input-fields checkBoxes">
          <div className="input-row checkboxRows">
            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="kitchenTypes"
                value="Kosher"
                checked={this.state.kitchenTypes.includes("Kosher")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Kosher
            </label>

            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="kitchenTypes"
                value="Halal"
                checked={this.state.kitchenTypes.includes("Halal")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Halal
            </label>

            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="kitchenTypes"
                value="Pet free"
                checked={this.state.kitchenTypes.includes("Pet free")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Pet free
            </label>
            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="kitchenTypes"
                value="Vegetarian"
                checked={this.state.kitchenTypes.includes("Vegetarian")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Vegetarian
            </label>
            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="kitchenTypes"
                value="Peanut free"
                checked={this.state.kitchenTypes.includes("Peanut free")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Peanut free
            </label>
          </div>

          <button
            name="kitchenTypesBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>

        <div className="dividerL"></div>
        <h1>Delivery Options</h1>
        <div className="input-fields checkBoxes">
          <div className="input-row checkboxRows">
            <label className="fullLabel">
              {console.log(this.state.deliveryOpts)}
              <input
                type="checkbox"
                onChange={this.onChange}
                name="deliveryOpts"
                value="Delivery"
                checked={this.state.deliveryOpts.includes("Delivery")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Delivery
            </label>

            <label className="fullLabel">
              <input
                type="checkbox"
                onChange={this.onChange}
                name="deliveryOpts"
                value="Pickup"
                checked={this.state.deliveryOpts.includes("Pickup")}
              />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Pickup
            </label>
          </div>

          <button
            name="deliveryOptsBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>

        <div className="dividerL"></div>

        <h1>Account Settings</h1>
        <div className="input-fields">
          <div className="input-row">
            <label className={`${!this.state.email.isValid ? "error" : ""}`}>
              Email:
              <input
                name="email"
                placeholder="Email"
                value={this.state.email.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.email.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.email.message}
                </p>
              )}
            </label>

            <label className={`${!this.state.phoneNo.isValid ? "error" : ""}`}>
              Phone No:
              <input
                name="phoneNo"
                placeholder="Phone No."
                value={this.state.phoneNo.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.phoneNo.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.phoneNo.message}
                </p>
              )}
            </label>
          </div>
          <div className="input-row">
            <label
            id="countryCode1"
              className={`${
                !this.state.countryCode.isValid ? "error" : ""
              } cc-label ${this.state.countryDrop1 && "focused"}`}
              tabIndex={0}
            >
              Country Code:
              <input
                type="text"
                
                name="countryCode"
                placeholder="Country code"
                value={this.state.countryCode.value}
                autoComplete="off"
                style={
                  this.state.countryCode.value.match(/^\d+$/) && {
                    paddingLeft: 20,
                  }
                }
                className="cc-input"
                onFocus={() => this.setState({ countryDrop1: true })}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    filteredCountryCode = Countries.filter((item, index) => {
                      const regex = new RegExp(e.target.value, "gi");
                      return (
                        item.name.match(e.target.value) ||
                        item.dialCode.match(e.target.value) ||
                        item.isoCode.match(e.target.value)
                      );
                    });
                    this.setState({ filteredCountryCode: filteredCountryCode });
                  } else {
                    this.setState({ filteredCountryCode: Countries });
                  }
                  this.setState({
                    formAccountDirty: true,
                    formDirty: true,
                    countryCode: {
                      ...this.state.countryCode,
                      value: e.target.value,
                    },
                  });
                }}
              />
              <i className="dropdown icon"></i>
              {this.state.countryCode.value.length &&
              this.state.countryCode.value.match(/^\d+$/) ? (
                <i className="plus-icon">&#43;</i>
              ) : null}
              {this.state.countryDrop1 && (
                <div
                  className="countryDrop"
                  onBlur={() => this.setState({ countryDrop1: false })}
                >
                  <ul>
                    {this.state.filteredCountryCode &&
                      this.state.filteredCountryCode.map((item, index) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            if (item && item.flag && item.dialCode) {
                              this.setState({
                                countryCode: {
                                  ...this.state.countryCode,
                                  value: item.dialCode.split("+")[1],
                                },
                                formDirty: true,
                                countryDrop1: false,
                              });
                            }
                          }}
                        >
                          <img src={item.flag} height="16px" width="24px" />
                          {item.name +
                            " (" +
                            item.isoCode +
                            ") " +
                            item.dialCode}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              {this.state.countryCode.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.countryCode.message}
                </p>
              )}
            </label>
            <label className={`${!this.state.password.isValid ? "error" : ""}`}>
              Password:
              <input
                name="password"
                type="password"
                placeholder="************"
                value={this.state.password.value}
                onChange={(e) => this.onChange(e)}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              Language:
              <Select
                placeholder="Gender"
                value={this.state.language.value}
                // search
                showSearch="true"
                selection="true"
                onChange={(e, { value }) =>
                  this.setState({
                    formDirty: true,
                    language: { ...this.state.language, value: value },
                  })
                }
                options={languageOptions}
              />
            </label>

            <label
              className={`cur-label ${this.state.currencyDrop && "focused"}`}
              tabIndex={0}
            >
              Currency
              <input
                className="cur-input"
                type="text"
                placeholder="Choose currency"
                value={this.state.currency.value}
                onFocus={() => this.setState({ currencyDrop: true })}
                onChange={(e) => {
                  filteredCurrencies = Currencies.filter((item, index) => {
                    const regex = new RegExp(e.target.value, "gi");
                    return (
                      item.name.match(regex) || item.currency.code.match(regex)
                    );
                  });
                  this.setState({ filteredCurrencies: filteredCurrencies });
                  console.log(filteredCurrencies);
                  this.setState({
                    currency: { ...this.state.currency, value: e.target.value },
                  });
                }}
              />
              <i className="dropdown icon"></i>
              {this.state.currencyDrop && (
                <div
                  className="currencyDrop"
                  ref={this.curr}
                  onBlur={() => this.setState({ currencyDrop: false })}
                >
                  <ul>
                    {this.state.filteredCurrencies &&
                      this.state.filteredCurrencies.map((item, index) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(item, e);
                            if (item && item.currency && item.currency.code) {
                              this.setState({
                                currency: item.currency.code,
                                formDirty: true,
                                currencyDrop: false,
                              });
                            }
                          }}
                        >
                          <img
                            src={`data:image/jpeg;base64,${item.flag}`}
                            height="16px"
                            width="24px"
                          />
                          {item.name +
                            " - " +
                            item.currency.code +
                            ` (${
                              item.currency.symbol !== false &&
                              item.currency.symbol
                            })`}{" "}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </label>
          </div>
          {/* <div className="input-row">
            <label>
              Password:
              <input
                type="password"
                placeholder="************"
                value={this.state.pass}
                onChange={(e) => this.setState({ pass: e.target.value })}
              />
            </label>
          </div> */}

          <div className="input-row checkboxRows" style={{ marginTop: 20 }}>
            <label className="fullLabel">
              <input type="checkbox" />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Private Profile
            </label>

            <label className="fullLabel">
              <input type="checkbox" />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Share Social info
            </label>

            <label className="fullLabel">
              <input type="checkbox" />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Share Favourites
            </label>
            <label className="fullLabel">
              <input type="checkbox" />
              <span className="checkBox">
                <i className="fe fe-check" />
              </span>
              Allow Messaging
            </label>
          </div>

          <label style={{ flexDirection: "row" }}>
            Deactivate your account? &nbsp;{" "}
            <span style={{ textDecoration: "underline", color: "red" }}>
              Deactivate now.
            </span>
          </label>

          <button
            name="accountBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>
        <div className="profile-completion">
          <button
            style={{ display: "flex" }}
            className=""
            onClick={() => {
              this.setState({ profCompDiv: !this.state.profCompDiv });
            }}
          >
            <i
              className={`fe  ${
                this.state.profCompDiv ? "fe-x-circle" : "fe-info"
              } `}
            >
              {this.state.profCompDiv && (
                <div className="profile-completion-div">
                  <h5>Profile Checklist</h5>
                  <ul>
                    <li>
                      <div
                        className={`checkmark avatar ${
                          this.state.profileCompletion.profile && "active"
                        }`}
                      >
                        <i className="fa fa-check" />
                      </div>
                      Profile Information Setup{" "}
                      <i className="fe fe-chevron-right" />
                    </li>
                    <li>
                      <div className="checkmark avatar">
                        <i className="fa fa-check" />
                      </div>
                      Update your profile picture{" "}
                      <i className="fe fe-chevron-right" />
                    </li>
                    <li>
                      <div className="checkmark avatar active">
                        <i className="fa fa-check" />
                      </div>
                      Update your banner picture{" "}
                      <i className="fe fe-chevron-right" />
                    </li>

                    <li>
                      <div className="checkmark avatar ">
                        <i className="fa fa-check" />
                      </div>
                      Contact Information Setup{" "}
                      <i className="fe fe-chevron-right" />
                    </li>
                    <li>
                      <div
                        className={`checkmark avatar active ${
                          this.state.profileCompletion.account && "active"
                        }`}
                      >
                        <i className="fa fa-check" />
                      </div>
                      Account Information Setup{" "}
                      <i className="fe fe-chevron-right" />
                    </li>
                  </ul>
                </div>
              )}
            </i>
          </button>
        </div>

        <NavigationPrompt when={this.state.formDirty}>
          {({ onConfirm, onCancel }) => (
            <React.Fragment>
              <Dialog
                className="nav-prompt"
                open={this.state.formDirty}
                onClose={onCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Your Profile is not saved yet"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    style={{ fontSize: 16 }}
                  >
                    You need to save your unsaved changes, do you really want to
                    leave without saving your changes?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <button
                    className="btn--pink-outlined"
                    style={{ borderRadius: 8 }}
                    onClick={onCancel}
                    color="primary"
                  >
                    No
                  </button>
                  <button
                    className="btn--pink"
                    style={{
                      borderRadius: 8,
                      // backgroundColor: "rgb(255,114,69)",
                    }}
                    onClick={onConfirm}
                    color="primary"
                    autoFocus
                  >
                    Yes
                  </button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )}
        </NavigationPrompt>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.userProfile,
  damn: "hello",
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
