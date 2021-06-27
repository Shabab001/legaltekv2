import React,{useEffect,memo}from "react";
import LawyersCard from "../IndexShared/Card";
import food from "../../assets/img/food.jpg";
import macarons from "../../assets/img/foodr2.jpg";
import steak from "../../assets/img/steak.jpg";
import "./popularlawyer.css"
import { bindActionCreators } from "redux";
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import * as lawyerActions from "../../actions/lawyerActions";


function PopularLawyers(props) {
  useEffect(()=>{
    console.log("SSSSSSSSSSSSSSSSSSSSSSSS")
       props.actions.getLawyers();
  
},[])

  return (
    <div className="PopularLawyers">
      <div className="lawyers-heading" >
        <h4 >Featured Lawyers in Your Area</h4>
        <p>Interacting with a verified Legal Professional means receiving legal advice from a fully vetted legal professional. Our Legal Professionals undergo an in-depth verification procedure to set-up their services with us. We implement a multi-step credentialing process to authenticate the validity of our Legal Professional which gives you peace of mind that the advice you are receiving is from a qualified licensed Legal Professional who is fully aware of the laws and regulations of your jurisdiction.</p>
      </div>
    
   
          <div className="Featured-lawyers" >
          

          {props.lawyers && props.lawyers.map((lawyer,index)=>{
            return (
              <Link key={index} to={`/lawyer-view/${lawyer.id}`}>
              <LawyersCard key={index} lawyer={lawyer} image={food} name="California Burger" />
              </Link>
            )
          })}
        
 
          
          
        
        {/* </Slider> */}



      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
 lawyers: state.lawyers.lawyers,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(lawyerActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(PopularLawyers));

