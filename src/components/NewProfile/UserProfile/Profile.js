import React, { Component } from 'react'
import girl2 from "../../../assets/img/girl2.jpg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../actions/userActions";
import Currencies from "../../../assets/json/Currencies.json";
import languageOptions from "../../../assets/json/Languages.json";
import Countries from "../../../assets/json/Countries.json";
import { DatePicker, message, Space } from "antd";
import { Menu, Dropdown } from "antd";
import { Select as Select2 } from "antd";
import validator from "validator";
import moment from "moment";
import NavigationPrompt from "react-router-navigation-prompt";
import { UploadOutlined } from '@ant-design/icons';
import ReactDOM from "react-dom";
import {FiEdit2, FiUserPlus} from "react-icons/fi"
import ChangeForm from "../../modals/changeForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geolocate from "./../../MiniComponents/Geolocate";
import { ThemeProvider } from '@material-ui/styles';
import {AiOutlineUpload} from "react-icons/ai"
import{makeRequest,deleteRequest} from "../../../utils/upload"
import { CgChevronDoubleLeft } from 'react-icons/cg';


const {REACT_APP_API}= process.env
const gender = [
  { key: "male", text: "Male", value: "Male" },
  { key: "female", text: "Female", value: "Female" },
  { key: "other", text: "Other", value: "Other" },
];
export class Profile extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            formDirty: false,
            fixedFirstName: "",
            fixedLastName: "",
            firstName: { value: "", isValid: true, message: "" },
            lastName: { value: "", isValid: true, message: "" },
            phoneNo: { value: "", isValid: true, message: "" },
            countryCode: { value: "", isValid: true, message: "" },
            dob: { stringValue: "", value: "", isValid: true, message: "" },
            email: { value: "", isValid: true, message: "" },
            password: { value: "", isValid: true, message: "" },
            social: "",
            gender: { value: "", isValid: true, message: "" },
            language: { value: "", isValid: true, message: "" },
            currency: { value: "", isValid: true, message: "" },
            dateOfBirth: { value: "", isValid: true, message: "" },
            toolTip: "",
            allergens: [],
            dietaryPref: [],
            profileSummary: { value: "", isValid: true, message: "" },
            currencyDrop: false,
            countryDrop: false,
            filteredCurrencies: Currencies,
            filteredCountryCode: Countries,
            profCompDiv: true,
            coverImage:null,
            tempCoverImage:null,
            profileImage:null,
            tempProfileImage:null,
            disablePhone:true,
            disableEmail:true,
            disablePass:true,
            contactCountryCode: { value: "", isValid: true, message: "" },
            deliveryLocationInfo: [{ address: "", state: "", city: "", zip: "",disabled : false }],
            billingAddress: { value: "", isValid: true, message: "" },
            billingCity: { value: "", isValid: true, message: "" },
            billingState: { value: "", isValid: true, message: "" },
            billingZip: { value: "", isValid: true, message: "" },
            billingCountry: { value: "", isValid: true, message: "" },
            dba: false,
            profileCompletion : {},
            locality: localStorage.getItem("locality")? localStorage.getItem("locality"): "",
            localityCountry: localStorage.getItem("localityCountry")? localStorage.getItem("localityCountry") : ""
  
          };
          this.curr = React.createRef();
          this.deleteAddressInfo = this.deleteAddressInfo.bind(this);
          this.changeAddressInfo = this.changeAddressInfo.bind(this);
          this.saveProfile = this.saveProfile.bind(this);
          this.onChange = this.onChange.bind(this);
          this.updateBillingAddress = this.updateBillingAddress.bind(this);
          this.handleDis= this.handleDis.bind(this)
          this.handleDistrue= this.handleDistrue.bind(this)
        this.saveCoverImage=this.saveCoverImage.bind(this)
        this.saveProfileImage=this.saveProfileImage.bind(this)
    }



    static getDerivedStateFromProps(props, state) {
  
        // if (props.profile && props.profile.token) {
        //   localStorage.setItem("auth_token", props.profile.token);
        // }
    
        const { profile} = props;
        if (state.formDirty == false) {
          if (props.auth.isAuthenticated && profile &&props.auth.user) {
            if (profile.firstname) {
              state.firstName.value = profile.firstname;
              state.fixedFirstName = profile.firstname

            }
            if (profile.lastname) {
              state.lastName.value = profile.lastname;
              state.fixedLastName = profile.lastname
            }
            if (profile.dob) {
              state.dob.value = profile.dob;
            }
            if (props.auth.user.phone) {
              state.phoneNo.value = props.auth.user.phone;
            }
            if (profile.countryCode) {
              state.countryCode.value = profile.countryCode;
            }
            if (props.auth.user.email) {
              state.email.value = props.auth.user.email;
            }
            if (profile.currency) {
              state.currency.value = profile.currency;
            }
            if(profile.dateOfBirth){
                state.dateOfBirth.value=profile.dateOfBirth;
            }
         
            if (profile.gender) {
              state.gender.value = profile.gender;
            }
            if(profile.profileCompletion){
              state.profileCompletion = profile.profileCompletion
            }
    
            
            if (profile.language) {
              state.language.value = profile.language;
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
    
            if (profile.profileSummary) {
              state.profileSummary.value = profile.profileSummary;
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
        // this.props.actions.getProfile(profileDate, this.props.history);
    
        window.addEventListener("click", (e) => {
          let curLabel = document.querySelector(".cur-label");
          let ccLabel = document.querySelector(".cc-label.account");
          let ccLabel1 = document.getElementById("contactCountryCode");
    
          if (curLabel && !curLabel.contains(e.target)) {
            this.setState({ currencyDrop: false });
          }
          if (ccLabel && !ccLabel.contains(e.target)) {
              console.log('closing')
            this.setState({ countryDrop: false });
          }
    
          if (ccLabel1 && !ccLabel1.contains(e.target)) {
            this.setState({ countryDrop1: false });
          }
        });
      }
      saveCoverImage= async()=>{
        console.log(this.state.coverImage)
        if(this.state.coverImage && this.state.tempCoverImage){

        let form= new FormData()
        form.append("files",this.state.coverImage)
        form.append("ref","customer")
        form.append("refId",this.props.profile.id)
        form.append("field","coverImage")
     
          
          let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
          if(up){
            this.props.actions.getCustomerUserProfile(this.props.profile.id)
            message.success("Cover Image Uploaded")

          }
          
  
  


         
      
      }
    }

    delProfileImage=async()=>{

      if(this.props.profile.profileImage){
        let del= await deleteRequest(`${REACT_APP_API}/upload/files/${this.props.profile.profileImage.id}`)
        if(del){
     
        let up= await  this.props.actions.getCustomerUserProfile(this.props.profile.id)
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
            let update= await this.props.actions.getCustomerUserProfile(this.props.profile.id)
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
          form.append("ref","customer")
          form.append("refId",this.props.profile.id)
          form.append("field","profileImage")

    
         
              let up =await makeRequest(`${REACT_APP_API}/upload`,"POST",form)
              if(up){
                this.props.actions.getCustomerUserProfile(this.props.profile.id)
                message.success("image uploaded")
              }
              
          
        }
      }
    
      onChange(e) {
        var state = this.state;
        if (e.target.name !== "allergens" && e.target.name !== "dietaryPref" && e.target.name !=="dba") {
          
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
    
      
    
        this.setState(state);
      }
    
      deleteAddressInfo(index) {
        let ind = index;
        let arr = this.state.deliveryLocationInfo;
        let tempAddressInfo = this.state.deliveryLocationInfo;
        
        if ( tempAddressInfo && tempAddressInfo.length > 1) {
          let newTemp = tempAddressInfo.splice(index, 1);
          console.log(tempAddressInfo);
          this.setState({ 
            formDirty:true,
            deliveryLocationInfo: tempAddressInfo });
        }
      }
    
      changeAddressInfo(e, index) {
        let temp = this.state.deliveryLocationInfo;
        console.log(temp, index);
        let name = e.target.name
        console.log(name, index)
        if(name=="city"){
          temp[index].city = e.target.value;
        }
         if(name=="state"){
          temp[index].state = e.target.value;
        }
         if(name=="zip"){
          temp[index].zip = e.target.value;
        }
         if(name=="address"){
          temp[index].address = e.target.value;
        }
        
        console.log(temp);
        this.setState({ deliveryLocationInfo: temp });
      }
      onChangeDate(date, dateString) {
        console.log(date, dateString);
        this.setState({
          dateOfBirth: { value: dateString, isValid: true, message: "" },
        });
      }
    
      handleDis (e){
        console.log(e)
   
        if(e==="phoneNo"){
          console.log(this.state.disablePhone)
          this.state.disablePhone=false
        }
        if(e==="email"){
          console.log(this.state.disableEmail)
          this.state.disableEmail=false
        }
        if(e==="password"){
          console.log(this.state.disablePass)
          this.state.disablePass=false
            }
    
      }
      handleDistrue(){
        this.state.disablePhone=true
        this.state.disableEmail=true
        this.state.disablePass=true
      }
      saveProfile = async (e) => {
        let state = this.state;
        let data = null;
        let section = null;
        let valid = true
        this.state.formDirty=true;
        if (e.target.name == "profileBtn") {
          console.log("clicked");
          section = "profile";
          if (state.firstName.value == "") {
            state.firstName.isValid = false;
            return;
          } else {
            state.firstName.isValid = true;
          }
          if (state.lastName.value == "") {
            state.lastName.isValid = false;
            return;
          } else {
            state.lastName.isValid = true;
          }
           
          data = {
            firstname: state.firstName.value,
            lastname: state.lastName.value,
            gender: state.gender.value,
            dateOfBirth: state.dateOfBirth.value,
            profileSummary: state.profileSummary.value,
            language:state.language.value,
            currency:state.currency.value,
          };
          console.log(data)
          let updateUser = await this.props.actions.updateCustomerUserProfile(this.props.profile.id, data)
          if(updateUser){
            this.props.actions.getCustomerUserProfile(this.props.profile.id)
          }
          state.formDirty=false;
          return;
        }
    
   
    
 


        
    
      };
    
    
      async updateBillingAddress(addr) {
        console.log(addr)
        this.setState({formDirty:true})
        var placeSearch, autocomplete;
        var componentForm = {
          street_number: "",
          route: "",
          postal_town: "",
          locality: "",
          administrative_area_level_1: "",
          country: "",
          postal_code: "",
          formattedAddress : "",
          neighbourhood: ""
        };
        let address = await geocodeByAddress(addr)
        if(address)
        console.log(address)
        address = address[0]
        componentForm.formattedAddress = address.formatted_address
        for (var i = 0; i < address.address_components.length; i++) {
          var addressType = address.address_components[i].types[0];
          console.log(addressType)
          if (componentForm[addressType] == "") {
            let val = address.address_components[i][componentForm[addressType]];
            componentForm[addressType] = address.address_components[i].long_name;
          }
        }
        console.log(componentForm)
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
    
    
        if(componentForm.street_number && componentForm.route){
          state.billingAddress = {
            value:
            componentForm.street_number +" "+ componentForm.route,
            isValid: true,
            message: "",
          };
        }
        else if(componentForm.route){
          state.billingAddress = {
            value:
            componentForm.route,
            isValid: true,
            message: "",
          };
        }
        else if(componentForm.formattedAddress){
          state.billingAddress = {
            value:
            componentForm.formattedAddress,
            isValid: true,
            message: "",
          };
        }
      
        if(state["dba"] == true){
          state["deliveryLocationInfo"][0].disabled = true
          state["deliveryLocationInfo"][0].address = state["billingAddress"].value
          state["deliveryLocationInfo"][0].state = state["billingState"].value
          state["deliveryLocationInfo"][0].zip = state["billingZip"].value
          state["deliveryLocationInfo"][0].city = state["billingCity"].value
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
    render() {
      const dateFormat = "YYYY/MM/DD";
      let filteredCurrencies = Currencies;
      let filteredCountryCode = Countries;
      return (
          <div className=" user-profile">
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

            <i className="fa fa-pencil" style={{ cursor: "pointer" }} />
          </label>:null}
          {!this.props.profile.profileImage?
          <div onClick ={this.saveProfileImage}style={{cursor:"pointer",borderRadius:"50px",height:"1.5rem" ,width:"1.5rem", backgroundColor:"#fc612b",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",    bottom: "10px",left:"-12px"}}>
      <AiOutlineUpload/>

          </div>:
             <div onClick ={this.delProfileImage}style={{cursor:"pointer",borderRadius:"50px",height:"1.5rem" ,width:"1.5rem", backgroundColor:"#fc612b",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",    bottom: "10px",left:"-12px"}}>
             <AiOutlineUpload/>
       
                 </div>
          }
        </div>
      </div>
      <div className="viewPublicProfile">
        <button
          className=""
          onClick={() =>
            this.props.history.push(
              `/view-profile/${this.props.auth.user._id}`
            )
          }
        >
          View Public Profile
        </button>
      </div>
          <h1>Account Holder Information</h1>
          <div>
            <div className="input-fields">
              <div className="input-row">
                <label
                className={!this.state.firstName.isValid ? "error" : ""}
                >
                  First name*:
                  <input
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

                <label
                className={!this.state.lastName.isValid ? "error" : ""}
                >
                  Last name*:
                  <input
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
                <label>
                  Date of Birth:
                  <DatePicker
                    name="dob"
                    placeholder="Date of Birth"
                    className="profile-datepicker"
                    value={
                      this.state.dateOfBirth.value
                        ? moment(this.state.dateOfBirth.value, dateFormat)
                        :
                      ""
                    }
                      onChange={this.onChangeDate.bind(this)}
                  />
                </label>
                <label>
                  Gender:
                  <Select2
                    name="gender"
                    showSearch
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
                <label className="textareaLabel">
                  Profile Summary:
                  <textarea
                    placeholder=""
                      value={this.state.profileSummary.value}
                      onChange={(e) =>
                        this.setState({
                          formDirty: true,
                          profileSummary: {
                            ...this.state.profileSummary,
                            value: e.target.value,
                          },
                        })
                      }
                  />
                </label>
                <div className="input-row">
          <label>
            Language:
            <Select2
              placeholder="Language"
              value={this.state.language.value}
              // search
              showSearch
              selection="true"
              onChange={(e, { value }) =>
                this.setState({
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
                this.setState({ currency: e.target.value });
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
              </div>
              <button
                name="profileBtn"
                className="save-btn"
                  onClick={(e) => this.saveProfile(e)}
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
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <input
                name="email"
                placeholder="Email"
                value={this.state.email.value}
                disabled={this.state.disableEmail}
                onChange={(e) => this.onChange(e)}
              />
                  <div  onClick={()=>this.handleDis("email")}>

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
                  <div  onClick={()=>this.handleDis("phoneNo")}>

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
                  <div  onClick={()=>this.handleDis("password")}>

                <FiEdit2/>
                </div>
                </div>
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

       
        <label style={{ flexDirection: "row" }}>
          Deactivate your account? &nbsp;{" "}
          <span style={{ textDecoration: "underline", color: "red" }}>
            Deactivate now.
          </span>
        </label>

     
      </div>
    

      <NavigationPrompt when={this.state.formDirty}>
        {({ onConfirm, onCancel }) => (
          <>
            {this.state.formDirty &&
      ReactDOM.createPortal(
        <div className="modal-overlay nav-prompt">
          <div className="form-modal">
            <div className="modal-title">
              <p>Your Profile is not saved yet</p>
            </div>
            <div className="modal-content">
              <p> You need to save your unsaved changes, do you really want to
                  leave without saving your changes?</p>
            </div>
            <div className="modal-actions">

            <button
                  className="btn--pink-outlined"
                  style={{ borderRadius: 8 }}
                  color="primary"
                  onClick={onCancel}
                >
                  No
                </button>
                <button
                  className="btn--pink"
                  style={{
                    borderRadius: 8,
                    // backgroundColor: "rgb(255,114,69)",
                  }}
                  color="primary"
                  autoFocus
                  onClick={onConfirm}
                >
                  Yes
                </button>
            </div>
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
          </>
        )}
      </NavigationPrompt>


      {!this.state.disableEmail?<ChangeForm onClose={this.handleDistrue} headerText={"Change Email"} email={this.state.email.value} phoneNo={this.state.password.value} onChange={this.onChange}  input1={"New email"} input2={"Password"} type={"email"} history={this.props.history}/>:null }
      {!this.state.disablePhone?<ChangeForm onClose={this.handleDistrue} headerText={"Change Phone Number"} input1={"New Phone Number"} input2={"Password"} type={"phone"} history={this.props.history}/>:null}
      {!this.state.disablePass?<ChangeForm onClose={this.handleDistrue} headerText={"Change Password"} type={"pass"} history={this.props.history}/>:null}trhandleDistrue
trhandleDistrue


          </div>
        </div>
      )
  }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.auth.customerUserProfile
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);