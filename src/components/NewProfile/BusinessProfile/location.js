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
import ReactDOM from "react-dom";
import NavigationPrompt from "react-router-navigation-prompt";
import { message } from "antd";

import Geolocate from "./../../MiniComponents/Geolocate";
import { geocodeByAddress } from "react-places-autocomplete";
import girl2 from "../../../assets/img/girl2.jpg";
import { UploadOutlined } from "@ant-design/icons";
import Search from "../../MiniComponents/CanadaPost/Search";
import { convertLegacyProps } from "antd/lib/button/button";
import {ImCross} from "react-icons/im"
const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];

 class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoActive: false,
      profCompDiv: true,
      locality: localStorage.getItem("locality")
        ? localStorage.getItem("locality")
        : "",
      localityCountry: localStorage.getItem("localityCountry")
        ? localStorage.getItem("localityCountry")
        : "",
      formDirty: false,
      fixedFirstName: "",
      fixedLastName: "",

      filteredCurrencies: Currencies,
      filteredCountryCode: Countries,
      toolTip: "",
      profCompDiv: true,
      accordion: false,
      toolTip: "",
      profCompDiv: true,
      address: { value: "", isValid: true, message: "" },
      addressLineOne: { value: "", isValid: true, message: "" },
      businessName: { value: "", isValid: true, message: "" },
      businessProfile:{value:"",isValid:true,message:""},
      businesses: [
        {
          businessId: "",
          name: { value: "", isValid: true, message: "" },
          email: { value: "", isValid: true, message: "" },
          phoneNo: { value: "", isValid: true, message: "" },
          countryCode: { value: "", isValid: true, message: "" },
          businessProfile: { value: "", isValid: true, message: "" },
          businessCountry: {
            value: "",
            isValid: true,
            message: "",
            isDisabled: false,
          },
          businessAddress: {
            value: "",
            isValid: true,
            message: "",
            isDisabled: false,
          },
          businessCity: {
            value: "",
            isValid: true,
            message: "",
            isDisabled: false,
          },
          businessState: {
            value: "",
            isValid: true,
            message: "",
            isDisabled: false,
          },
          businessCoords: { lat: "", lng: "" },
          businessZip: {
            value: "",
            isValid: true,
            message: "",
            isDisabled: false,
          },
          social: { facebook: "", linkedin: "", instagram: "", twitter: "" },
          kitchenTypes: [],
          deliveryOpts: [],
          deliveryOptsMessage: "",
          deliveryOptsError: false,
          kitchenTypesMessage: "",
          kitchenTypesError: false,
          countryDrop: false,
          filteredCountryCode: Countries,
          accordion: false,
        },
      ],

      profileSummary: { value: "", isValid: true, message: "" },
      locality: localStorage.getItem("locality")
        ? localStorage.getItem("locality")
        : "",
      localityCountry: localStorage.getItem("localityCountry")
        ? localStorage.getItem("localityCountry")
        : "",
      profileCompletion: {},
      infoToolTip: false,
    };
    this.onChangeCC = this.onChangeCC.bind(this);
    this.deleteAddressInfo = this.deleteAddressInfo.bind(this);
    this.changeAddressInfo = this.changeAddressInfo.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.addBusiness = this.addBusiness.bind(this);
    this.handleSelectionCanadaPost = this.handleSelectionCanadaPost.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { profile } = props;
    console.log(props.auth);
    if (state.formDirty == false) {
      if (
        props.auth &&
        props.auth.isAuthenticated &&
        profile 
        
      ) {
        if (profile.deliveryOpts) {
          state.deliveryOpts = profile.deliveryOpts;
        }

        if (profile.kitchenTypes) {
          state.kitchenTypes = profile.kitchenTypes;
        }

        if (profile.profileCompletion) {
          state.profileCompletion = profile.profileCompletion;
        }
        if (profile.lawfirmName) {
            console.log(profile.lawfirmName)
          state.businessName.value = profile.lawfirmName;
        }
        if (profile.firmProfile) {
            state.businessProfile.value = profile.firmProfile;
          }
        if (profile.branches) {
          for (let index = 0; index < profile.branches.length; index++) {
            if (state.businesses.length < profile.branches.length) {
                console.log("sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
              state.businesses.push({
                businessId: "",
                name: { value: "", isValid: true, message: "" },
                email: { value: "", isValid: true, message: "" },
                phoneNo: { value: "", isValid: true, message: "" },
                countryCode: { value: "", isValid: true, message: "" },
                businessProfile: { value: "", isValid: true, message: "" },
                businessCountry: {
                  value: "",
                  isValid: true,
                  message: "",
                  isDisabled: false,
                },
                businessAddress: {
                  value: "",
                  isValid: true,
                  message: "",
                  isDisabled: false,
                },
                businessCity: {
                  value: "",
                  isValid: true,
                  message: "",
                  isDisabled: false,
                },
                businessState: {
                  value: "",
                  isValid: true,
                  message: "",
                  isDisabled: false,
                },
                businessZip: {
                  value: "",
                  isValid: true,
                  message: "",
                  isDisabled: false,
                },
                businessCoords: { lat: "", lng: "" },
                kitchenTypes: [],
                deliveryOpts: [],
                social: {
                  facebook: "",
                  linkedin: "",
                  instagram: "",
                  twitter: "",
                },
                countryDrop: false,
                filteredCountryCode: Countries,
                accordion: false,
                deliveryOptsMessage: "",
                deliveryOptsError: false,
                kitchenTypesMessage: "",
                kitchenTypesError: false,
              });
            }
            let item = profile.branches[index];
            if (item._id) {
              state.businesses[index].businessId = item._id;
            }
            if (item.name) {
              state.businesses[index].name.value = item.name;
            }
            if (item.contact.email) {
              state.businesses[index].email.value = item.contact.email;
            }
            if (item.contact.phoneNo) {
              state.businesses[index].phoneNo.value = item.contact.phoneNo;
            }
            if (item.contact.countryCode) {
              state.businesses[index].countryCode.value = item.contact.countryCode;
            }
            if (item.profile) {
              state.businesses[index].businessProfile.value = item.profile;
            }
            if (item.social) {
              console.log(item.social);
              state.businesses[index].social = item.social;
            }

            if (item.kitchenTypes) {
              state.businesses[index].kitchenTypes = item.kitchenTypes;
            }
            if (item.deliveryOpts) {
              state.businesses[index].deliveryOpts = item.deliveryOpts;
            }

            if (item.location) {
              if (item.location.businessAddress) {
                state.businesses[index].businessAddress.value =
                  item.location.businessAddress;
              }
              if (item.location.businessCity) {
                state.businesses[index].businessCity.value =
                  item.location.businessCity;
              }
              if (item.location.businessState) {
                state.businesses[index].businessState.value =
                  item.location.businessState;
              }
              if (item.location.businessZip) {
                state.businesses[index].businessZip.value =
                  item.location.businessZip;
              }
              if (item.location.businessCountry) {
                state.businesses[index].businessCountry.value =
                  item.location.businessCountry;
              }

              if (item.location.businessCoords) {
                state.businesses[index].businessCoords = {
                  lat: item.location.businessCoords.lat
                    ? item.location.businessCoords.lat
                    : "",
                  lng: item.location.businessCoords.lng
                    ? item.location.businessCoords.lng
                    : "",
                };
              }
            }
          }

          // });
        }
      }
    }
    return state;
  }

  componentDidMount() {
    window.addEventListener("mouseup", (e) => {
      let ccLabel = document.querySelector(".cc-label");
      let ccLabel1 = document.getElementById("countryCode");
      let ccLabels = document.querySelectorAll("#countryCode");
      // if (ccLabel && !ccLabel.contains(e.target) && this.state.countryDrop) {
      //   this.setState({ countryDrop: false });
      // }
      let state = this.state;
      for (let i = 0; i < ccLabels.length; i++) {
        if (
          ccLabels[i] &&
          !ccLabels[i].contains(e.target) &&
          state.businesses[i].countryDrop
        ) {
          state.businesses[i].countryDrop = false;
        }
      }
      this.setState(state);

      // if (ccLabel1 && !ccLabel1.contains(e.target) && this.state.countryDrop1) {
      //   this.setState({ countryDrop1: false });
      // }

      // if (ccLabel2 && !ccLabel2.contains(e.target) && this.state.countryDrop2) {
      //   this.setState({ countryDrop2: false });
      // }
    });
  }

  onChangeCC(e, index, item) {
    var state = this.state;
    console.log(e.target.value, item);
    if (item) {
      state.businesses[index].countryCode.value = item.dialCode.split("+")[1];
      state.businesses[index].countryDrop = false;
    } else {
      state.businesses[index].countryCode.value = e.target.value;
    }
    state.formDirty = true;
    this.setState(state);
  }

  onChange(e, index) {
    console.log(e, index);
    var state = this.state;
    if (e.target.name !== "kitchenTypes" && e.target.name !== "deliveryOpts" && e.target.name !=="latitude" && e.target.name !=="longitude") {
      state.businesses[index][e.target.name].value = e.target.value;
    }
    state.formDirty = true;

    if(e.target.name=="latitude"){
      state.businesses[index].businessCoords.lat = e.target.value
    }
    if(e.target.name=="longitude"){
      state.businesses[index].businessCoords.lng = e.target.value
    }

    if (e.target.name == "name") {
      if (e.target.value == "") {
        state.businesses[index].name.isValid = false;
        state.businesses[index].name.message =
          "Business name cannot be left empty";
      } else {
        state.businesses[index].name.isValid = true;
        state.businesses[index].name.message = "";
      }
    }

    if (e.target.name == "email") {
      if (e.target.value == "") {
        state.businesses[index].email.isValid = false;
        state.businesses[index].email.message = "Email cannot be left empty";
      } else if (!validator.isEmail(e.target.value)) {
        state.businesses[index].email.isValid = false;
        state.businesses[index].email.message = "Not a valid email address";
      } else {
        state.businesses[index].email.isValid = true;
        state.businesses[index].email.message = "";
      }
    }

    if (e.target.name == "phoneNo") {
      if (e.target.value == "") {
        state.businesses[index].phoneNo.isValid = false;
        state.businesses[index].phoneNo.message =
          "Phone number cannot be left empty";
      } else if (e.target.value.length !== 10) {
        state.businesses[index].phoneNo.isValid = false;
        state.businesses[index].phoneNo.message =
          "Phone number must be 10 digits";
      } else if (!e.target.value.match(/^\d+$/)) {
        state.businesses[index].phoneNo.isValid = false;
        state.businesses[index].phoneNo.message =
          "Phone number must only contain numbers";
      } else {
        state.businesses[index].phoneNo.isValid = true;
        state.businesses[index].phoneNo.message = "";
      }
    }

    if (e.target.name == "countryCode") {
      console.log(e.target.value);
      if (e.target.value == "") {
        state.businesses[index].countryCode.isValid = false;
        state.businesses[index].countryCode.message =
          "Country code cannot be left empty";
      }

      if (!e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state.businesses[index].countryCode.isValid = false;
        state.businesses[index].countryCode.message =
          "Country code must only contain numbers";
      }

      if (e.target.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
        state.businesses[index].countryCode.isValid = true;
        state.businesses[index].countryCode.message = "";
      }
    }

    if (e.target.name == "deliveryOpts") {
      console.log(state.businesses[index].deliveryOpts, e.target.value);
      if (e.target.checked) {
        if (!state.businesses[index].deliveryOpts.includes(e.target.value)) {
          let temp = state.businesses[index].deliveryOpts;
          temp.push(e.target.value);
          state.businesses[index]["deliveryOpts"] = temp;
        }
      } else {
        let temp = state.businesses[index].deliveryOpts.filter((item) => {
          return item !== e.target.value;
        });
        console.log(temp);
        state.businesses[index]["deliveryOpts"] = temp;
      }
      if (!state.businesses[index].deliveryOpts.length) {
        state.businesses[index].deliveryOptsMessage =
          "Atleast one delivery option must be provided";
        state.businesses[index].deliveryOptsError = true;
      } else {
        state.businesses[index].deliveryOptsMessage = "";
        state.businesses[index].deliveryOptsError = false;
      }
    }

    if (e.target.name == "kitchenTypes") {
      console.log(state.businesses[index].kitchenTypes, e.target.value);
      if (e.target.checked) {
        if (!state.businesses[index].kitchenTypes.includes(e.target.value)) {
          let temp = state.businesses[index].kitchenTypes;
          temp.push(e.target.value);
          state.businesses[index]["kitchenTypes"] = temp;
        }
      } else {
        let temp = state.businesses[index].kitchenTypes.filter((item) => {
          return item !== e.target.value;
        });

        state.businesses[index]["kitchenTypes"] = temp;
      }

      if (!state.businesses[index].kitchenTypes.length) {
        state.businesses[index].kitchenTypesMessage =
          "Atleast one Kitchen type must be provided";
        state.businesses[index].kitchenTypesError = true;
      } else {
        state.businesses[index].kitchenTypesMessage = "";
        state.businesses[index].kitchenTypesError = false;
      }
    }

    this.setState(state);
  }

  checkFields(index) {
    let state = this.state;
    let valid = true;
    let business = state.businesses[index];

    state.formDirty = true;

    if (business.email == "") {
      business.email.isValid = false;
      business.email.message = "Email cannot be left empty";
      valid = false;
    } else if (!validator.isEmail(business.email.value)) {
      business.email.isValid = false;
      business.email.message = "Not a valid email address";
      valid = false;
    } else {
      business.email.isValid = true;
      business.email.message = "";
    }
    console.log(business.phoneNo.value, business.phoneNo.value.toString().length)
    if (business.phoneNo.value == "") {
      business.phoneNo.isValid = false;
      business.phoneNo.message = "Phone number cannot be left empty";
      valid = false;
    } else if (business.phoneNo.value.toString().length !== 10) {
      
      business.phoneNo.isValid = false;
      business.phoneNo.message = "Phone number must be 10 digits";
      valid = false;
    } else if (!business.phoneNo.value.toString().match(/^\d+$/)) {
      business.phoneNo.isValid = false;
      business.phoneNo.message = "Phone number must only contain numbers";
      valid = false;
    } else {
      business.phoneNo.isValid = true;
      business.phoneNo.message = "";
    }

    if (business.countryCode.value == "") {
      business.countryCode.isValid = false;
      business.countryCode.message = "Country code cannot be left empty";
      valid = false;
    }

    if (!business.countryCode.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
      business.countryCode.isValid = false;
      business.countryCode.message = "Country code must only contain numbers";
      valid = false;
    }

    if (business.countryCode.value.match(/^(\+?\d{1,3}|\d{1,4})$/gm)) {
      business.countryCode.isValid = true;
      business.countryCode.message = "";
    }



    if (business.businessAddress.value == "") {
      business.businessAddress.isValid = false;
      business.businessAddress.message =
        "Business address cannot be left empty";
      valid = false;
    } else {
      business.businessAddress.isValid = true;
      business.businessAddress.message = "";
    }

    if (business.businessCity.value == "") {
      business.businessCity.isValid = false;
      business.businessCity.message = "Business city cannot be left empty";
      valid = false;
    } else {
      business.businessCity.isValid = true;
      business.businessCity.message = "";
    }

    if (business.businessCountry.value == "") {
      business.businessCountry.isValid = false;
      business.businessCountry.message =
        "Business address cannot be left empty";
      valid = false;
    } else {
      business.businessCountry.isValid = true;
      business.businessCountry.message = "";
    }

 

    if (business.businessState.value == "") {
      business.businessState.isValid = false;
      business.businessState.message = "Business state cannot be left empty";
      valid = false;
    } else {
      business.businessState.isValid = true;
      business.businessState.message = "";
    }

    if (business.businessZip.value == "") {
      business.businessZip.isValid = false;
      business.businessZip.message = "Business zip cannot be left empty";
      valid = false;
    } else {
      business.businessZip.isValid = true;
      business.businessZip.message = "";
    }

    this.setState(state);
    return valid;
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

  deleteBusiness = async (e, index) => {
    let state = this.state;
    if(this.props.profile.branches.length!==0 &&this.props.profile.branches[index]){
         
      let response = await this.props.actions.deleteBranches(
        this.props.profile.branches[index].id,
       
      );

      if (response) {
          console.log(response)
        let profileShort = {
          userId: this.props.auth.user._id,
          userType: this.props.auth.user.userType,
        };
        const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
        if(
          firmuser
        ){
          state.businesses.splice(index, 1);
          this.setState(state);
        }
      }

    }
    
  
  };

  saveProfile = async (e, index) => {
    let state = this.state;
    let valid = true;
    valid = this.checkFields(index);
    console.log(valid);
    let business = state.businesses[index];
    // if (!business.phoneNo.isValid) {
    //   valid = false;

    //   if(!business.phoneNo.value){
    //     business.phoneNo.message= 'Phone No. is required'
    //     business.phoneNo.isValid= false
    //   }
    // }
    // if(!business.phoneNo.value){
    //   business.phoneNo.message= 'Phone No. is required'
    //   business.phoneNo.isValid= false
    // }
    // if (!business.countryCode.value) {
    //   valid = false;
    //   if(!business.countryCode.value){
    //     business.countryCode.message= 'Country code is required'
    //     business.countryCode.isValid= false
    //   }
    // }
    // if (!business.email.value) {
    //   valid = false;
    //   if(!business.email.value){
    //     business.email.message= 'Email address is required'
    //     business.email.isValid= false
    //   }
    // }
    this.setState(state);
    console.log(valid);
    if (valid) {
        if(this.props.profile.branches.length!==0 &&this.props.profile.branches[index]){
                console.log(this.props.profile.branches[index])
                if(this.props.profile.branches[index].firstSave){
                    let profileObj = {

                        contact:{
                            email: this.state.businesses[index].email.value,
                            phoneNo: this.state.businesses[index].phoneNo.value,
                            countryCode: this.state.businesses[index].countryCode.value,
                        },
                     
                        location: {
                          businessCountry: this.state.businesses[index].businessCountry.value.replace("+", ""),
                          businessAddress: this.state.businesses[index].businessAddress.value,
                          businessCity: this.state.businesses[index].businessCity.value,
                          businessState: this.state.businesses[index].businessState.value,
                          businessZip: this.state.businesses[index].businessZip.value,
                          businessCoords: this.state.businesses[index].businessCoords,
                        },
                
                      };
                      delete profileObj.filteredCountryCode;
                      delete profileObj.countryDrop;
                      delete profileObj.accordion;


                      let response = await this.props.actions.updateBranches(
                        profileObj,
                        this.props.profile.branches[index].id
                      );
                
                      if (response) {
                          console.log(response)
                        let profileShort = {
                          userId: this.props.auth.user._id,
                          userType: this.props.auth.user.userType,
                        };
                        const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
                        if(
                          firmuser
                        ){
                          console.log(firmuser)
                          state.formDirty = false;
                        }
                      }

                      return;


                }
        }
      let profileObj = {

        lawfirm: this.props.profile.id,
        firstSave:true,
        contact:{
            email: this.state.businesses[index].email.value,
            phoneNo: this.state.businesses[index].phoneNo.value,
            countryCode: this.state.businesses[index].countryCode.value,
        },
     
        location: {
          businessCountry: this.state.businesses[index].businessCountry.value.replace("+", ""),
          businessAddress: this.state.businesses[index].businessAddress.value,
          businessCity: this.state.businesses[index].businessCity.value,
          businessState: this.state.businesses[index].businessState.value,
          businessZip: this.state.businesses[index].businessZip.value,
          businessCoords: this.state.businesses[index].businessCoords,
        },

      };
      delete profileObj.filteredCountryCode;
      delete profileObj.countryDrop;
      delete profileObj.accordion;
      console.log(profileObj);
      


      let response = await this.props.actions.saveBranches(
        profileObj,
        this.props
      );

      if (response) {
          console.log(response)
        let profileShort = {
          userId: this.props.auth.user._id,
          userType: this.props.auth.user.userType,
        };
        const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
        if(
          firmuser
        ){
          console.log(firmuser)
        }
      }

      state.formDirty = false;
    } else {
      message.error("Resolve all errors");
    }

    this.setState(state);
  };

  async updateAddress(addr, index) {
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
    address = address[0];
    componentForm.formattedAddress = address.formatted_address;
    for (var i = 0; i < address.address_components.length; i++) {
      var addressType = address.address_components[i].types[0];
      if (componentForm[addressType] == "") {
        let val = address.address_components[i][componentForm[addressType]];
        componentForm[addressType] = address.address_components[i].long_name;
      }
    }

    let state = this.state;
    if (address && address.geometry) {
      state.businesses[
        index
      ].businessCoords.lat = address.geometry.location.lat();
      state.businesses[
        index
      ].businessCoords.lng = address.geometry.location.lng();
    }

    if (componentForm.country !== "")
      state.businesses[index].businessCountry = {
        value: componentForm.country,
        isValid: true,
        message: "",
      };
    // debugger
    if (componentForm.postal_code !== "")
      state.businesses[index].businessZip = {
        value: componentForm.postal_code,
        isValid: true,
        message: "",
      };
    state.businesses[index].businessCity = {
      value:
        componentForm.postal_town != "Town" && componentForm.postal_town
          ? componentForm.postal_town
          : componentForm.locality != "locality"
          ? componentForm.locality
          : "",
      isValid: true,
      message: "",
    };
    state.businesses[index].businessState = {
      value:
        componentForm.administrative_area_level_1 != "State "
          ? componentForm.administrative_area_level_1
          : "",
      isValid: true,
      message: "",
    };

    if (componentForm.street_number && componentForm.route) {
      state.businesses[index].businessAddress = {
        value: componentForm.street_number + " " + componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.route) {
      state.businesses[index].businessAddress = {
        value: componentForm.route,
        isValid: true,
        message: "",
      };
    } else if (componentForm.formattedAddress) {
      state.businesses[index].businessAddress = {
        value: componentForm.formattedAddress,
        isValid: true,
        message: "",
      };
    }

    this.setState(state);
  }

  addBusiness() {
    let state = this.state;
    state.businesses.push({
      businessId: "",
      name: {
        value: this.state.businessName.value,
        isValid: true,
        message: "",
      },
      email: { value: "", isValid: true, message: "" },
      phoneNo: { value: "", isValid: true, message: "" },
      countryCode: { value: "", isValid: true, message: "" },
      businessProfile: {
        value: "",
        isValid: true,
        message: "",
        isDisabled: false,
      },
      businessCountry: {
        value: "",
        isValid: true,
        message: "",
        isDisabled: false,
      },
      businessAddress: {
        value: "",
        isValid: true,
        message: "",
        isDisabled: false,
      },
      businessCoords: {
        lat: "",
        lng: "",
      },
      businessCity: {
        value: "",
        isValid: true,
        message: "",
        isDisabled: false,
      },
      businessState: {
        value: "",
        isValid: true,
        message: "",
        isDisabled: false,
      },
      businessZip: { value: "", isValid: true, message: "" },
      kitchenTypes: [],
      deliveryOpts: [],
      social: {
        facebook: "",
        linkedin: "",
        instagram: "",
        twitter: "",
      },
      countryDrop: false,
      filteredCountryCode: Countries,
      accordion: false,
      deliveryOptsMessage: "",
      deliveryOptsError: false,
      kitchenTypesMessage: "",
      kitchenTypesError: false,
      accordion:false,
    });
    for (let i = 0; i < state.businesses.length; i++) {
      state.businesses[i].accordion = false;
    }
    this.setState(state);
  }

  handleSelectionCanadaPost(item, index) {
    console.log("item", item);
    let state = this.state;
    if (item && item.coordinates) {
      state.businesses[index].businessCoords.lat = item.coordinates.lat
        ? item.coordinates.lat
        : "";
      state.businesses[index].businessCoords.lng = item.coordinates.lng
        ? item.coordinates.lng
        : "";
    }

    state.businesses[index].businessCountry = {
      value: item.CountryName ? item.CountryName : "",
      isValid: true,
      message: "",
    };

    state.businesses[index].businessZip = {
      value: item.PostalCode ? item.PostalCode : "",
      isValid: true,
      message: "",
    };
    state.businesses[index].businessCity = {
      value: item.City ? item.City : "",
      isValid: true,
      message: "",
    };
    state.businesses[index].businessState = {
      value: item.Province ? item.Province : "",
      isValid: true,
      message: "",
    };
    state.businesses[index].businessAddress = {
      value: item.Line1 ? item.Line1 : "",
      isValid: true,
      message: "",
    };
    state.formDirty = true;
    this.setState(state, () => console.log(this.state));
  }

  render() {
    let country = localStorage.getItem("country_short");
    let countryCondition =
      country != "US" &&
      country != "CAN" &&
      country != "CN" &&
      country != "USA";
    const dateFormat = "YYYY/MM/DD";
    let filteredCurrencies = Currencies;
    let filteredCountryCode = Countries;
    return (
      <div className="user-profile tab">
        <button className="blu-btn" onClick={this.addBusiness}>
          Add Location
        </button>
        {this.state.businesses &&
          this.state.businesses.map((item, index) => (
            <>
              <div className="location-header"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  let state = this.state;
                  state.businesses[index].accordion = !state.businesses[index]
                    .accordion;
                  this.setState(state);
                }}
              >
                <div>
                {this.state.businessName && this.state.businessName.value
                  ? this.state.businessName.value
                  : `Business Location ${index + 1}`}
                {item.businessAddress.value ? (
                  <>{" - " + item.businessAddress.value}</>
                ) : (
                  ""
                )}
                {/* {item.name.value ? item.name.value : `Business ${index + 1}`}{" "}
                Information */}
                <sup
                  style={{
                    fontStyle: "italic",
                    fontSize: 11,
                    marginLeft: 5,
                    fontFamily: "Rubik",
                  }}
                >
                  <i
                    className="fe fe-info"
                    onMouseOver={() => {
                      this.setState({ toolTip: true });
                    }}
                    onMouseOut={() => this.setState({ toolTip: false })}
                  />
                  {this.state.toolTip && (
                    <div className="infoToolTip">
                      <span>
                        (This information will be displayed on your profile)
                      </span>
                    </div>
                  )}
                  {/* (This information will be displayed on your profile) */}
                </sup>
                <span className="infoHidden">
                  (This information will be displayed on your profile)
                </span>
                  </div>
                  {index==0?null:

                    <div className="location-delete" onClick={(e)=>{ e.stopPropagation()
                      this.deleteBusiness(e,index)}}> <ImCross/></div>
                  }
              </div>
              {/* {console.log(item)} */}
             
              <div
                className={`input-fields-container accordion ${
                  this.state.businesses[index].accordion ? "open" : ""
                }`}
              >
                
                <div className={`input-fields accordion `}>
                  <div className="input-row">
                    <label
                      className={`${
                        !item.name.isValid ? "error" : ""
                      } fullLabel`}
                    >
                      Lawfirm Name:
                      {/* <input
                        name="name"
                        placeholder="Business Name"
                        value={item.name.value}
                        onChange={(e) => this.onChange(e, index)}
                      /> */}
                      <input
                        name="name"
                        placeholder="Business Name"
                        disabled={true}
                        value={this.state.businessName.value}
                      />
                      {/* {item.name.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.name.message}
                        </p>
                      )} */}
                    </label>
                  </div>
                  <div className="input-row">
                    <label className={`${!item.email.isValid ? "error" : ""} `}>
                      Lawfirm Email:
                      <input
                        autoComplete="off"
                        name="email"
                        placeholder="Email address"
                        value={item.email.value}
                        onChange={(e) => this.onChange(e, index)}
                      />
                      {item.email.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.email.message}
                        </p>
                      )}
                    </label>
                    {countryCondition ? (
                      <label>
                        Lawfirm Location:
                        <i className="fa fa-map-marker" />
                        <Geolocate
                          chooseAddress={(address) =>
                            this.updateAddress(address, index)
                          }
                        />
                      </label>
                    ) : (
                      <label>
                        Lawfirm Location:
                        <i className="fa fa-map-marker" />
                        <Search
                          handleSelectionCanadaPost={(item) =>
                            this.handleSelectionCanadaPost(item, index)
                          }
                        />
                      </label>
                    )}
                  </div>

                  <div className="input-row two-part">
                    <label  className={`${
                        !item.businessAddress.isValid ? "error" : ""
                      } one-half`} >
                      Lawfirm Address:
                      <input
                        autoComplete="off"
                        name="businessAddress"
                        value={item.businessAddress.value}
                        placeholder="Lawfirm Address"
                        onChange={(e) => this.onChange(e, index)}
                      />
                       {item.businessAddress.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessAddress.message}
                        </p>
                      )}
                    </label>
                    <label  className={`${
                        !item.businessCountry.isValid ? "error" : ""
                      } one-half`} >
                      Lawfirm Country:
                      <input
                        autoComplete="off"
                        name="businessCountry"
                        value={item.businessCountry.value}
                        placeholder="Lawfirm Country"
                        onChange={(e) => this.onChange(e, index)}
                      />
                        {item.businessCountry.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessCountry.message}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="input-row three-part">
                  <label  className={`${
                        !item.businessCity.isValid ? "error" : ""
                      } one-third`} >
                      City:
                      <input
                        autoComplete="off"
                        placeholder="City"
                        name="businessCity"
                        value={item.businessCity.value}
                        onChange={(e) => this.onChange(e, index)}
                      />
                        {item.businessCity.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessCity.message}
                        </p>
                      )}
                    </label>
                    <label  className={`${
                        !item.businessState.isValid ? "error" : ""
                      } one-third`} >
                      Province/State:
                      <input
                        autoComplete="off"
                        placeholder="Province/State"
                        name="businessState"
                        value={item.businessState.value}
                        onChange={(e) => this.onChange(e, index)}
                      />
                         {item.businessState.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessState.message}
                        </p>
                      )}
                    </label>
                    <label  className={`${
                        !item.businessZip.isValid ? "error" : ""
                      } one-third`} >
                      Postal/Zip Code:
                      <input
                        autoComplete="off"
                        placeholder="Postal/Zip Code"
                        name="businessZip"
                        value={item.businessZip.value}
                        onChange={(e) => this.onChange(e, index)}
                      />
                         {item.businessZip.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessZip.message}
                        </p>
                      )}
                    </label>
                  </div>

                
                  <div className="input-row">
                    <label
                      id="countryCode"
                      className={`${
                        !item.countryCode.isValid ? "error" : ""
                      } cc-label ${item.countryDrop && "focused"}`}
                      tabIndex={0}
                    >
                      Country Code:
                      <input
                        type="text"
                        name="countryCode"
                        placeholder="Country code"
                        value={
                          item.countryCode &&
                          item.countryCode.value.replace("+", "")
                        }
                        autocomplete="autocomplete_off_hack_xfr4!k"
                        style={
                          item.countryCode &&
                          item.countryCode.value.match(
                            /^(\+?\d{1,3}|\d{1,4})$/
                          ) && {
                            paddingLeft: 20,
                          }
                        }
                        className="cc-input"
                        onFocus={() => {
                          let state = this.state;
                          state.businesses[index].countryDrop = true;
                          this.setState(state);
                          // this.setState({

                          //   countryDrop1: true,
                          // })
                        }}
                        onChange={(e) => {
                          if (e.target.value !== "") {
                            filteredCountryCode = Countries.filter(
                              (it, index) => {
                                const regex = new RegExp(e.target.value, "gi");
                                return (
                                  it.name.match(regex) ||
                                  it.dialCode.match(regex) ||
                                  it.isoCode.match(regex)
                                );
                              }
                            );
                            let state = this.state;
                            state.businesses[
                              index
                            ].filteredCountryCode = filteredCountryCode;
                            console.log(
                              state.businesses[index].filteredCountryCode,
                              filteredCountryCode
                            );
                            this.setState(state);
                            // this.setState({
                            //   filteredCountryCode: filteredCountryCode,
                            // },()=>console.log(this.state.filteredCountryCode,filteredCountryCode));
                          } else {
                            this.setState({ filteredCountryCode: Countries });
                          }
                          console.log(item.countryCode);
                          this.onChangeCC(e, index);
                          // this.setState({
                          //   formAccountDirty: true,
                          //   formDirty: true,
                          //   item: {
                          //     countryCode: {
                          //       ...item.countryCode,
                          //       value: e.target.value,
                          //     },
                          //   },
                          // });
                        }}
                      />
                      <i className="dropdown icon"></i>
                      {item.countryCode.value.length &&
                      item.countryCode.value.match(/^(\+?\d{1,3}|\d{1,4})$/) ? (
                        <i className="plus-icon">&#43;</i>
                      ) : null}
                      {item.countryDrop && (
                        <div
                          className="countryDrop"
                          onBlur={() => {
                            let state = this.state;
                            state.businesses[index].countryDrop = false;
                            this.setState(state);
                          }}
                        >
                          <ul>
                            {this.state.businesses[index].filteredCountryCode &&
                              this.state.businesses[
                                index
                              ].filteredCountryCode.map((item, ind) => (
                                <li
                                  key={ind}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (item && item.flag && item.dialCode) {
                                      this.onChangeCC(e, index, item);
                                      // this.setState({
                                      //   item: {
                                      //     countryCode: {
                                      //       ...item.countryCode,
                                      //       value: item.dialCode.split(
                                      //         "+"
                                      //       )[1],
                                      //     },
                                      //   },
                                      //   formDirty: true,
                                      //   countryDrop1: false,
                                      // });
                                    }
                                  }}
                                >
                                  <img
                                    src={item.flag}
                                    height="16px"
                                    width="24px"
                                  />
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
                      {item.countryCode.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.countryCode.message}
                        </p>
                      )}
                    </label>
                    <label
                      className={`${!item.phoneNo.isValid ? "error" : ""} `}
                    >
                      Lawfirm Phone No:
                      <input
                        autoComplete="off"
                        name="phoneNo"
                        placeholder="Phone No."
                        value={item.phoneNo.value}
                        onChange={(e) => this.onChange(e, index)}
                      />
                      {item.phoneNo.message && (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.phoneNo.message}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="input-row ">
                    <label className="textareaLabel">
                      Lawfirm Profile:
                      <textarea
                        value={this.state   .businessProfile.value}
                        onChange={(e) => this.onChange(e, index)}
                        name="businessProfile"
                        placeholder=""
                        rows="4"
                      />
                      {item.businessProfile.message ? (
                        <p>
                          {" "}
                          <i className="fe fe-alert-triangle" />{" "}
                          {item.businessProfile.message}
                        </p>
                      ) : (
                        <p> *Field is optional.</p>
                      )}
                    </label>
                  </div>

                  
                 

                  

                  <div className="dividerL"></div>
                  <div className="button-group">
                    <button
                      name="accountBtn"
                      className="save-btn"
                      onClick={(e) => this.saveProfile(e, index)}
                    >
                      Save
                    </button>
                    {/* <button
                    name="accountBtn"
                    className="save-btn"
                    onClick={(e) => this.deleteBusiness(e, index)}
                  >
                    Delete Business
                  </button> */}
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    );
  }
 }


 const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.auth.lawfirmUserProfile
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Location);
