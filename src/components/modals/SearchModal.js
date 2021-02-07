import React, { useState } from "react";
import japaneseFood from "../../assets/img/japanesefood.jpeg";
import { Link } from "react-router-dom";
import Geolocate from '../MiniComponents/Geolocate'

function SearchModal(props) {
  const [trayState, setTrayState] = useState(1);
  const [selectedTab, setSelectedTab] = useState(null);
  const [searchInputPlaceholder, setSearchInputPlaceholder] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [cuisineInput, setCuisineInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [inputTray, setInputTray] = useState(1)
  const [selectedFood, setSelectedFood] = useState("")
  const [location, setLocation] = useState("")
  const [cuisine, setCuisine] = useState("")

  const orderFood = [
    "Pistachio Cake",
    "Sand Dessert",
    "Chicken Biriyani",
    "Beef Biriyani",
  ];

  const HireCook = ["Jake Paul", "Logan Paul", "Gordon Ramsey"];

  const LocationComp = ["Dhanmondi","Old town","Mirpur","Lalmatia","Shyamoli","Mohammadpur"];

  const CuisineComp = ["Thai", "Mexican", "Chinese", "Indian"]

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    if (selectedTab > 0 && selectedTab < 4) {
      setFilteredSearch(
        orderFood.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))
      );
    } else if (selectedTab == 4) {
      setFilteredSearch(
        HireCook.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))
      );
    }
    if (e.target.value == "") {
      setFilteredSearch([]);
    }
  };

  const locationSearchHandler = (e) =>{
    setLocationInput(e.target.value)
    setFilteredSearch(
      LocationComp.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  }

  const CuisineSearchHandler = (e) =>{
    setCuisineInput(e.target.value)
    setFilteredSearch(
      CuisineComp.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  }

  return (
    <div className="form-modal">
      <div className="form">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            className="brand"
            onClick={() => {
              if (trayState == 1) {
                props.closeSearch();
              } else {
                if (trayState == 3) {
                  setTrayState(1);
                  setLocation(null)
                  setLocationInput(null)
                  setCuisine(null)
                  setCuisineInput(null)
                  setSelectedFood(null)
                  setSearchInput(null)
                  setFilteredSearch([])
                  setInputTray(1)
                } else {
                  setTrayState(trayState - 1);
                  setLocation(null)
                  setLocationInput(null)
                  setCuisine(null)
                  setCuisineInput(null)
                  setSelectedFood(null)
                  setSearchInput(null)
                  setFilteredSearch([])
                  setInputTray(1)
                }
              }
            }}
          >
            {/* <span>G</span>
          <Link to="/">rmnd</Link> */}
            <i style={{ fontSize: 30 }} className="fe fe-chevron-left"></i>
          </div>
          <a
            onClick={props.closeSearch}
            style={{ color: "#e50077", fontSize: 30 }}
          >
            <i className="fa fa-close"></i>
          </a>
        </div>

        {trayState == 1 && (
          <div className="bottomSearchTray open">
            <h2>Choose Option</h2>
            {/* <div
              className="trayItem"
              onClick={() => {
                setSelectedTab(1);
                setTrayState(2);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Order Food</h3>
                <p>Order the food that you want.</p>
              </div>
            </div> */}



            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("A La Carte");
                setSelectedTab(1);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>A La Carte</h3>
                <p>Order the food that you want.</p>
              </div>
            </div>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find catering options");
                setSelectedTab(2);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Catering</h3>
                <p>Hire a cook for your culinary needs.</p>
              </div>
            </div>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find meal plan options");
                setSelectedTab(3);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Meal Plan</h3>
                <p>Learn lessons on how to be a great chef.</p>
              </div>
            </div>



            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find Cooks to hire");
                setSelectedTab(4);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Hire a Cook</h3>
                <p>Hire a cook for your culinary needs.</p>
              </div>
            </div>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find lessons to learn");
                setSelectedTab(5);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Learn a lesson</h3>
                <p>Learn lessons on how to be a great chef.</p>
              </div>
            </div>
          </div>
        )}

        {trayState == 2 && (
          <div className="bottomSearchTray open">
            <h2>Choose Option</h2>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("A La Carte");
                setSelectedTab(11);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>A La Carte</h3>
                <p>Order the food that you want.</p>
              </div>
            </div>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find catering options");
                setSelectedTab(12);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Catering</h3>
                <p>Hire a cook for your culinary needs.</p>
              </div>
            </div>
            <div
              className="trayItem"
              onClick={() => {
                setSearchInputPlaceholder("Find meal plan options");
                setSelectedTab(13);
                setTrayState(3);
              }}
            >
              <div className="tabImage">
                <img src={japaneseFood} />
              </div>
              <div className="tabInfo">
                <h3>Meal Plan</h3>
                <p>Learn lessons on how to be a great chef.</p>
              </div>
            </div>
          </div>
        )}

        {trayState == 3 && (
          <div className="bottomSearchTray open">
            <div className="searchInputContainer">


              {
              
              inputTray == 1?
              <>
              <i className="fa fa-search"></i>
              {/* <input
              className="searchInput"
              value={locationInput}
              placeholder="Search your location"
              onChange={locationSearchHandler}
            /> */}
            <Geolocate propClass="searchInput"
            changeAddress={(address)=>setLocationInput(address)}
            chooseAddress={(address)=>{
              setLocationInput(address)
              setLocation(address)
              setInputTray(2)
              }}/>
            
            </>
            :
              inputTray == 2 ? 
              <>
              <i className="fa fa-search"></i>
                  <input
                  className="searchInput"
                  value={searchInput}
                  placeholder={searchInputPlaceholder}
                  onChange={searchHandler}
                /></>
                :
              
              inputTray == 3?
              <>
              <i className="fa fa-search"></i>
              <input
              className="searchInput"
              value={cuisineInput}
              placeholder="Search your cuisine"
              onChange={CuisineSearchHandler}
            /></>:
            <>
            <ul style={{display:'flex',flexDirection:"column",width:'100%'}}>
              <li><span style={{fontFamily:'Avenir_heavy !important',marginRight:10}}>{selectedTab == 1 || selectedTab > 10? "Order:" : selectedTab == 2? "Chef:" : selectedTab == 3 && "Lesson:"}</span>{selectedFood}</li>
              <li><span style={{fontFamily:'Avenir_heavy !important',marginRight:10}}>Location:</span>{location}</li>
              <li><span style={{fontFamily:'Avenir_heavy !important',marginRight:10}}>Cuisine:</span>{cuisine}</li>
            </ul>
            <p>Search</p></>
            }
            
              <p onClick={props.closeSearch}>Cancel</p>
            </div>





            <div className="actionBtns">
              {inputTray < 3 &&
              <a onClick={()=>{
                // if(inputTray < 3)
                setInputTray(inputTray+1)
                
                }}>skip</a>}
            </div>

            <div className="searchAutocompleteContainer">
              <div className="searchAutocomplete">
                <h4>Results</h4>
                {filteredSearch && inputTray !== 1 &&
                  filteredSearch.map((item) => (
                    <div className="searchItem" onClick={()=>
                    {
                      if(inputTray==2){
                        setFilteredSearch([])
                        setSelectedFood(item)
                        setInputTray(3)
                      }
                      else if(inputTray==1){
                        setFilteredSearch([])
                        setLocation(item)
                        setInputTray(2)
                      }
                      else if(inputTray==3){
                        setFilteredSearch([])
                        setCuisine(item)
                        setInputTray(4)
                      }
                    }}>
                      <div className="searchItemImage">
                        <img src={japaneseFood} />
                      </div>
                      <div className="searchItemInfo">
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
                {inputTray !== 1 && filteredSearch.length == 0 && <p>No results found.</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
