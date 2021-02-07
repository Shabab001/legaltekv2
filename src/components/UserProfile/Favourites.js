import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import "../../assets/css/favourites.css";
import food from "../../assets/img/food.jpg";
import macarons from "../../assets/img/foodr2.jpg";
import steak from "../../assets/img/steak.jpg";
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {uuid} from 'uuidv4'

function Favourites(props) {
  const { auth } = props;
  const [previewIndex, setPreviewIndex] = useState(0);

  const FavData = [
    {
      id:uuid(),
      itemName: "California Burger",
      itemArtist: "Burger Artist",
      itemImage: macarons,
      starColor: 'dodgerblue'
    },
    {
      id:uuid(),
      itemName: "Meal Plan",
      itemArtist: "Warren Buffet",
      itemImage: steak,
      starColor: '#e50077'
    },
    {
      id:uuid(),
      itemName: "Junkie Dojo",
      itemArtist: "Fast Food Cooking lesson",
      itemImage: macarons,
      starColor: '#feb500'
    },
    {
      id:uuid(),
      itemName: "Meal Plan",
      itemArtist: "Warren Buffet",
      itemImage: steak,
      starColor: 'red'
    },
  ];

  const [FavDat, setFavDat] = useState(FavData)

  const deleteItem=(it)=>{
    console.log(FavDat)
    setFavDat(FavDat=>FavDat.filter((item,index)=>{
      if(item.id!==it){
        return item
      }
    }))
    console.log(FavDat)
    setPreviewIndex(null)
  }
  return (
    <div className="user-profile favourites tab">
      <h1>Favourites</h1>

      <div className="main-content">
        {/* <div className="favCardsCol"> */}
        <TransitionGroup className="favCardsCol">
          {FavDat &&
            FavDat.map((item, index) => (
              <CSSTransition key={item.id} timeout={500} classNames="move">
              <div
                key={index}
                className="favCard"
                onMouseEnter={(e) => setPreviewIndex(index)}
              >
                <div className="favCard-firstPart">
                  <span onClick={()=>deleteItem(item.id)}>
                  <i className="fa fa-check" />
                  <i className="fa fa-times" />
                  </span>
           
                </div>
                <div className="favCard-secondPart">
                  <img src={item.itemImage} />
                  <div className="favCardInfo">
                    <h4>{item.itemName}</h4>
                    <p>{item.itemArtist}</p>
                  </div>
                </div>
                <div className="favCard-thirdPart">
                  <i className="fa fa-star" style={{color:`${item.starColor}`}}/>
                </div>
              </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
        {/* </div> */}

        <div className="favCardsPreview">
          {previewIndex !==null && (
            <>
              <div>
                <div className='img-container'>
                <img src={FavData[previewIndex].itemImage} />
                </div>

                <h4>{FavData[previewIndex].itemName}</h4>
                <p>{FavData[previewIndex].itemArtist}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
