import React, { Component ,memo} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import Currencies from "../../../assets/json/Currencies.json";
import languageOptions from "../../../assets/json/Languages.json";
import Countries from "../../../assets/json/Countries.json";
import { UploadOutlined } from '@ant-design/icons';
import { DatePicker } from "antd";
import { Select } from "antd";
import {FiEdit2} from "react-icons/fi"
import validator from "validator";
import moment from "moment";
import SignUpWIzard from "./SignUpWIzard";
import {message} from "antd";
import{MdRemove} from "react-icons/md"
import {IoSaveOutline} from "react-icons/io5"
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
import girl2 from "../../../assets/img/girl2.jpg";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChangeForm from "../../modals/changeForm";
import StateManager from "react-select";
import {AiOutlineUpload} from "react-icons/ai"
import{makeRequest,deleteRequest} from "../../../utils/upload"
import {FaSave} from "react-icons/fa" 
let stripePK =
  "pk_test_51Is6EeC4OeYiOOOcteEEbNdaXD8s9VSrf9DDyeEb4MaOXH4lTou9AqziwpVCb9I8fMOkgjFCOG5XLpP4AISd0Riv00nOsSXCJF";
let stripeSecret =
  "sk_test_51IeumWK6tNvAlffQexGN0F9EqUdj2fiyxJgNrDmhV6pTtZAVzodo0LluVxDHxl0bqW2xdgQrcAtrjvbhBmCXIklb00jdHgAwj9";

const stripePromise = loadStripe(stripePK);
const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];


const {REACT_APP_API}= process.env

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoActive: false,
      profCompDiv: true,
      locality:  localStorage.getItem('locality')? localStorage.getItem('locality') : "",
      localityCountry: localStorage.getItem("localityCountry")? localStorage.getItem("localityCountry") : "",
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
      social: {facebook:"",instagram:"",twitter:"",linkedin:""},
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
      wizard: false,
      coverImage:null,
      tempCoverImage:null,
      profileImage:null,
      tempProfileImage:null,
      isSignUpWizardCompleted: true,
      address: { value: "", isValid: true, message: "" },
      addressLineOne: { value: "", isValid: true, message: "" },
      billingAddress: { value: "", isValid: true, message: "" },
      billingCity: { value: "", isValid: true, message: "" },
      billingState: { value: "", isValid: true, message: "" },
      billingZip: { value: "", isValid: true, message: "" },
      billingCountry: { value: "", isValid: true, message: "" },
      billingEmail: { value: "", isValid: true, message: "" },
      billingPhone: { value: "", isValid: true, message: "" },
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
      lawfirmRegNo:{value:"",isValid:true,message:""},
      websiteName:{value:'',isValid:true,message:""},
      disbaleLawfirmName:true,
      disableRegNo:true,
      disablePhone:true,
      disableEmail:true,
      disablePass:true,
    };
    this.curr = React.createRef();
    this.deleteAddressInfo = this.deleteAddressInfo.bind(this);
    this.changeAddressInfo = this.changeAddressInfo.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateBillingAddress = this.updateBillingAddress.bind(this);
    this.setWizard = this.setWizard.bind(this);
    this.handleDisable= this.handleDisable.bind(this);
    this.saveCoverImage=this.saveCoverImage.bind(this)
    this.saveProfileImage=this.saveProfileImage.bind(this)
  }
   
  setWizard = async (data) => {
    console.log("automatic");
    this.setState({
      wizard: data,
    });
  };
  

 

 
  static getDerivedStateFromProps(props, state) {
    // if (props.profile && props.profile.token) {
      //   localStorage.setItem("auth_token", props.profile.token);
      // }
     
      console.log(state.formDirty);
    const { profile } = props;
    if (state.formDirty == false) {
      if (props.auth.isAuthenticated && profile.user &&props.auth.user) {
        if (profile.firstname) {
          console.log(profile.firstname)
          state.firstName.value = profile.firstname;
        }
        if (props.auth.user.wizardComplete) {
          console.log(props.auth.user.wizardComplete, "wizrd")
          state.isSignUpWizardCompleted = props.auth.user.wizardComplete;
          state.wizard = false;
        } else {
          console.log("wizard turn true");
          state.isSignUpWizardCompleted = false;
          state.wizard = true;
        }
        if (profile.lastname) {
          state.lastName.value = profile.lastname;
        }
        if (profile.dob) {
          state.dob.value = profile.dob;
        }
        if (props.auth.user.phone) {
          state.phoneNo.value = props.auth.user.phone;
        }
        if(props.auth.user.password){
          state.password.value=props.auth.user.password;
        }
        if (profile.countryCode) {
          state.countryCode.value = profile.countryCode;
        }
        if (props.auth.user.email) {
          state.email.value = props.auth.user.email;
        }
        if(profile.websiteName){
          state.websiteName.value=profile.websiteName;
        }
        if(profile.firmProfile){
          state.businessProfile.value=profile.firmProfile
        }
        if (localStorage.getItem("currency")) {
          state.currency.value = localStorage.getItem("currency");
        }
        if(profile.coverImage){
          console.log("pacche")
          state.coverImage=profile.coverImage.url;
          state.tempCoverImage=profile.coverImage.url;
        }
     
        if(profile.profileImage){
          state.profileImage=profile.profileImage.url;
          state.tempProfileImage=profile.profileImage.url;
        }

        if (profile.facebook) {
          state.social.facebook = profile.facebook;
        }
        if (profile.twitter) {
          state.social.twitter = profile.twitter;
        }
        if (profile.instagram) {
          state.social.instagram = profile.instagram;
        }
        if (profile.linkedin) {
          state.social.linkedin = profile.linkedin;
        }
        if (profile.gender) {
          state.gender.value = profile.gender;
        }

        if (profile.dob) {
          state.dob.value = profile.dob;
        }
        if (profile.language) {
          console.log(profile.language)
          state.language.value = profile.language;
        }

        if (profile.deliveryOpts) {
          state.deliveryOpts = profile.deliveryOpts;
        }

        if (profile.kitchenTypes) {
          state.kitchenTypes = profile.kitchenTypes;
        }
       if(profile.currency){
         console.log(profile.currency)
         state.currency.value=profile.currency
       }
        if (profile.profileSummary) {
          state.profileSummary.value = profile.profileSummary;
        }
      
        if (profile.contact || profile.user) {
          if(profile.contact ==null){
            if(profile.user.email){
              state.contactEmail.value = profile.user.email;
            }
            if(profile.user.phone){
              state.contactPhone.value = profile.user.phone;
            }
          }
          else{
          console.log(profile.user)
          if (profile.contact.email) {
            state.contactEmail.value = profile.contact.email;
          }
          else if(profile.user.email){
            state.contactEmail.value = profile.user.email;
          }
          if (profile.contact.phoneNo ) {
            state.contactPhone.value = profile.contact.phoneNo;
          }
          else if(profile.user.phone){
            state.contactPhone.value = profile.user.phone;
          }
          if (profile.contact.countryCode) {
            state.contactCountryCode.value = profile.contact.countryCode;
          }
        }
        }
          if (profile.billing) {
            let billing=profile.billing
            console.log(billing)
            if (billing.billingAddress) {
              state.billingAddress.value =
              billing.billingAddress;
            }
            if (billing.billingCity) {
              state.billingCity.value = billing.billingCity;
            }
            if (billing.billingState) {
              state.billingState.value = billing.billingState;
            }
            if (billing.billingZip) {
              state.billingZip.value = billing.billingZip;
            }
            if (billing.billingCountry) {
              state.billingCountry.value =
                billing.billingCountry;
            }
            if (billing.billingEmail) {
              state.billingEmail.value =billing.billingEmail;
            }
            else if(profile.user.email){
              state.billingEmail.value = profile.user.email;
            }
            if (billing.billingPhone ) {
              state.billingPhone.value = billing.billingPhone;
            }
            else if(profile.user.phone){
              state.billingPhone.value = profile.user.phone;
            }
            
          }
        

        if (profile.user.lawfirm_user) {
          if (profile.lawfirmName) {
            state.businessName.value = profile.lawfirmName;
          }
          if (profile.user.email) {
            state.businessEmail.value = profile.user.email;
          }
          if (profile.user.phone) {
            state.businessPhoneNo.value = profile.user.phone;
          }
          if(profile.lawFirmRegistrationNumber){
            console.log(profile.lawFirmRegistrationNumber)
            state.lawfirmRegNo.value=profile.lawFirmRegistrationNumber
          }
          // if (profile.business.countryCode) {
          //   state.businessCountryCode.value = profile.business.countryCode;
          // }
          // if (profile.business.businessProfile) {
          //   state.businessProfile.value = profile.business.businessProfile;
          // }
          // if (profile.business.location) {
          //   if (profile.business.location.businessAddress) {
          //     state.businessAddress.value =
          //       profile.business.location.businessAddress;
          //   }
          //   if (profile.business.location.businessCity) {
          //     state.businessCity.value = profile.business.location.businessCity;
          //   }
          //   if (profile.business.location.businessState) {
          //     state.businessState.value =
          //       profile.business.location.businessState;
          //   }
          //   if (profile.business.location.businessZip) {
          //     state.businessZip.value = profile.business.location.businessZip;
          //   }
          //   if (profile.business.location.businessCountry) {
          //     state.businessCountry.value =
          //       profile.business.location.businessCountry;
          //   }

          //   if (profile.profileCompletion) {
          //     state.profileCompletion = profile.profileCompletion;
          //   }
          // }
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
    

    window.addEventListener("click", (e) => {
      let curLabel = document.querySelector(".cur-label");
      let ccLabel = document.getElementById("countryCode");
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
  handleDisable (e){
    console.log(e)
    if(e==="firmName"){

      this.state.disbaleLawfirmName=!this.state.disbaleLawfirmName
    }
    if(e==="lawfirmRegNo"){
      console.log(this.state.disableRegNo)
      this.state.disableRegNo=!this.state.disableRegNo
    }
    if(e==="phoneNo"){
      console.log(this.state.disableRegNo)
      this.state.disablePhone=!this.state.disablePhone
    }
    if(e==="email"){
      console.log(this.state.disableRegNo)
      this.state.disableEmail=!this.state.disableEmail
    }
    if(e==="password"){
      console.log(this.state.disableRegNo)
      this.state.disablePass=!this.state.disablePass
        }

  }
  saveCoverImage= async()=>{
    console.log(this.state.coverImage)
    if(this.state.coverImage && this.state.tempCoverImage){

    let form= new FormData()
    form.append("files",this.state.coverImage)
    form.append("ref","lawfirm-user")
    form.append("refId",this.props.profile.id)
    form.append("field","coverImage")
 
      
      let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
      if(up){
        this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
        message.success("Cover Image Uploaded")

      }
      




     
  
  }
}

delProfileImage=async()=>{

  if(this.props.profile.profileImage){
    let del= await deleteRequest(`${REACT_APP_API}/upload/files/${this.props.profile.profileImage.id}`)
    if(del){
 
    let up= await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
    if(up){
      this.setState({
        tempProfileImage:null,
        profileImage:null
      })
    }
      console.log(del)
      message.success("image deleted")
          }

        }
}

delCoverImage=async()=>{


    if(this.props.profile.coverImage){
      let del= await deleteRequest(`${REACT_APP_API}/upload/files/${this.props.profile.coverImage.id}`)
      if(del){
        let update= await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
        if(update){

               this.setState({
                 tempCoverImage:null,
                 coverImage:null
               })
          console.log("update")
        }
       
      console.log(del)
      message.success("Cover image deleted")
          }

        }
}
  saveProfileImage=async()=>{
    console.log(this.state.profileImage)
    if(this.state.profileImage){
      let form= new FormData()
      form.append("files",this.state.profileImage)
      form.append("ref","lawfirm-user")
      form.append("refId",this.props.profile.id)
      form.append("field","profileImage")


     
          let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
          if(up){
              this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
            message.success("image uploaded")
          }
          
      
    }
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
  if(e.target.name=="businessName"){
  if(e.target.value==""){
    state["businessName"].isValid=false;
    state["businessName"].message="Firm name cannot be empty";
  }
  else{
    
      state["businessName"].isValid=true;
      state["businessName"].message="";

  
  }

  }
  if(e.target.name=="lawfirmRegNo"){
    if(e.target.value==""){
      state["lawfirmRegNo"].isValid=false;
      state["lawfirmRegNo"].message="Firm name cannot be empty";
    }
    else{
      state["lawfirmRegNo"].isValid=true;
      state["lawfirmRegNo"].message="";

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

   

    if (e.target.name == "contactPhone") {
      if (e.target.value == "") {
        state["contactPhone"].isValid = false;
        state["contactPhone"].message = "Phone number cannot be left empty";
      } else if (e.target.value.length !== 14) {
        state["contactPhone"].isValid = false;
        state["contactPhone"].message = "Phone number must be 14 digits";
      } else if (!e.target.value.match(/^[0-9 -+]+$/)) {
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
    if (e.target.name == "billingPhone") {
      if (e.target.value == "") {
        
        state["billingPhone"].isValid = false;
        state["billingPhone"].message = "Phone number cannot be left empty";
      } else if (e.target.value.length !== 10) {
        state["billingPhone"].isValid = false;
        state["billingPhone"].message = "Phone number must be 10 digits";
      } else if (!e.target.value.match(/^\d+$/)) {
        state["billingPhone"].isValid = false;
        state["billingPhone"].message =
          "Phone number must only contain numbers";
      } else {
        state["billingPhone"].isValid = true;
        state["billingPhone"].message = "";
      }
    }

    if (e.target.name == "billingEmail") {
      if (e.target.value == "") {
        state["billingEmail"].isValid = false;
        state["billingEmail"].message = "Email cannot be left empty";
      } else if (!validator.isEmail(e.target.value)) {
        console.log("email")
        state["billingEmail"].isValid = false;
        state["billingEmail"].message = "Not a valid email address";
      } else {
        console.log("email")
        state["billingEmail"].isValid = true;
        state["billingEmail"].message = "";
      }
    }
    if (e.target.name == "websiteName") {
      if (e.target.value == "") {
        state["websiteName"].isValid = false;
        state["websiteName"].message = "Website cannot be left empty";
      }  else {
        state["websiteName"].isValid = true;
        state["websiteName"].message = "";
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
    e.preventDefault()
    let state = this.state;
    let data = {};
    let section = null;
    if (e.target.name == "firmBtn") {
    console.log("here")
    if (!this.state.businessName.value  || !this.state.lawfirmRegNo.value || !this.state.contactPhone.value || !this.state.contactPhone.value 
      )  {
      message.error("Fill up required fields");
  
      if(state.businessName.value==""){
        console.log("here")
        return
      }
      if(state.lawfirmRegNo.value == ""){
        return; 
      }
      this.setState(state);
    }
  console.log(state.language.value)
  console.log(state.currency.value)
      if(state.lawfirmRegNo.value !== this.props.profile.lawFirmRegistrationNumber || state.businessName.value !== this.props.profile.lawfirmName){
        data = {
          lawfirmName:state.businessName.value,
          language: state.language.value,
          currency: state.currency.value,
          websiteName:state.websiteName.value,
          firmProfile:state.businessProfile.value,
          lawFirmRegistrationNumber:state.lawfirmRegNo.value,
          contact:{
            email:state.contactEmail.value,
            phoneNo:state.contactPhone.value
          },
          firmRegNoVerified:"PENDING"
         
        };
   
       
      }
      else{
      data = {
        lawfirmName:state.businessName.value,
        language: state.language.value,
        currency: state.currency.value,
        websiteName:state.websiteName.value,
        firmProfile:state.businessProfile.value,
        lawFirmRegistrationNumber:state.lawfirmRegNo.value,
        contact:{
          email:state.contactEmail.value,
          phoneNo:state.contactPhone.value
        }
       
      };
    }
      const firmSave=await this.props.actions.saveProfile(data, "lawfirm-users",this.props.profile.id);
    if(firmSave){
           console.log(firmSave);

      const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
      if(
        firmuser
      ){
        console.log(firmuser)
      }
    }
   
 
      this.setState({
        formDirty: false,
       
      });
      return;
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
      if (this.state.contactPhone.value) {
       
       
      }
      section = "contact";
      data = {
        firstname: state.firstName.value,
        lastname: state.lastName.value,
     
        billing: {
          billingAddress: state.billingAddress.value,
          billingCity: state.billingCity.value,
          billingState: state.billingState.value,
          billingZip: state.billingZip.value,
          billingCountry: state.billingCountry.value,
          billingEmail: state.billingEmail.value,
          billingPhone: state.billingPhone.value,
        },
      };
      const firmSave=await this.props.actions.saveProfile(data, "lawfirm-users",this.props.profile.id);
      if(firmSave){
        console.log(firmSave);

   const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
   if(
     firmuser
   ){
     console.log(firmuser)
   }
 }


   this.setState({
     formDirty: false,
    
   });
   return;
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
      const firmSave=await this.props.actions.saveProfile(data, "lawfirm-users",this.props.profile.id);
      if(firmSave){
             console.log(firmSave);
  
        const firmuser=await this.props.actions.getLawfirmUserProfile(this.props.profile.id, this.props.history);
        if(
          firmuser
        ){
          console.log(firmuser)
        }
      }
     
   
        this.setState({
          formDirty: false,
         
        });
        return;
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
    console.log("callling")
    
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
             <div className="coverImage">
        {/* <img src="https://source.unsplash.com/random/1600x900" /> */}
        <div className="overlay"></div>
        {this.state.tempCoverImage || this.state.coverImage ? (
          <img
            src={
              this.state.tempCoverImage
                ? this.state.tempCoverImage
                : this.state.coverImage
                ? this.state.coverImage
                : ""
            }
          />
        ) : (
          ""
        )}
          {!this.state.tempCoverImage?
        <div className="addCoverImage">
          <label
            htmlFor="coverImage"
            style={{ width: "100%", marginTop: 0, cursor: "pointer" }}
          >
            <input
            type="file"
            id="coverImage"
            onChange={(e) => {
              if (e.target.files[0])
              this.setState({
                coverImage: e.target.files[0],
                formImageDirty: true,
                tempCoverImage: URL.createObjectURL(e.target.files[0]),
              });
            }}
            style={{ display: "none" }}
            />
            <UploadOutlined style={{ fontSize: "30px", color: "#f7f7f7" }} />
          </label>
          
        </div>:null}
        {!this.props.profile.coverImage?
          this.state.tempCoverImage?
        <div className="coverButtons">
      
          <button onClick={() => this.saveCoverImage()}>
            <span>Save</span>
          </button>
    

    
        </div>:null:
         <div className="coverButtons">
      
         <button onClick={() => this.delCoverImage()}>
           <span>Remove</span>
         </button>
   

   
       </div>
        }
      </div>
      <div className="profileHead">
        <div className="profilePic">
          {/* <img src={girl2} alt="girl" /> */}
          {this.state.tempProfileImage || this.state.profileImage ? (
            <img
              src={
                this.state.tempProfileImage
                  ? this.state.tempProfileImage
                  : this.state.profileImage
                  ? this.state.profileImage
                  : ""
              }
            />
          ) : (
            ""
          )}
           {!this.state.tempProfileImage?
             
          <label htmlFor="profileImage" style={{ width: "100%", position:'absolute',bottom:0 }}>
            <input
              type="file"
              id="profileImage"
              onChange={(e) => {
                if (e.target.files[0])
                  this.setState({
               
                    profileImage: e.target.files[0],
                    tempProfileImage: URL.createObjectURL(e.target.files[0]),
                  });
              }}
              style={{ display: "none" }}
            />

<div style={{cursor:"pointer",borderRadius:"50px",height:"1.5rem" ,width:"1.5rem", backgroundColor:"#fc612b",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",    bottom: "10px",right:"-12px"}}>
      <AiOutlineUpload/>

          </div>
          </label>:null}
          {!this.props.profile.profileImage?
          this.state.profileImage?
          <div onClick ={this.saveProfileImage}style={{cursor:"pointer",borderRadius:"50px",height:"1.5rem" ,width:"1.5rem", backgroundColor:"#fc612b",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",    bottom: "10px",left:"-12px"}}>
      <IoSaveOutline/>

          </div>:null:
             <div onClick ={this.delProfileImage}style={{cursor:"pointer",borderRadius:"50px",height:"1.5rem" ,width:"1.5rem", backgroundColor:"#fc612b",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",    bottom: "10px",left:"-12px"}}>
             <MdRemove/>
       
                 </div>
          }
        </div>
      </div>
      <div className="viewPublicProfile">
        <button
          className=""
          onClick={() =>
            this.props.history.push(
              `/lawfirm-view/${this.props.profile.id}`
            )
          }
        >
          View Public Profile
        </button>
      </div>
        <h1>Law Firm Information</h1>
        <div className="input-fields">
          <div className="input-row" style={{alignItems:"center"}}>

           
            <label className="fullLabel">
             Firm Name:
             <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
              disabled={this.state.disbaleLawfirmName}
                name="businessName"
                placeholder="Business Name"
                value={this.state.businessName.value}
                onChange={this.onChange}
                maxLength="70"
                />
                
                  <div  onClick={()=>this.handleDisable("firmName")}>

               <FiEdit2/>
               </div>
               </div>
               {this.state.businessName.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.businessName.message}
                </p>
              )}
                </label>
             
               
          </div>
          <div className="input-row">
   
                     <label className={`${!this.state.contactPhone.isValid ? "error" : ""}`}>
              Phone No:
              <input
                name="contactPhone"
               
                placeholder="Phone No."
                value={this.state.contactPhone.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.contactPhone.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.contactPhone.message}
                </p>
              )}
            </label>
      
          <label className={`${!this.state.contactEmail.isValid ? "error" : ""}`}>
              Email:
              <input
                name="contactEmail"
               
                placeholder="Email"
                value={this.state.contactEmail.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.contactEmail.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.contactEmail.message}
                </p>
              )}
            </label>
          </div>

          <div className="input-row">
         
            <label
            className="one-half"
            >
              Website Name:
              <input
                autoComplete="off"
                name="websiteName"
                placeholder="Website name"
                onChange={this.onChange}
                value={this.state.websiteName.value}
              />
            </label>
            <label
           className="one-half"
            >
              Registration No:
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
                autoComplete="off"
                name="lawfirmRegNo"
                placeholder="Registration No."
                value={this.state.lawfirmRegNo.value}
                disabled={this.state.disableRegNo}
                onChange={this.onChange}
              />
                   <div  onClick={()=>this.handleDisable("lawfirmRegNo")}>

                        <FiEdit2/>
                        </div>
                        </div>
                        {this.state.lawfirmRegNo.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.lawfirmRegNo.message}
                </p>
              )}
            </label>
          </div>

          <div className="input-row ">
            <label className="textareaLabel">
              Law Firm Profile:
              <textarea
                value={this.state.businessProfile.value}
                onChange={this.onChange}
                name="businessProfile"
                maxLength="512"
                placeholder=""
                rows="4"
              />
            </label>
          </div>
          <div className="input-row">
          <label>
              Language:
              <Select
                placeholder="Language"
                value={this.state.language.value}
                // search
                id="language"
                style={{backgroundColor:"white !important"}}
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
              ref={this.curr}
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
                  onBlur={() => this.setState({ currencyDrop: false })}
                >
                  <ul>
                    {this.state.filteredCurrencies &&
                      this.state.filteredCurrencies.map((item, index) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            if (item && item.currency && item.currency.code) {
                              console.log(item, e);
                              this.setState({
                                currency: {
                                  ...this.state.currency,
                                  value: item.currency.code,
                                },
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
          <button
            name="firmBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>
     
       
        <div className="dividerL"></div>
        <h1>Law Firm Social Account Settings</h1>
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
                value={this.state.social?this.state.social.facebook:""}
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
        <h1>Billing Contact</h1>
        <div className="input-fields">
        <div className="input-row">
                   <label
              className={`${!this.state.firstName.isValid ? "error" : ""}`}
            >
              First name*:
              <input
                autoComplete="new-password"
                name="firstName"
                placeholder="Firstname"
                value={this.state.firstName.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.firstName.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.firstName.message}
                </p>
              )}
            </label>

            <label className={`${!this.state.lastName.isValid ? "error" : ""}`}>
              Last name*:
              <input
                autoComplete="new-password"
                name="lastName"
                placeholder="Firstname"
                value={this.state.lastName.value}
                onChange={(e) => this.onChange(e)}
              />
              {this.state.lastName.message && (
                <p>
                  {" "}
                  <i className="fe fe-alert-triangle" />{" "}
                  {this.state.lastName.message}
                </p>
              )}
            </label>
            </div>
          <div className="input-row">
         


           
            <label
              className={`${!this.state.contactPhone.isValid ? "error" : ""}`}
            >
              Phone No:
              <input
                autoComplete="off"
                name="billingPhone"
                placeholder="Phone No."
                value={this.state.billingPhone.value}
                onChange={this.onChange}
              />
            </label>
     
          <label
              className={`${!this.state.contactEmail.isValid ? "error" : ""}`}
            >
              Email Address:
              <input
                name="billingEmail"
                placeholder="Email address"
                value={this.state.billingEmail.value}
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

          <button
            name="contactBtn"
            className="save-btn"
            onClick={this.saveProfile}
          >
            Save
          </button>
        </div>
        <div className="dividerL"></div>

   
        

      

        

      
       

       
       


        <h1>Admin Account Settings</h1>
        <div className="input-fields">
          <div className="input-row">
          <label className={`${!this.state.email.isValid ? "error" : ""}`}>
              Email:
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
                name="email"
                placeholder="Email"
                value={this.state.email.value}
                disabled={this.state.disableEmail}
                onChange={(e) => this.onChange(e)}
              />
                  <div  onClick={()=>this.handleDisable("email")}>

                  <FiEdit2/>
                  </div>
                  </div>
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
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
                name="phoneNo"
                placeholder="Phone No."
                value={this.state.phoneNo.value}
                disabled={this.state.disablePhone}
                onChange={(e) => this.onChange(e)}
              />
                  <div  onClick={()=>this.handleDisable("phoneNo")}>

                  <FiEdit2/>
                  </div>
                  </div>
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
       
            
            <label className={`${!this.state.password.isValid ? "error" : ""}`}>
              Password:
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
                name="password"
                type="password"
                placeholder="************"
                value={this.state.password.value}
                disabled={this.state.disablePass}
                onChange={(e) => this.onChange(e)}
              />
                  <div  onClick={()=>this.handleDisable("password")}>

                <FiEdit2/>
                </div>
                </div>
            </label>
          </div>
        
          <label style={{ flexDirection: "row" }}>
            Deactivate your account? &nbsp;{" "}
            <span style={{ textDecoration: "underline", color: "red" }}>
              Deactivate now.
            </span>
          </label>

         
        </div>
      {!this.state.disableEmail?<ChangeForm onClose={()=>this.handleDisable("email")} headerText={"Change Email"} email={this.state.email.value} phoneNo={this.state.password.value} onChange={this.onChange}  input1={"New email"} input2={"Password"} type={"email"} history={this.props.history}/>:null }
      {!this.state.disablePhone?<ChangeForm onClose={()=>this.handleDisable("phoneNo")} headerText={"Change Phone Number"} input1={"New Phone Number"} input2={"Password"} type={"phone"} history={this.props.history}/>:null}
      {!this.state.disablePass?<ChangeForm onClose={()=>this.handleDisable("password")} headerText={"Change Password"} type={"pass"} history={this.props.history}/>:null}

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
        { this.state.isSignUpWizardCompleted == false && (
      
      <Elements stripe={stripePromise}>
      <SignUpWIzard
        {...this.props}
        wizard={this.state.wizard}
        setWizard={this.setWizard}
        businessTypes={this.state.businessTypes}
      />
    </Elements>
       
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Profile));
