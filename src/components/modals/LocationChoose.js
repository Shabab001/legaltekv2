import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import Geolocate from "../MiniComponents/Geolocate";
import GoogleMapReact from "google-map-react";



const Marker = ({ text }) => (
  <div
  className="mark"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      borderRadius: "50%",
  
    }}
  >
    <i
      className="fe fe-map-pin"
      style={{ fontSize: "30px", color: "#e50077",position:'relative' }}
    ></i>
  </div>
);


function LocationChoose(props) {
  const [chosenLocation, setChosenLocation] = useState("");
  const [locality, setLocality] = useState("");
  const [localityCountry, setLocalityCountry] = useState("");

  useEffect(() => {
    let localityInfo = localStorage.getItem("locality");
    let localityCountryInfo = localStorage.getItem("localityCountry");
    console.log(localityInfo, localityCountryInfo);
    if (localityInfo) {
      setLocality(localityInfo);
    }
    if (localityCountryInfo) {
      setLocalityCountry(localityCountryInfo);
    }
  }, [localStorage.getItem("locality")]);
  const chooseAddress = (address) => {
    localStorage.setItem("chosenLocation", address);
    localStorage.setItem("chosenLocality", address.split(/,(.+)/)[0]);
    localStorage.setItem("chosenCountry", address.split(/,(.+)/)[1]);
    setChosenLocation(address);
  };


  const [center, setCenter] = useState({
    lat: parseFloat(localStorage.getItem("lat")),
    lng: parseFloat(localStorage.getItem("lng")),
  });
  const [markerCenter, setMarkerCenter] = useState();

  const [zoom, setZoom] = useState(15);
 const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    map.panTo(markerCenter);
  };
  return (
    <div className="form-modal">
      <div className="form mobile">
      <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            marginTop:15
          }}
        >
          {/* <span>G</span>
          <Link to="/">rmnd</Link> */}
          <i style={{ fontSize: 30 }} className="fe fe-chevron-left"></i>

          <a
            onClick={props.closeSearch}
            style={{ color: "#e50077", fontSize: 30 }}
            onClick={()=>props.closeLocationChooser()}
          >
            <i className="fe fe-x"></i>
          </a>
        </div>
        <div className="mapDropdown" style={{top:20}}>
         
          <span>
          <GoogleMapReact
                style={{
                  display: "flex",
                  height: 250,
                  width: '100%',
                  position: "relative",
                  // top: 500,
                  left: 0,
                  right: 0,
                }}
                bootstrapURLKeys={{
                  key: "AIzaSyB6CeCRWx766zPt6EeOpxeBgjJXDqcCwpA",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(map, maps)
                }
              >
                <Marker
                  lat={localStorage.getItem("lat")}
                  lng={localStorage.getItem("lng")}
                  text="My Marker"
                />
              </GoogleMapReact>
              <span style={{position:'relative'}}>
              <i
              className="fe fe-map-pin input-marker"
              style={{ fontSize: "20px", color: "#e50077" }}
            ></i>
            <Geolocate
              chooseAddress={(address) => chooseAddress(address)}
              placeholder="Address"
            />
              </span>
        
          </span>

          <div className="default-location">
            <Radio
              checked={true}
              name="default-location-radio"
              inputProps={{ "aria-label": "A" }}
            />
            <div>
              <span>
                {localStorage.getItem("chosenLocality")
                  ? localStorage.getItem("chosenLocality")
                  : locality}
              </span>
              <span>
                {localStorage.getItem("chosenCountry")
                  ? localStorage.getItem("chosenCountry")
                  : localityCountry}
              </span>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default LocationChoose;
