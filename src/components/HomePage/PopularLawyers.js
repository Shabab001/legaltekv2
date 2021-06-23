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
        <h4 >Featured Lawyers</h4>
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

