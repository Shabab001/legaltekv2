import React from "react";
import ReactStars from "react-rating-stars-component";


function Card(props) {
  return (
    <div className="foodCard">
      <div className="img-container">
        <img src={props.image} />
        <p className="price">$5.99</p>
      </div>
        <div className="clearfix cardInfo">
        <div className="text-muted text-center">
          
            
            <ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="goldenrod" />{" "}
            (1705){" "}
          </div>
            {/* <p style={{textAlign:'center',marginTop:20,color:'gray'}}>This is my kind of breakfast egg <br/>
            sandwich and it takes under 5 minutes to make.
            </p>
            <div style={{width: '90%',margin:'auto',height:2, backgroundColor:'#e50077'}}></div> */}
            <h3 style={{textAlign:'center',marginTop:0,marginBottom:0,fontFamily:"Avenir_black"}}>{props.name}</h3>
            <h3 style={{textAlign:'center',color:'gray',marginTop:0,marginBottom:0,fontSize:12}}>Burger Artist</h3>
            <div className="tags">
                <p>H</p><p>K</p><p>GF</p><p>H</p>
            </div>
        </div>
    </div>
  );
}

export default Card;
