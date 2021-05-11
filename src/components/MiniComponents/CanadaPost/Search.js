import React, { Component } from 'react';
import Select from 'react-select';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Form from './Form';

// TODO replace with custom styles after bootstrap
// import 'react-select/dist/react-select.css';

let debounce = require('debounce');

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: [],
      locations: [],
      selected: {}
     }

  }

  handleChange(event) {
    console.log(event)
    this.setState({searchTerm: event}, () => {
      console.log(this.state);
      debounce(this.handleSubmit(), 500);
    });
  }

  handleSubmit() {
    console.log('submitting', this.state.searchTerm);
    let requestUrl = 'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?Key=kp51-dj74-gf98-jw47';
    requestUrl += '&SearchTerm=' + encodeURIComponent(this.state.searchTerm);
    requestUrl += '&Country=' + encodeURIComponent('CAN');
    requestUrl += '&MaxResults=' + encodeURIComponent(8);

    fetch(requestUrl)
      .then(response => response.json() )
      .then(data => {
        console.log(data)
       return  data.Items
      } )
      .then(items => this.setState({results: items}, () => {
        console.log(items)
        
        let names = this.state.results.map((n) => {
          return {value: n.Id, label: n.Text + ", " + n.Description};
        })
        console.log(names)
        this.setState({locations: names});
      }) )
  }

  handleSelection(e) {
    if(e && e.value != null){
      console.log('retrieving')
      let requestUrl = 'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Retrieve/v2.10/json3.ws?Key=kp51-dj74-gf98-jw47';
      
      requestUrl += '&Id=' + encodeURIComponent(e.value);
      console.log(e.value)
      fetch(requestUrl)
        .then(response => response.json())
        .then(data =>  data.Items)
        .then(items => this.setState({selected: items[0]},()=>{
          
          
          
          var lat = '';
          var lng = '';
          var address = '';
          geocodeByAddress(items[0].PostalCode)
          .then(address => {
            if(address && address.length > 0 && address[0]){
              let item = {
                ...items[0],coordinates:{
                  lat: address[0].geometry.location.lat(),
                  lng: address[0].geometry.location.lng()
                }
              }
              if(this.props.handleSelectionCanadaPost){
                this.props.handleSelectionCanadaPost(item)
              }
            }
            
            })
          .catch(error => console.error('Error', error));
        
          
        
          console.log(this.state.selected)}))
    }
  
  }

 

  render() {
    return (
      <div className="Search">
     
        <Select
          name='search-dropdown'
          options={this.state.locations}
          onInputChange={(e) => this.handleChange(e)}
          placeholder='Search'
          noResultsText={false}
          autofocus={true}
          isClearable={true}
          onChange={(e) => this.handleSelection(e)}
        />

        
        {/* <Form data={this.state.selected} /> */}
    </div>
    );
  }
}

export default Search;
