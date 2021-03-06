import React,{useState,useEffect,Suspense, lazy} from "react";
import ReactDOM from 'react-dom'
import "../../assets/css/index.css";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
import {FaStar } from 'react-icons/fa';
import Subscribe from "../Subscribe/Subscribe"

import hireChef from "../../assets/img/home_law.webp";

import Rectangle from "./rectangle"
import user from './images/usericon.jpeg'
// import {Link} from 'react-router-dom'
import Elipse from "./elipse";
// import wave from "./images/wave.jpg"
import law from "./images/law.png"
import Wave from "./wave"
import Arrow from "./images/Arrow.png"
import Agencies from "../HomePage/Agencies";
import SearchBar from "../IndexShared/SearchBar";

const PopularLawyers = lazy(()=>import("../HomePage/PopularLawyers"))
// const hireChef = lazy(()=>import("../../assets/img/hirechef1.jpg"))
const Stats = lazy(()=>import("../HomePage/stats"))


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
                  <p> Book Online Appointments</p>
                   <p>With a verified Legal Professional.</p>
                   <p>Consult with the right Legal Professional in-person or using our secure video technology, <br/>free to use,and only takes a few minutes</p>
                </div>
              <SearchBar/>
           
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
         <div className="banner-upper-right"  style={{ width:"100%", position:"relative" }}>
           {/* <img src={wave} style={{ minWidth:"1000px", height:"100%",position:"absolute" ,right:"0" ,top:"0",zIndex:1}}/> */}
           <div style={{ width:"52rem", position:"absolute",right:"0" ,top:"0" }}>

          <Wave  />
           </div>
          
               
        <img src={law} className="banner-lawicon" style={{position:"absolute",right:"16rem", top:"3rem"}} />
            
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
     
      <PopularLawyers />
    
     
      <Stats />
  
     <Agencies/>
     <Subscribe/>
 
    </>
  );
}

export default Index;
