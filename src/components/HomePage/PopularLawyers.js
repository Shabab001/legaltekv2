import React from "react";
import LawyersCard from "../IndexShared/Card";
import food from "../../assets/img/food.jpg";
import macarons from "../../assets/img/foodr2.jpg";
import steak from "../../assets/img/steak.jpg";
import "./popularlawyer.css"


function PopularLawyers() {

  return (
    <div className="PopularLawyers">
      <div className="lawyers-heading" >
        <h4 >Featured Lawyers</h4>
      </div>
    
   
          <div className="Featured-lawyers" >
          
            <LawyersCard image={food} name="California Burger" />
        
        
            <LawyersCard image={macarons} name="Fish & Chips"/>
          
            <LawyersCard image={steak} name="Steak"/>
          

          
            <LawyersCard image={macarons} name="Fish & Chips"/>
         
        
        
            <LawyersCard image={food} name="California Burger"/>
        
            <LawyersCard image={food} name="California Burger"/>
        
         
            <LawyersCard image={food} name="California Burger"/>
         
            <LawyersCard image={food} name="California Burger"/>
          
            <LawyersCard image={food} name="California Burger"/>
          
            <LawyersCard image={food} name="California Burger"/>
          
          
        
        {/* </Slider> */}



      </div>
    </div>
  );
}

export default PopularLawyers;
