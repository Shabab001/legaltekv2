import React, { Component } from "react";
import Axios from 'axios'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
var countries = require('country-data').countries


export class Geolocate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchZipcode: "",
      settingLocation: "",
      address: ''
    };
  }
componentDidMount(){
    // this.geoLocate()
}
  geoLocate() {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      localStorage.setItem("lat", lat);
      localStorage.setItem("lng", lng);
      Axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            lng +
            "&key=AIzaSyB6CeCRWx766zPt6EeOpxeBgjJXDqcCwpA"
        )
        .then(function (response) {
          if (response) {
            console.log(response);
            for (var i = 0; i < response.data.results.length; i++) {
              if (response.data.results[i].types[0] == "country") {
                var countryshort =
                  response.data.results[i].address_components[0].short_name;
                var countrylong =
                  response.data.results[i].address_components[0].long_name;

                localStorage.setItem("country_short", countryshort);
                localStorage.setItem("country_long", countrylong);
                localStorage.setItem("Currentcountry", countrylong);
                localStorage.setItem(
                  "currency",
                  countries[countryshort].currencies[0]
                );
                localStorage.setItem(
                  "calling_code",
                  countries[countryshort].countryCallingCodes[0]
                );
                localStorage.removeItem("mileDistance", 0);
              }
              if (response.data.results[i].types[0] == "locality") {
                var locality =
                  response.data.results[i].address_components[0].short_name;
                var localityState =
                  response.data.results[i].address_components[2].long_name;
                var localityCountry =
                  response.data.results[i].address_components[3].long_name;

                  localStorage.setItem("locality", locality);
                  localStorage.setItem("localityState", localityState);
                  localStorage.setItem("localityCountry", localityCountry);
              }
            }
          } else {
          }
        });
    });

    this.setState({
      settingLocation: true,
      searchZipcode:
        localStorage.getItem("locality") +
        ", " +
        localStorage.getItem("localityCountry"),
    });
  }

  handleChange = address => {
      console.log(address)
    this.setState({ address });    
    
   
  };
 
  handleSelect = address => {
    console.log(address)
    geocodeByAddress(address)
      .then(results => console.log(results))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    const {chooseAddress,propClass,changeAddress,icon,placeholder} = this.props
    return <PlacesAutocomplete
    value={this.state.address}
    onChange={this.handleChange}
    onSelect={chooseAddress}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div style={{flex:'auto'}}>
        {icon && icon}
        <input
        id='location'
        onChange={(e)=>changeAddress(e.target.value)}
          {...getInputProps({
            placeholder: placeholder ? placeholder : 'Search your location ...',
            className: `location-search-input ${propClass ? propClass: ""}`,
          })}
        />
        {suggestions.length > 0 &&
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map((suggestion,index) => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div
              key={index}
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
                // onClick={()=>{ this.setState({ address:suggestion.description })}}
                // onClick={()=>chooseAddress(suggestion.description)}
                // onSelect={(e)=>this.handleSelect(e).bind(this)}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>}
      </div>
    )}
  </PlacesAutocomplete>;
  }
}

export default Geolocate;
