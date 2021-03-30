import React,{useState} from 'react'
import "./blogCard.css"
import {BiLike,BiDotsVerticalRounded} from "react-icons/bi"
import BlogOptions from './blogOptions';

const BlogCard = ({image}) => {
    const [option,setOption]=useState(false);


    const handleOption=(e)=>{
        console.log(e.target)
        setOption(!option)
    }
    const closeOption =()=>{
        setOption(false)
    }
    return (
        <div className="bcard-container" >
          <div className="bcard-time">
            <p>Nov</p>
            <p>22</p>
            <p>2021</p>
          </div>
          
          <div className="bcard-pic">
            <img src={image} alt="image"/>

          </div>
          <div className="bcard-middle">
              <div className="bcard-middle-first">
                      <div className="bcard-image">
                         <div className="bcard-round">

                         </div>
             <p>OFF THE SHORE</p>
                      </div>
                      <div className={"bcard-opt-click"} onClick={handleOption}>

             <BiDotsVerticalRounded />
                      </div>
             <div className={option? "bcard-options active":"bcard-options"}>
             <BlogOptions/>
             </div>
              </div>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="bcard-lower">
             <p>Civil</p>
             <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
             <BiLike/>
              <p><span style={{color:"black"}}>0 </span></p>
             </div>
          </div>
          
        </div>
    )
}

export default BlogCard
