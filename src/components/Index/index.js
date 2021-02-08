import React,{useState,useEffect,Suspense, lazy} from "react";
import ReactDOM from 'react-dom'
import "../../assets/css/index.css";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
import {FaStar } from 'react-icons/fa';

import Rect from "./images/Rectangle 1.svg"
import hireChef from "../../assets/img/home_law.webp";

import Rectangle from "./rectangle"
import user from './images/usericon.jpeg'
import {Link} from 'react-router-dom'
import Elipse from "./elipse";
import wave from "./images/wave.jpg"
import law from "./images/law.png"
import Wave from "./wave"
import Arrow from "./images/Arrow.png"

const PopularLawyers = lazy(()=>import("../HomePage/PopularLawyers"))
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
  const[hidescroll,setScroll]=useState(true);
  

  const handleScroll=()=>{
    if(window.scrollY >0){
        setScroll(false);
    } else
    {
        setScroll(true);
    }
}

const handlesection =()=>{
  window.scroll({
      top: 1000-100,
      left: 0,
      behavior: 'smooth'
    });
    
}
window.addEventListener('scroll',handleScroll)
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
    
      <div className="banner"  style={{position:"relative"}} >
  
        <div onClick={handlesection} className={hidescroll?"banner-scroll-down":"banner-scroll-hide" }>
              
              <div className="scroll-arrow">
               <img src={Arrow} alt="arrow"/>
              </div>
        </div>
        <div
          style={{
            maxWidth: 1920,
            position: "relative",
            height: "100%",
            margin: "auto",
             display:"flex",
             overflow:"hidden",
             justifyContent:"space-between"
          }}

        
        >
          {/* <div>
        <img src={hireChef}  />
            </div>  */}
         
         <div className="banner-right-main">
           <div className="banner-left-upper">
                <div className="banner-left-headings">
                  <p>Italian Pasta</p>
                   <p>With Special Sauce</p>
                   <p>Best Lawyer with Professional Experiences <br/>you can only find in LegalTek</p>
                </div>
                <div className="banner-upper-btn">
                  <div className="banner-price">
                    <p>$250</p>
                    <p>$200</p>
                  </div>
                    <div className="banner-round-btn">
                        <p>Buy Now</p>
                    </div>
                </div>
                <div className="banner-underlines"> 
                     <div className="banner-underline1"></div>
                     <div className="banner-underline2"></div>
                     <div className="banner-underline3"></div>
                </div>
                <div className="banner-lower-left">
                 <Elipse/>
                  <div  className="banner-lower-image">
                    <img className="banner-lower-pic"  src={hireChef} />

                  </div>
                   <div>
                     <p>
                       LegalTek's Recommendation
                       </p>
                         <div className="banner-lower-last">
                           <p>See the Popular types</p>
                           <AiOutlineArrowRight style={{position:"relative",left:"-0px",  fontSize: ".8rem"}}/>
                         </div>
                   </div>

                </div>
           </div>
       
         </div>
         <div className="banner-upper-right"  style={{ width:"100%", position:"relative" , zIndex:1}}>
           {/* <img src={wave} style={{ minWidth:"1000px", height:"100%",position:"absolute" ,right:"0" ,top:"0",zIndex:1}}/> */}
           <div style={{ width:"52rem", position:"absolute",right:"0" ,top:"0" ,zIndex:1}}>

          <Wave  />
           </div>
          
               
        <img src={law} className="banner-lawicon" style={{position:"absolute",zIndex:2,right:"16rem", top:"3rem"}} />
            
                <div className="banner-right-last" style={{position:"absolute",zIndex:3}}>
                  <div style={{position:"absolute"}}>
                   <Rectangle />
                   
                  </div>
                  <div className="banner-review" style={{position:"relative",zIndex:4}}>
                    <p>Customer Review</p>
                    <div className="banner-review-directions">
                      <div>
                        <AiOutlineArrowLeft/>
                        <p>Prev</p>
                      </div>
                      <div>
                        <p>Next</p>
                        <AiOutlineArrowRight/>
                      </div>
                    </div>
                  </div>
                  <div className="banner-last-sec" >
                  <div style={{width:"3rem"} }>

                    <img style={{borderRadius:"50%"}} src={user} alt="user"/>
                    </div>
                    <div>

             <div className="banner-ratings-sec" style={{display:"flex"}}>
                <p>August Comte</p>
              
                 <div className="banner-stars" style={{color:"yellow"}}>
                   <FaStar />
               
                
                   <FaStar />
               
                  
             
                   <FaStar />
               
                  
                 
                   <FaStar />
               
        

                   <FaStar />
               
                  
                 </div>

            </div>
            <div style={{paddingTop:".3rem"}}>
              <p>some comliments for the lawyer from the users Perspective</p>
            </div>
          </div>
                  </div>
                </div>
          </div>
        
               
     


  
    </div>
  </div>


      {/* <SearchBar {...props}/> */}
      <Suspense fallback={<div>Loading...</div>}>
      <PopularLawyers />
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
