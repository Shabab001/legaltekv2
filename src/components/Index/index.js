import React,{useState,useEffect,Suspense, lazy} from "react";
import ReactDOM from 'react-dom'
import "../../assets/css/index.css";
// import BottomNav from "../IndexShared/BottomNav";
// import Footer from "../IndexShared/Footer";
// import PopularDishes from "../HomePage/PopularDishes";
// import HireACookSection from "../HomePage/HireACookSection";
import hireChef from "../../assets/img/hirechef1.webp";
// import SearchBar from "./../IndexShared/SearchBar"
// import LearnALesson from "../HomePage/LearnALesson";
// import LocationChooseModal from "../modals/LocationChoose"
import {Link} from 'react-router-dom'
const PopularDishes = lazy(()=>import("../HomePage/PopularDishes"))
// const hireChef = lazy(()=>import("../../assets/img/hirechef1.jpg"))
const HireACookSection = lazy(()=>import("../HomePage/HireACookSection"))
const LocationChooseModal = lazy(()=>import("../modals/LocationChoose"))
const Footer = lazy(()=>import("../IndexShared/Footer"))
const BottomNav = lazy(()=>import("../IndexShared/BottomNav"))
const SearchBar = lazy(()=>import("./../IndexShared/SearchBar"))
const LearnALesson = lazy(()=>import("../HomePage/LearnALesson"))


function NextArrow(props) {
  const { className, style, onClick, color } = props;
  
  return (
    <div
      className="fe fe-chevron-right"
      style={{
        ...style,
        position: "absolute",
        right: 10,
        top: "-40px",
        transform: "translateY(-50%)",
        display: "block",
        color: color ? color : "#fff",
        background: "transparent",
        cursor: "pointer",
        padding: "10px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
        borderRadius: 30,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick, color } = props;
  return (
    <div
      className={`fe fe-chevron-left`}
      style={{
        ...style,
        position: "absolute",
        right: 50,
        top: "-40px",
        transform: "translateY(-50%)",
        display: "block",
        color: color ? color : "#fff",
        cursor: "pointer",
        background: "transparent",
        padding: "10px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
        borderRadius: 30,
      }}
      onClick={onClick}
    />
  );
}

function Index(props) {

  const [location,setLocationModal] = useState(false)

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState("1");
  const [locality, setLocality] = useState('')
  const [localityCountry, setLocalityCountry] = useState('')

  useEffect(()=>{
    window.scrollTo(0,0)
    let localityInfo = localStorage.getItem('locality')
    let localityCountryInfo = localStorage.getItem('localityCountry')
    if(localityInfo){
      setLocality(localityInfo)
    }
    if(localityCountryInfo){
      setLocalityCountry(localityCountryInfo)
    }
  },[localStorage.getItem('locality')])

 
  return (
    <>
    
      <div className="banner" >
  
        <img src={hireChef}  style={{position:'absolute', left:0,bottom:0,objectFit:'cover',transition:'0.6s all ease-in-out',height:'100%',width:'100%'}}/>

        <div className="bannerOverlay"></div>
        <div
          style={{
            maxWidth: 1920,
            position: "relative",
            height: "100%",
            margin: "auto",
          }}
        >
         
               
          <div className="locationView" onClick={()=>setLocationModal(true)}>
          <i className="fe fe-map-pin mr-3"></i> Order to: {locality && localityCountry ? <span className="ml-2">{locality+ ","+  localityCountry}</span>: <span className="ml-2">Enter your location</span>}
          </div>


     
        <div className="bannerInfo" >
          <h3>Join Xukini as a Business User</h3>
          <h5>Love your Hunger! Give your</h5>
          <h5>Hunger a new Option.</h5>
          <Link to="/business"><button>Register as a business user</button></Link>
        </div>
      
  
    </div>
  </div>


      <SearchBar {...props}/>
      <Suspense fallback={<div>Loading...</div>}>
      <PopularDishes />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <HireACookSection />
      </Suspense>

      <div className="fourthSection">
        <div className="cont">
          <div className="col-md-6 col-sm-12">
            <h1>
              Nov 3 is Election Day. Let's get you ready to head to the polls
            </h1>
            <button>Civic Action Center</button>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              On Election day, you get to have a say in shaping the future. So
              before you head to the polls, let’s make sure you have everything
              you need to make your voice heard. Visit Airbnb’s Civic Action
              center to check your voter registration status, find your polling
              location and learn about the candidates on your ballot.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <LearnALesson/>
      </Suspense>
      
  
      {location &&
      ReactDOM.createPortal(
        <div className="modal-overlay">
        <LocationChooseModal
        closeLocationChooser={()=>setLocationModal(false)}
        />
        </div>, document.getElementById("modal-root"))
     
      }
    </>
  );
}

export default Index;
