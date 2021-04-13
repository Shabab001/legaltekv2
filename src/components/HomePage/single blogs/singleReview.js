import React from 'react'
import "./singleReview.css"
import Lawyer from "./images/lawyer.jpeg"
import {MdDateRange} from "react-icons/md"
import {BiLike,BiDislike} from "react-icons/bi"
import {BsStarFill} from "react-icons/bs"
const SingleReview = () => {
    return (
        <div className="stat-review-main">
           <div className="stat-review-upper">
               <div className="stat-review-lawyer">
                     <div className="stat-review-ratings">
                         <div className="stat-review-lawyer-img">

                         <img  src={Lawyer} alt="lawyer"/>
                         </div>
                         <div>

                            <div>
                                <p>Vikhram Singh</p>
                            </div>
                            <div className="stat-review-rateus">
                                <div>

                                <p>5.0 </p>
                                </div>
                                <div className="stat-review-stars">
                                    <BsStarFill  stroke="red"/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                            </div>
                         </div>
                     </div>
               </div>
               <div className="star-review-date">
                       <MdDateRange />
                       <p>January 21,2021</p>
               </div>
           </div>
           <div className="stat-review-middle">
               <div style={{fontWeight:"bold"}}>
                   <p>"An awesome activity to experience"</p>
               </div>
               <div className="stat-review-des">
                   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
               </div>
                
           </div>
           <div className="statd-review-lower">
                    <div className="stat-review-like">
                       <BiLike/>
                       <p>20</p>
                   </div>
                    <div className="stat-review-dislike">
                       <BiDislike/>
                       <p>4</p>
                   </div>
           </div>
        </div>
    )
}

export default SingleReview
